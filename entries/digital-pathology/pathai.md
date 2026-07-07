---
id: pathai
name: PathAI
website: pathai.com
founded: 2016
area: ai pathology
funding_stage: series-c
total_funding_usd_m: 255
public: false
business_model: hybrid
buyer:
 - pharma
 - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 15000
data_centrality: core-moat
data_ownership:
 - partner-supplied
 - licensed
 - proprietary
moat:
 - data
 - model
 - distribution
 - clinical-evidence
primary_value_chain_layer: patient-stratification
input:
 - whole-slide pathology images (H&E and IHC stained)
 - clinical outcome annotations
 - biomarker labels from pharma partners
transformation_type: predict
output:
 - biomarker predictions from pathology slides
 - patient stratification for clinical trials
 - AI-assisted pathology workflow tools
 - companion diagnostic development
barrier_to_entry: very-high
barrier_to_entry_logic: Trained on millions of annotated pathology slides with AstraZeneca and BMS partner labels, dataset size and annotation quality cannot be quickly replicated; pharma distribution lock-in deepens with each partnership.
hardness: very-hard
hardness_reason: Getting FDA clearance for AI-assisted pathology biomarkers that can replace or augment pathologist judgement as primary endpoints in regulatory submissions.
substrate_family: C
substrate_tags:
- C.3
- D.2
technology_platform_ids:
  - ai-medical-imaging
new_capability: "Deep-learning pathology biomarker prediction and patient stratification from whole-slide images for pharma trials and clinical diagnosis."
technology_readiness_level: 9
commercialisation_status: commercial_scaled
customer:
  - pharma
  - provider
limiting_factor: "Slide-only, no multimodal integration; regulatory pathway for AI-as-primary-endpoint is still evolving."
last_verified: "2026-07-07"
---

## One-liner

AI-powered pathology platform for biopharma, labs, and clinicians, with applications in biomarker discovery, drug development, and pathology workflow.

## Problem

Pathology-based biomarker assessment is subjective, variable across pathologists, and cannot scale to the volume and complexity needed for precision oncology trials.

## Workaround

Manual pathologist review, semi-quantitative IHC scoring (e.g. PD-L1 TPS/CPS), centralised pathology labs, traditional image analysis software (Aperio, QuPath).

## Entry wedge

Pharma partnerships for clinical trial biomarker development, PathAI entered by solving the reproducibility problem in pathology-based endpoint assessment for clinical trials, where inter-pathologist variability is a known regulatory risk.

## Method

Deep learning models trained on whole-slide images with expert annotations; pathologist-in-the-loop training pipeline that incorporates feedback; AISight platform for lab workflow integration and clinical use.

## TAM logic

Digital pathology market estimated at $15B+ growing rapidly as companion diagnostics and precision oncology expand the volume of pathology-based decisions. (Source: PathAI website and investor materials)

## Validated by

$255M raised including Series C (2021). Partnerships with AstraZeneca (oncology biomarkers), Bristol-Myers Squibb, Quest Diagnostics. AISight Dx received FDA clearance for primary diagnosis (2025, with a Predetermined Change Control Plan). Over 15 biopharma partnerships. In May 2026 Roche agreed to acquire PathAI for up to $1.05B ($750M upfront plus up to $300M in milestones).

## Competes with

Paige (digital pathology foundation models), Aiforia, Visiopharm, Ibex Medical Analytics, Proscia, Roche/Ventana digital pathology.

## Complements

Whole-slide scanner vendors (Leica, Aperio, Hamamatsu), LIMS platforms, companion diagnostic developers, biomarker-driven trial sponsors.

## Value chain position

**Downstream of:** Tissue sample collection, slide preparation, whole-slide scanning
**Upstream of:** Biomarker-driven patient stratification, companion diagnostic approval, trial enrollment decisions

## Gaps

Slide-based only, does not incorporate liquid biopsy, genomics, or wearable signals for multimodal patient profiling. Regulatory pathway for AI-as-primary-endpoint is still evolving.

## Notes

HQ: Boston. CEO Andy Beck (co-founder, Harvard MD/PhD). One of the most established AI pathology platforms in pharma partnerships. The AstraZeneca partnership is a reference case for AI-driven companion diagnostic development. PathAI is being acquired by Roche (definitive agreement signed May 2026), which folds the AISight platform and biomarker algorithms into Roche Diagnostics.

## News signals

- 2025: AISight Dx received FDA clearance for primary diagnosis, including a Predetermined Change Control Plan for future enhancements. (source: https://www.pathai.com/about-us)
- 2025-07: Announced a multi-year partnership with Northwestern Medicine to deploy AISight and co-develop AI diagnostics. (source: https://www.pathai.com/about-us)
- 2026-05: Roche entered a definitive agreement to acquire PathAI for up to $1.05B ($750M upfront plus up to $300M in milestones); close expected in 2H 2026 pending regulatory approval. (source: https://www.roche.com/media/releases/med-cor-2026-05-07)
