---
id: profluent
name: Profluent
website: profluent.bio
founded: 2022
area: generative biology
funding_stage: series-b
total_funding_usd_m: 150
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 200000
data_centrality: core-moat
data_ownership:
  - proprietary
  - public
  - generated-in-house
moat:
  - model
  - data
  - IP
  - founder-brand
primary_value_chain_layer: discovery
input:
  - protein sequence and function data (115B+ protein corpus)
  - target editing and function specifications
  - structural and activity constraints
transformation_type: generate
output:
  - de novo functional proteins
  - AI-designed gene editors and recombinases
  - enzymes and protein therapeutics
barrier_to_entry: high
barrier_to_entry_logic: The ProGen model lineage, a proprietary 115B-protein corpus, and demonstrated protein-design scaling laws are a compounding data-and-model moat that a $2.25bn Lilly deal now underwrites.
hardness: very-hard
hardness_reason: Designing functional gene editors and therapeutics from scratch is hard, and Profluent's stated goal of dosing the first patient with an AI-designed therapeutic has not yet been reached.
substrate_family: C
substrate_tags:
- C.1
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "ProGen3 protein language models trained on a 115B-protein corpus design de novo functional proteins and gene editors, including the open-source OpenCRISPR-1 editor."
technology_readiness_level: 5
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "Preclinical only; no disclosed Phase 1+ program despite the goal of dosing the first patient."
last_verified: "2026-07-07"
---

## One-liner

Generative biology company building frontier AI models that design functional proteins and gene editors, including the open-source OpenCRISPR editor.

## Problem

Editing the genome and engineering proteins is constrained by the natural repertoire of enzymes and editors, which are often suboptimal, patent-encumbered, or unavailable for a given target.

## Workaround

Screening and engineering natural CRISPR systems, directed evolution of enzymes, and rational protein engineering on known scaffolds.

## Entry wedge

Released OpenCRISPR-1 in Apr 2024, the world's first AI-created, open-source gene editor (Cas9-like, 400+ mutations from SpCas9 with comparable activity), proving its ProGen models could design functional biology and building a developer and pharma audience before large partnerships.

## Method

The ProGen lineage (ProGen, now ProGen3) are protein language models trained on a proprietary corpus of 115B+ proteins, with demonstrated protein-design scaling laws. The models generate de novo functional proteins, gene editors, and recombinases; wet-lab validation and tools like Protein2PAM refine outputs.

## TAM logic

Targets the genetic-medicine and protein-engineering markets. Programmable editors that can insert kilobase-scale sequences unlock large classes of previously untreatable genetic disease, plus enzyme and biologics markets. The Lilly deal (up to $2.25bn) anchors the willingness to pay.

## Validated by

$106M round announced Nov 2025 (co-led by Altimeter Capital and Bezos Expeditions, with Spark Capital and Insight Partners), bringing total to $150M. Eli Lilly partnership announced Apr 2026 for AI-designed recombinase editors, up to $2.25bn in milestones plus royalties. Rett Syndrome Research Trust collaboration (single-AAV MECP2 editors). Commercial partners Revvity, Corteva, and IDT. OpenCRISPR-1 open-source release (2024). ProGen work published in Nature Biotechnology (2023).

## Competes with

Profluent competes with Basecamp Research and other gene-editor design efforts, EvolutionaryScale and Generate Biomedicines on protein design, and natural-CRISPR platforms such as Mammoth and Arbor.

## Complements

Pharma partners that develop editors into therapeutics (Lilly), AAV and delivery companies, enzyme and agriculture partners, and the open-source research community using OpenCRISPR.

## Value chain position

**Downstream of:** Protein sequence databases, structural biology, target and disease biology.
**Upstream of:** Preclinical development, delivery and manufacturing, and clinical trials at partners.

## Gaps

Preclinical/research-stage; no disclosed Phase 1+ program despite the ambition to dose the first patient with an AI-designed therapeutic. Reported valuation ("approaching $1B") is a secondary source, not officially disclosed; round letter is unconfirmed.

## Notes

Founded 2022 by Ali Madani (CEO, ProGen architect at Salesforce AI) and Alexander Meeske (CSO); Berkeley, CA. OpenCRISPR distributed under a license that permits ethical research and commercial use but excludes human germline editing. The $106M is the round size, not a valuation.

## News signals
- 2026-04: Eli Lilly and Profluent signed a pact worth up to $2.25bn to develop AI-designed recombinase gene editors. (source: https://www.biospace.com/deals/lilly-ai-biotech-profluent-ink-2-25b-pact-in-search-of-genetic-medicine-holy-grail)
- 2025-11: Profluent raised $106M, backed by Jeff Bezos and Altimeter, to scale frontier AI models for programmable biology. (source: https://www.businesswire.com/news/home/20251119356889/en/Profluent-Raises-$106M-to-Scale-Frontier-AI-Models-for-Programmable-Biology)
