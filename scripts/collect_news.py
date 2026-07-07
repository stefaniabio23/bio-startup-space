#!/usr/bin/env python3
"""
Fetch recent news for each company in entries/**/*.md.

Searches Google News RSS for each company name and prints a digest of
recent articles. Run weekly to surface competitive signals.

Usage:
    python3 scripts/collect_news.py               # all companies
    python3 scripts/collect_news.py --company unlearn  # one company by id

Output is printed to stdout. Pipe to a file or review in terminal.

Dependencies:
    pip install pyyaml requests feedparser
"""

import argparse
import sys
import time
from pathlib import Path
from urllib.parse import quote_plus

try:
    import yaml
    import feedparser
    import requests
except ImportError:
    print("Missing dependencies. Install with: pip install pyyaml requests feedparser", file=sys.stderr)
    sys.exit(2)

PROJECT_ROOT = Path(__file__).resolve().parent.parent
ENTRIES_DIR = PROJECT_ROOT / "entries"

GNEWS_RSS = "https://news.google.com/rss/search?q={query}&hl=en-GB&gl=GB&ceid=GB:en"
MAX_ARTICLES = 5
DELAY_SECONDS = 2  # be polite to Google News


def parse_frontmatter(path):
    text = path.read_text()
    if not text.startswith("---\n"):
        return None
    end = text.find("\n---\n", 4)
    if end == -1:
        return None
    try:
        return yaml.safe_load(text[4:end])
    except yaml.YAMLError:
        return None


def fetch_news(company_name, extra_terms=""):
    query = f'"{company_name}" {extra_terms}'.strip()
    url = GNEWS_RSS.format(query=quote_plus(query))
    try:
        feed = feedparser.parse(url)
        return feed.entries[:MAX_ARTICLES]
    except Exception as e:
        return []


def print_company_news(fm):
    name = fm.get("name", fm.get("id", "?"))
    area = fm.get("area", "")
    print(f"\n{'='*60}")
    print(f"  {name}  [{area}]")
    print(f"{'='*60}")

    articles = fetch_news(name)
    if not articles:
        print("  No recent news found.")
        return

    for a in articles:
        published = getattr(a, "published", "unknown date")
        print(f"\n  {a.title}")
        print(f"  {published}")
        print(f"  {a.link}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--company", help="Filter by company id (slug)")
    args = parser.parse_args()

    entries = sorted(ENTRIES_DIR.rglob("*.md"))
    records = [(p, parse_frontmatter(p)) for p in entries]
    records = [(p, fm) for p, fm in records if fm]

    if args.company:
        records = [(p, fm) for p, fm in records if fm.get("id") == args.company]
        if not records:
            print(f"No entry found with id '{args.company}'")
            sys.exit(1)

    print(f"Collecting news for {len(records)} companies...")

    for i, (path, fm) in enumerate(records):
        print_company_news(fm)
        if i < len(records) - 1:
            time.sleep(DELAY_SECONDS)

    print(f"\nDone. {len(records)} companies checked.")


if __name__ == "__main__":
    main()
