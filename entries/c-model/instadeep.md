---
id: instadeep
name: InstaDeep
website: instadeep.com
founded: 2014
area: ai lnp design
substrate_family: C
substrate_tags:
  - C.1
technology_platform_ids:
  - ai-lnp-design
technology_platform_name: DeepChain biologics and mRNA design platform with genomic foundation models (Nucleotide Transformer)
funding_stage: acquired
total_funding_usd_m: 107
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
tam_usd_m: 30000
new_capability: Genomic-sequence and structural foundation models plus reinforcement learning that design and rank RNA, mRNA, and protein candidates at scale.
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - model
  - capital
  - founder-brand
primary_value_chain_layer: AI-driven biologics and mRNA design for drug discovery
input:
  - genomic and nucleotide sequences
  - mRNA and protein sequences
  - structural and functional biology datasets
transformation_type: predict
output:
  - designed and ranked mRNA and biologic candidates
  - genomic-sequence and structural predictions
  - target and vaccine-design insights
technology_readiness_level: 8
limiting_factor: Now an internal engine for parent BioNTech, so external availability is limited, and LNP-formulation-specific work is not confirmed by name.
commercialisation_status: acquired
barrier_to_entry: very-high
barrier_to_entry_logic: BioNTech ownership, near-exascale compute (Kyber), proprietary genomic foundation models, and a decade of enterprise AI make replication capital- and talent-intensive.
hardness: very-hard
hardness_reason: Training genomic and structural foundation models that materially improve mRNA and biologic design, then integrating them into a pharma pipeline, is a hard multi-domain problem.
last_verified: "2026-07-06"
---

## One-liner

Enterprise AI company applying deep reinforcement learning and foundation models to genomics, mRNA, and biologic design, acquired by BioNTech and now its global AI subsidiary.

## Problem

Designing mRNA vaccines and biologics means searching enormous sequence and structure spaces; without strong predictive models, candidate selection is slow and empirical.

## Workaround

Manual sequence design, narrow bioinformatics pipelines, and empirical screening that do not exploit genome-scale foundation models or reinforcement learning.

## Entry wedge

Genomic and structural prediction for RNA. InstaDeep's DeepChain platform and Nucleotide Transformer / SegmentNT genomic foundation models compress mRNA vaccine and immunotherapy design cycles, the capability that led BioNTech to acquire the company.

## Method

DeepChain enables high-throughput AI design and testing of mRNA vaccines and biologics. Genomic foundation models (Nucleotide Transformer, SegmentNT) predict from DNA and RNA sequence, and generative protein models (ProtBFN, AbBFN, via Bayesian Flow Networks) design proteins. Runs on Kyber, a near-exascale supercomputer for drug discovery. Founded in Tunis in 2014 by Karim Beguir and Zohra Slim; headquartered in London with global offices.

## Validated by

Acquired by BioNTech: announced January 2023, completed July 2023, for up to £562M (~$680M), roughly £362M upfront plus up to £200M in milestones, the largest deal in BioNTech's history. Pre-acquisition funding included a $7M Series A (2019) and a ~$100M Series B (2021) with BioNTech, Google, Alpha Intelligence Capital, and DB Digital Ventures. Companies collaborated from 2019 and ran a joint AI Innovation Lab from 2020.

## Competes with

Isomorphic Labs, other AI drug-discovery platforms, and internal AI teams at large pharma. In this cohort it is the mature, validated player.

## Complements

Mana.bio and Aganitha AI (LNP-side design), mRNA sequence designers (Raina, Kerna Labs), microfluidic manufacturers, and BioNTech's own mRNA vaccine and cancer-immunotherapy pipelines.

## Value chain position

**Downstream of:** genomic and structural datasets, exascale compute, BioNTech capital and pipeline
**Upstream of:** BioNTech mRNA vaccine and immunotherapy programs, biologic and target discovery

## Gaps

No standalone LNP-formulation product confirmed by name; the documented strength is RNA, genomics, and protein AI. As a BioNTech subsidiary, external commercial availability of the platform is limited.

## Notes

commercialisation_status set to acquired and funding_stage to acquired per the task. total_funding_usd_m set to ~$107M pre-acquisition venture raised (the ~$680M acquisition value is noted in Validated by, not the funding field). Linked to ai-lnp-design as the mRNA-design primitive; the concrete LNP link is indirect via BioNTech's RNA programs.

## News signals
- 2023-07: BioNTech completed its acquisition of InstaDeep for up to £562M. (source: https://investors.biontech.de/news-releases/news-release-details/biontech-completes-acquisition-instadeep/)
- 2024: Deployed Bayesian Flow Network protein models and launched Kyber, a near-exascale supercomputer for AI drug discovery. (source: https://www.constellationr.com/blog-news/insights/biontech-instadeep-bet-genai-models-advance-rd-drug-discovery-cancer-treatment)
