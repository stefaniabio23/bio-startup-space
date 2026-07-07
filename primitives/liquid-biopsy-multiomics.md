---
id: liquid-biopsy-multiomics
name: Liquid biopsy multiomics
aliases:
  - blood-based cancer detection
  - cell-free DNA testing
  - multi-cancer early detection
  - minimal residual disease testing
substrate_family: A
substrate_tags:
  - A.1
  - D.2
enabled_by: "Deep sequencing of circulating cell-free DNA/RNA plus methylation, fragmentomics, and protein signals from a blood draw, combined with ML classifiers trained on large case-control cohorts"
mechanism: "A blood sample yields tumour-derived molecules (mutations, methylation patterns, fragment sizes, proteins) that a machine-learning classifier scores for presence of cancer, residual disease, or actionable alterations"
new_capability: "Non-invasive, repeatable detection of cancer and residual disease from a tube of blood, integrating multiple molecular layers rather than a single mutation panel"
what_it_could_unlock: "Population-scale cancer screening and post-treatment monitoring that catches disease earlier and tracks recurrence without repeat tissue biopsy"
capabilities:
  - capability: "Minimal residual disease and recurrence monitoring"
    what_it_could_unlock: "Post-surgical relapse detection, adjuvant-therapy escalation/de-escalation, longitudinal monitoring"
    mechanism: "Serial ctDNA measurement tracks tumour burden below imaging detection after treatment"
    technology_readiness_level: 8
    translational_gap: "Sensitivity at very low tumour fraction, assay standardisation, reimbursement"
    closest_companies:
      - Guardant Health
      - Natera
  - capability: "Multi-cancer early detection screening"
    what_it_could_unlock: "Single blood test screening for many cancers in asymptomatic populations"
    mechanism: "Methylation and fragmentomic signatures classify cancer presence and tissue of origin"
    technology_readiness_level: 6
    translational_gap: "Early-stage sensitivity, false positives, mortality-benefit evidence, screening reimbursement"
    closest_companies:
      - Grail
      - Freenome
related_primitives:
  - nanopore-sensing
  - spatial-omics
  - multimodal-clinical-data-platform
  - ai-medical-imaging
use_cases:
  - Post-surgical minimal residual disease and recurrence monitoring
  - Multi-cancer early detection screening in asymptomatic adults
  - Therapy selection via circulating tumour DNA genotyping
  - Blood-based colorectal cancer screening
technology_readiness_level: 8
evidence_level: real_world_proven
translational_gap: "Detecting early-stage tumours means finding vanishingly rare tumour molecules against a large normal-DNA background, so sensitivity at low tumour fraction and specificity (false positives triggering costly workups) remain the core limits; screening use also needs prospective mortality-benefit evidence and reimbursement"
what_needs_to_happen: "Higher sensitivity at low tumour fraction, controlled false-positive rates, large prospective outcome trials proving mortality benefit, and payer coverage for screening indications"
closest_companies:
  - Guardant Health
  - Grail
  - Freenome
  - Natera
  - Exact Sciences
closest_labs:
  - Nickolas Papadopoulos / Bert Vogelstein Lab (Johns Hopkins)
  - Victor Velculescu Lab (Johns Hopkins, fragmentomics)
  - Maximilian Diehn / Ash Alizadeh Lab (Stanford, CAPP-Seq)
commercialisation_status: commercial_scaled
regulatory_complexity: high
capex_intensity: high
defensibility: high
notes: "TRL 8 overall. Therapy-selection ctDNA genotyping and MRD monitoring are marketed and increasingly reimbursed (Guardant, Natera); multi-cancer early detection screening is later-stage (Grail Galleri PATHFINDER 2 at ASCO 2026, over 35,000 participants; Freenome and Guardant blood-based CRC tests added to ACS guidelines). Lower-confidence layer is asymptomatic screening evidence."
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 53.5
  mean_fwci: 13.5
  industry_share: 0.052
  patent_total: 118
  patent_cagr_pct: 85.4
  company_share: 0.533
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

A blood draw carries tumour-derived molecules shed into circulation: mutated cell-free DNA, aberrant methylation patterns, characteristic DNA fragment sizes (fragmentomics), cell-free RNA, and proteins. The assay deep-sequences or measures these layers, then a machine-learning classifier trained on large case-control cohorts scores the sample for cancer presence, residual disease after treatment, or specific actionable alterations. The multiomic version integrates several molecular signals rather than relying on a single mutation panel, which raises signal when any one layer is weak, and methylation and fragmentomics can also predict the tumour's tissue of origin.

## What it unlocks

The mature unlock is monitoring and genotyping. Circulating tumour DNA genotyping guides therapy selection today, and serial minimal-residual-disease testing tracks tumour burden below imaging detection to catch recurrence early and tune adjuvant therapy (Guardant Reveal, Natera Signatera). The larger, less-proven prize is multi-cancer early detection: a single blood test screening asymptomatic people for many cancers at once. Grail's Galleri PATHFINDER 2 (over 35,000 participants, ASCO 2026) reported substantially increased detection with favourable safety, and the American Cancer Society added Guardant and Freenome blood-based tests to colorectal screening guidance. The market thesis (MCED ~USD 7B by 2035) rests on this screening layer maturing.

## Translational gap

The physics of early detection is the hard part: an early-stage tumour sheds vanishingly little DNA, so the classifier must find rare tumour molecules against a large background of normal cell-free DNA. Sensitivity at low tumour fraction and specificity are in tension, and false positives in a screening population trigger expensive, anxiety-inducing workups that can erase the benefit. Screening indications need large prospective trials proving an actual mortality benefit, not just detection, plus payer reimbursement. MRD and therapy-selection uses clear a lower bar and are already commercial; asymptomatic screening is where the evidence and economics are still being built.

## Notes

TRL 8 overall because therapy-selection and MRD products are marketed and increasingly reimbursed, while population screening is pivotal-stage. Defensibility is high: the moat is proprietary case-control cohorts, methylation/fragmentomic feature sets, and locked-down assay chemistry plus regulatory clearance, all costly to replicate. substrate_family A (data) with A.1 high-fidelity bio data and D.2 diagnostic tags because the primitive turns a blood draw into a high-fidelity molecular readout consumed as a diagnostic.
