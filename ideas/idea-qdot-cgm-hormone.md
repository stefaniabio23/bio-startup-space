---
id: idea-qdot-cgm-hormone
idea: Quantum-dot bead immunoassay for continuous hormone monitoring, a CGM-style readout of insulin and glucagon in blood
technology_platform_ids:
  - quantum-dot-sensing
substrate_tags:
  - D.3
  - D.1
  - D.2
new_capability: Minute-by-minute quantification of protein hormones (insulin, glucagon, C-peptide) in whole blood, not just glucose
target_user: People with type 1 diabetes and closed-loop pump users, plus endocrinology researchers
buyer:
  - consumer
  - provider
  - pharma
first_use_case: Real-time insulin and glucagon tracking to close the loop on an artificial pancreas
business_model:
  - device_consumables
  - monitoring_subscription
  - research_tools
technology_readiness_level: 4
translational_gap: Quantum-dot bead immunoassays are validated in rat glucose-tolerance tests and ex-vivo perfusion, not yet miniaturised into an implantable or wearable continuous form factor or run in humans
why_now: Poudineh Lab (Waterloo) published a bead-based quantum-dot microfluidic immunoassay giving real-time multiplexed insulin and glucagon in whole blood at picomolar sensitivity (Advanced Science, 2025)
prior_work:
  - Poudineh Lab QIRT-ELISA / bead quantum-dot immunoassay, real-time insulin+glucagon in whole blood (Adv Sci 2025)
  - Zwitterionic antibody-protecting microneedle patch for continuous insulin (Nat Biomed Eng 2025)
closest_companies:
  - Abbott (Libre)
  - Dexcom
  - Biolinq
  - Nutromics
differentiation: Measures the hormones themselves rather than glucose, the actual control variables of the artificial pancreas
unfair_advantage_needed: License or co-develop the Poudineh quantum-dot assay and pair it with a fluidics/wearable engineer who can shrink it to a body-worn cartridge
validation_plan: Reproduce picomolar multiplexed insulin/glucagon detection in banked human plasma, then show stability of the bead assay over a 3-to-7 day wear window
three_month_mvp: Benchtop cartridge running the quantum-dot bead assay on spiked human plasma, demonstrating multiplexed insulin+glucagon quantification and cross-reactivity data versus a lab ELISA reference
technical_risk: Continuous protein-hormone sensing degrades from biofouling and reagent depletion, unlike small-molecule glucose sensing
regulatory_risk: A hormone CGM is a Class II/III device requiring clinical accuracy studies, a multi-year FDA/CE path
commercial_risk: Glucose CGM incumbents are entrenched and may add hormone sensing themselves; willingness to pay beyond T1D closed-loop is unproven
founder_fit: plausible
cambridge_route_fit: strong
ef_route_fit: plausible
overall_score: 6
notes: See tradeoff discussion in Notes below.
last_verified: "2026-07-06"
---

## Idea

Glucose CGMs measure the downstream variable; the artificial-pancreas control problem actually turns on insulin and glucagon, the hormones the body and the pump are dosing. A quantum-dot bead immunoassay can quantify those protein hormones directly in whole blood at picomolar sensitivity and minute-by-minute resolution. Productised into a wearable or short-term implantable cartridge, this becomes the missing feedback signal for closed-loop diabetes control and a research tool for endocrine dynamics.

## Why now

Poudineh Lab at Waterloo published a bead-based quantum-dot microfluidic immunoassay in 2025 that measures insulin and glucagon simultaneously in whole blood at low-picomolar levels, validated against rat glucose-tolerance tests. That moves continuous protein-hormone sensing from concept to a working assay, the piece the field has lacked.

## 3-month MVP

Build a benchtop fluidic cartridge running the quantum-dot bead assay on spiked and banked human plasma. Deliver a multiplexed insulin+glucagon calibration curve, cross-reactivity data against a commercial ELISA, and a first read on signal stability over a multi-day continuous run. This de-risks the assay chemistry before any wearable engineering spend.

## Validation plan

Reproduce picomolar multiplexed insulin/glucagon detection in human plasma, then characterise drift and biofouling over a 3-to-7 day continuous flow window, the single biggest technical unknown for a wearable form factor.

## Notes

Tradeoff: an electrochemical-aptamer or antibody-microneedle route (the 2025 Nature Biomed Eng zwitterionic microneedle insulin patch) is likely more product-feasible near-term because it needs no bulky optics and sits in interstitial fluid. The quantum-dot QIRT-ELISA route wins on protein-hormone sensitivity and multiplexing, which matters for measuring low-abundance glucagon and C-peptide that aptamer sensors struggle with. A founder should treat aptamer/microneedle as the fast wedge and quantum-dot as the differentiated high-sensitivity endgame.
