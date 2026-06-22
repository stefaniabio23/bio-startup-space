---
id: chai-discovery
name: Chai Discovery
website: chaidiscovery.com
founded: 2024
area: generative biology
funding_stage: series-b
total_funding_usd_m: 225
public: false
business_model: partnerships
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 285900
data_centrality: important-enabler
data_ownership:
  - proprietary
  - public
moat:
  - model
  - IP
  - distribution
  - founder-brand
primary_value_chain_layer: discovery
input:
  - protein target sequences and structures
  - epitope specifications
  - antibody framework constraints (optional)
  - multimodal prompts (ligands, post-translational modifications)
transformation_type: generate
output:
  - de novo antibody sequences (scFv, VHH nanobodies, full-length mAbs)
  - binding affinity predictions
  - structure predictions for all molecule classes (proteins, small molecules, DNA, RNA)
barrier_to_entry: high
barrier_to_entry_logic: Open-source Chai-1 built rapid pharma adoption before monetisation; Lilly and Pfizer deals within 18 months of founding create distribution lock-in that is hard to displace.
hardness: very-hard
hardness_reason: Scaling from zero-shot antibody design to full therapeutic programs requires wet-lab, manufacturability, and clinical validation infrastructure the current team does not yet own.
last_verified: "2026-06-22"
---

## One-liner

Builds AI models for molecular interaction prediction and de novo antibody or binder design.

## Problem

Antibody and binder discovery remains slow, experimentally intensive, and unreliable for difficult targets.

## Workaround

Display libraries, hybridoma discovery, directed evolution, CRO antibody discovery, structure-guided engineering.

## Entry wedge

Chai-1 (September 2024): open-source multi-modal foundation model for molecular structure prediction, released free for commercial use under Apache 2.0. Benchmarked at 77% on PoseBusters (vs. 76% AlphaFold 3), with state-of-the-art multimer prediction without requiring multiple sequence alignments. The open release built immediate adoption across research and industry, establishing Chai as a credible infrastructure player before monetization.

## Method

Multimodal generative architecture combining all-atom structure prediction with generative modeling: Chai-1 predicts structures of proteins, small molecules, DNA, RNA, and covalent modifications from sequence; Chai-2 adds zero-shot generative antibody design achieving double-digit experimental hit rates (100x improvement over prior computational methods), designing full-length mAbs with drug-like developability confirmed by cryo-EM at sub-angstrom accuracy.

## TAM logic

No explicit market size cited. Chai frames the opportunity as replacing empirical antibody discovery (the biologics hit discovery market), where half of all recent biopharmaceutical approvals are antibodies. Partnerships with Eli Lilly (Jan 2026) and Pfizer license (Jun 2026) signal pharma willingness to pay for API/software access to the model suite. UK government named Chai in a drug discovery technology announcement (London Tech Week).

## Validated by

Chai-1: state-of-the-art on PoseBusters, CASP15 monomer, and DockQ multimer benchmarks (Sep 2024). Chai-2: double-digit de novo antibody hit rates across diverse targets including GPCRs and peptide-MHC complexes; cryo-EM structural confirmation at sub-angstrom accuracy; full-length mAb developability on par with therapeutic antibodies (Nov 2025 paper). $130M Series B (Dec 2025, General Catalyst + Oak HC/FT, with OpenAI, Thrive Capital, Dimension, Menlo Ventures). Eli Lilly biologics collaboration (Jan 2026). Pfizer license agreement (Jun 2026). Lilly/TuneLab collaboration (Jun 2026).

## Competes with

Isomorphic Labs (IsoDDE covers biologics), Latent Labs (Latent-X2 overlaps on antibody design), AbSci (generative antibody platform), Schrödinger (structure-based drug design, especially small molecules), Schrodinger/OpenFold for structure prediction infrastructure, Evolvere Biosciences, Absci.

## Complements

Latent Labs (uses Chai-1 for structure consistency checking in its own pipeline), wet-lab CROs for experimental validation, CDMOs for manufacturing, target ID companies upstream, clinical-stage biotechs needing fast antibody candidates.

## Value chain position

**Downstream of:** Target identification and disease biology, structural biology databases (PDB, RCSB), protein and antibody sequence databases.
**Upstream of:** Developability optimization, ADMET profiling, IND-enabling preclinical studies, clinical development at pharma/biotech partners.

## Gaps

Advanced design and developability work but still upstream of tissue delivery, dosing, patient selection, and clinical POS.

## Notes

Team backgrounds primarily from OpenAI, Meta FAIR, Google X, and Stripe (not traditional biotech). Founded 2024 with seed funding (Sep 2024) then Series A $70M (Aug 2025) then Series B $130M at $1.3B valuation (Dec 2025). OpenAI is an investor. Total ~$225M raised across seed + A + B. Access to Chai-2 gated under Responsible Deployment policy. Chai-1 remains open-source. The Lilly deal (Jan 2026) and Pfizer license (Jun 2026) establish it as software/API vendor to large pharma within ~18 months of founding.

## News signals

- 2025-12: Raised $130M Series B at $1.3B valuation, led by General Catalyst and Oak HC/FT, bringing total funding to ~$225M. (source: https://techcrunch.com/2025/12/15/openai-backed-biotech-firm-chai-discovery-raises-130m-series-b-at-1-3b-valuation/)
