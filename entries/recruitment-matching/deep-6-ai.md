---
id: deep-6-ai
name: Deep 6 AI
website: deep6.ai
founded: 2015
area: clinical trial recruitment
funding_stage: acquired
total_funding_usd_m: 0
public: false
business_model: saas
buyer:
  - pharma
  - cro
  - provider
buyer_urgency: high
buyer_wtp: medium
sales_cycle: medium
regulatory_burden: light
tam_usd_m: 5000
substrate_family: F
substrate_tags:
- F.3
technology_platform_ids:
  - ai-trial-operations
new_capability: "NLP over structured and unstructured EHR notes to surface trial-eligible patients faster than manual chart review."
technology_readiness_level: 7
commercialisation_status: acquired
customer:
  - pharma
  - biotech
  - cro
limiting_factor: "Solves eligibility matching only; standalone position dissolved into Tempus's oncology data and trial infrastructure."
last_verified: "2026-07-07"
data_centrality: core-moat
data_ownership:
  - customer-generated
  - licensed
moat:
  - data
  - model
  - distribution
input:
  - EHR clinical notes (structured and unstructured)
  - trial eligibility criteria (inclusion/exclusion)
  - ICD codes and lab values
transformation_type: predict
output:
  - ranked list of eligible patients per trial
  - estimated time-to-enrollment projections
  - site feasibility scores
barrier_to_entry: high
barrier_to_entry_logic: Acquired by Tempus in 2025; moat now merged into Tempus's oncology data and trial infrastructure. Pre-acquisition, EHR integrations at major academic centres were the key barrier.
hardness: hard
hardness_reason: EHR integration at scale across diverse EMR systems (Epic, Cerner) with sufficient NLP accuracy to reduce manual chart review and pass clinical validation.
---

## One-liner

AI-powered clinical trial patient matching using EHR data and NLP to identify eligible patients faster than manual chart review.

## Problem

Trial enrollment is slow; most eligible patients are never identified or contacted.

## Workaround

Manual chart review, CRO recruitment networks, site coordinator outreach, patient registries.

## Entry wedge

Hospital EHR integration: Deep 6 AI entered by partnering with health systems to plug into existing EHR infrastructure (primarily Epic and Cerner), then applying NLP to unstructured clinical notes to surface trial-eligible patients that structured queries miss. The first product was a patient-matching dashboard for site coordinators.

## Method

NLP on clinical notes and EHR records to match patients to trial eligibility criteria.

## TAM logic

Clinical trial recruitment is estimated at $5B+ annually in spend on site activation, patient identification, and enrollment operations. Sponsors routinely fail to meet enrollment timelines, adding months to development cycles at $1M+ per day in delayed revenue (industry figures cited in company materials). Deep 6 AI targets the share of that spend going to site-level recruitment tooling.

## Validated by

Acquired by Tempus AI in March 2025, signaling commercial validation. Pre-acquisition, Deep 6 AI reported deployments at major academic medical centers and health systems. Tempus integration gives access to a large multimodal oncology dataset.

## Competes with

Mendel, Massive Bio

## Complements

EDC vendors (Medidata, Veeva Vault), CTMS platforms, site management organizations (SMOs), EHR vendors (Epic, Cerner).

## Value chain position

**Downstream of:** EHR data, trial eligibility criteria
**Upstream of:** Trial enrollment, patient consent, site activation

## Gaps

Solves enrollment speed; does not solve biological matching beyond eligibility criteria. Does not address protocol design or patient stratification by predicted response. Post-enrollment dropout and retention are outside scope.

## Notes

Acquired by Tempus in 2025. Now operates as part of Tempus's broader oncology data and clinical trial infrastructure. Standalone competitive position as a pure-play recruitment tool no longer exists; the moat has merged into Tempus's distribution.

## News signals

- 2025-03: Tempus AI (NASDAQ: TEM) announced acquisition of Deep 6 AI; terms undisclosed. Adds 750+ provider site locations and 30M+ patients to Tempus's clinical trial network. Acquisition still holds as of June 2026. (source: https://www.tempus.com/news/pr/tempus-announces-acquisition-of-deep-6-ai/)
