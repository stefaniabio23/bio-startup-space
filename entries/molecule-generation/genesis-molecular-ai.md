---
id: genesis-molecular-ai
name: Genesis Molecular AI
website: genesistherapeutics.ai
founded: 2019
area: ai drug discovery
funding_stage: series-b
total_funding_usd_m: 340
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 250000
data_centrality: important-enabler
data_ownership:
  - proprietary
  - partner-supplied
  - public
moat:
  - model
  - IP
  - founder-brand
primary_value_chain_layer: discovery
input:
  - protein target structures and sequences
  - partner-supplied experimental assay data
  - molecular property constraints
transformation_type: generate
output:
  - optimised small-molecule candidates
  - protein-ligand interaction predictions
  - multi-parameter property predictions
barrier_to_entry: high
barrier_to_entry_logic: The GEMS platform pairs generative models with physics-based simulation and multiple large pharma validations (Incyte, Gilead, Lilly), a combination of technical depth and commercial proof hard to assemble from scratch.
hardness: very-hard
hardness_reason: Generating and optimising drug-like molecules for undruggable targets is hard, and no internal candidate has yet been confirmed in the clinic to prove the platform end to end.
substrate_family: C
substrate_tags:
- C.1
- C.2
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "GEMS platform couples generative models with physics-aware simulation of protein-ligand interactions to design small molecules for hard-to-drug targets."
technology_readiness_level: 5
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "No internal candidate confirmed in the clinic; physics-based simulation is compute-intensive."
last_verified: "2026-07-07"
---

## One-liner

Molecular AI company whose GEMS platform combines generative models with physics-aware simulation to design small molecules for hard-to-drug targets.

## Problem

Many disease-relevant protein targets are considered undruggable, and finding potent, selective, drug-like small molecules against them by empirical screening is slow and low-yield.

## Workaround

High-throughput screening, structure-based design, medicinal chemistry iteration, and physics-based free-energy perturbation on individual candidates.

## Entry wedge

Spun out of Stanford in 2019 with a graph neural network approach to molecular property prediction, then packaged it into the GEMS platform and won multi-target pharma collaborations (Genentech, Lilly, Gilead, Incyte) that fund the science while it builds internal programs.

## Method

GEMS (Genesis Exploration of Molecular Space) couples generative AI (language and diffusion models) with physics-aware machine learning that simulates protein-ligand interactions and molecular properties. It runs multi-parameter optimisation to generate candidates against difficult targets and folds partners' proprietary experimental data back in to sharpen predictions.

## TAM logic

Targets the global small-molecule pharma R&D market (~$250B annual R&D spend, with small molecules the dominant class). Deal structures show pharma willingness to pay: the expanded Incyte deal alone brought $120M upfront and cross-billion milestone potential.

## Validated by

Incyte expanded collaboration announced May 2026: $120M upfront ($80M cash + $40M equity) plus recurring research funding, at least 5 targets, up to $232M milestones per target and total potential exceeding $1bn. Gilead collaboration (2024, $35M upfront, 3 targets). Eli Lilly collaboration (2022, up to ~$670M). Genentech (2020). $200M Series B (Aug 2023, co-led by a16z, with Fidelity, BlackRock, NVIDIA NVentures). Total funding ~$340M.

## Competes with

Iambic Therapeutics, Terray Therapeutics, Schrodinger, Isomorphic Labs, Insilico Medicine, and other generative small-molecule discovery platforms.

## Complements

Pharma partners that supply targets and experimental data, CROs for synthesis and assays, CDMOs for manufacturing, and target-discovery companies upstream.

## Value chain position

**Downstream of:** Target identification, disease biology, structural biology databases.
**Upstream of:** Preclinical development, IND-enabling studies, clinical trials at pharma partners.

## Gaps

No internal candidate publicly confirmed in the clinic, so the platform's end-to-end value remains partner-validated rather than clinically proven on owned assets. Physics-based simulation is compute-intensive.

## Notes

Founded 2019 by Evan Feinberg (CEO) and Vijay Pande (a16z); San Francisco Bay Area. Now brands as Genesis Molecular AI (formerly Genesis Therapeutics). Original Incyte deal (2025) was $30M upfront and 2 targets; the 2026 expansion widened it materially. Total ~$340M includes the $40M Incyte equity investment.

## News signals
- 2026-05: Incyte and Genesis expanded their molecular AI collaboration with $120M upfront and cross-billion milestone potential across at least 5 targets. (source: https://www.businesswire.com/news/home/20260520680248/en/Incyte-and-Genesis-Expand-Molecular-AI-Collaboration-to-Accelerate-Drug-Discovery)
- 2024: Gilead and Genesis announced a strategic small-molecule discovery collaboration with $35M upfront across 3 initial targets. (source: https://www.gilead.com/news/news-details/2024/gilead-and-genesis-therapeutics-announce-strategic-collaboration-to-discover-and-develop-novel-therapies)
