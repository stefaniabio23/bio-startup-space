---
id: unlearn
name: Unlearn
website: unlearn.ai
founded: 2017
area: digital twins
funding_stage: series-c
total_funding_usd_m: 133
public: false
business_model: saas
buyer:
  - pharma
  - biotech
  - cro
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 66300
last_verified: "2026-06-21"
data_centrality: core-moat
data_ownership:
  - licensed
  - proprietary
  - partner-supplied
moat:
  - data
  - model
  - regulatory-trust
  - IP
input:
  - "historical clinical trial participant data (baseline + longitudinal outcome data)"
  - "disease-specific patient registries"
  - "individual participant baseline measurements at trial enrollment"
transformation_type: predict
output:
  - "digital twin forecasts of individual control outcomes at every trial time point"
  - "PROCOVA-adjusted statistical analyses"
  - "synthetic control arms for single-arm studies"
  - "power and sample-size projections"
barrier_to_entry: high
barrier_to_entry_logic: EMA CHMP qualification of PROCOVA required years of regulatory engagement and statistical validation that no new entrant can shortcut; 20+ disease-specific DTG models are a compounding data asset.
hardness: hard
hardness_reason: Getting sponsors and regulators to trust a statistical innovation enough to use it in pivotal trial submissions where a wrong decision costs $800M+.
---

## One-liner

Builds clinical-trial digital twins to model counterfactual placebo or control outcomes for trial participants.

## Problem

Clinical trials are large, slow, expensive, and often underpowered because control arms consume patients and budget.

## Workaround

Randomised control arms, historical controls, external control arms, CRO statistical design, Bayesian trial methods.

## Entry wedge

PROCOVA (prognostic covariate adjustment) — historical participant data generates synthetic control trajectories.

## Method

Disease-specific ML models (Digital Twin Generators, DTGs) trained on large pools of historical clinical trial data generate forecasts of individual disease progression under control or standard of care using only baseline data; these forecasts serve as prognostic covariates in PROCOVA-adjusted analyses to increase statistical power without inflating Type I error.

## TAM logic

Clinical trial market is ~$66B. Unlearn argues that increasing statistical power via digital twins allows sponsors to reduce control arm size (or sample size overall) by 20-30%, cutting trial cost and duration while preserving or improving efficacy signal. Power gains compound across primary and secondary endpoints (unlearn.ai/digital-twins).

## Validated by

FDA engagement on PROCOVA statistical method. EMA (CHMP) officially qualified PROCOVA for use in Phase 2 and 3 trials with continuous outcomes. SOC 2 Type 2 and 21 CFR Part 11 compliance for GxP-regulated deployment. Over 20 disease-specific DTG models publicly available (neuroscience, immunology, cardio/metabolic, musculoskeletal, psychiatric).

## Competes with

QuantHealth (trial simulation), Medidata (statistical design tools), IQVIA (historical controls), Flatiron Health (external control arms), Cytel (adaptive trial design software).

## Complements

CROs (IQVIA, Covance, PRA) for trial execution. EDC platforms (Medidata Rave, Veeva Vault) for data integration. Biomarker stratification tools. Decentralised trial platforms (Veeva, Oracle) that generate the longitudinal data DTGs consume.

## Value chain position

**Downstream of:** Clinical trial design, historical trial data repositories, patient enrollment and baseline data collection
**Upstream of:** Statistical analysis, interim analyses, regulatory submission, go/no-go decisions

## Gaps

Models counterfactual control outcomes; does not infer latent patient biological state during the trial or predict early signals of response/resistance. DTGs are disease-specific and require sufficient historical data — rare diseases or novel endpoints are not yet covered. Does not handle imaging, genomics, or wearable-stream inputs; operates on structured clinical outcome scales.

## Notes

Three-product suite: Plan (trial planning and simulation), Monitor (advanced trial monitoring), Analyze (digital twins / PROCOVA). On-premises cloud deployment option available for sponsors with data sovereignty requirements. "The AI partner of choice for top pharma and biotechs" — positioned as enterprise infrastructure, not a point tool.
