#!/usr/bin/env python3
"""
Validate all entries in entries/**/*.md against schema/company.schema.yaml.

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
ENTRIES_DIR = PROJECT_ROOT / "entries"
SCHEMA_PATH = PROJECT_ROOT / "schema" / "company.schema.yaml"

REQUIRED_BODY_SECTIONS = [
    "## One-liner",
    "## Problem",
    "## Workaround",
]


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


def main():
    schema_raw = yaml.safe_load(SCHEMA_PATH.read_text())
    entries = sorted(ENTRIES_DIR.rglob("*.md"))

    if not entries:
        print("No entries found.", file=sys.stderr)
        sys.exit(1)

    errors = []
    warnings = []

    for path in entries:
        rel = path.relative_to(PROJECT_ROOT)
        fm, body_or_err = parse_entry(path)

        if fm is None:
            errors.append(f"{rel}: {body_or_err}")
            continue

        try:
            jsonschema.validate(instance=fm, schema=schema_raw)
        except jsonschema.ValidationError as e:
            errors.append(f"{rel}: {e.message}")

        # Slug consistency
        if fm.get("id") and fm["id"] != path.stem:
            warnings.append(f"{rel}: id '{fm['id']}' does not match filename '{path.stem}'")

        # Body section checks (warnings only)
        body = body_or_err
        for section in REQUIRED_BODY_SECTIONS:
            if section not in body:
                warnings.append(f"{rel}: missing body section '{section}'")

    for w in warnings:
        print(f"WARN  {w}")
    for e in errors:
        print(f"ERROR {e}")

    if errors:
        print(f"\n{len(errors)} error(s), {len(warnings)} warning(s). Fix errors before publishing.")
        sys.exit(1)
    else:
        print(f"OK — {len(entries)} entries valid, {len(warnings)} warning(s).")
        sys.exit(0)


if __name__ == "__main__":
    main()
