---
id: atomic-ai
name: Atomic AI
website: atomic.ai
founded: 2021
area: ai lnp design
substrate_family: C
substrate_tags:
  - C.2
technology_platform_ids:
  - ai-lnp-design
technology_platform_name: PARSE 3D RNA-structure discovery engine and ATOM-1 RNA foundation model
funding_stage: series-a
total_funding_usd_m: 42
public: false
business_model: platform_to_pipeline_hybrid
buyer:
  - pharma
  - biotech
customer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 20000
new_capability: Deep learning that predicts 3D RNA structure from sequence and chemical-mapping data to enable RNA-targeted and RNA-based drug design.
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - model
primary_value_chain_layer: computational RNA structure prediction for drug discovery
input:
  - RNA sequences
  - chemical-mapping measurements
  - structural biology datasets
transformation_type: predict
output:
  - predicted 3D RNA structures
  - RNA-targeted small-molecule leads
  - RNA structure and function annotations
technology_readiness_level: 5
limiting_factor: RNA 3D structure prediction is harder than protein folding, and no confirmed pharma partnership or clinical candidate has been disclosed publicly.
commercialisation_status: preclinical
barrier_to_entry: high
barrier_to_entry_logic: A proprietary chemical-mapping dataset (>1 billion nucleotide-level measurements) plus the ATOM-1 foundation model is a differentiated data-and-model moat in a scarce-data domain.
hardness: very-hard
hardness_reason: Predicting RNA tertiary structure and dynamics is a hard, data-starved problem, and translating structure to druggable pockets adds further risk.
last_verified: "2026-07-06"
---

## One-liner

Fuses deep learning with RNA structural biology to predict 3D RNA structure, powering RNA-targeted small molecules and RNA-based medicines against traditionally undruggable targets.

## Problem

RNA drives disease but is hard to drug: its 3D structure is dynamic and poorly predicted, so finding pockets for small molecules or designing functional RNA is largely guesswork.

## Workaround

Slow experimental structure determination (crystallography, cryo-EM, SHAPE), protein-centric design tools that do not transfer to RNA, and empirical screening against RNA targets.

## Entry wedge

3D RNA structure prediction. Atomic AI's PARSE engine and ATOM-1 foundation model, trained on proprietary chemical-mapping data, predict RNA structure and function to seed an internal RNA-targeted small-molecule pipeline and platform partnerships.

## Method

PARSE (Platform for AI-driven RNA Structure Exploration) predicts 3D RNA structure for drug discovery, and ATOM-1 is an RNA foundation model trained on millions of sequences and over one billion nucleotide-level chemical-mapping measurements. The approach extends founder Raphael Townshend's Stanford ARES RNA-structure work (published in Science). Based in South San Francisco.

## Validated by

$42M raised ($7M seed plus $35M Series A, launched January 2023) from Playground Global (lead), AME Cloud Ventures, Factory, Not Boring Capital, Modi Ventures, and angel Nat Friedman. ATOM-1 preprint on bioRxiv (December 2023). Founder's ARES method published in Science. Founder named to Forbes 30 Under 30 Science.

## Competes with

Mana.bio and Aganitha AI (LNP-side AI), InstaDeep / BioNTech, other RNA-structure and RNA-therapeutics groups, and internal RNA-targeting teams at Arrakis and Ribometrix.

## Complements

mRNA sequence designers (Raina Biosciences, Kerna Labs), LNP delivery and manufacturing partners, and RNA-therapeutic developers needing structural insight.

## Value chain position

**Downstream of:** RNA chemical-mapping experiments, structural biology datasets, ML infrastructure
**Upstream of:** RNA-targeted small-molecule and RNA-therapeutic pipelines, medicinal chemistry, clinical development

## Gaps

No confirmed pharma partnership, new funding round, or clinical candidate disclosed since 2023. Public evidence of PARSE performance on independent RNA targets is limited.

## Notes

Substrate tag C.2 (molecular interaction) reflects the RNA-structure-prediction focus versus the generative C.1 tag used for the sequence-design peers. Linked to ai-lnp-design as the closest primitive per the map, though Atomic AI's core is RNA structure rather than lipid formulation. Total funding set to the ~$42M disclosed through Series A.

## News signals
- 2023-12: Announced ATOM-1, described as a foundation model for RNA structure and function built on chemical-mapping data. (source: https://www.biorxiv.org/content/10.1101/2023.12.13.571579v1)
- 2023-01: Launched from stealth with a $35M Series A to advance its AI-driven RNA structure platform. (source: https://www.biospace.com/article/releases/atomic-ai-launches-with-35-million-series-a-financing-to-advance-ai-driven-rna-structure-platform-for-treating-undruggable-diseases/)
