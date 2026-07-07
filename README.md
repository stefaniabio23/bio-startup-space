# bio-startup-space (tech-bio-map v2)

A machine-readable **relational** map of the bio x AI and deeptech-bio landscape, built for an Entrepreneur First founder search. The **technical-primitive map is the spine**: companies and ideas link back to primitives by stable slug, so each primitive is written once and referenced everywhere.

Scripts validate every entity against its schema and cross-entity rules, generate per-table CSV / JSON / graph views, and (optionally) publish to a Google Sheet. **GitHub is canonical; everything in `generated/`, the Sheet, and the viz is a downstream render.**

## The four tables

| Table | Dir | What it holds |
|---|---|---|
| **technical_primitive_map** (spine) | `primitives/` | ~30 underlying scientific/engineering unlocks, with TRL, mechanism, translational gap, closest companies |
| **company_deep_mapping** | `entries/<substrate-family>/` (v2) and legacy thesis folders (v1) | companies, each linking to primitive(s) via `technology_platform_ids` |
| **ideas_board** | `ideas/` | founder-search ideas, each linked to primitives, with a 3-month MVP and EF/Cambridge route-fit |
| **controlled_taxonomies** | `taxonomy/taxonomy.yaml` | the single source of truth for every closed vocabulary (substrate families A-F, business models, TRL, etc.) |

## What's here

- **~30 technical primitives**, **136 companies** (86 v1 + ~50 v2 deeptech/bio), and **23 ideas**, all cross-linked into one graph.
- Typed schemas in `schema/` (`company`, `technical_primitive`, `idea`) plus the controlled taxonomy.
- Generated outputs: `companies.csv`, `primitives.csv`, `ideas.csv`, `taxonomies.csv`, a unified `index.json` (every record tagged with `type`), and `graph.json` (nodes + edges).
- An interactive **Cloudflare Pages graph viz** in `viz/` (see `viz/README.md`).

Substrate families organise everything on one axis: **A** data, **B** automation/execution, **C** model, **D** deeptech/physics/materials, **E** biological, **F** clinical/regulatory/distribution.

> Note: the 86 v1 companies still live in their original thesis folders and carry the v1 field set. Migrating them into the `entries/<substrate-family>/` structure with full v2 fields is a deliberate later pass.

## Structure

```text
bio-startup-space/
├── SCHEMA.md                       human spec for company fields (v1)
├── COLLECT.md                      weekly competitive-intel collection process
├── taxonomy/taxonomy.yaml          controlled vocab (validator reads this)
├── schema/
│   ├── company.schema.yaml         company frontmatter (v2 superset)
│   ├── technical_primitive.schema.yaml
│   └── idea.schema.yaml
├── primitives/<slug>.md            technical primitives (the spine)
├── entries/<substrate-family>/<id>.md   companies (v2); legacy thesis folders hold v1
├── ideas/idea-<slug>.md            founder-search ideas
├── scripts/
│   ├── validate_entries.py         per-type schema + referential integrity + taxonomy checks
│   ├── generate.py                 rebuild generated/ (4 CSVs, index.json, graph.json)
│   ├── publish_to_sheet.py         push the 4 tables to a Google Sheet
│   └── collect_news.py             fetch recent news per company
├── generated/                      CSV / JSON / graph render targets
└── viz/                            Cloudflare Pages graph + table site
```

## Entry format

Each entity is a Markdown file with YAML frontmatter plus prose sections. Companies, primitives, and ideas each have their own schema in `schema/`; every controlled field is checked against `taxonomy/taxonomy.yaml`. Companies and ideas link to primitives via `technology_platform_ids` (validated for referential integrity). See the `schema/` files for the full field lists and each content dir for live examples.

## Usage

```bash
pip install jsonschema pyyaml google-api-python-client google-auth requests

python3 scripts/validate_entries.py   # validate all entries against the schema
python3 scripts/generate.py           # rebuild generated/ from entries/
```

Publishing to a Google Sheet reads its service-account credential from the macOS keychain at runtime; no credentials are stored in the repo. See `publish.sh`.

## Adding an entry

Ask Claude: "add a bio-startup-space entry for X" (the `bio-startup-map` skill handles companies, primitives, and ideas). It picks the entity type, fills the schema, resolves the primitive link, and runs validate + generate. Manually: add a file under the right dir following the matching schema, then run `validate_entries.py` and `generate.py`. Set `last_verified` whenever an entity changes.

## Visualization

```bash
bash viz/build.sh                      # regenerate data into viz/data/
python3 -m http.server -d viz 8080     # open http://localhost:8080
```

Deploy to Cloudflare Pages with build command `bash viz/build.sh` and output dir `viz/` (see `viz/README.md`).
