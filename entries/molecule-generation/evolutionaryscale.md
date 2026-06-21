---
id: evolutionaryscale
name: EvolutionaryScale
website: evolutionaryscale.ai
founded: 2023
area: protein foundation models
funding_stage: series-a
total_funding_usd_m: 142
public: false
business_model: partnerships
buyer:
  - pharma
  - biotech
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: light
tam_usd_m: 24260
data_centrality: core-moat
data_ownership:
  - public
  - proprietary
  - generated-in-house
moat:
  - model
  - founder-brand
  - data
  - IP
primary_value_chain_layer: discovery
input:
  - protein sequences
  - protein structures
  - protein function annotations
transformation_type: generate
output:
  - novel protein sequences conditioned on structure or function
  - protein structure predictions
  - protein design tooling via API
barrier_to_entry: very-high
barrier_to_entry_logic: ESM3 required years of pretraining on 100M+ protein sequences at Meta AI scale; founders (Rives, Hayes, Lin) are among the handful who built the original ESM models at FAIR.
hardness: very-hard
hardness_reason: Translating protein language model embeddings into commercially valuable protein designs with confirmed wet-lab activity across diverse target classes and therapeutic modalities.
last_verified: "2026-06-21"
---

## One-liner

Biology foundation-model company behind ESM3, building AI tools for protein design, synthetic biology, and scientific discovery.

## Problem

Most biotech and pharma teams cannot build or use frontier protein foundation models; biology lacks the equivalent of GPT-4 as accessible infrastructure.

## Workaround

Academic tools (RFdiffusion, ProteinMPNN), internal computational biology teams, CRO protein-engineering services, manual directed evolution.

## Entry wedge

ESM3 (2024): a multimodal protein language model conditioning jointly on sequence, structure, and function — released with a research licence and API access. The paper demonstrated generation of a novel fluorescent protein (esmGFP) with sequence identity far below any known fluorescent protein, establishing a benchmark result for the field.

## Method

ESM3 jointly models protein sequence, structure, and function using a masked generative transformer trained on evolutionary-scale protein data; generation is conditioned on any combination of modalities, enabling structure-guided, function-guided, or prompt-guided protein design.

## TAM logic

Positions as infrastructure for the protein therapeutics and synthetic biology market. API and partnership revenue model targets pharma and biotech teams running protein engineering programs. No explicit TAM stated; market framing is the biologics discovery segment (~$24B). (Source: evolutionaryscale.ai)

## Validated by

$142M Series A led by Nat Friedman and Daniel Gross with participation from Lux Capital and others (2024). ESM3 paper published with peer review (Nature, 2024). API deployed with pharma and research partners.

## Competes with

Latent Labs (antibody/binder design), Chai Discovery (structure prediction + antibody design), Isomorphic Labs (biologics generation), ProteinMPNN/RFdiffusion-based academic tools.

## Complements

Latent Labs uses ESM-family models for consistency checking; CROs for wet-lab validation; target ID companies upstream; Cradle (uses protein LM representations for engineering).

## Value chain position

**Downstream of:** Evolutionary protein sequence databases (UniRef, UniProt), structural databases (PDB), target identification
**Upstream of:** Protein engineering campaigns, antibody discovery, synthetic biology applications, drug development

## Gaps

API access model means EvolutionaryScale does not own therapeutic programs; commercial upside depends on partner success rather than direct asset ownership.

## Notes

Spun out of Meta AI (FAIR) by the team that built ESM1, ESM2, and ESMFold. Thomas Hayes (CEO) led ESM development at Meta. The ESM model family has been the most widely adopted protein language model in academic and industry research.
