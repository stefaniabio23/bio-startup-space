# tech-bio-map viz

Static graph + table view of the four-table map. No framework, no build tooling beyond copying data. Cytoscape.js loads from CDN.

## What it shows
- **Graph**: every primitive, company, and idea as a node. Nodes are colored by substrate family (A-F), shaped by type (diamond = primitive, circle = company, rounded = idea). Company size scales with funding, primitive size with TRL. Edges: `uses` (company to primitive), `references` (idea to primitive), `closest` (idea to company), `competes` / `complements` (company to company, off by default). Click a node to highlight its neighborhood and open a detail panel.
- **Table**: sortable, filterable view of every entity (filter by type, substrate, free-text search).

Data comes from `data/graph.json` (nodes + edges) and `data/index.json` (full records), both produced by `scripts/generate.py`.

## Run locally
```bash
bash viz/build.sh          # regenerates data + copies it into viz/data/
python3 -m http.server -d viz 8080
open http://localhost:8080
```

## Deploy to Cloudflare Pages
Two options.

**A. Git integration (recommended).** Connect the repo in the Cloudflare dashboard:
- Build command: `bash viz/build.sh`
- Build output directory: `viz`
- Python is available in the Pages build image; `pip install pyyaml` if the build needs it.

**B. Direct upload.** `data/` is committed, so the site is fully static:
```bash
bash viz/build.sh
npx wrangler pages deploy viz --project-name tech-bio-map
```

`data/graph.json` and `data/index.json` are committed so the site renders even without running the build.
