---
id: ai-medical-imaging
name: AI medical imaging
aliases:
  - radiology AI
  - computational pathology
  - AI-assisted diagnostics
  - imaging foundation models
substrate_family: C
substrate_tags:
  - C.3
  - D.2
enabled_by: "Deep learning on large labelled image corpora (CT, MRI, X-ray, whole-slide pathology, retinal fundus), digital slide scanners, and cloud GPU training plus a maturing FDA 510(k) pathway for imaging software"
mechanism: "Convolutional and transformer networks learn to detect, quantify, and triage findings directly from medical images, flagging critical cases and producing quantitative measurements that a clinician reviews"
new_capability: "Automated triage and quantification across radiology and pathology at scale, moving from single-task detectors toward multi-condition imaging foundation models"
what_it_could_unlock: "Routine screening and triage where every scan is pre-read by a model, surfacing critical findings first and freeing scarce radiologist and pathologist time"
capabilities:
  - capability: "Radiology triage and detection"
    what_it_could_unlock: "Faster stroke, PE, and bleed workflows; worklist prioritisation; multi-condition foundation-model reads"
    mechanism: "Models flag critical findings on CT/MRI/X-ray and reorder the reading worklist"
    technology_readiness_level: 9
    translational_gap: "Scanner/site generalisation, alert fatigue, reimbursement, EHR/PACS integration"
    closest_companies:
      - Aidoc
      - Forus Health
  - capability: "Computational pathology"
    what_it_could_unlock: "Whole-slide primary diagnosis, biomarker prediction from H&E, treatment-decision support"
    mechanism: "Networks read digitised slides to detect tumour, grade, and predict molecular status"
    technology_readiness_level: 8
    translational_gap: "Slide digitisation capex, stain/scanner variability, pathologist trust, reimbursement"
    closest_companies:
      - Paige
      - PathAI
related_primitives:
  - multimodal-clinical-data-platform
  - spatial-omics
  - liquid-biopsy-multiomics
use_cases:
  - Emergency CT triage for stroke, pulmonary embolism, and intracranial haemorrhage
  - Digital-pathology primary diagnosis and biomarker prediction from H&E slides
  - Screening reads for mammography, retinal disease, and lung nodules
  - Full-body preventive imaging interpretation
technology_readiness_level: 8
evidence_level: regulatory_cleared
translational_gap: "Models trained at one site or on one scanner often degrade elsewhere, so generalisation and continuous monitoring remain hard; reimbursement is patchy and workflow integration into PACS/EHR plus clinician trust gate adoption more than raw accuracy"
what_needs_to_happen: "Robust cross-scanner generalisation, prospective multi-site validation, clear reimbursement codes, and tight PACS/EHR workflow integration; pathology also needs broad slide digitisation"
closest_companies:
  - Aidoc
  - Paige
  - PathAI
  - Forus Health
  - Neko Health
closest_labs:
  - Faisal Mahmood Lab (Harvard/BWH)
  - Center for Clinical Data Science (Mass General Brigham)
  - Andrew Ng / Stanford ML Group (radiology AI)
commercialisation_status: commercial_scaled
regulatory_complexity: high
capex_intensity: medium
defensibility: medium
notes: "TRL 8 overall. Many single-task detectors are FDA-cleared and marketed (TRL 9); multi-condition imaging foundation models (Aidoc CARE, 11 newly cleared indications, Jan 2026) and digital pathology (Paige acquired by Tempus Aug 2025; PathAI AISight Dx cleared Jun 2025) are newer. Full-body preventive scan players (Neko) sit earlier on evidence."
scan:
  bucket: commercialising-now
  paper_cagr_pct: 55.0
  mean_fwci: 36.07
  industry_share: 0.073
  patent_total: 371
  patent_cagr_pct: 29.5
  company_share: 0.118
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

Deep networks (CNNs and increasingly vision transformers) are trained on large labelled image sets, CT, MRI, X-ray, whole-slide pathology, retinal fundus, to detect, quantify, and triage findings directly from pixels. In radiology the output is a flag on a critical finding plus a reordered worklist so the urgent scan is read first, or a quantitative measurement (nodule volume, ejection fraction). In pathology the model reads a digitised slide to detect tumour, grade it, or predict molecular status from H&E morphology. The frontier is shifting from one narrow detector per condition toward multi-condition imaging foundation models that read many findings from a single scan.

## What it unlocks

The near-term unlock is triage and quantification at scale: every scan pre-read by a model that surfaces the critical case first and offloads routine measurement, addressing radiologist and pathologist shortages. Aidoc reported an FDA-reviewed pivotal study averaging 97% sensitivity and 98% specificity across 11 newly cleared indications (Jan 2026) under its CARE foundation model, and raised a USD 150M Series E (total over USD 500M). In pathology, Paige (acquired by Tempus, Aug 2025) launched Paige Predict for treatment decisions from H&E, and PathAI's AISight Dx cleared for primary diagnosis (Jun 2025) with a Predetermined Change Control Plan for adding scanner support. Full-body preventive imaging (Neko Health) extends the same interpretation stack into screening.

## Translational gap

Accuracy on a benchmark is not the bottleneck; generalisation and deployment are. A model trained on one scanner, protocol, or patient population frequently degrades at another site, so robust cross-site performance and continuous post-market monitoring are unsolved at scale. Reimbursement is patchy, and value accrues only when the model is wired into PACS/EHR workflow with clinician trust, so alert fatigue and integration friction gate adoption more than raw AUC. Computational pathology carries the extra cost of digitising slides before any model can run.

## Notes

TRL 8 overall because single-task detectors are commercial and cleared (TRL 9) while multi-condition foundation models and digital-pathology primary diagnosis are newer. Defensibility is medium: clearances and workflow lock-in help, but the modelling recipes are broadly reproducible and the moat is proprietary labelled data plus health-system integration. substrate_family C (model) with a C.3 disease-state and D.2 diagnostic tag because the product is a model that reads images into diagnostic output.
