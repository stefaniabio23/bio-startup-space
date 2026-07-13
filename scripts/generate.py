#!/usr/bin/env python3
"""
Generate output files from the v2 entity set.

Entities (type from top-level dir):
    entries/**/*.md   -> company
    primitives/*.md   -> primitive
    ideas/*.md        -> idea

Outputs (generated/):
    companies.csv  primitives.csv  ideas.csv  taxonomies.csv
    index.json    , all entities, each tagged with `type`
    graph.json    , nodes + edges for the Cloudflare viz (Cytoscape)
    by-area.md    , legacy grouped company view
"""

import csv
import json
import sys
from collections import defaultdict
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Missing dependency. Install with: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

PROJECT_ROOT = Path(__file__).resolve().parent.parent
GENERATED_DIR = PROJECT_ROOT / "generated"
TAXONOMY_PATH = PROJECT_ROOT / "taxonomy" / "taxonomy.yaml"

COMPANY_COLUMNS = [
    "name", "website", "founded", "funding_stage", "total_funding_usd_m",
    "substrate_family", "substrate_tags", "area", "one_line", "new_capability",
    "problem", "workaround", "business_model", "buyer", "customer",
    "buyer_urgency", "buyer_wtp", "sales_cycle", "regulatory_burden", "tam_usd_m",
    "tam_logic", "entry_wedge", "technology_platform_ids", "technology_platform_name",
    "data_centrality", "data_ownership", "moat", "primary_value_chain_layer",
    "input", "transformation_type", "output", "method", "validated_by",
    "competes_with", "complements", "downstream_of", "upstream_of", "gaps",
    "technology_readiness_level", "limiting_factor", "commercialisation_status",
    "barrier_to_entry", "barrier_to_entry_logic", "hardness", "hardness_reason",
    "notes",
]

PRIMITIVE_COLUMNS = [
    "id", "name", "substrate_family", "substrate_tags", "enabled_by", "mechanism",
    "new_capability", "what_it_could_unlock", "use_cases",
    "technology_readiness_level", "evidence_level", "translational_gap",
    "what_needs_to_happen", "closest_companies", "closest_labs",
    "commercialisation_status", "regulatory_complexity", "capex_intensity",
    "defensibility", "notes", "last_verified",
]

IDEA_COLUMNS = [
    "id", "idea", "technology_platform_ids", "substrate_tags", "new_capability",
    "target_user", "buyer", "first_use_case", "business_model",
    "technology_readiness_level", "translational_gap", "why_now", "prior_work",
    "closest_companies", "differentiation", "unfair_advantage_needed",
    "validation_plan", "three_month_mvp", "technical_risk", "regulatory_risk",
    "commercial_risk", "founder_fit", "cambridge_route_fit", "ef_route_fit",
    "overall_score", "notes", "last_verified",
]

PRIOR_WORK_COLUMNS = [
    "id", "title", "authors", "year", "venue", "doi", "url", "citations",
    "technology_platform_ids", "substrate_tags", "hypothesis", "methods",
    "what_it_proves", "next_question", "related_works", "notes", "last_verified",
]

TYPES = {
    "company":    {"dir": PROJECT_ROOT / "entries",    "csv": "companies.csv",  "columns": COMPANY_COLUMNS},
    "primitive":  {"dir": PROJECT_ROOT / "primitives", "csv": "primitives.csv", "columns": PRIMITIVE_COLUMNS},
    "idea":       {"dir": PROJECT_ROOT / "ideas",      "csv": "ideas.csv",      "columns": IDEA_COLUMNS},
    "prior_work": {"dir": PROJECT_ROOT / "prior-work", "csv": "prior_work.csv", "columns": PRIOR_WORK_COLUMNS},
}

# Company CSV columns sourced from body sections rather than frontmatter.
COMPANY_BODY_MAP = {
    "one_line": "_one_line", "problem": "_problem", "workaround": "_workaround",
    "tam_logic": "_tam_logic", "entry_wedge": "_entry_wedge", "method": "_method",
    "validated_by": "_validated_by", "competes_with": "_competes_with",
    "complements": "_complements", "downstream_of": "_downstream_of",
    "upstream_of": "_upstream_of", "gaps": "_gaps", "notes": "_notes",
}


def parse_body_sections(body):
    sections, heading, buf = {}, None, []
    for line in body.split("\n"):
        if line.startswith("## "):
            if heading is not None:
                sections[heading] = "\n".join(buf).strip()
            heading, buf = line[3:].strip(), []
        elif heading is not None:
            buf.append(line)
    if heading is not None:
        sections[heading] = "\n".join(buf).strip()
    return sections


def extract_value_chain(vcp_text):
    downstream = upstream = ""
    for line in vcp_text.split("\n"):
        if line.startswith("**Downstream of:**"):
            downstream = line.replace("**Downstream of:**", "").strip()
        elif line.startswith("**Upstream of:**"):
            upstream = line.replace("**Upstream of:**", "").strip()
    return downstream, upstream


def parse_entry(path, entity_type):
    text = path.read_text()
    if not text.startswith("---\n"):
        return None
    end = text.find("\n---\n", 4)
    if end == -1:
        return None
    try:
        fm = yaml.safe_load(text[4:end])
    except yaml.YAMLError:
        return None
    if not isinstance(fm, dict):
        return None

    fm["_type"] = entity_type
    fm["_path"] = str(path.relative_to(PROJECT_ROOT))

    sections = parse_body_sections(text[end + 5:])
    if entity_type == "company":
        vcp = sections.get("Value chain position", "")
        downstream, upstream = extract_value_chain(vcp)
        fm["_one_line"] = sections.get("One-liner", "")
        fm["_problem"] = sections.get("Problem", "")
        fm["_workaround"] = sections.get("Workaround", "")
        fm["_tam_logic"] = sections.get("TAM logic", "")
        fm["_entry_wedge"] = sections.get("Entry wedge", "")
        fm["_method"] = sections.get("Method", "")
        fm["_validated_by"] = sections.get("Validated by", "")
        fm["_competes_with"] = sections.get("Competes with", "")
        fm["_complements"] = sections.get("Complements", "")
        fm["_downstream_of"] = downstream
        fm["_upstream_of"] = upstream
        fm["_gaps"] = sections.get("Gaps", "")
        fm["_notes"] = sections.get("Notes", "")
    return fm


def flatten(val):
    if isinstance(val, list):
        return " | ".join(str(v) for v in val)
    if val is None:
        return ""
    return str(val)


def get_col(record, col):
    if record.get("_type") == "company" and col in COMPANY_BODY_MAP:
        return flatten(record.get(COMPANY_BODY_MAP[col], ""))
    return flatten(record.get(col))


def venture_shape(trl):
    try:
        t = int(trl)
    except (TypeError, ValueError):
        return ""
    if t <= 3:
        return "research programme / grant / academic spinout"
    if t <= 5:
        return "translational startup / prototype / first clinical collaborator"
    if t <= 7:
        return "seed-stage commercialisation / regulatory strategy / pilots"
    return "product differentiation / distribution / data moat"


CAPABILITY_COLUMNS = [
    "primitive_id", "primitive_name", "substrate_family", "capability",
    "what_it_could_unlock", "mechanism", "technology_readiness_level",
    "venture_shape", "translational_gap", "closest_companies",
]


def write_capabilities_csv(primitives):
    """One row per (primitive, capability). Explodes the nested capabilities list."""
    rows = []
    for r in primitives:
        caps = r.get("capabilities") or []
        for c in caps:
            trl = c.get("technology_readiness_level", "")
            rows.append({
                "primitive_id": r.get("id", ""),
                "primitive_name": r.get("name", ""),
                "substrate_family": r.get("substrate_family", ""),
                "capability": c.get("capability", ""),
                "what_it_could_unlock": c.get("what_it_could_unlock", ""),
                "mechanism": c.get("mechanism", ""),
                "technology_readiness_level": trl,
                "venture_shape": venture_shape(trl),
                "translational_gap": c.get("translational_gap", ""),
                "closest_companies": flatten(c.get("closest_companies", "")),
            })
    with open(GENERATED_DIR / "capabilities.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=CAPABILITY_COLUMNS, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)
    return len(rows)


def build_graph(by_type):
    """Nodes + edges for Cytoscape. Companies/ideas link to primitives (the spine)."""
    nodes, edges = [], []
    name_to_id = {}
    for r in by_type["company"]:
        if r.get("name"):
            name_to_id[r["name"].lower()] = r["id"]

    for t, records in by_type.items():
        for r in records:
            if t == "idea":
                label = r["id"].replace("idea-", "").replace("-", " ")
            elif t == "prior_work":
                title = r.get("title") or r.get("id")
                label = title if len(title) <= 48 else title[:46] + "…"
            else:
                label = r.get("name") or r.get("id")
            # ideas have no substrate_family; derive it from the first substrate_tag for colouring
            fam = r.get("substrate_family", "")
            tags = r.get("substrate_tags") or []
            if not fam and tags:
                fam = str(tags[0])[0]
            cap_trls = [c.get("technology_readiness_level") for c in (r.get("capabilities") or [])
                        if isinstance(c.get("technology_readiness_level"), int)]
            nodes.append({
                "id": r["id"],
                "type": t,
                "label": label,
                "substrate_family": fam,
                "substrate_tags": tags,
                "trl": r.get("technology_readiness_level", ""),
                "trl_min": min(cap_trls) if cap_trls else "",
                "trl_max": max(cap_trls) if cap_trls else "",
                "capability_count": len(r.get("capabilities") or []),
                "momentum": r.get("momentum", {}) if t == "primitive" else {},
                "scan": r.get("scan", {}) if t == "primitive" else {},
                "funding_stage": r.get("funding_stage", ""),
                "total_funding_usd_m": r.get("total_funding_usd_m", ""),
                "commercialisation_status": r.get("commercialisation_status", ""),
                "moat": r.get("moat", []),
            })

    for r in by_type["company"]:
        for pid in r.get("technology_platform_ids") or []:
            edges.append({"source": r["id"], "target": pid, "relation": "uses"})
        # best-effort company->company edges from prose sections
        for other in by_type["company"]:
            if other["id"] == r["id"] or not other.get("name"):
                continue
            nm = other["name"].lower()
            if nm and nm in (r.get("_competes_with", "") or "").lower():
                edges.append({"source": r["id"], "target": other["id"], "relation": "competes"})
            if nm and nm in (r.get("_complements", "") or "").lower():
                edges.append({"source": r["id"], "target": other["id"], "relation": "complements"})

    # primitive <-> primitive related edges (dedupe symmetric pairs)
    seen_related = set()
    for r in by_type["primitive"]:
        for rid in r.get("related_primitives") or []:
            key = tuple(sorted((r["id"], rid)))
            if key in seen_related:
                continue
            seen_related.add(key)
            edges.append({"source": r["id"], "target": rid, "relation": "related"})

    for r in by_type["idea"]:
        for pid in r.get("technology_platform_ids") or []:
            edges.append({"source": r["id"], "target": pid, "relation": "references"})
        for cc in r.get("closest_companies") or []:
            cid = name_to_id.get(str(cc).lower())
            if cid:
                edges.append({"source": r["id"], "target": cid, "relation": "closest"})

    for r in by_type.get("prior_work", []):
        for pid in r.get("technology_platform_ids") or []:
            edges.append({"source": r["id"], "target": pid, "relation": "evidence"})

    return {"nodes": nodes, "edges": edges}


def write_taxonomies_csv(taxonomy):
    rows = [["taxonomy", "code", "label"]]
    for key, val in taxonomy.items():
        if key in ("version", "last_updated"):
            continue
        if isinstance(val, dict):
            for code, label in val.items():
                rows.append([key, str(code), str(label)])
        elif isinstance(val, list):
            for item in val:
                rows.append([key, str(item), ""])
    with open(GENERATED_DIR / "taxonomies.csv", "w", newline="") as f:
        csv.writer(f).writerows(rows)


def main():
    GENERATED_DIR.mkdir(exist_ok=True)
    by_type = {t: [] for t in TYPES}
    for t, cfg in TYPES.items():
        if not cfg["dir"].exists():
            continue
        for path in sorted(cfg["dir"].rglob("*.md")):
            rec = parse_entry(path, t)
            if rec:
                by_type[t].append(rec)

    total = sum(len(v) for v in by_type.values())
    if total == 0:
        print("No entities found.")
        sys.exit(1)

    # per-type CSVs. Skip a type with no entities so we never emit a header-only
    # file that leaks its schema (e.g. the ideas board when it is kept private).
    for t, cfg in TYPES.items():
        csv_path = GENERATED_DIR / cfg["csv"]
        if not by_type[t]:
            if csv_path.exists():
                csv_path.unlink()
            continue
        with open(csv_path, "w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=cfg["columns"], extrasaction="ignore")
            writer.writeheader()
            for r in by_type[t]:
                writer.writerow({c: get_col(r, c) for c in cfg["columns"]})

    # unified index.json (frontmatter only, _type promoted to type)
    clean = []
    for t in TYPES:
        for r in by_type[t]:
            obj = {k: v for k, v in r.items() if not k.startswith("_")}
            obj["type"] = t
            if t == "company":
                # promote key body sections so the detail panel + editor can use them
                obj["one_liner"] = r.get("_one_line", "")
                obj["problem"] = r.get("_problem", "")
                obj["workaround"] = r.get("_workaround", "")
                obj["method"] = r.get("_method", "")
                obj["validated_by"] = r.get("_validated_by", "")
                obj["gaps"] = r.get("_gaps", "")
                obj["notes"] = r.get("_notes", "")
            clean.append(obj)
    (GENERATED_DIR / "index.json").write_text(json.dumps(clean, indent=2, default=str))

    # graph.json
    graph = build_graph(by_type)
    (GENERATED_DIR / "graph.json").write_text(json.dumps(graph, indent=2, default=str))

    # capabilities.csv (one row per primitive application)
    n_caps = write_capabilities_csv(by_type["primitive"])

    # taxonomies.csv
    taxonomy = yaml.safe_load(TAXONOMY_PATH.read_text())
    write_taxonomies_csv(taxonomy)

    # by-area.md (legacy company view)
    by_area = defaultdict(list)
    for r in by_type["company"]:
        by_area[r.get("area", "other")].append(r)
    lines = ["# Companies by area\n", f"_{len(by_type['company'])} companies._\n"]
    for area in sorted(by_area):
        lines.append(f"\n## {area}\n")
        for r in sorted(by_area[area], key=lambda x: x.get("name", "")):
            stage = r.get("funding_stage", "")
            funding = r.get("total_funding_usd_m", "")
            tag = f", {stage}, ${funding}M" if stage and funding else ""
            lines.append(f"- **{r.get('name', r['id'])}**{tag}")
    (GENERATED_DIR / "by-area.md").write_text("\n".join(lines) + "\n")

    counts = ", ".join(f"{len(by_type[t])} {t}" for t in TYPES)
    print(f"Generated {total} entities ({counts}) -> generated/")
    print(f"  graph: {len(graph['nodes'])} nodes, {len(graph['edges'])} edges")
    print(f"  capabilities: {n_caps} rows across {len(by_type['primitive'])} primitives")


if __name__ == "__main__":
    main()
