---
id: verisim-life
name: VeriSIM Life
website: verisimlife.com
founded: 2017
area: biosimulation
funding_stage: series-a
total_funding_usd_m: 21.4
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 9000
data_centrality: core-moat
data_ownership:
  - proprietary
  - public
  - licensed
moat:
  - model
  - data
  - regulatory-trust
  - IP
primary_value_chain_layer: preclinical-to-clinical translational prediction
input:
  - "drug candidate physicochemical and structural properties"
  - "in vitro assay and preclinical pharmacology data"
  - "public pharmacokinetic, toxicology and mechanistic biology datasets"
  - "target and pathway information"
transformation_type: predict
output:
  - "predicted human PK, efficacy and toxicity before clinical trials"
  - "cross-species translational forecasts (in vitro to animal to human)"
  - "drug-induced liver injury and safety risk scores"
  - "candidate ranking and go/no-go prioritization"
barrier_to_entry: high
barrier_to_entry_logic: BIOiSIM combines mechanistic quantitative models with ML trained on years of curated cross-species datasets, and an FDA/NCTR research collaboration confers regulatory credibility a new entrant cannot shortcut.
hardness: very-hard
hardness_reason: Predicting human outcomes from preclinical data accurately enough that sponsors trust it to kill or advance a candidate, where preclinical-to-clinical translational failure is the dominant cause of attrition.
substrate_family: C
substrate_tags:
- C.3
technology_platform_ids:
  - biosimulation-qsp
new_capability: "Hybrid mechanistic-AI whole-body simulation predicting human PK, efficacy and toxicity from preclinical data to cut translational failure."
technology_readiness_level: 7
commercialisation_status: commercial_early
customer:
  - pharma
  - biotech
limiting_factor: "Predictive fidelity depends on preclinical data coverage, and in-silico regulatory acceptance is still emerging."
last_verified: "2026-07-07"
---

## One-liner

AI biosimulation platform (BIOiSIM) that predicts human drug outcomes from preclinical data to cut translational failure and reduce reliance on animal testing.

## Problem

Most drug candidates fail in the clinic because preclinical models (cells, animals) translate poorly to humans, and sponsors commit to expensive trials without reliable human predictions.

## Workaround

Animal studies, allometric scaling, traditional PBPK modeling, in vitro assays, expert judgment, and iterative wet-lab experimentation.

## Entry wedge

Whole-body biosimulation that predicts human PK and efficacy before human trials, positioned against animal testing at a moment when the FDA is signaling openness to alternative methods.

## Method

BIOiSIM is a hybrid mechanistic-AI engine that fuses physiologically grounded quantitative models with machine learning into a unified translational framework spanning discovery, preclinical development, clinical optimization, and regulatory support. It ingests molecular and preclinical data and simulates whole-body drug behavior across species to forecast human outcomes.

## TAM logic

The biosimulation market is growing at roughly 17% CAGR toward the high single-digit billions by the early 2030s. VeriSIM positions against wasted preclinical and early clinical spend: reducing translational failure and animal studies compounds value across every program a sponsor runs.

## Validated by

Material Transfer Agreement with the FDA's National Center for Toxicological Research (FDA/NCTR) formalized June 2026, building on a 2025 co-authored peer-reviewed publication showing BIOiSIM predicting drug-induced liver injury. Prior NSF and NIH grants funded COVID-19 repurposing and substance-use-disorder drug development work.

## Competes with

Certara (biosimulation, PBPK, QSP), Simulations Plus (GastroPlus, ADMET Predictor), Aganita and other in-silico ADMET/PK vendors, plus internal pharma modeling groups.

## Complements

Wet-lab CROs generating the assay data BIOiSIM consumes, medicinal chemistry and target-ID platforms upstream, and clinical trial design tools downstream.

## Value chain position

**Downstream of:** Molecule design, target identification, in vitro and preclinical assay generation
**Upstream of:** IND-enabling studies, first-in-human dose selection, clinical trial design, regulatory submission

## Gaps

Predictive fidelity depends on the quality and coverage of preclinical and public data for a given target class; novel mechanisms with sparse data are harder. Regulatory acceptance of in-silico predictions as trial-replacing evidence is still emerging, not settled. Funding scale ($21.4M) is far below incumbent Certara.

## Notes

San Francisco based, founded by Jyotika Varshney (CEO) and Zack Jones. Raised ~$21.4M over six rounds from investors including OCA Ventures, Serra Ventures, and Morpheus Ventures, plus non-dilutive federal grants. Positioned to benefit directly from the FDA Modernization Act's opening toward non-animal methods.

## News signals
- 2026-06: Formalized a research collaboration with FDA/NCTR via a Material Transfer Agreement to advance mechanistic AI for drug development. (source: https://sg.finance.yahoo.com/news/verisim-life-formalizes-research-collaboration-221700227.html)
- 2021-03: Secured a federal grant to build a drug combinatorial platform against COVID-19. (source: https://www.businesswire.com/news/home/20210302005377/en/VeriSIM-Life-Secures-a-Federal-Grant-to-Create-a-Drug-Combinatorial-Platform-Against-COVID-19)
