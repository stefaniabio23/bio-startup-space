---
id: biosimulation-qsp
name: Biosimulation and quantitative systems pharmacology
aliases:
  - QSP
  - quantitative systems pharmacology
  - PBPK modelling
  - clinical trial digital twins
  - in-silico trials
substrate_family: C
substrate_tags:
  - C.3
enabled_by: "mechanistic ODE models of physiology and pharmacology, coupled to virtual patient populations and, increasingly, ML surrogates trained on trial and RWD"
mechanism: "physiology-based and systems-pharmacology models simulate how a drug moves, acts, and produces outcomes in virtual patients before or alongside a real trial"
new_capability: "simulate drug exposure, response, and trial outcomes in silico to shrink, augment, or de-risk real clinical trials"
what_it_could_unlock: "a modelling layer that lets a sponsor test dose, endpoint, and population choices computationally before committing patients and capital"
capabilities:
  - capability: "PBPK and QSP mechanistic simulation"
    what_it_could_unlock: "dose selection, drug-drug interaction, and pediatric or organ-impairment predictions accepted in regulatory filings"
    mechanism: "mechanistic ODE models of absorption, distribution, and pathway biology run on virtual patient populations"
    technology_readiness_level: 8
    translational_gap: "mechanistic models need calibration data and are hard to build for poorly understood diseases"
    closest_companies:
      - Certara
      - FireQSP
  - capability: "clinical-trial digital twins and prognostic control arms"
    what_it_could_unlock: "smaller control arms or single-arm-plus-twin trials via per-patient forecasted outcomes"
    mechanism: "ML models trained on historical trial and RWD forecast each patient's untreated trajectory as a synthetic comparator"
    technology_readiness_level: 6
    translational_gap: "regulator acceptance of synthetic controls is case-by-case, and forecasts inherit historical-data bias"
related_primitives:
  - multimodal-clinical-data-platform
  - biology-foundation-models
  - organ-on-chip
use_cases:
  - dose and regimen selection before first-in-human
  - drug-drug-interaction and special-population predictions for labels
  - trial digital twins and prognostic control arms to cut sample size
  - in-silico trials for ultra-rare diseases with too few patients
technology_readiness_level: 7
evidence_level: clinical_validated
translational_gap: "PBPK is regulatory-mature but QSP and trial digital twins are trusted mostly as supporting evidence, not as replacements for pivotal data, and each new disease needs its own calibrated model"
what_needs_to_happen: "clearer regulatory frameworks for synthetic controls plus mechanistic-plus-ML hybrids that generalise beyond well-characterised drugs"
closest_companies:
  - Certara
  - VeriSIM Life
  - QuantHealth
  - Unlearn
  - FireQSP
closest_labs:
  - academic systems-pharmacology and pharmacometrics groups
commercialisation_status: commercial_early
regulatory_complexity: high
capex_intensity: medium
defensibility: high
notes: "Certara Simcyp PBPK is the mature, regulator-accepted end (TRL 8); Unlearn digital twins and QuantHealth or VeriSIM in-silico trials sit earlier and lean on ML. FDA model-informed drug development guidance is the main tailwind."
scan:
  bucket: commercialising-now
  paper_cagr_pct: 23.0
  mean_fwci: 2.4
  industry_share: 0.333
  patent_total: 349
  patent_cagr_pct: 28.8
  company_share: 0.64
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

Biosimulation replaces some real experiments with computed ones. Physiology-based pharmacokinetic (PBPK) and quantitative systems pharmacology (QSP) models encode absorption, distribution, and disease-pathway biology as systems of differential equations, then run them across virtual patient populations that vary in weight, genetics, and organ function. Trial digital twins add a machine-learning layer: models trained on historical trial and real-world data forecast each enrolled patient's likely untreated trajectory, producing a synthetic comparator alongside the real one.

## What it unlocks

A computational rehearsal for drug development. PBPK is already used to justify dose choices, drug-drug-interaction claims, and pediatric or organ-impairment labelling without running every study. QSP extends this to efficacy and mechanism questions. Digital twins let a sponsor shrink or partly replace a control arm, which matters most in rare disease where recruiting a full comparator group is infeasible. The shared promise is fewer patients, faster readouts, and better-chosen dose, endpoint, and population before capital is committed.

## Translational gap

The honest TRL is 7 because the field is split. PBPK modelling (Certara Simcyp) is regulator-accepted and routinely cited in filings, effectively TRL 8. QSP and ML-based trial digital twins (Unlearn, QuantHealth, VeriSIM Life) are trusted as supporting evidence, not as substitutes for pivotal data, and regulator acceptance of synthetic controls is decided case-by-case. Every new disease needs its own calibrated model, and ML forecasts inherit the biases of the historical data they learn from. The unlock is a clearer regulatory path for synthetic controls plus mechanistic-plus-ML hybrids that generalise past well-characterised drugs.

## Notes

Distinct from `organ-on-chip`, which generates the wet-lab data that can parameterise these models: biosimulation is the in-silico layer, organ-on-chip is a physical validation source. FDA model-informed drug development guidance is the regulatory tailwind pulling the whole primitive forward.
