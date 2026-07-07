---
id: basecamp-research
name: Basecamp Research
website: basecamp-research.com
founded: 2019
area: biological foundation models
funding_stage: series-b
total_funding_usd_m: 85
public: false
business_model: partnerships
buyer:
  - pharma
  - biotech
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 100000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
  - licensed
moat:
  - data
  - model
  - IP
  - regulatory-trust
primary_value_chain_layer: discovery
input:
  - proprietary biodiversity DNA and protein sequences (BaseData)
  - environmental sampling from 150+ global sites
  - knowledge graph relationships (BaseGraph)
transformation_type: generate
output:
  - biological foundation models (EDEN family)
  - AI-designed gene editors and enzymes
  - antimicrobial and vaccine design candidates
barrier_to_entry: very-high
barrier_to_entry_logic: BaseData is collected under benefit-sharing agreements across 28 countries and claimed >10x larger than all public sequence resources combined, a physical-sampling and legal moat that money alone cannot shortcut.
hardness: very-hard
hardness_reason: Converting a novel biodiversity dataset into validated therapeutics and editors is unproven at clinical scale, and the sequence-count claims are company-reported, not independently audited.
substrate_family: C
substrate_tags:
- C.1
- A.1
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "Foundation models trained on a proprietary global biodiversity dataset over 10x larger than public sequence resources, powering AI gene editors and enzyme design."
technology_readiness_level: 5
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "Company-reported data and species counts are not independently audited, and it owns no clinical-stage program."
last_verified: "2026-07-07"
---

## One-liner

Builds biological foundation models trained on a proprietary global biodiversity dataset, giving a data moat over public protein databases.

## Problem

Protein and biology foundation models are trained on public databases (UniProt-class, under ~250M sequences) that are small, redundant, and biased toward well-studied organisms, capping what models can learn and design.

## Workaround

Training on public sequence databases (UniProt, GenBank), metagenomic mining of existing datasets, and directed evolution on known enzymes.

## Entry wedge

Went to the field: sampled biodiversity across 150+ sites in 28 countries under benefit-sharing agreements to build BaseData, a proprietary dataset claimed >10x larger than all public resources combined, then trained the EDEN foundation-model family on it with NVIDIA compute.

## Method

BaseData holds over 10 trillion tokens of evolutionary DNA and ~9.8B new protein sequences from over 1M newly identified species, linked in the BaseGraph knowledge graph. The EDEN model family (trained on 1,008 Hopper GPUs via NVIDIA BioNeMo) powers AI programmable gene insertion (aiPGI), antimicrobial peptide design, and vaccine design. Earlier BaseFold claimed to beat AlphaFold 2 on large structures.

## TAM logic

Positions BaseData and EDEN as an enabling data-and-model layer under drug discovery, gene editing, enzymes, and vaccines. Value is captured via data-and-model licensing and partnerships rather than an owned clinical pipeline, addressing the discovery-tools and biologics-design markets.

## Validated by

Series B $60M (Oct 2024, led by Singular, with S32, redalpine, Andre Hoffmann, Paul Polman, True Ventures). Series A $20M (SYSTEMIQ, Valo Health). Pre-Series C round with NVIDIA NVentures reported Jan 2026 (amount undisclosed). Broad Institute (David Liu lab) programmable genetic-medicines collaboration (Oct 2024). EDEN antibiotic and vaccine models integrated into Anthropic's Claude Science (Jun 2026). aiPGI validated at 10,000+ disease sites (Jan 2026). EDEN-designed antimicrobial peptides (~97% hit rate) with UPenn.

## Competes with

Profluent, EvolutionaryScale, Generate Biomedicines, and other biological foundation-model builders; on data, it competes with public consortia and metagenomics efforts.

## Complements

NVIDIA (compute and co-developed models), Anthropic (Claude Science), Broad Institute and pharma partners that turn designs into medicines, and sequencing partners PacBio and Ultima Genomics on the Trillion Gene Atlas.

## Value chain position

**Downstream of:** Environmental biodiversity sampling, sequencing, and knowledge-graph construction.
**Upstream of:** Gene-editor and therapeutic design, preclinical development, and clinical work at partners.

## Gaps

Platform/data company with no clinical-stage program; therapeutic value depends on partners. BaseData sequence and species counts are company-reported, not independently audited. Latest funding round size and valuation are undisclosed (a $5B figure is a secondary-market estimate only).

## Notes

Founded 2019 by Glen Gowers and Oliver Vince (met at Oxford); London. Core asset is BaseData, gathered under ethical benefit-sharing agreements with source countries, which also underpins the regulatory-trust moat. Trillion Gene Atlas aims to scale BaseData ~100x toward >100M species over roughly two years.

## News signals
- 2026-06: Basecamp brought EDEN's antibiotic and vaccine design models to Anthropic's Claude Science. (source: https://www.prnewswire.com/news-releases/basecamp-research-brings-edens-antibiotic-and-vaccine-design-models-to-claude-science-302814440.html)
- 2024-10: Basecamp raised a $60M Series B led by Singular to expand its biodiversity data moat and foundation models. (source: https://www.genengnews.com/topics/artificial-intelligence/basecamp-research-achieves-programmable-gene-insertion-with-eden-ai-models/)
