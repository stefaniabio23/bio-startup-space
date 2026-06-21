# Collection process: ongoing competitive intelligence

## Weekly routine (15-20 min)

1. **Run the news script**
   ```bash
   python3 scripts/collect_news.py > /tmp/bio-news-$(date +%Y-%m-%d).txt
   ```
   Scan for: new funding rounds, partnership announcements, new papers, leadership changes, product launches.

2. **Update entries with signals**
   For any company with meaningful news, add a dated bullet to the `## News signals` section of its entry and update `last_verified`.

3. **Check for new entrants**
   - Search `site:techcrunch.com "series" "clinical trial" OR "drug discovery" OR "biomarker"` in Google
   - Check relevant newsletters: Stat News, FierceBiotech, Endpoints News, The Gradient Podcast
   - Check arXiv categories: `q-bio.QM`, `cs.LG` for clinical/bio ML papers from companies

4. **Validate and regenerate**
   ```bash
   python3 scripts/validate_entries.py && python3 scripts/generate.py
   ```

5. **Commit and push** (CI then publishes to Google Sheet automatically)

---

## Adding a new entry

Ask Claude: "add a bio-startup-space entry for [company name or URL]"

Claude will:
- Research the company
- Fill all schema fields
- Write the four body sections
- Save to the correct category folder

---

## Signal sources

| Source | What to look for | Frequency |
|---|---|---|
| Google News RSS (`collect_news.py`) | Funding, partnerships, launches | Weekly (automated) |
| arXiv `q-bio.QM` | New ML/clinical papers from companies | Weekly |
| Crunchbase (manual) | Funding round confirmation, investor list | Monthly |
| LinkedIn (manual) | Hiring signals (team expansion in clinical, BD roles) | Monthly |
| Stat News / FierceBiotech | Regulatory, clinical, and commercial news | As it lands |
| Endpoints News | Clinical-stage and trial-adjacent news | As it lands |
| EF network contacts | Industry perspective, unreported signals | Ad hoc |

---

## What counts as a signal worth capturing

- Funding round (any size): update `total_raised`, `last_round_amount_usd`, `last_round_date`, `last_round_type`, `key_investors`
- New pharma/biotech partnership: add to `notable_partnerships` + news signal bullet
- New published paper: add to `key_papers`
- Product launch or pivot: update `what`, `what_they_sell`, `technical_approach` as needed
- Clinical result (positive or negative): add to news signals with context
- Leadership change (CEO, CSO): note in body if strategically relevant

---

## Thesis relevance review (monthly)

Once a month: re-read `generated/by-category.md` and check if any `monitor` entries have moved closer to `direct-competitor` or `adjacent`. Adjust `thesis_relevance` in the entry if so.

---

## GitHub setup (one-time)

1. Create private repo: `gh repo create bio-startup-space --private`
2. Push: `git remote add origin git@github.com:stephanierebecca/bio-startup-space.git && git push -u origin main`
3. Add secrets in GitHub repo settings:
   - `GOOGLE_SERVICE_ACCOUNT_JSON` — contents of `~/.config/bio-startup-space-sa.json`
   - `GOOGLE_SHEET_ID` — ID of the target Google Sheet
4. Share the Google Sheet with the service account email (editor access)
