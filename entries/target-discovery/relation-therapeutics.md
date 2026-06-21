---
id: relation-therapeutics
name: Relation Therapeutics
website: relationrx.com
founded: 2019
area: target validation
funding_stage: seed
total_funding_usd_m: 86
public: false
business_model: partnerships
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 200000
last_verified: "2026-06-21"
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
  - partner-supplied
moat:
  - data
  - wet-lab
  - IP
  - model
input:
  - "patient tissue samples (bone, immune, connective)"
  - "single-cell transcriptomics"
  - "spatial transcriptomics"
  - "human genetics / GWAS data"
  - "perturbational omics screens"
transformation_type: predict
output:
  - "validated drug targets"
  - "patient subgroup signatures"
  - "novel therapeutic programs"
  - "disease atlases (e.g. Osteomics bone atlas)"
barrier_to_entry: high
barrier_to_entry_logic: Osteomics bone atlas required years of hospital access, tissue collection, and single-cell processing across UK and Australian hospitals — not replicable quickly by pharma internal teams.
hardness: hard
hardness_reason: Human tissue-derived targets still fail in clinical trials at high rates; platform validation does not guarantee the drug succeeds.
---

## One-liner

Uses human tissue, single-cell, spatial, perturbational biology, and ML to validate drug targets in human disease.

## Problem

Targets often fail clinically because preclinical models do not reflect human disease biology.

## Workaround

Animal models, cell lines, literature review, genetic association studies, pharma translational biology teams.

## Entry wedge

Started with osteoporosis as the anchor disease, building Osteomics — the world's largest functional single-cell bone atlas — from patient-derived samples across UK and Australian hospitals. This proprietary atlas created a defensible dataset that no pharma could quickly replicate, making Relation credible as a target discovery partner before any drug entered the clinic.

## Method

Lab-in-the-Loop: patient tissue profiled with single-cell and spatial transcriptomics, followed by perturbational experiments to test causal gene roles, with ML (including generative models, graph neural networks, LLMs) across every step for target identification and prioritisation. Hyperscale compute via NVIDIA partnership.

## TAM logic

Drug R&D spend on target identification and validation is ~$200B globally. Relation's argument: most failures originate in poor target choice based on non-human data. High-resolution human tissue-derived targets command premium deal economics from pharma (relationrx.com/science).

## Validated by

Novartis deal ($55M upfront + up to $1.7B milestones, announced Dec 2025, atopic diseases). GSK collaboration (Dec 2024, fibrotic diseases and osteoarthritis). Deerfield Management partnership (Jan 2026, forming new companies from discovered targets). Additional $26M investment round (Dec 2025).

## Competes with

Recursion Pharmaceuticals (phenotypic screening + ML), Exscientia (AI drug design), Aria Pharmaceuticals, insitro (ML + functional genomics), BioMap (large-scale biology AI). Internal pharma translational biology and genomics teams at AZ, GSK, Novartis, Pfizer.

## Complements

Genome sequencing providers (Illumina, Oxford Nanopore). Spatial transcriptomics platforms (10x Genomics Visium, Vizgen). CROs for downstream validation. Clinical trial biomarker companies.

## Value chain position

**Downstream of:** Genetic association studies, disease biology research, patient tissue collection, sequencing infrastructure
**Upstream of:** Drug development programs, IND-enabling studies, clinical trials

## Gaps

Does not run its own clinical programs (though Deerfield deal creates spinouts). Validation stops at target + translational model level; clinical proof of target engagement or efficacy requires pharma partner execution. No disclosed revenue from commercialised drugs yet.

## Notes

Rebranded website from relationtx.com to relationrx.com. HQ: Regent's Place, London. ~130 employees as of 2026. NVIDIA compute partnership for ML infrastructure. Primary disease focus: osteoporosis, immunology, metabolic disease.
