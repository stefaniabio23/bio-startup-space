---
id: aidoc
name: Aidoc
website: aidoc.com
founded: 2016
area: clinical AI radiology triage
funding_stage: series-d-plus
total_funding_usd_m: 520
public: false
business_model: saas
buyer:
 - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 20000
data_centrality: core-moat
data_ownership:
 - customer-generated
 - proprietary
moat:
 - regulatory-trust
 - distribution
 - data
 - model
 - IP
primary_value_chain_layer: radiology workflow and clinical triage
input:
 - CT scans (head, body, chest, abdomen, spine)
 - PACS-integrated imaging data
 - EHR/scheduling context
transformation_type: predict
output:
 - automated triage flags for acute conditions (intracranial hemorrhage, PE, aortic dissection, and 30+ others)
 - urgency-stratified radiology worklists
 - automated draft imaging reports
 - population-level care coordination alerts
barrier_to_entry: very-high
barrier_to_entry_logic: 30+ FDA clearances (most in the field), deployed across ~2,000 hospitals globally, CARE foundation model trained on 60M+ annual cases, and long enterprise health system contracts, each requiring a 12-24 month procurement and integration cycle.
hardness: very-hard
hardness_reason: Building a general clinical AI foundation model (CARE) that is accurate, safe, and FDA-clearable across dozens of heterogeneous imaging indications and clinical environments simultaneously.
last_verified: "2026-06-22"
---

## One-liner

Enterprise clinical AI platform that runs continuously in the background of hospital imaging workflows to detect and prioritize acute findings, deployed at nearly 2,000 hospitals and clearing 60 million patient cases per year.

## Problem

Radiologists and emergency physicians work through unordered queues of imaging studies; critical findings like intracranial hemorrhage or pulmonary embolism sit in the queue at the same priority as routine scans, causing delay-to-diagnosis for time-sensitive conditions.

## Workaround

Manual radiologist triage by visible urgency flags on orders, verbal calls from emergency physicians, and scheduled reads, all dependent on human attention and prone to delay in high-volume settings.

## Entry wedge

Single-indication FDA-cleared AI for intracranial hemorrhage detection on CT head scans, a high-acuity, high-frequency finding in emergency departments where time-to-treatment directly affects outcomes. Aidoc established hospital relationships and integration depth before expanding the indication set.

## Method

Aidoc's CARE foundation model (first comprehensive foundation model in healthcare to receive FDA clearance) analyzes PACS-ingested imaging in near-real-time, generating urgency flags that re-sort the radiology worklist and trigger direct alerts to radiologists and emergency physicians. The aiOS enterprise platform handles deployment, governance, continuous performance monitoring, and integration across EHR, PACS, scheduling, and mobile tools. In January 2026, the FDA cleared 11 new indications simultaneously, the largest single-round clearance in the field.

## TAM logic

The global clinical decision support market is projected at $7-10B; the AI-in-radiology segment alone is expected to exceed $5B by 2030. With 2,000 hospital deployments and approximately $520M raised, Aidoc is pricing its platform as an enterprise health system operating layer, not a per-study fee, which expands the revenue ceiling significantly beyond per-read diagnostic fees. (Source: company materials, MedTechDive)

## Validated by

Series E: $150M led by Goldman Sachs Alternatives (April 2026), with Nvidia (NVentures), SoftBank Vision Fund 2, and General Catalyst. Prior growth round: $150M (2025, General Catalyst lead). Total funding $520M+. 30+ FDA clearances (most in the field as of 2026). Deployed across ~2,000 hospitals and 1,600+ global sites. 60 million patient cases analyzed annually. Customers include Yale New Haven Hospital, Cedars-Sinai, and Sheba Medical Center.

## Competes with

Viz.ai (stroke and cardiovascular AI, similar enterprise model), Annalise.ai, Enlitic, Subtle Medical, Intelerad, Nuance (Microsoft, PowerScribe AI), Philips IntelliSpace, GE HealthCare AI solutions. Broader threat: general-purpose foundation models from Google (Med-PaLM) and Microsoft/Nuance entering radiology.

## Complements

PACS vendors (Sectra, Intelerad, Ambra) as integration substrate, EHR vendors (Epic, Cerner) for clinical context and alert routing, hospital RIS systems, teleradiology networks.

## Value chain position

**Downstream of:** Medical imaging acquisition (CT, MRI scanners), PACS storage
**Upstream of:** Radiologist read and report generation, emergency physician treatment decision, care coordination and specialist routing

## Gaps

Foundation model breadth (CARE) is being asserted but clinical validation across all 30+ indications varies, weaker indications create liability exposure. IPO signals in the press but not confirmed; Goldman Sachs backing and $500M+ raised positions this for a public offering, which introduces execution pressure. Reimbursement for AI triage tools remains unsettled, most hospitals pay for the platform as a software subscription, but payer pass-through is not established.

## Notes

Founded by CEO Elad Walach, CTO Michael Braginsky, and VP Guy Reiner. HQ: Tel Aviv, Israel, with US operations in New York. Israeli AI medtech with the deepest US hospital penetration in AI radiology. The CARE foundation model FDA clearance (first of its kind) and simultaneous 11-indication approval in January 2026 are the most significant regulatory milestones in clinical AI to date.

## News signals

- 2026-01: FDA cleared 11 new indications simultaneously, the largest single-round clearance in the field. (source: https://www.aidoc.com/about/news/)
- 2026-04: Raised $150M Series E led by Growth Equity at Goldman Sachs Alternatives, with NVentures (Nvidia), SoftBank Vision Fund 2, and General Catalyst; total funding now over $500M. (source: https://www.prnewswire.com/news-releases/aidoc-raises-150-million-series-e-led-by-goldman-sachs-to-scale-clinical-ai-for-earlier-safer-diagnoses-302757181.html)
