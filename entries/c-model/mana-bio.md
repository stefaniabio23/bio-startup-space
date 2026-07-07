---
id: mana-bio
name: Mana.bio
website: mana.bio
founded: 2021
area: ai lnp design
substrate_family: C
substrate_tags:
  - C.1
technology_platform_ids:
  - ai-lnp-design
technology_platform_name: AI ionizable-lipid and LNP-property design via a Learn-Design-Make-Generate loop
funding_stage: seed
total_funding_usd_m: 19.5
public: false
business_model: platform_partnership
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
tam_usd_m: 15000
new_capability: In-silico design of novel ionizable lipids and predicted LNP traits for extrahepatic targeting, replacing trial-and-error formulation chemistry.
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - model
primary_value_chain_layer: computational LNP formulation design for RNA delivery
input:
  - target tissue and cell profiles
  - ionizable-lipid chemical libraries
  - mRNA payload specifications
  - high-throughput formulation screening data
transformation_type: generate
output:
  - novel ionizable-lipid designs
  - optimized LNP formulations
  - predicted tissue tropism and tolerability
technology_readiness_level: 5
limiting_factor: AI-designed LNPs still require wet-lab and in-vivo confirmation; no AI-designed LNP has reached the clinic and models generalize poorly across cell types and species.
commercialisation_status: pilot_deployment
barrier_to_entry: high
barrier_to_entry_logic: The proprietary screening corpus (>45,000 data points across 4,300+ formulations) is expensive to reproduce, and each Design-Build-Test-Learn cycle compounds the data moat.
hardness: very-hard
hardness_reason: Predicting LNP tissue tropism in vivo from lipid chemistry is a hard structure-property problem with weak in-vitro-to-in-vivo and cross-species translation.
last_verified: "2026-07-06"
---

## One-liner

AI platform that designs novel ionizable lipids and predicts LNP properties in silico to deliver RNA to extrahepatic tissues, built on a closed Design-Build-Test-Learn loop.

## Problem

Lipid nanoparticles default to the liver, so most RNA medicines cannot reach lungs, spleen, or other target organs. Finding formulations that target those tissues is done by slow, expensive trial-and-error screening of lipid libraries.

## Workaround

Empirical high-throughput screening of large ionizable-lipid libraries, SORT-style physical tuning of charge, and reuse of a handful of known clinical lipids, all of which are slow, costly, and biased toward liver delivery.

## Entry wedge

Extrahepatic targeting. Mana.bio uses AI to design unpatented novel ionizable lipids aimed at organs beyond the liver (demonstrated lung and spleen delivery in mice), positioning as a delivery partner for RNA and gene-therapy developers blocked by the liver-targeting default.

## Method

A Learn-Design-Make-Generate loop couples ML models that predict LNP physicochemical properties, cell and tissue targeting, and tolerability to high-throughput synthesis (dozens of formulations per week) and automated in-vitro and in-vivo screening, feeding results back weekly. Generative and evolutionary methods propose new ionizable lipids. Founders include CEO Yogev Debbi, AI co-founder Kira Radinsky, and LNP co-founder Avi Schroeder (MIT Langer Lab).

## Validated by

Reports >45,000 experimental data points across 120+ DBTL cycles and 4,300+ formulations. Demonstrated in-vivo extrahepatic delivery in mice with roughly 100x improved lung expression after AI iteration, and retrospectively predicted approved LNP designs. Published AI-designed LNPs for pulmonary gene therapy (Nature Biotechnology 2024). $19.5M oversubscribed seed (2023) backed by a16z Bio + Health, NFX, LionBird, Base4 Capital, and Technion.

## Competes with

Aganitha AI (computational LNP design services), Atomic AI and other RNA-structure AI groups, InstaDeep / BioNTech, and internal formulation teams at Moderna, Acuitas, and Genevant.

## Complements

mRNA payload designers (Kerna Labs, Raina Biosciences), microfluidic LNP manufacturers (Precision NanoSystems / Cytiva), and RNA and gene-therapy developers needing tissue-selective delivery.

## Value chain position

**Downstream of:** ionizable-lipid chemistry, high-throughput formulation and in-vivo screening, target-tissue biology
**Upstream of:** RNA and gene-therapy developers, LNP manufacturing and fill-finish, clinical development

## Gaps

No AI-designed Mana lipid has entered the clinic; independent third-party validation of the >45k data-point claim is limited; the split between own pipeline and partner licensing is not clearly disclosed. Cross-species translation of predicted tropism remains unproven at clinical scale.

## Notes

Tel Aviv-based. Total funding set to the disclosed $19.5M seed (an earlier ~$5M rolled into it). Business model read as partnership-led with a free public tool (Mina, launched 2025), so classed platform_partnership rather than owned_pipeline. The >45k data-point figure is the central differentiator and appears in company and Crunchbase materials.

## News signals
- 2025-09: Launched Mina, an LLM-powered AI agent for LNP design, free to scientists. (source: https://www.prnewswire.com/news-releases/manabio-unveils-minathe-worlds-first-large-language-model-powered-ai-agent-for-lipid-nanoparticles-302558304.html)
- 2023-10: Raised a $19.5M oversubscribed seed round led by a16z Bio + Health and NFX. (source: https://www.calcalistech.com/ctechnews/article/rjkyo2hzt)
