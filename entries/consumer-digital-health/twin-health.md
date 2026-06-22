---
id: twin-health
name: Twin Health
website: twinhealth.com
founded: 2018
area: digital twins
funding_stage: series-d-plus
total_funding_usd_m: 272
public: false
business_model: reimbursement
buyer:
  - payer
  - provider
  - consumer
buyer_urgency: high
buyer_wtp: high
sales_cycle: medium
regulatory_burden: medium
tam_usd_m: 9500
last_verified: "2026-06-22"
data_centrality: core-moat
data_ownership:
  - proprietary
  - customer-generated
moat:
  - data
  - model
  - clinical-evidence
input:
  - continuous glucose monitoring (CGM) streams
  - wearable activity and sleep sensor data
  - dietary logs and behaviour data
  - lab results (A1C, metabolic panels)
transformation_type: monitor
output:
  - personalised daily recommendations (food, sleep, activity, stress)
  - metabolic state predictions
  - A1C trajectory forecasts
  - medication reduction guidance
barrier_to_entry: medium
barrier_to_entry_logic: Payer and employer contracts require outcomes data accumulated over years and complex B2B sales cycles; published NEJM Catalyst and Nature clinical evidence creates credibility moat.
hardness: hard
hardness_reason: Sustaining behaviour change long enough to produce durable metabolic outcomes in a diverse, non-compliant real-world population at scale.
---

## One-liner

Builds a metabolic digital twin using CGM, wearables, labs, and behaviour data to guide personalised metabolic care.

## Problem

Metabolic disease care is generic, episodic, and often fails because behaviour and physiology change continuously.

## Workaround

Primary care, dietitians, diabetes coaching, GLP-1s, CGM apps, generic lifestyle programmes.

## Entry wedge

Type 2 diabetes and prediabetes management sold through self-insured employers. The first distribution channel was enterprise employers (Benjamin Moore, HCSC, Invitation Homes, Heritage Group Health, RRD among named partners) using an outcomes-based "all-fees-at-risk" pricing model, which lowered employer procurement risk and provided a dataset for clinical validation.

## Method

Real-time metabolic digital twin: continuous data from CGM and wearables feeds an AI model that builds an individual-specific model of metabolic response, then delivers daily personalised guidance and medication adjustment signals to members and their care team.

## TAM logic

Metabolic disease (obesity, prediabetes, T2D) is the highest-cost chronic disease category for US employers and health plans; the company targets the $9.5B+ market for employer and health plan diabetes management programs where GLP-1 drug costs are accelerating payer demand for non-pharmacological alternatives.

## Validated by

Multiple peer-reviewed publications: Cleveland Clinic-led randomised study in NEJM Catalyst (NCT05181449); one-year outcomes in Nature Scientific Reports (2024); hypertension study in JACC: Advances (2024). Reported 2025 group outcomes: 71% of members lowered A1C below 6.5% without glucose-lowering medications, 27 lb average weight loss, 85% GLP-1 elimination rate, 46% insulin elimination rate. $53M Series E (August 2025, led by Maj Invest) at a $950M valuation brought total funding to ~$272M.

## Competes with

Virta Health (T2D reversal via ketogenic diet + remote care), Omada Health (digital diabetes prevention), Noom (behaviour-based weight management), Hinge Health (condition management, different indication), and GLP-1 prescribing platforms (Calibrate, Ro).

## Complements

CGM manufacturers (Dexcom, Abbott FreeStyle Libre), wearable platforms (Apple Health, Fitbit), EHR systems, PBMs managing GLP-1 spend, and population health platforms that can route members.

## Value chain position

**Downstream of:** CGM and wearable data streams, patient behaviour data
**Upstream of:** Clinical care decisions, prescription adjustment

## Gaps

Advanced enough technically; harder problems are behaviour change, trust, adherence, and payer/employer distribution.

## Notes

Outcomes-based pricing ("all-fees-at-risk") is a meaningful structural differentiator: it aligns incentives with payers and shifts the risk of non-performance to Twin Health, which requires high confidence in the clinical model and creates a data flywheel from enrolled members.

## News signals

- 2025-08: Raised $53M Series E led by Maj Invest at a $950M valuation, bringing total funding to ~$272M. Existing investors Iconiq and Temasek participated. Funds expand reach among health plans and Fortune 500 employer clients. (source: https://fortune.com/2025/08/21/exclusive-twin-health-metabolic-health-startup-raises-53-million-series-e-at-950-million-valuation/, https://www.prnewswire.com/news-releases/twin-health-announces-53m-investment-as-ai-digital-twin-unlocks-sustainable-diabetes-and-obesity-outcomes-while-reducing-medications-302535848.html)
