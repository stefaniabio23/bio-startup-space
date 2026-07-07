#!/usr/bin/env python3
"""
Audit the company/idea -> primitive links for likely mismatches, and surface
pre-commercial entities so their status is never silently overstated.

This is a deterministic PRE-FILTER. It does not decide anything; it produces a
short candidate list that the `bio-startup-map` skill's review agent then reads
against the actual sources and either confirms, relinks, or resolves by adding a
new primitive.

Two checks:
  1. Mismatch candidates -- for each primitive link, either
       (a) the entry's body carries a self-flag phrase ("aspirational",
           "closest primitive", "not terahertz", "analogy", etc.), or
       (b) there is no meaningful word overlap between how the company names its
           platform and the primitive's name/aliases/mechanism.
  2. Pre-commercial entities -- commercialisation_status in the pre-market set,
     or a very early funding_stage. Listed so "pre-commercial" is explicit.

Run:
    python3 scripts/audit_links.py            # writes generated/link_audit.md, prints summary
    python3 scripts/audit_links.py --strict   # exit 1 if any mismatch candidates (for CI)
"""

import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Install: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

PROJECT_ROOT = Path(__file__).resolve().parent.parent
GENERATED = PROJECT_ROOT / "generated"

FLAG_PHRASES = [
    "aspirational", "closest primitive", "closest available", "nearest available",
    "adjacency", "analogy", "distinct primitive", "mismatch", "not terahertz",
    "not thz", "not nv", "actually uses", "loose fit",
    "not a bio", "not bio directly",
]
PRECOMMERCIAL_STATUS = {"research_only", "preclinical", "regulatory_review"}
EARLY_STAGE = {"pre-seed", "unknown"}
STOP = {
    "the", "and", "for", "with", "from", "into", "that", "this", "over", "onto",
    "based", "using", "via", "a", "an", "of", "to", "in", "on", "chip", "chips",
    "sensor", "sensors", "sensing", "platform", "technology", "tech", "system",
    "biosensing", "biosensor", "molecular", "optics", "metasurface", "metasurfaces",
    "data", "health", "bio", "ai", "learning", "model", "models", "design",
}


def parse(path):
    text = path.read_text()
    end = text.find("\n---\n", 4)
    fm = yaml.safe_load(text[4:end]) if text.startswith("---\n") and end != -1 else {}
    body = text[end + 5:] if end != -1 else text
    return fm or {}, body


def words(*parts):
    blob = " ".join(str(p) for p in parts if p)
    toks = re.findall(r"[a-z0-9]+", blob.lower())
    return {t for t in toks if len(t) > 3 and t not in STOP}


def main():
    strict = "--strict" in sys.argv
    prims = {}
    for p in sorted((PROJECT_ROOT / "primitives").glob("*.md")):
        fm, _ = parse(p)
        prims[fm.get("id", p.stem)] = fm

    entities = []  # (type, path, fm, body)
    for sub, typ in [("entries", "company"), ("ideas", "idea")]:
        d = PROJECT_ROOT / sub
        if d.exists():
            for p in sorted(d.rglob("*.md")):
                fm, body = parse(p)
                entities.append((typ, p, fm, body))

    mismatches, precommercial = [], []

    for typ, path, fm, body in entities:
        rel = path.relative_to(PROJECT_ROOT)
        name = fm.get("name") or fm.get("id")
        body_l = body.lower()

        # pre-commercial surfacing
        status = fm.get("commercialisation_status")
        stage = fm.get("funding_stage")
        if status in PRECOMMERCIAL_STATUS or stage in EARLY_STAGE:
            precommercial.append((rel, name, status or "n/a", stage or "n/a"))

        eterms = words(name, fm.get("technology_platform_name"),
                       fm.get("new_capability"), fm.get("area"))
        for pid in fm.get("technology_platform_ids") or []:
            prim = prims.get(pid, {})
            reasons = []
            hits = [ph for ph in FLAG_PHRASES if ph in body_l]
            if hits:
                reasons.append("self-flag: " + ", ".join(sorted(set(hits))[:4]))
            pterms = words(prim.get("name"), " ".join(prim.get("aliases") or []),
                           prim.get("mechanism"), prim.get("new_capability"))
            if eterms and pterms and not (eterms & pterms):
                reasons.append("no word overlap with primitive")
            if reasons:
                mismatches.append((rel, name, pid, "; ".join(reasons)))

    # report
    lines = ["# Primitive-link audit\n",
             f"_{len(mismatches)} mismatch candidate(s), {len(precommercial)} pre-commercial entit(y/ies)._\n",
             "\n## Suspected primitive-link mismatches (review these)\n"]
    if mismatches:
        for rel, name, pid, why in mismatches:
            lines.append(f"- **{name}** -> `{pid}` :: {why}  \n  `{rel}`")
    else:
        lines.append("_None flagged._")
    lines.append("\n## Pre-commercial entities (status is explicit, verify it stays honest)\n")
    for rel, name, status, stage in sorted(precommercial, key=lambda x: str(x[0])):
        lines.append(f"- **{name}** :: status `{status}`, stage `{stage}`  \n  `{rel}`")

    GENERATED.mkdir(exist_ok=True)
    (GENERATED / "link_audit.md").write_text("\n".join(lines) + "\n")
    print(f"link audit: {len(mismatches)} mismatch candidate(s), "
          f"{len(precommercial)} pre-commercial -> generated/link_audit.md")
    for rel, name, pid, why in mismatches:
        print(f"  MISMATCH? {name} -> {pid} :: {why}")

    if strict and mismatches:
        sys.exit(1)


if __name__ == "__main__":
    main()
