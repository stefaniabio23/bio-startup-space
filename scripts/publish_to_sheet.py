#!/usr/bin/env python3
"""
Push generated/companies.csv to a Google Sheet.

The Sheet is a downstream render target. GitHub is canonical.
Each run clears and rewrites the Companies tab.

Required env vars:
  GOOGLE_SERVICE_ACCOUNT_JSON , full JSON of a service account with editor access
  GOOGLE_SHEET_ID             , the spreadsheet ID

Run:
  export GOOGLE_SERVICE_ACCOUNT_JSON="$(cat ~/.config/bio-startup-space-sa.json)"
  export GOOGLE_SHEET_ID="1rsmT-fYVXvPp0J4guOxrK3NScZ2ClLiPr-jXyErvri4"
  python3 scripts/publish_to_sheet.py

Dependencies:
    pip install google-api-python-client google-auth
"""

import csv
import json
import os
import sys
from pathlib import Path

try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
except ImportError:
    print("Install: pip install google-api-python-client google-auth", file=sys.stderr)
    sys.exit(2)

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
# Ideas are kept private (see .gitignore); the ideas board is not published.
TABS = [
    ("Companies", "companies.csv"),
    ("Primitives", "primitives.csv"),
    ("Prior work", "prior_work.csv"),
    ("Taxonomies", "taxonomies.csv"),
]
PROJECT_ROOT = Path(__file__).resolve().parent.parent
GENERATED_DIR = PROJECT_ROOT / "generated"


def get_or_create_tab(service, sheet_id, title):
    meta = service.spreadsheets().get(spreadsheetId=sheet_id).execute()
    existing = {s["properties"]["title"] for s in meta["sheets"]}
    if title not in existing:
        service.spreadsheets().batchUpdate(
            spreadsheetId=sheet_id,
            body={"requests": [{"addSheet": {"properties": {"title": title}}}]},
        ).execute()
        print(f"  created tab '{title}'")


def clear_and_write(service, sheet_id, tab_title, rows):
    service.spreadsheets().values().clear(
        spreadsheetId=sheet_id,
        range=tab_title,
    ).execute()
    service.spreadsheets().values().update(
        spreadsheetId=sheet_id,
        range=f"{tab_title}!A1",
        valueInputOption="RAW",
        body={"values": rows},
    ).execute()
    print(f"  wrote {len(rows)} rows to '{tab_title}'")


def main():
    sa_json = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON")
    sheet_id = os.environ.get("GOOGLE_SHEET_ID")
    missing = [k for k, v in [("GOOGLE_SERVICE_ACCOUNT_JSON", sa_json), ("GOOGLE_SHEET_ID", sheet_id)] if not v]
    if missing:
        print(f"Missing env vars: {', '.join(missing)}", file=sys.stderr)
        return 2

    creds = service_account.Credentials.from_service_account_info(
        json.loads(sa_json), scopes=SCOPES
    )
    service = build("sheets", "v4", credentials=creds, cache_discovery=False)

    for tab_title, csv_name in TABS:
        csv_path = GENERATED_DIR / csv_name
        if not csv_path.exists():
            print(f"Missing {csv_path}. Run generate.py first.", file=sys.stderr)
            continue
        with open(csv_path, newline="") as f:
            rows = list(csv.reader(f))
        get_or_create_tab(service, sheet_id, tab_title)
        clear_and_write(service, sheet_id, tab_title, rows)

    print("Done.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
