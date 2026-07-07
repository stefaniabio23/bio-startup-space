---
id: iambic-therapeutics
name: Iambic Therapeutics
website: iambic.ai
founded: 2020
area: ai drug discovery
funding_stage: series-c
total_funding_usd_m: 320
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
data_centrality: core-moat
data_ownership:
  - generated-in-house
  - proprietary
  - public
moat:
  - model
  - wet-lab
  - clinical-evidence
  - IP
primary_value_chain_layer: discovery
input:
  - protein target sequences and structures
  - protein-ligand complex data
  - preclinical and clinical assay readouts
transformation_type: generate
output:
  - small-molecule drug candidates
  - protein-ligand binding structure predictions
  - preclinical and clinical property predictions
barrier_to_entry: high
barrier_to_entry_logic: Combining generative chemistry, an automated wet lab, and a clinical-stage oncology pipeline in one loop is capital and talent intensive; the $1.7bn Takeda deal signals validated pharma trust that latecomers cannot buy quickly.
hardness: very-hard
hardness_reason: Proving that Enchant's clinical-property predictions raise trial success above the historical ~10% requires its own candidates to read out in humans, which takes years.
substrate_family: C
substrate_tags:
- C.1
- C.2
technology_platform_ids:
  - protein-design-diffusion-models
new_capability: "Closed-loop generative chemistry plus automated wet lab, with Enchant predicting clinical endpoints, advancing owned small-molecule oncology candidates into Phase 1."
technology_readiness_level: 7
commercialisation_status: regulatory_review
customer:
  - pharma
  - biotech
limiting_factor: "Enchant's clinical-prediction promise is unproven until owned candidates read out in humans at scale."
last_verified: "2026-07-07"
---

## One-liner

AI drug discovery company that pairs generative molecular design with an automated wet lab to move small molecules from concept to clinic faster.

## Problem

Small-molecule discovery is slow and failure-prone: most candidates die in preclinical or clinical testing because early data poorly predicts how a molecule behaves in animals and humans.

## Workaround

Traditional medicinal chemistry, CRO-based screening, structure-based design, iterative synthesise-test-analyse cycles, and physics-based free-energy methods.

## Entry wedge

Built a closed-loop discovery engine (generative AI plus an automated laboratory) and used it to advance its own oncology candidates into the clinic within a few years of founding, establishing credibility before scaling pharma partnerships. IAM1363, a brain-penetrant HER2 inhibitor, entered Phase 1/1b and reported clinical data at ESMO 2025.

## Method

Two proprietary models anchor the platform. NeuralPLexer predicts protein and protein-ligand complex structures for structure-based design. Enchant is a multimodal transformer that predicts preclinical and clinical endpoints from early-stage molecular data, letting the team triage candidates before expensive experiments. The models drive an automated wet lab that generates proprietary PK, efficacy, and tox data to retrain the loop.

## TAM logic

Targets the global small-molecule pharma R&D market. Roughly $250B is spent annually on pharma R&D, and small molecules remain the dominant therapeutic class. The Takeda deal (up to $1.7bn in milestones) shows large pharma will pay for platform access plus success-based economics.

## Validated by

Takeda multi-year technology and discovery collaboration announced Feb 2026, with success-based milestones that could exceed $1.7bn plus royalties (Oncology and GI/Inflammation focus). Over $100M oversubscribed round in Nov 2025 (Sequoia, Mubadala, QIA, Regeneron Ventures, Illumina Ventures, and others). IAM1363 Phase 1/1b monotherapy data at ESMO 2025. Bayer discovery collaboration (2026). Jazz Pharmaceuticals research and drug-supply agreement for an IAM1363 combination (Oct 2025). NVIDIA technology collaboration (2024).

## Competes with

Genesis Molecular AI, Terray Therapeutics, Schrodinger, Isomorphic Labs, Insilico Medicine, Recursion, and other AI-native small-molecule discovery platforms.

## Complements

CDMOs for manufacturing, clinical CROs for trial execution, target-discovery companies upstream, and pharma partners that in-license or co-develop candidates.

## Value chain position

**Downstream of:** Target identification, disease biology, structural biology databases (PDB).
**Upstream of:** IND-enabling studies, clinical trials, regulatory approval, and commercialisation at pharma partners.

## Gaps

Enchant's core promise (better clinical prediction) is unproven until owned candidates read out in humans at scale. Still upstream of late-stage clinical execution and delivery.

## Notes

Founded 2020 by Tom Miller (ex-Caltech) and Fred Manby; San Diego. Legacy name Entos. Real pipeline is IAM1363 (HER2, Phase 1/1b), IAM-C1 (dual CDK2/4), and IAM-K1 (KIF18A); the "IAM-H1/H2" seed labels were early designations, IAM-H1 is now IAM1363 and no IAM-H2 exists. Total funding ~$320M is an aggregation across Series B, extension, and the Nov 2025 round; latest valuation not disclosed.

## News signals
- 2026-02: Takeda signed a multi-year AI discovery collaboration with Iambic worth up to $1.7bn in milestones plus royalties. (source: https://www.fiercebiotech.com/biotech/takeda-inks-17b-ai-discovery-deal-iambic-therapeutics)
- 2025-11: Iambic raised over $100M in an oversubscribed round to fund clinical trials of its AI-discovered cancer drugs. (source: https://medcitynews.com/2025/11/startup-iambic-raises-100m-for-clinical-trials-of-ai-discovered-cancer-drugs/)
