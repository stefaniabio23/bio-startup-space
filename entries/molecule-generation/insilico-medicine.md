---
id: insilico-medicine
name: Insilico Medicine
website: insilico.com
founded: 2014
area: ai drug design
funding_stage: public
total_funding_usd_m: 400
public: true
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 200000
last_verified: "2026-06-21"
data_centrality: core-moat
data_ownership:
  - proprietary
  - public
  - generated-in-house
moat:
  - data
  - model
  - IP
  - clinical-evidence
  - wet-lab
input:
  - omics data (genomics, transcriptomics, proteomics)
  - clinical trial metadata (target, disease, protocol design, endpoints, investigators)
  - drug molecular structure and target interaction data
  - scientific literature, patents, grants (via NLP)
  - preclinical CRO data
transformation_type: generate
output:
  - novel drug candidates (small molecules) optimized for target, ADMET, and synthesizability
  - probability of success scores for clinical trials (inClinico)
  - target identification and ranking (PandaOmics)
  - IND-ready preclinical candidate nominations
barrier_to_entry: nearly-impossible
barrier_to_entry_logic: 10+ years building proprietary platform (PandaOmics, Chemistry42, inClinico), 40+ programs, 13 IND approvals, HKEX listing, and published Nature Biotechnology validation.
hardness: moonshot
hardness_reason: Proving AI-generated drugs succeed in Phase 2/3 at materially higher rates than the historical 10% baseline to justify the platform premium over traditional discovery.
---

## One-liner

Uses generative AI and reinforcement learning to identify drug targets, design molecules, and predict clinical trial outcomes via inClinico.

## Problem

Drug discovery is slow; clinical trial outcome is hard to predict before committing to large Phase 2/3 investment.

## Workaround

Pharma internal R&D, CRO services, historical base-rate estimates, expert opinion on phase transition.

## Entry wedge

Longevity and aging biology: Insilico entered as an AI-for-aging research platform, publishing heavily on GAN-based approaches to biology. The first commercial product was the Pharma.AI suite. The entry wedge into revenue was licensing Pharma.AI tools (PandaOmics for target ID, Chemistry42 for molecule generation) to pharma and biotech companies, alongside building an internal pipeline.

## Method

Generative chemistry + RL for molecule design; inClinico for trial outcome prediction from trial metadata.

## TAM logic

Insilico addresses the $2T global pharma R&D spend with a platform that compresses discovery timelines. INS018_055 reaching Phase 2 — described as the first fully AI-designed drug candidate to do so — serves as the market proof point that generative AI can replace years of traditional discovery. (Source: insilico.com, Nature Biotechnology publications)

## Validated by

INS018_055 (IPF) reached Phase 2 — first AI-discovered drug to reach Phase 2 clinical trials. Pipeline as of site: 40+ programs, 13 IND approvals, 31 preclinical candidates nominated since 2021. Listed on HKEX (2023 IPO). Published in Nature Biotechnology (2024) on generative drug design. inClinico has prospective validation studies published. (Source: insilico.com/pipeline, pharma.ai/inclinico)

## Competes with

IQVIA/HINT (trial outcome prediction from metadata), Recursion Pharmaceuticals (phenotypic AI drug discovery), Exscientia (generative chemistry), BenevolentAI (target ID + molecule design)

## Complements

CROs for wet-lab validation, genomic data providers, clinical data platforms (Flatiron, Tempus) for inClinico input enrichment.

## Value chain position

**Downstream of:** Target identification
**Upstream of:** Clinical development, trial execution

## Gaps

inClinico predicts trial outcomes from metadata — does not use latent biological state inference or biomarker/wearable signals. Generative molecule design still requires extensive wet-lab validation; the platform accelerates discovery but does not remove the clinical attrition problem. HKEX listing creates capital markets pressure that pure-platform peers avoid.

## Notes

Most directly adjacent to EF thesis via inClinico. IQVIA/HINT commercialisation status needs investigation before treating this angle as open. Listed on HKEX in April 2023. Headquartered in Cambridge MA with offices in Hong Kong, Shanghai, Abu Dhabi. CEO: Alex Zhavoronkov. Total funding estimate ~$400M pre-IPO; IPO raised approximately $255M (training knowledge — verify against IR site).
