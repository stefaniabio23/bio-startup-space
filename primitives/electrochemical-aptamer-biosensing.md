---
id: electrochemical-aptamer-biosensing
name: Electrochemical Aptamer-Based Biosensing
aliases:
  - EAB sensors
  - E-AB sensors
  - electrochemical aptamer-based biosensors
  - aptamer-FET
  - continuous molecular monitoring
substrate_family: D
substrate_tags:
  - D.1
  - D.3
enabled_by: SELEX-evolved DNA aptamers that fold on target binding, combined with redox reporters that convert that folding into a measurable electron-transfer change
mechanism: A redox-tagged, surface-tethered aptamer changes conformation when it binds its target, altering electron transfer to the electrode and producing a reversible, real-time current shift
new_capability: Reversible, reagent-free, continuous measurement of small molecules, drugs, hormones and proteins that have no natural enzyme, so no glucose-oxidase equivalent is required
what_it_could_unlock: A continuous glucose monitor equivalent for hundreds of analytes, closing the loop between drug dosing and real-time blood chemistry
capabilities:
- capability: Reversible electrochemical molecular recognition
  what_it_could_unlock: Continuous ISF, sweat, and saliva monitoring for hormones, drugs, cytokines, metabolites
  mechanism: Target binding changes aptamer conformation and moves a redox tag relative to the electrode
  technology_readiness_level: 5
  translational_gap: Fouling, drift, inter-person calibration, analyte ISF-to-blood validity
  closest_companies:
  - Level Zero Health
  - Adaptyx Biosciences
- capability: Label-free charge-based recognition (aptamer-FET)
  what_it_could_unlock: Low-power wearable or implantable sensors for proteins, hormones, metabolites
  mechanism: Target binding changes surface charge and gates a transistor channel
  technology_readiness_level: 4
  translational_gap: Debye screening in biofluids, non-specific binding, device reproducibility
- capability: Antibody-free point-of-care aptasensors
  what_it_could_unlock: Cheap home tests for small molecules, toxins, hormones, drugs
  mechanism: Aptamer binding triggers colour, fluorescence, nanoparticle aggregation, or strand displacement
  technology_readiness_level: 6
  translational_gap: Sensitivity and specificity versus antibodies in real samples
use_cases:
  - continuous therapeutic drug monitoring (vancomycin, chemotherapy)
  - continuous hormone tracking (cortisol, progesterone, estradiol, testosterone)
  - sepsis and cytokine monitoring
  - sweat and saliva analyte sensing
technology_readiness_level: 5
evidence_level: human_pilot
translational_gap: In-vivo biofouling and baseline drift degrade signal over hours to days; each aptamer needs its own calibration, and interstitial or sweat concentrations must be validated against blood before a reading is clinically actionable
what_needs_to_happen: Anti-fouling surface chemistry and drift-correction (reference channels, ratiometric or kinetic-differential measurement) that hold calibration for a wearable-length wear, plus regulatory-grade agreement studies versus blood assays
closest_companies:
  - Level Zero Health
  - Nutromics
  - Adaptyx Biosciences
  - Xsensio
related_primitives:
- microneedle-isf-sensing
- flexible-epidermal-electronics
- molecularly-imprinted-polymers
- triboelectric-nanogenerators
closest_labs:
  - Kevin Plaxco lab (UC Santa Barbara)
  - Netzahualcoyotl Arroyo-Curras lab (Johns Hopkins)
  - Tod Kippin lab (UC Santa Barbara)
commercialisation_status: pilot_deployment
regulatory_complexity: high
capex_intensity: medium
defensibility: high
notes: The defining bet is that aptamers generalise to any target where enzymes do not exist; the recurring failure mode is drift, not recognition.
momentum:
  papers: 620
  cagr_pct: 46.3
  fwci: 4.8
  industry_share_pct: 2.9
  citation_mass: 687.0
  on_topic_n: 35
  buildable_whitespace: 20/25
  confidence: medium
  status: early-startups
  as_of: 2026-07
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 20.0
  mean_fwci: 7.43
  industry_share: 0.031
  patent_total: 1035
  patent_cagr_pct: 16.9
  company_share: 0.219
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

An aptamer is a short single-stranded DNA sequence selected to bind one target. It is tethered to a gold electrode and carries a redox reporter such as methylene blue. When the target binds, the aptamer folds into a new shape that moves the reporter closer to or further from the electrode surface, changing the electron-transfer rate and therefore the measured current. Because binding is an equilibrium, the aptamer resets when the target dissociates, giving continuous and reversible readout rather than a one-shot test.

## What it unlocks

The unlock is generality. Enzyme-based sensors like the continuous glucose monitor only work for the handful of molecules with a convenient natural enzyme. Aptamers can in principle be raised against almost any small molecule, drug, hormone, or protein, so the same electrochemical readout hardware can address hundreds of analytes. In 2025 and 2026 the field crossed from bench to body: a wearable EAB patch demonstrated continuous vancomycin measurement in a first-in-human pilot, and Level Zero Health reported roughly 98 percent accuracy across four reproductive and stress hormones in interstitial fluid. Concrete near-term products are therapeutic drug monitoring for narrow-therapeutic-index drugs, continuous hormone tracking for fertility and TRT, and multi-analyte panels for sepsis and heart failure.

## Translational gap

The recognition chemistry works; the durability does not yet. Two problems dominate. First, biofouling: proteins and cells coat the electrode in vivo and suppress signal within hours to days, so wear time is short. Second, baseline drift: the raw current wanders for reasons unrelated to the target, so a single-channel reading cannot be trusted without frequent recalibration. Groups are attacking both with anti-fouling coatings, reference and blank channels, and ratiometric or kinetic-differential readout that cancel common-mode drift. There is also an analyte-validity question separate from the sensor: interstitial or sweat concentration must track blood concentration with a known, stable lag before the number means anything clinically. Honest TRL is 5, meaning validated prototypes in relevant biofluids and early human pilots, with several years of drift, calibration, and agreement work before a durable multi-day wearable clears regulators.

## Notes

The differentiator across companies is not the aptamer library, which is increasingly shared science, but the drift-suppression and calibration stack that turns a noisy electrode into a clinically trustworthy trend line.
