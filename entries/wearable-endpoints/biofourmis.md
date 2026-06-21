---
id: biofourmis
name: Biofourmis
website: biofourmis.com
founded: 2015
area: digital biomarkers
funding_stage: series-d-plus
total_funding_usd_m: 465
public: false
business_model: hybrid
buyer:
  - pharma
  - provider
  - payer
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 20000
last_verified: "2026-06-21"
data_centrality: important-enabler
data_ownership:
  - customer-generated
  - generated-in-house
moat:
  - regulatory-trust
  - clinical-evidence
  - IP
input:
  - continuous wearable biosensor streams (PPG, ECG, accelerometry, temperature, SpO2)
  - EHR clinical records
  - patient-reported outcomes
transformation_type: monitor
output:
  - FDA-cleared digital biomarker endpoints
  - real-time clinical deterioration alerts
  - personalized physiological baselines
  - remote monitoring dashboards for clinical staff
barrier_to_entry: high
barrier_to_entry_logic: FDA 510(k) clearance for 21 proprietary AI algorithms and 50+ health system partnerships create regulatory and distribution moat; life sciences business divested to ActiGraph (Jan 2025).
hardness: hard
hardness_reason: Proving continuous physiological monitoring reduces readmissions durably enough to justify payer reimbursement across a diverse population at scale.
---

## One-liner

Collects continuous wearable and remote monitoring data to generate digital biomarker endpoints for clinical trials and real-world care.

## Problem

Infrequent clinical assessments miss continuous physiological changes; trial endpoints rely on episodic snapshots.

## Workaround

Clinic visits, patient-reported outcomes, standard vital sign monitoring, manual adverse event reporting.

## Entry wedge

Biofourmis entered via remote patient monitoring (RPM) for heart failure — their first product was the Everion+ biosensor (upper arm wearable) paired with their BioVitals analytics engine generating personalized baselines and early decompensation alerts. They obtained FDA 510(k) clearance for AI-powered RPM software for heart failure monitoring. The clinical trial (life sciences) business was a parallel arm built on the same sensor + analytics infrastructure, sold as Biofourmis Connect. In January 2025, they divested the life sciences business to ActiGraph to focus on care delivery.

## Method

Continuous wearable sensor data collection + regulatory-grade digital endpoint generation.

## TAM logic

No explicit TAM figure stated on their website. Operational claims: 100K+ patients served, 4M+ data points per post-acute care patient per day, 70+ remote dynamic care pathways. They cite 70% reduction in 30-day readmissions and 38% cost reduction in care delivery programs. The $20B TAM reflects the combined digital health remote monitoring and clinical trial eCOA/digital endpoint market. (Source: biofourmis.com, biofourmis.com/news)

## Validated by

FDA 510(k) clearance for AI-powered remote monitoring software (heart failure decompensation). 50+ health system partnerships. 21 proprietary FDA-cleared AI algorithms. Published study in Scientific Reports (2021) on wearable biosensors and ML-based remote monitoring. ActiGraph acquisition of Biofourmis Connect life sciences business (January 2025) validated the clinical trial digital endpoint asset. CopilotIQ merger (October 2024) to build end-to-end AI-driven in-home care platform.

## Competes with

Koneksa ($70M raised, same wearable endpoints space)

## Complements

Wearable device manufacturers (Everion+, Apple Watch, Garmin) upstream for sensor hardware. EHR vendors for care pathway integration. CROs and pharma sponsors who use digital endpoints in trials (now served via ActiGraph post-acquisition). Home health agencies and hospital-at-home programs as deployment partners.

## Value chain position

**Downstream of:** Wearable device data streams
**Upstream of:** Clinical trial data analysis, regulatory submissions, care management decisions

## Gaps

Collects wearable signal; does not do latent biological state inference from that signal or connect to outcomes at a patient cohort level. Life sciences / clinical trial business was divested to ActiGraph (Jan 2025), so the pharma-facing digital endpoint moat is no longer part of Biofourmis. Current focus is care delivery (hospital-at-home, chronic care) rather than clinical trial endpoints.

## Notes

Merging with CopilotIQ (chronic care management for elderly). Potential partner: they collect; we infer. Note that the life sciences business (Biofourmis Connect) was sold to ActiGraph in January 2025 — the current company is primarily a care delivery platform, not a clinical trial endpoints vendor.
