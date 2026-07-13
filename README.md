# bio-startup-space (tech-bio-map v2)

A machine-readable **relational** map of the bio x AI and deeptech-bio landscape. The **technical-primitive map is the spine**: companies and grounding papers link back to primitives by stable slug, so each primitive is written once and referenced everywhere.

Scripts validate every entity against its schema and cross-entity rules, generate per-table CSV / JSON / graph views, and publish to a Google Sheet and an interactive web graph. **GitHub is canonical; everything in `generated/`, the Sheet, and the viz is a downstream render.**

**Live graph:** https://stefaniabio23.github.io/bio-startup-space/

## The four entity types

| Type | Dir | What it holds |
|---|---|---|
| **technical_primitive** (spine) | `primitives/` | the underlying scientific/engineering unlocks, with TRL, mechanism, translational gap, and a literature/patent momentum scan |
| **company** | `entries/<substrate-family>/` (v2) and legacy thesis folders (v1) | companies, each linking to primitive(s) via `technology_platform_ids` |
| **prior_work** | `prior-work/` | papers grounding a primitive in the literature, with a one-line hypothesis, method, what-it-proves, and the open question for a builder |
| **controlled_taxonomies** | `taxonomy/taxonomy.yaml` | the single source of truth for every closed vocabulary (substrate families A-F, business models, TRL, etc.) |

## What's here

- **43 technical primitives**, **150 companies**, and **8 prior-work papers**, all cross-linked into one graph of 201 nodes and ~405 edges.
- Typed schemas in `schema/` (`company`, `technical_primitive`, `prior_work`) plus the controlled taxonomy (v2.0).
- Generated outputs: `companies.csv`, `primitives.csv`, `prior_work.csv`, `capabilities.csv`, `taxonomies.csv`, a unified `index.json` (every record tagged with `type`), a `graph.json` (nodes + edges), a grouped `by-area.md`, and a `link_audit.md`.
- An interactive web graph in `viz-next/` (Next.js, deployed to GitHub Pages) and a dependency-free legacy version in `viz/` (Cytoscape.js, Cloudflare Pages).
- A `technical-primitive-scanner/` subsystem that scores each primitive on literature and patent momentum and writes the result back into the primitive's frontmatter.

Substrate families organise everything on one axis: **A** data, **B** automation/execution, **C** model, **D** deeptech/physics/materials, **E** biological, **F** clinical/regulatory/distribution.

> Note: a set of v1 companies still live in their original thesis folders (`molecule-generation/`, `clinical-stage-biotech/`, `consumer-digital-health/`, etc.) and carry the v1 field set. Migrating them into the `entries/<substrate-family>/` structure with full v2 fields is a deliberate later pass. New entries go straight into the `a-data` ... `f-clinical` folders.

## Structure

```text
bio-startup-space/
├── SCHEMA.md                       human spec for company fields
├── COLLECT.md                      weekly competitive-intel collection process
├── taxonomy/taxonomy.yaml          controlled vocab (validator reads this)
├── schema/
│   ├── company.schema.yaml         company frontmatter (v2 superset)
│   ├── technical_primitive.schema.yaml
│   └── prior_work.schema.yaml
├── primitives/<slug>.md            technical primitives (the spine)
├── entries/<substrate-family>/<id>.md   companies (v2); legacy thesis folders hold v1
├── prior-work/pw-<slug>.md         grounding papers (evidence edges to primitives)
├── scripts/
│   ├── validate_entries.py         per-type schema + referential integrity + taxonomy checks
│   ├── generate.py                 rebuild generated/ (CSVs, index.json, graph.json, by-area.md)
│   ├── audit_links.py              flag primitive-link mismatches + surface pre-commercial entities
│   ├── publish_to_sheet.py         push the tables to a Google Sheet
│   └── collect_news.py             fetch recent news per company
├── generated/                      CSV / JSON / graph render targets
├── viz/                            legacy Cytoscape.js graph (Cloudflare Pages)
├── viz-next/                       Next.js graph, deployed to GitHub Pages (the live site)
├── technical-primitive-scanner/    literature + patent momentum scanner (writes back to primitives/)
└── .github/workflows/
    ├── pages.yml                   build viz-next + deploy to GitHub Pages on push
    └── publish.yml                 validate → generate → publish to Google Sheet on push + weekly
```

## Entry format

Each entity is a Markdown file with YAML frontmatter plus prose sections. Companies, primitives, and prior-work each have their own schema in `schema/`; every controlled field is checked against `taxonomy/taxonomy.yaml`. Companies and prior-work link to primitives via `technology_platform_ids` (validated for referential integrity), which is what stitches the graph together. See the `schema/` files for the full field lists and each content dir for live examples.

## Usage

```bash
pip install jsonschema pyyaml google-api-python-client google-auth requests

python3 scripts/validate_entries.py   # validate all entities against their schema
python3 scripts/generate.py           # rebuild generated/ from the markdown
python3 scripts/audit_links.py        # write generated/link_audit.md (mismatch + pre-commercial check)
```

Publishing to a Google Sheet reads its service-account credential from the macOS keychain at runtime; no credentials are stored in the repo. See `publish.sh`.

## Adding an entry

Ask Claude: "add a bio-startup-space entry for X" (the `bio-startup-map` skill handles companies, primitives, and prior-work). It picks the entity type, fills the schema, resolves the primitive link, and runs validate + generate. Manually: add a file under the right dir following the matching schema, then run `validate_entries.py` and `generate.py`. Set `last_verified` whenever an entity changes.

## Visualization

**Live (viz-next, GitHub Pages).** The interactive graph at https://stefaniabio23.github.io/bio-startup-space/ is a Next.js + react-force-graph app that reads `graph.json` and `index.json`. It rebuilds and redeploys automatically on every push to `main` that touches the data or the app (see `.github/workflows/pages.yml`). Locally:

```bash
cd viz-next
npm install
npm run dev            # http://localhost:3000
```

**Legacy (viz, Cloudflare Pages).** A dependency-free static graph + table view using Cytoscape.js from a CDN. Nodes are colored by substrate family and shaped by type; edges are `uses` (company to primitive), `evidence` (prior-work to primitive), and `competes` / `complements` (company to company).

```bash
bash viz/build.sh                     # regenerate data into viz/data/
python3 -m http.server -d viz 8080    # http://localhost:8080
```

## Primitive momentum scanner

`technical-primitive-scanner/` is a self-contained Python pipeline that scores each primitive on scientific momentum (OpenAlex paper volume, CAGR, field-weighted citations, industry-author share) and patent translation (EPO OPS family counts, CAGR, company-vs-academic assignee split), classifies it into one of five commercialization buckets, and patches a `scan:` block back into the primitive's frontmatter. API keys (EPO OPS, optional Semantic Scholar) live in the macOS keychain, never in files. See `technical-primitive-scanner/CLAUDE.md` for the pipeline and entry points.

## Continuous integration

Two workflows run on push to `main`:

- **`pages.yml`** regenerates the graph, builds the `viz-next` static export, and deploys it to GitHub Pages.
- **`publish.yml`** validates, regenerates, and publishes the tables to the Google Sheet (also on a weekly Monday schedule).

Both are gated on changes under `entries/`, `primitives/`, `prior-work/`, `taxonomy/`, or `schema/`, so a normal entry commit refreshes the live graph and the Sheet with no manual step.
