#!/usr/bin/env python3
"""
Generate output files from entries/**/*.md.

Extracts both YAML frontmatter fields and markdown body sections into flat CSV.

Outputs:
- generated/companies.csv  — flat, one row per company, all columns
- generated/index.json     — all entries, machine-readable
- generated/by-area.md     — grouped markdown view by area
"""

import csv
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Missing dependency. Install with: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

PROJECT_ROOT = Path(__file__).resolve().parent.parent
ENTRIES_DIR = PROJECT_ROOT / "entries"
GENERATED_DIR = PROJECT_ROOT / "generated"

# Column order matches user schema exactly
CSV_COLUMNS = [
    "name",
    "website",
    "founded",
    "funding_stage",
    "total_funding_usd_m",
    "area",
    "one_line",
    "problem",
    "workaround",
    "business_model",
    "buyer",
    "buyer_urgency",
    "buyer_wtp",
    "sales_cycle",
    "regulatory_burden",
    "tam_usd_m",
    "tam_logic",
    "entry_wedge",
    "starting_substrate",
    "data_centrality",
    "data_ownership",
    "moat",
    "primary_value_chain_layer",
    "input",
    "transformation_type",
    "output",
    "method",
    "validated_by",
    "competes_with",
    "complements",
    "downstream_of",
    "upstream_of",
    "gaps",
    "barrier_to_entry",
    "barrier_to_entry_logic",
    "hardness",
    "hardness_reason",
    "notes",
]


def parse_body_sections(body):
    """Extract content from ## Heading sections in markdown body."""
    sections = {}
    current_heading = None
    current_lines = []

    for line in body.split("\n"):
        if line.startswith("## "):
            if current_heading is not None:
                sections[current_heading] = "\n".join(current_lines).strip()
            current_heading = line[3:].strip()
            current_lines = []
        else:
            if current_heading is not None:
                current_lines.append(line)

    if current_heading is not None:
        sections[current_heading] = "\n".join(current_lines).strip()

    return sections


def extract_value_chain(vcp_text):
    """Pull Downstream of / Upstream of from the Value chain position section."""
    downstream = ""
    upstream = ""
    for line in vcp_text.split("\n"):
        if line.startswith("**Downstream of:**"):
            downstream = line.replace("**Downstream of:**", "").strip()
        elif line.startswith("**Upstream of:**"):
            upstream = line.replace("**Upstream of:**", "").strip()
    return downstream, upstream


def parse_entry(path):
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

    body = text[end + 5:]
    sections = parse_body_sections(body)

    vcp = sections.get("Value chain position", "")
    downstream, upstream = extract_value_chain(vcp)

    fm["_one_line"]             = sections.get("One-liner", "")
    fm["_problem"]              = sections.get("Problem", "")
    fm["_workaround"]           = sections.get("Workaround", "")
    fm["_tam_logic"]            = sections.get("TAM logic", "")
    fm["_entry_wedge"]          = sections.get("Entry wedge", "")
    fm["_method"]               = sections.get("Method", "")
    fm["_validated_by"]         = sections.get("Validated by", "")
    fm["_competes_with"]        = sections.get("Competes with", "")
    fm["_complements"]          = sections.get("Complements", "")
    fm["_downstream_of"]        = downstream
    fm["_upstream_of"]          = upstream
    fm["_gaps"]                 = sections.get("Gaps", "")
    fm["_notes"]                = sections.get("Notes", "")
    fm["_path"]                 = str(path.relative_to(PROJECT_ROOT))

    return fm


def flatten(val):
    if isinstance(val, list):
        return " | ".join(str(v) for v in val)
    if val is None:
        return ""
    return str(val)


def get_col(record, col):
    """Get a column value — checks both frontmatter keys and _body keys."""
    body_map = {
        "one_line":             "_one_line",
        "problem":              "_problem",
        "workaround":           "_workaround",
        "tam_logic":            "_tam_logic",
        "entry_wedge":          "_entry_wedge",
        "starting_substrate":   "_entry_wedge",   # same source until split out
        "method":               "_method",
        "validated_by":         "_validated_by",
        "competes_with":        "_competes_with",
        "complements":          "_complements",
        "downstream_of":        "_downstream_of",
        "upstream_of":          "_upstream_of",
        "gaps":                 "_gaps",
        "notes":                "_notes",
    }
    if col in body_map:
        key = body_map[col]
        return flatten(record.get(key, ""))
    return flatten(record.get(col))


def main():
    GENERATED_DIR.mkdir(exist_ok=True)
    entries = sorted(ENTRIES_DIR.rglob("*.md"))
    records = [r for r in (parse_entry(p) for p in entries) if r]

    if not records:
        print("No entries found.")
        sys.exit(1)

    # --- companies.csv ---
    with open(GENERATED_DIR / "companies.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS, extrasaction="ignore")
        writer.writeheader()
        for r in records:
            row = {col: get_col(r, col) for col in CSV_COLUMNS}
            writer.writerow(row)

    # --- index.json ---
    clean = [{k: v for k, v in r.items() if not k.startswith("_")} for r in records]
    (GENERATED_DIR / "index.json").write_text(json.dumps(clean, indent=2, default=str))

    # --- by-area.md ---
    by_area = defaultdict(list)
    for r in records:
        by_area[r.get("area", "other")].append(r)

    lines = ["# Companies by area\n", f"_{len(records)} entries._\n"]
    for area in sorted(by_area):
        lines.append(f"\n## {area}\n")
        for r in sorted(by_area[area], key=lambda x: x.get("name", "")):
            stage = r.get("funding_stage", "")
            funding = r.get("total_funding_usd_m", "")
            tag = f" — {stage}, ${funding}M" if stage and funding else ""
            lines.append(f"- **{r['name']}**{tag}")
    (GENERATED_DIR / "by-area.md").write_text("\n".join(lines) + "\n")

    print(f"Generated {len(records)} entries → generated/")


if __name__ == "__main__":
    main()
