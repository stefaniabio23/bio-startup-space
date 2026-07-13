---
id: dyno-therapeutics
name: Dyno Therapeutics
website: dynotx.com
founded: 2018
area: ai gene therapy vector design
funding_stage: series-a
total_funding_usd_m: 112
public: false
business_model: platform_partnership
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 50000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - model
  - IP
primary_value_chain_layer: gene-therapy vector discovery and optimization
input:
  - target tissue and delivery requirements
  - AAV capsid sequence space
  - high-throughput in vivo capsid fitness measurements
transformation_type: generate
output:
  - novel AAV capsid designs with improved tropism and manufacturability
  - capsid variants with reduced immunogenicity
  - licensed gene-delivery vectors for partner pipelines
barrier_to_entry: high
barrier_to_entry_logic: CapsidMap pairs ML capsid design with proprietary high-throughput in vivo fitness data across many properties at once, a paired data-plus-model asset that is slow and costly for a competitor to build.
hardness: very-hard
hardness_reason: Designing capsids that simultaneously hit tropism, manufacturability, and low immunogenicity, and translate from animal models to human gene therapy, remains hard and largely partner-dependent to prove.
substrate_family: C
substrate_tags:
  - C.1
  - C.2
technology_platform_ids:
  - protein-design-diffusion-models
  - biology-foundation-models
technology_platform_name: "CapsidMap (ML-guided AAV capsid design plus high-throughput in vivo measurement)"
new_capability: "Maps the AAV capsid fitness landscape with high-throughput in vivo data and ML, designing novel capsids optimised jointly for tropism, manufacturability, and immune evasion."
technology_readiness_level: 6
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "Designed capsids are advancing through partner pipelines but none has yet delivered an approved gene therapy, so human validation is pending."
last_verified: "2026-07-13"
---

## One-liner

AI gene-therapy company whose CapsidMap platform designs novel AAV capsids with better tissue targeting, manufacturability, and immune evasion, licensed to pharma partners.

## Problem

Natural AAV capsids used for gene-therapy delivery have poor tissue specificity, provoke pre-existing immunity, and are hard to manufacture, so many gene therapies are limited by the vector rather than the payload.

## Workaround

Directed evolution and rational mutagenesis of a handful of natural serotypes (AAV2, AAV9 and relatives), screened a few properties at a time, plus immunosuppression to manage anti-capsid immunity.

## Entry wedge

Built CapsidMap, which uses high-throughput in vivo experimentation to measure how millions of capsid variants perform across many properties, then trains ML models on that data to design new capsids. Converted the capability into upfront-and-milestone partnerships with major gene-therapy developers before broad public launch.

## Method

CapsidMap treats capsid engineering as a design problem over the capsid protein sequence. Synthetic capsid libraries are measured in vivo for tropism, biodistribution, manufacturability, and immunogenicity simultaneously; ML models learn the fitness landscape from that proprietary data and propose novel capsids optimised across those objectives at once. Designed capsids are then licensed into partner gene-therapy programs.

## Validated by

$100M Series A (May 2021) led by Andreessen Horowitz, with Casdin Capital, GV, Obvious Ventures, and Lux Capital, plus ~$9M earlier seed funding. Partnerships with Novartis (ocular, 2020), Sarepta, Roche, Spark Therapeutics, and Astellas (muscle, 2021, $18M upfront and up to ~$1.6bn milestones); an expanded Roche CNS deal in October 2024 with $50M upfront. Wyss Institute origins tracing to George Church's lab.

## Competes with

4D Molecular Therapeutics (directed-evolution capsids), Capsida Biotherapeutics, Affinia Therapeutics, and other engineered-AAV-capsid platforms, plus internal capsid-engineering groups at large gene-therapy players. On the design method, generative protein-design platforms extending into capsids.

## Complements

Pharma and biotech gene-therapy developers that supply payloads and run clinical programs, CDMOs for AAV manufacturing, and upstream target and disease-biology sources.

## Value chain position

**Downstream of:** Target and tissue selection, gene-therapy payload design, structural and sequence data on natural AAV serotypes.
**Upstream of:** Gene-therapy payload packaging, IND-enabling studies, and clinical development at licensing partners.

## Gaps

No Dyno-designed capsid has yet carried an approved gene therapy to market; value is realised through partners, so timelines and outcomes are partly outside Dyno's control. Capsid fitness data and model performance are proprietary and not independently benchmarked. Total disclosed equity (~$112M) is modest relative to the multi-billion-dollar milestone potential across deals.

## Notes

Founded 2018 (public launch 2020) in Cambridge, MA; Wyss Institute / Church-lab origins. Total equity ~$112M (~$9M seed + $100M Series A + a small 2024 seed extension); large partnership upfronts (Astellas $18M, Roche $50M) are collaboration revenue, not equity, so they are excluded from total_funding_usd_m. substrate_tags cover generative sequence design (C.1) and the modelled capsid-tissue interaction (C.2). Linked to protein-design-diffusion-models (the capsid is a protein designed against a functional objective) and biology-foundation-models (sequence-to-fitness learning over the capsid landscape). TAM is a best-effort placeholder for the AAV gene-delivery market.

## News signals
- 2024-10: Dyno and Roche agreed to a new and expanded CNS gene-therapy partnership, with Dyno receiving a $50M upfront payment. (source: https://www.biopharminternational.com/view/astellas-licenses-dyno-therapeutics-ai-designed-aav-capsid-advancing-gene-delivery-for-muscle-disorders)
- 2021-05: Dyno Therapeutics closed a $100M Series A led by Andreessen Horowitz to accelerate its AI-powered gene therapy platform. (source: https://www.businesswire.com/news/home/20210506005373/en/Dyno-Therapeutics-Closes-$100-Million-Series-A-Financing-Led-by-Andreessen-Horowitz-to-Accelerate-AIpowered-Gene-Therapy-Platform)
