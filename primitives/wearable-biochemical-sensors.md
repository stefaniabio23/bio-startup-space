---
id: wearable-biochemical-sensors
name: Wearable Biochemical Sensors
aliases:
  - wearable biochemical monitoring
  - sweat sensors
  - saliva sensors
  - epidermal chemical sensors
  - non-invasive molecular wearables
substrate_family: D
substrate_tags:
  - D.1
  - D.3
enabled_by: The convergence of flexible skin-conformal electronics, microfluidic sweat capture, and molecular recognition chemistries onto a single wearable, so biochemical analytes can be read continuously and non-invasively instead of by blood draw
mechanism: A skin-worn patch samples sweat, saliva, or interstitial fluid through microfluidics and converts target analytes into an electrical or optical signal via electrochemical, aptamer, or enzymatic sensing
new_capability: Continuous, non-invasive tracking of biochemistry (electrolytes, metabolites, hormones, drugs) from body fluids other than blood, worn like a fitness band
what_it_could_unlock: A biochemical layer on consumer and clinical wearables, extending continuous monitoring beyond heart rate and glucose to hydration, stress hormones, and drug levels
capabilities:
- capability: Continuous sweat electrolyte and metabolite monitoring
  what_it_could_unlock: Real-time hydration, electrolyte, and metabolic tracking for athletes, workers, and patients
  mechanism: A microfluidic patch captures sweat and electrochemical or colorimetric sensors read sodium, chloride, lactate, or glucose
  technology_readiness_level: 6
  translational_gap: Sweat-rate variability, calibration, sweat-to-blood correlation for metabolites
  closest_companies:
  - Epicore Biosystems
  - Nutromics
- capability: Continuous hormone and drug monitoring in body fluids
  what_it_could_unlock: Wearable cortisol, reproductive-hormone, and therapeutic-drug tracking without blood draws
  mechanism: Aptamer or affinity-based sensors in a skin or saliva device transduce low-abundance analyte binding into a signal
  technology_readiness_level: 4
  translational_gap: Low analyte concentration, sensor drift, multiplexing, analyte-to-blood validity
  closest_companies:
  - Xsensio
  - Nutromics
use_cases:
  - Hydration and heat-stress monitoring for athletes and industrial workers
  - Continuous cortisol and stress-hormone tracking
  - Wearable therapeutic drug monitoring for narrow-therapeutic-index drugs
  - Sweat lactate and glucose trends for metabolic and performance insight
  - Saliva-based non-invasive analyte panels
technology_readiness_level: 5
evidence_level: human_pilot
translational_gap: Sweat and saliva concentrations vary with sweat rate, evaporation, and contamination and do not always track blood; each analyte needs its own calibration; sensors drift over a wear; and multiplexing several analytes on one durable device without crosstalk is unproven
what_needs_to_happen: Sweat-rate normalisation and microfluidic sampling that stabilise the sample, validated sweat- or saliva-to-blood correlation per analyte, drift-corrected multi-analyte sensor stacks, and regulatory-grade agreement studies for clinical claims
closest_companies:
  - Epicore Biosystems
  - Nutromics
  - Xsensio
related_primitives:
- electrochemical-aptamer-biosensing
- microneedle-isf-sensing
- flexible-epidermal-electronics
- mxene-2d-materials
closest_labs:
  - John Rogers Lab (Northwestern)
  - Joseph Wang Lab (UC San Diego)
  - Ali Javey Lab (UC Berkeley)
  - Wei Gao Lab (Caltech)
commercialisation_status: commercial_early
regulatory_complexity: medium
capex_intensity: medium
defensibility: medium
notes: "This is the broad wearable-biochemical category. It overlaps and aggregates the narrower sensing primitives (electrochemical-aptamer-biosensing, microneedle-isf-sensing, flexible-epidermal-electronics): those are specific transduction or access mechanisms, while this primitive is the product category built on top of them. The most mature arm is sweat electrolyte and hydration monitoring (Epicore's hydration patch is commercial, TRL 6); hormone and drug sensing is earlier (TRL 4). Companies are mostly early-stage startups."
momentum:
  papers: 1350
  cagr_pct: 36.1
  fwci: 6.41
  industry_share_pct: 0.0
  citation_mass: 412.0
  on_topic_n: 22
  buildable_whitespace: 15/25
  confidence: medium
  status: early-startups
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 29.6
  mean_fwci: 11.35
  industry_share: 0.032
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

A wearable biochemical sensor is a skin-worn (or saliva-interfacing) device that reads molecules rather than physical signals. It has three parts: a sampling layer, usually a microfluidic channel that draws sweat or interstitial fluid off the skin and moves it to the sensor while limiting evaporation and contamination; a recognition layer that binds the target analyte, using an enzyme (for glucose or lactate), an ion-selective membrane (for sodium, potassium, chloride), or an aptamer or affinity element (for hormones, drugs, proteins); and a transduction layer that turns the binding event into an electrochemical current, a potential, or an optical colour change that a small electronics module reads out. Assembling all three onto a flexible, skin-conformal substrate is what makes continuous, non-invasive, out-of-lab biochemical monitoring possible.

## What it unlocks

The unlock is a biochemical layer on the wearable. Physical wearables already track heart rate, motion, and (via a separate enzymatic sensor) glucose; this primitive extends continuous monitoring to hydration and electrolytes, sweat metabolites like lactate, stress hormones like cortisol, and even circulating drug levels. The most mature product is hydration and heat-stress monitoring: Epicore Biosystems ships a commercial microfluidic sweat patch measuring sweat rate and sodium loss for athletes and industrial workers. The larger prizes are wearable therapeutic drug monitoring for narrow-therapeutic-index drugs and continuous hormone tracking for fertility and stress, which would move biochemistry that today requires a blood draw onto a passive, always-on device.

## Translational gap

Honest TRL is around 5 for the category, with the sweat-electrolyte arm ahead (about 6) and the hormone and drug arm behind (about 4). The core problem is that the fluids are not blood. Sweat and saliva concentrations depend on sweat rate, evaporation, skin contamination, and gland biology, so a raw reading does not automatically correspond to a blood value; each analyte needs its own validated sweat-to-blood (or saliva-to-blood) relationship before it is clinically meaningful. On top of that, each analyte needs its own calibration, sensors drift over a wear, and putting several analytes on one durable device without crosstalk is still unproven. Closing these needs sweat-rate normalisation, per-analyte agreement studies, and drift-corrected multiplexed sensor stacks.

## Notes

This is the broad wearable-biochemical category, deliberately kept as an aggregating primitive. It sits on top of narrower primitives that describe specific mechanisms: electrochemical-aptamer-biosensing (the reversible aptamer transduction), microneedle-isf-sensing (interstitial-fluid access), and flexible-epidermal-electronics (the skin-conformal substrate). Companies and ideas about a specific sensing chemistry should link to the narrower primitive; this one is the right link for a product-category or multi-analyte platform play. Closest companies (Epicore Biosystems, Nutromics, Xsensio) are mostly early-stage startups; status is commercial_early because the hydration arm has shipped while richer analyte panels are still emerging.
