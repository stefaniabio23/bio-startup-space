# bio-startup-space

A structured, machine-readable registry of companies in the bio × AI startup space, covering the generative-biology and clinical-data landscape.

One YAML-frontmatter entry per company. Each entry captures funding, business model, buyer, moat, value-chain position, and a prose assessment under a fixed schema. Scripts validate every entry, generate flat CSV / JSON / Markdown views, and (optionally) publish to a Google Sheet. **GitHub is canonical; everything in `generated/` and the Sheet is a downstream render.**

## What's here

- **59 company entries** across 13 categories: clinical-stage biotech, consumer digital health, molecule generation, diagnostics, digital pathology, digital twins, biomarker AI, causal biology, target discovery, recruitment / matching, wearable endpoints, patient stratification, and real-world-data / external controls.
- A typed schema (`schema/company.schema.yaml`) so entries stay comparable and queryable.
- Generated outputs: a flat `companies.csv`, a machine-readable `index.json`, and a grouped `by-area.md`.

## Structure

```text
bio-startup-space/
├── SCHEMA.md                    human spec for entry fields
├── COLLECT.md                   weekly competitive-intel collection process
├── schema/company.schema.yaml   JSON Schema for entry frontmatter
├── entries/<category>/<id>.md   one file per company (canonical source)
├── scripts/
│   ├── validate_entries.py      validate all entries against the schema
│   ├── generate.py              rebuild generated/ from entries/
│   ├── publish_to_sheet.py      push generated CSVs to a Google Sheet
│   └── collect_news.py          fetch recent news per company
└── generated/                   CSV / JSON / Markdown render targets
```

## Entry format

Each entry is a Markdown file with YAML frontmatter (machine-readable enums and numbers) plus prose sections (one-liner, problem, workaround, entry wedge, method, TAM logic, validation, competitors, gaps). See `SCHEMA.md` for the full field list and `entries/` for live examples.

## Usage

```bash
pip install jsonschema pyyaml google-api-python-client google-auth requests

python3 scripts/validate_entries.py   # validate all entries against the schema
python3 scripts/generate.py           # rebuild generated/ from entries/
```

Publishing to a Google Sheet reads its service-account credential from the macOS keychain at runtime; no credentials are stored in the repo. See `publish.sh`.

## Adding an entry

Add a file under `entries/<category>/<id>.md` following the template in `SCHEMA.md`, then run `validate_entries.py` and `generate.py`. Set `last_verified` whenever an entry changes.
