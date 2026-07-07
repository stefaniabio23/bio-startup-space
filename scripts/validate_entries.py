#!/usr/bin/env python3
"""
Validate all v2 entities against their per-type schema plus cross-entity rules.

Entities (type inferred from top-level dir):
    entries/**/*.md      -> company     (schema/company.schema.yaml)
    primitives/*.md      -> primitive   (schema/technical_primitive.schema.yaml)
    ideas/*.md           -> idea        (schema/idea.schema.yaml)

Extra checks beyond JSON Schema:
    - id == filename stem
    - required body sections per type
    - referential integrity: every technology_platform_ids value on a company or
      idea resolves to an existing primitive id (the spine)
    - controlled-vocabulary: substrate_family, substrate_tags, business_model,
      buyer, customer, commercialisation_status values exist in taxonomy.yaml

Run from the project root:
    python3 scripts/validate_entries.py

Exit 0 if all pass. Exit 1 if any fail.
"""

import sys
from pathlib import Path

try:
    import yaml
    import jsonschema
except ImportError:
    print("Missing dependencies. Install with: pip install pyyaml jsonschema", file=sys.stderr)
    sys.exit(2)

PROJECT_ROOT = Path(__file__).resolve().parent.parent
SCHEMA_DIR = PROJECT_ROOT / "schema"
TAXONOMY_PATH = PROJECT_ROOT / "taxonomy" / "taxonomy.yaml"

# type -> (content dir, schema file, required body sections)
TYPES = {
    "company": {
        "dir": PROJECT_ROOT / "entries",
        "schema": SCHEMA_DIR / "company.schema.yaml",
        "sections": ["## One-liner", "## Problem", "## Workaround"],
    },
    "primitive": {
        "dir": PROJECT_ROOT / "primitives",
        "schema": SCHEMA_DIR / "technical_primitive.schema.yaml",
        "sections": ["## Mechanism", "## What it unlocks", "## Translational gap"],
    },
    "idea": {
        "dir": PROJECT_ROOT / "ideas",
        "schema": SCHEMA_DIR / "idea.schema.yaml",
        "sections": ["## Idea", "## Why now", "## 3-month MVP"],
    },
    "prior_work": {
        "dir": PROJECT_ROOT / "prior-work",
        "schema": SCHEMA_DIR / "prior_work.schema.yaml",
        "sections": [],
    },
}


def parse_entry(path):
    text = path.read_text()
    if not text.startswith("---\n"):
        return None, "no YAML frontmatter"
    end = text.find("\n---\n", 4)
    if end == -1:
        return None, "unclosed YAML frontmatter"
    try:
        fm = yaml.safe_load(text[4:end])
    except yaml.YAMLError as e:
        return None, f"YAML parse error: {e}"
    if not isinstance(fm, dict):
        return None, "frontmatter is not a mapping"
    return fm, text[end + 5:]


def as_list(val):
    if val is None:
        return []
    return val if isinstance(val, list) else [val]


def main():
    taxonomy = yaml.safe_load(TAXONOMY_PATH.read_text())
    tax_substrate_family = set(taxonomy["substrate_family"].keys())
    tax_substrate_tags = set(taxonomy["substrate_tags"].keys())
    tax_business_model = set(taxonomy["business_model"])
    tax_buyer = set(taxonomy["buyer"])
    tax_customer = set(taxonomy["customer"])
    tax_commercial = set(taxonomy["commercialisation_status"])

    errors = []
    warnings = []
    total = 0

    # First pass: parse everything, collect ids per type.
    parsed = {t: [] for t in TYPES}          # type -> list[(path, fm, body)]
    ids = {t: set() for t in TYPES}          # type -> set of ids

    for t, cfg in TYPES.items():
        if not cfg["dir"].exists():
            continue
        for path in sorted(cfg["dir"].rglob("*.md")):
            total += 1
            fm, body = parse_entry(path)
            rel = path.relative_to(PROJECT_ROOT)
            if fm is None:
                errors.append(f"{rel}: {body}")
                continue
            parsed[t].append((path, fm, body))
            if fm.get("id"):
                ids[t].add(fm["id"])

    primitive_ids = ids["primitive"]
    company_ids = ids["company"]

    # Second pass: schema + rule checks.
    for t, cfg in TYPES.items():
        schema = yaml.safe_load(cfg["schema"].read_text())
        for path, fm, body in parsed[t]:
            rel = path.relative_to(PROJECT_ROOT)

            try:
                jsonschema.validate(instance=fm, schema=schema)
            except jsonschema.ValidationError as e:
                errors.append(f"{rel}: {e.message}")

            if fm.get("id") and fm["id"] != path.stem:
                warnings.append(f"{rel}: id '{fm['id']}' != filename '{path.stem}'")

            for section in cfg["sections"]:
                if section not in body:
                    warnings.append(f"{rel}: missing body section '{section}'")

            # Referential integrity: primitive links must resolve.
            if t in ("company", "idea", "prior_work"):
                for pid in as_list(fm.get("technology_platform_ids")):
                    if pid not in primitive_ids:
                        errors.append(
                            f"{rel}: technology_platform_ids '{pid}' does not resolve to a primitive"
                        )
            # Primitive-to-primitive related links must resolve (and not self).
            if t == "primitive":
                for rid in as_list(fm.get("related_primitives")):
                    if rid not in primitive_ids:
                        errors.append(
                            f"{rel}: related_primitives '{rid}' does not resolve to a primitive"
                        )
                    elif rid == fm.get("id"):
                        warnings.append(f"{rel}: related_primitives lists itself")
            # Idea -> company links (warn only; some are external companies).
            if t == "idea":
                for cid in as_list(fm.get("closest_companies")):
                    slug = str(cid).lower().replace(" ", "-")
                    if slug not in company_ids and cid not in company_ids:
                        warnings.append(
                            f"{rel}: closest_companies '{cid}' not an entry id (external, ok)"
                        )

            # Controlled-vocabulary checks against taxonomy.yaml.
            fam = fm.get("substrate_family")
            if fam is not None and fam not in tax_substrate_family:
                errors.append(f"{rel}: substrate_family '{fam}' not in taxonomy")
            for tag in as_list(fm.get("substrate_tags")):
                if tag not in tax_substrate_tags:
                    errors.append(f"{rel}: substrate_tags '{tag}' not in taxonomy")
            bm = fm.get("business_model")
            if bm is not None:
                for one in as_list(bm):
                    if one not in tax_business_model:
                        errors.append(f"{rel}: business_model '{one}' not in taxonomy")
            for b in as_list(fm.get("buyer")):
                if b not in tax_buyer:
                    errors.append(f"{rel}: buyer '{b}' not in taxonomy")
            for c in as_list(fm.get("customer")):
                if c not in tax_customer:
                    errors.append(f"{rel}: customer '{c}' not in taxonomy")
            cs = fm.get("commercialisation_status")
            if cs is not None and cs not in tax_commercial:
                errors.append(f"{rel}: commercialisation_status '{cs}' not in taxonomy")

    for w in warnings:
        print(f"WARN  {w}")
    for e in errors:
        print(f"ERROR {e}")

    counts = ", ".join(f"{len(parsed[t])} {t}" for t in TYPES)
    if errors:
        print(f"\n{len(errors)} error(s), {len(warnings)} warning(s). Fix errors before publishing.")
        sys.exit(1)
    print(f"OK, {total} entities valid ({counts}), {len(warnings)} warning(s).")
    sys.exit(0)


if __name__ == "__main__":
    main()
