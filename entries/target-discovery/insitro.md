---
id: insitro
name: insitro
website: insitro.com
founded: 2018
area: drug discovery
funding_stage: series-c
total_funding_usd_m: 800
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
last_verified: "2026-06-22"
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
  - partner-supplied
moat:
  - data
  - model
  - IP
  - founder-brand
input:
  - high-content cellular phenotyping images
  - pooled CRISPR screen readouts
  - human genetics and clinical cohort data
  - multi-omic molecular profiles
transformation_type: predict
output:
  - validated drug targets
  - lead molecule candidates
  - disease mechanism hypotheses
  - patient stratification models
barrier_to_entry: high
barrier_to_entry_logic: BMS deal ($50M upfront, $25M milestone paid) validates proprietary POSH platform which required years of cellular phenotyping infrastructure, human genetics integration, and ML development.
hardness: very-hard
hardness_reason: Translating pooled CRISPR screen hits and cellular phenotyping signals to clinical-stage programs that survive the in vivo translation gap.
---

## One-liner

Combines high-throughput cellular data, human clinical or genetic data, and ML to discover and develop medicines.

## Problem

Drug discovery fails because disease models often do not translate from cells or animals to human patients.

## Workaround

Pharma internal discovery, academic biology, animal models, CRO assays, human genetics teams.

## Entry wedge

Platform licensing and co-discovery partnerships with pharma. The first externally validated entry was the Bristol Myers Squibb collaboration (announced 2024, $2.1B potential deal value, $50M upfront) for ALS and frontotemporal dementia target discovery. insitro used its POSH platform (pooled CRISPR screening plus self-supervised deep learning) to identify novel genetic targets, with a $25M milestone payment received upon first target nomination and expansion to two additional ALS targets in 2025.

## Method

POSH platform: automated high-content cellular phenotyping (Cell Painting-compatible CRISPR screens) combined with self-supervised deep learning to infer gene function at scale; human genetics used as a causal compass to select targets most likely to translate to patients; TherML unified AI engine integrating small molecule, oligonucleotide, and biologics design. Platform extended via CombinAbleAI acquisition for modality-agnostic design.

## TAM logic

Addressable market is the full pharmaceutical R&D spend (~$250B globally) with the argument that ML-enabled discovery can materially raise the success rate from the current ~10% across clinical stages; insitro frames its market as "diseases where machine learning can make a transformative difference" by integrating clinical data or tractable high-content cell models (insitro.com/about).

## Validated by

Bristol Myers Squibb collaboration ($50M upfront, $2.1B potential; $25M milestone received for first ALS target nomination, expanded to two additional targets in 2025); Eli Lilly partnership (September 2025, small molecule discovery for metabolic disease); Genomics England collaboration; POSH platform published in Nature Communications; Brown Adipose Tissue study (BAT-01 knockdown showing 15% body-weight reduction in preclinical models); MASH preclinical program with anti-fibrotic signals presented June 2026.

## Competes with

Recursion Pharmaceuticals (phenomics-first, public), Exscientia (AI-designed molecules, acquired by Recursion 2024), Insilico Medicine (generative chemistry + biology), Schrodinger (physics-based + ML), Relay Therapeutics (ML for structural biology), and pharma internal AI/ML drug discovery groups (BMS, Lilly, Roche).

## Complements

CROs for wet-lab validation of computational hits, genomic biobank providers (UK Biobank, Genomics England), clinical data aggregators, and sequencing infrastructure providers.

## Value chain position

**Downstream of:** Human genetics and disease biology
**Upstream of:** Drug development, clinical trials

## Gaps

Brings advanced ML to disease modelling; still faces translation from cellular systems to human efficacy.

## Notes

Founded by Daphne Koller (co-founder of Coursera, former Stanford AI professor, former Chief Computing Officer at Caltech), whose brand and network are part of the moat. Series C ($400M, 2024), with approximately $800M in total capital raised to date. The TherML platform and CombinAbleAI acquisition signal a shift from pure target discovery toward modality-agnostic drug design across the full discovery-to-development arc.

## News signals

- 2025-12: Published peer-reviewed validation of the POSH platform in Nature Communications; reports recovering 2.5x more functional gene relationships than conventional expert-designed analysis. (source: https://www.insitro.com/news/insitro-validates-ai-enabled-posh-platform-in-nature-communications-bridging-critical-gap-in-drug-discovery/)
- 2026-02: Appointed Joe Hand as Chief People Officer. (source: https://tracxn.com/d/companies/insitro/__odGYTUCwnx0afpj8iTT4rl2HmWecGxDNRpU_q1qy7AU)
