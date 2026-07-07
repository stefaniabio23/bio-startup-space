#!/usr/bin/env bash
# Build step for the tech-bio-map viz site.
# Regenerates data from entries, then copies the JSON the static site reads.
# Used both locally and as the Cloudflare Pages build command.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

python3 scripts/generate.py
mkdir -p viz/data
cp generated/graph.json generated/index.json viz/data/
echo "viz/data updated (graph.json, index.json)"

# Also sync the v0 / Next app if present.
if [ -d viz-next/public/data ]; then
  cp generated/graph.json generated/index.json viz-next/public/data/
  echo "viz-next/public/data updated (graph.json, index.json)"
fi
