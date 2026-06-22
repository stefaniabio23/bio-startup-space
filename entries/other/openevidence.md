---
id: openevidence
name: OpenEvidence
website: openevidence.com
founded: 2022
area: clinical decision support AI
funding_stage: series-d-plus
total_funding_usd_m: 700
public: false
business_model: saas
buyer:
 - pharma
 - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: short
regulatory_burden: light
tam_usd_m: 15000
data_centrality: important-enabler
data_ownership:
 - public
 - licensed
moat:
 - distribution
 - data
 - founder-brand
primary_value_chain_layer: clinical decision support
input:
 - peer-reviewed medical literature (NEJM, JAMA, and others)
 - physician natural-language queries
 - de-identified patient case details at point of care
transformation_type: predict
output:
 - evidence-grounded answers to clinical questions (core search)
 - AI agent-driven deep research reports (DeepConsult)
 - cited references with follow-up suggestions
barrier_to_entry: high
barrier_to_entry_logic: Network effects from physician adoption (over 40% of US physicians) compound with proprietary usage data and pharmaceutical advertiser relationships that competitors cannot easily replicate.
hardness: hard
hardness_reason: Sustaining physician trust and clinical accuracy at scale while maintaining the advertising-based model without letting pharma influence clinical answers.
last_verified: "2026-06-22"
---

## One-liner

AI-powered medical search engine used by over 40% of US physicians to get evidence-grounded answers to clinical questions at the point of care, funded by pharmaceutical advertising.

## Problem

Physicians lack fast, reliable access to current medical evidence during patient encounters, existing tools like UpToDate are slow, expensive, and not designed for conversational point-of-care use.

## Workaround

UpToDate (subscription, curated summaries), PubMed (raw literature search), clinical colleagues, and Google Scholar, all require significant time and effort during a live encounter.

## Entry wedge

Free access for verified physicians, bypassing hospital IT and procurement entirely. The product signed up users directly, scaling to hundreds of thousands of physicians before any enterprise sales motion.

## Method

Retrieval-augmented generation over peer-reviewed medical literature indexed from sources including NEJM and JAMA. Answers return in 5-10 seconds with citations. DeepConsult deploys specialized AI agents to cross-reference hundreds of studies in parallel for complex queries. Revenue comes from pharma and device company advertisements served during the query loading window, with strict separation between ad content and clinical answers.

## TAM logic

The clinical decision support market is estimated at $3-5B; broader medical information and pharma advertising markets extend the TAM to $10-15B+. OpenEvidence's reported $150M ARR (2025) at 90% gross margins suggests it has reached significant scale faster than prior incumbents (UpToDate took a decade to reach similar revenue). (Source: Sacra estimates, prnewswire.com)

## Validated by

Series D at $12B valuation (January 2026, $250M raised). Prior Series C at $6B (October 2025, $200M), Series B at $3.5B (July 2025, $210M). Total funding approximately $700M from investors including Sequoia, GV (Google Ventures), Kleiner Perkins, Nvidia, Blackstone, Thrive Capital, Craft Ventures, and Mayo Clinic. Reported 760,000 registered US physicians and approximately 20 million clinical consultations per month (January 2026). Approximately 65% of US doctors have used the platform.

## Competes with

UpToDate (Wolters Kluwer, subscription-based curated summaries), Doximity (physician network, medical news), Elsevier ClinicalKey, Google Search, general-purpose LLMs (ChatGPT, Gemini used off-label by physicians).

## Complements

EHR systems (Epic, Cerner) for workflow integration, pharmaceutical companies as advertising partners, medical publishers as content sources.

## Value chain position

**Downstream of:** Medical journal publishers, clinical trial data, FDA label data
**Upstream of:** Physician prescribing decisions, treatment planning, drug selection

## Gaps

Business model concentration risk: pharma advertising accounts for essentially all revenue. If advertiser CPMs compress or physicians distrust the ad-adjacent model, the economics break. No BAA or EHR integration means no access to patient-level longitudinal data. Clinical liability exposure if answers drive adverse outcomes. DeepConsult competes directly with pharma medical affairs teams, which could jeopardize advertiser relationships.

## Notes

Founded by Daniel Nadler (also founder of Kensho, acquired by S&P Global for $550M) and Zachary Ziegler. HQ: Miami, FL. The advertising CPM rate of $70-$1,000+ (vs $5-15 for social media) reflects the exceptional commercial value of the physician audience at the moment of prescribing intent. The platform achieved $50M ARR without BAAs or EHR integration, an unusual path for a health tech company. Growth rate (1,803% revenue increase 2024-2025 per Sacra) is the fastest ever documented for a physician application.

## News signals

- 2026-01: Raised $250M Series D co-led by Thrive Capital and DST Global at a $12B valuation, doubling the October 2025 valuation. Total funding now about $700M. (source: https://techcrunch.com/2026/01/21/openevidence-hits-12b-valuation-with-new-round-led-by-thrive-dst/)
