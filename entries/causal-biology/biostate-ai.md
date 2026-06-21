---
id: biostate-ai
name: Biostate AI
website: biostate.ai
founded: 2023
area: rna state ai
funding_stage: series-a
total_funding_usd_m: 20
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
  - provider
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: medium
regulatory_burden: medium
tam_usd_m: 4530
last_verified: "2026-06-21"
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - wet-lab
  - IP
  - model
input:
  - whole blood RNA samples
  - blood transcriptomic profiles
  - exome sequencing data
transformation_type: predict
output:
  - disease differential diagnosis (MS vs. NMO)
  - disease subtype classification
  - early disease screening scores
  - drug response predictions
barrier_to_entry: high
barrier_to_entry_logic: Proprietary lower-cost sequencing stack (BIRT + PERD) and growing transcriptomic dataset create an early data moat, but the platform is early-stage and replication is plausible with capital.
hardness: hard
hardness_reason: Proving RNA-derived predictions change clinical decisions better than existing cheaper biomarkers at the point of care.
---

## One-liner

Uses RNA-seq and AI to predict disease progression, molecular state, and drug response.

## Problem

Transcriptomic state is rich but difficult to translate into clinical or therapeutic decisions.

## Workaround

Standard biomarkers, clinical scoring, bulk RNA analysis, specialist bioinformatics, retrospective cohort analysis.

## Entry wedge

MS diagnostics from a single blood draw. The first product is a blood transcriptomic panel delivering three clinical outputs from one sample: MS vs. NMO differential (91.3% AUC), MS subtype classification (RRMS to SPMS, 78.8% AUC), and early MS screening (74.2% AUC). The wedge is a specific, high-value clinical decision with a measurable 4-7 year diagnosis gap and $70-90K annual treatment cost per patient.

## Method

Proprietary low-input RNA sequencing (BIRT + PERD, claiming 10x cheaper and 10x less sample than standard RNAseq) combined with the N-Act AI platform to map transcriptomic state to clinical phenotype and drug response.

## TAM logic

$8.0B+ precision medicine TAM cited by the company, anchored to 2.8M+ MS patients globally, a median 4-7 year diagnostic delay, and $70-90K annual disease-modifying therapy cost per patient (biostate.ai).

## Validated by

Peer-reviewed MS diagnostic study described as "the largest blood transcriptomic study of MS and NMO to date"; AUC performance metrics published (91.3% for MS vs. NMO differential). DNA sequencing platform (MARE) claims >98% exome coverage detecting 5,000+ inherited diseases.

## Competes with

Tempus (multimodal molecular profiling for clinical decisions), Foundation Medicine (genomic profiling for oncology, different disease area), academic bioinformatics CROs, and standard clinical lab panels for MS diagnosis.

## Complements

RNA sequencing instrument providers (Illumina, Oxford Nanopore), EHR systems that consume diagnostic outputs, pharma trial teams needing patient stratification, and clinical labs that could license the panel.

## Value chain position

**Downstream of:** RNA sequencing instruments and blood sample collection infrastructure
**Upstream of:** Clinical decision support, patient stratification, drug response prediction, pharma trial enrollment

## Gaps

Clinical utility — when does RNA prediction actually change a treatment or trial decision?

## Notes

Operates a global subsidiary network: K-Dense (autonomous AI research, Palo Alto), Biosheng (Shanghai), Bayosthiti AI (Bengaluru), Biostate.AI MENA (Riyadh). This multi-geography structure is unusual for a Series A company and may reflect a strategy of building proprietary population-scale datasets across distinct cohorts rather than scaling a single product.
