---
id: paige
name: Paige
website: paige.ai
founded: 2018
area: digital pathology
funding_stage: acquired
total_funding_usd_m: 220
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
 - regulatory-trust
 - data
 - model
 - IP
 - distribution
primary_value_chain_layer: patient-stratification
input:
 - whole-slide pathology images
 - clinical outcome data
 - treatment response labels
transformation_type: predict
output:
 - cancer diagnostic predictions (slide-level)
 - trial endpoint biomarkers
 - whole-slide foundation model embeddings for pharma research
barrier_to_entry: very-high
barrier_to_entry_logic: First FDA-cleared AI-based pathology diagnostic (prostate cancer) sets a regulatory precedent moat; Memorial Sloan Kettering founding partnership provided the annotated dataset and clinical credibility no competitor can easily replicate.
hardness: very-hard
hardness_reason: Building whole-slide foundation models that generalise across cancer types, staining protocols, and scanner vendors at clinical-grade accuracy for regulatory submissions.
substrate_family: C
substrate_tags:
- C.3
- D.2
technology_platform_ids:
  - ai-medical-imaging
new_capability: "Whole-slide pathology foundation models delivering the first FDA-cleared AI cancer diagnostic and slide-level embeddings for pharma."
technology_readiness_level: 9
commercialisation_status: acquired
customer:
  - pharma
  - provider
limiting_factor: "Slide-only, no molecular or liquid-biopsy multimodality; clinical-lab reimbursement pathway is slow."
last_verified: "2026-07-07"
---

## One-liner

Digital-pathology AI company building slide-level foundation models and clinical and pharma tools from whole-slide pathology images.

## Problem

Pathology diagnosis is subjective, variable, and unable to capture the full biological signal in a whole-slide image, limiting precision in oncology diagnosis and trial endpoint assessment.

## Workaround

Manual pathologist review, PD-L1 scoring assays, traditional image analysis tools, centralised pathology core labs at academic cancer centres.

## Entry wedge

Memorial Sloan Kettering Cancer Center founding partnership provided access to one of the largest and most annotated oncology pathology archives in the world. First product was an FDA-cleared prostate cancer diagnostic, the first AI-based pathology diagnostic ever cleared by the FDA.

## Method

Whole-slide image foundation models trained at massive scale on MSK and partner archives; slide-level predictions for cancer detection, grading, and biomarker quantification; Paige Prostate FDA-cleared for prostate cancer detection.

## TAM logic

Digital pathology market $15B+ growing with precision oncology expansion. Pharma segment for AI-derived pathology biomarkers in clinical trials is the near-term revenue; clinical lab diagnostic reimbursement is the long-term opportunity. (Source: paige.ai/about)

## Validated by

FDA clearance for Paige Prostate (first AI pathology diagnostic cleared by FDA). Microsoft partnership (2021) for cloud deployment and model development. Over $220M raised before being acquired by Tempus AI in August 2025 (all-stock deal valued at ~$81.25M). Used by Memorial Sloan Kettering, Mayo Clinic, and pharma trial sponsors.

## Competes with

PathAI (biomarker discovery + workflow), Aiforia, Ibex Medical Analytics, Visiopharm, Roche digital pathology, Hologic.

## Complements

PathAI (different emphasis, Paige stronger on clinical diagnostics, PathAI on pharma biomarker discovery), WSI scanner vendors, oncology EHR platforms.

## Value chain position

**Downstream of:** Tissue biopsy, slide preparation, whole-slide scanning
**Upstream of:** Cancer diagnosis, treatment selection, clinical trial biomarker endpoints, companion diagnostic approval

## Gaps

Primarily slide-based, does not integrate molecular, genomic, or liquid biopsy data for multimodal profiles. Clinical lab reimbursement pathway is complex and slow.

## Notes

Founded by Thomas Fuchs (former Director of Computational Pathology at MSK). The MSK founding partnership is the most defensible early data moat in digital pathology. Microsoft partnership provides Azure-scale infrastructure for deploying models at health system scale. Paige is now part of Tempus AI following the August 2025 acquisition, giving Tempus roughly 7 million digitized slide images.

## News signals

- 2025-03: Raised Series C of over $125M (total raised over $220M to date). (source: https://www.medtechdive.com/news/tempus-paige-buyout-acquisition-ai/758589/)
- 2025-08: Acquired by Tempus AI in an all-stock deal valued at ~$81.25M, transferring ~7M digitized pathology slides plus clinical and molecular data. (source: https://www.tempus.com/news/tempus-announces-the-acquisition-of-paige/)
- 2026-04: FDA granted Breakthrough Device designation to Paige PanCancer Detect, an AI tool that detects cancer across multiple anatomic sites. (source: https://www.paige.ai/press-releases/us-fda-grants-paige-breakthrough-device-designation-for-ai-application-that-detects-cancer-across-different-anatomic-sites)
