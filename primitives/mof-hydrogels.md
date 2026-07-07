---
id: mof-hydrogels
name: MOF Hydrogels and Nanoscale Metal-Organic Frameworks
aliases:
  - MOF hydrogels
  - metal-organic frameworks
  - nMOFs
  - nanoscale metal-organic frameworks
  - porous coordination polymers
substrate_family: D
substrate_tags:
  - D.2
  - D.4
enabled_by: Self-assembly of metal-ion nodes and organic linkers into crystalline frameworks with the highest known surface areas and precisely tunable pores, embedded in soft hydrogels for body-facing use
mechanism: Ordered, ultra-porous MOF cages selectively capture or load target molecules by size and chemistry; a hydrogel matrix makes them wearable, processable and skin-compatible
new_capability: Molecular sieving and high-capacity drug loading with pore-level selectivity, delivered in a soft body-interfacing format rather than a rigid powder
what_it_could_unlock: Selective sweat and interstitial capture patches that preconcentrate scarce biomarkers, and single carriers that co-deliver multiple cancer drugs on a controlled release schedule
capabilities:
- capability: Selective molecular capture
  what_it_could_unlock: Sweat or ISF patches that enrich low-abundance biomarkers
  mechanism: Tunable pores trap molecules by size, charge, affinity or hydrophobicity
  technology_readiness_level: 3
  translational_gap: Reproducibility, swelling, skin safety, leaching
- capability: Enzyme and catalyst stabilisation
  what_it_could_unlock: Longer-lived enzymatic biosensors for metabolites
  mechanism: A MOF or hydrogel matrix protects enzymes and controls analyte diffusion
  technology_readiness_level: 3
  translational_gap: Enzyme lifetime, hydration, biofouling, CMC
- capability: Multi-drug nMOF therapeutic loading
  what_it_could_unlock: Combination chemo plus radiosensitiser delivery for cancer
  mechanism: Nanoscale MOF pores co-load and release multiple active agents at the tumour
  technology_readiness_level: 5
  translational_gap: CMC, biodistribution, clinical validation
  closest_companies:
  - Coordination Pharmaceuticals
  - Tarsis Technology
use_cases:
  - selective sweat or ISF capture and preconcentration patches
  - toxin and metabolite scavenging
  - multi-drug and immunotherapy cancer delivery
  - wound-healing composites and biosensor recognition layers
technology_readiness_level: 3
evidence_level: in_vivo_animal
translational_gap: Batch-to-batch reproducibility of framework and pore quality is hard; hydrogels swell and change transport over time, MOF stability in biofluids is variable, and long-term skin contact and biocompatibility are unproven
what_needs_to_happen: Reproducible synthesis at controlled pore quality, framework and hydrogel stability under sweat and skin conditions, and biocompatibility and clearance data for the specific metal-linker chemistry used
closest_companies:
  - Coordination Pharmaceuticals
  - Tarsis Technology
related_primitives:
- molecularly-imprinted-polymers
- mxene-2d-materials
closest_labs:
  - Wenbin Lin lab (University of Chicago)
  - Omar Yaghi lab (UC Berkeley)
commercialisation_status: preclinical
regulatory_complexity: high
capex_intensity: medium
defensibility: high
notes: The therapeutic nMOF branch is furthest along, with clinical-stage cancer candidates; the wearable capture branch is earlier and mostly academic. Do not average the two.
momentum:
  papers: 93418
  cagr_pct: 24.9
  fwci: 7.68
  industry_share_pct: 2.6
  citation_mass: 1200.0
  on_topic_n: 117
  buildable_whitespace: 20/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 24.5
  mean_fwci: 4.34
  industry_share: 0.021
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Metal-organic frameworks are crystalline solids built by letting metal-ion nodes and organic linker molecules self-assemble into an ordered, cage-like lattice. The result is extreme, tunable porosity: surface areas among the highest of any material and pore sizes that can be tuned to a target molecule, so a MOF can act as a molecular sieve that captures or releases specific species by size and chemistry. At nanoscale (nMOF) these become drug carriers with very high loading capacity and intrinsic biodegradability. Embedding MOFs in a hydrogel solves their brittleness and low processability, giving a soft, skin-compatible, and often more conductive composite suited to wearables and wound dressings.

## What it unlocks

Two distinct capabilities sit under this primitive. In diagnostics, MOF hydrogels can selectively capture and preconcentrate scarce analytes from sweat or interstitial fluid, raising a biomarker above a sensor's detection limit and filtering out interferents. In therapeutics, nMOFs load and co-deliver multiple drugs, and their controlled release plus immune-stimulating chemistry has made them a vehicle for combination cancer immunotherapy. Coordination Pharmaceuticals, founded on Wenbin Lin's University of Chicago nMOF technology, has advanced multiple anticancer nMOF candidates into clinical investigation, the most mature commercial expression of the class. The wearable capture applications, associated with players like Tarsis Technology, remain earlier and largely academic.

## Translational gap

Reproducibility is the recurring wall: framework crystallinity and pore quality vary batch to batch, and diagnostics and drug products both demand tight, repeatable specifications. On the wearable side, the hydrogel matrix swells and its transport properties drift over time, MOF stability in the ionic, enzyme-rich environment of sweat or blood is inconsistent, and long-term skin contact and biocompatibility for a given metal-linker pair are largely unproven. Honest TRL is 3 for the primitive as a whole, dragged up by the clinical-stage therapeutic nMOFs and down by the mostly-benchtop capture patches, so it should be read as a wide 2 to 6 spread rather than a single point. The unlock differs by branch: clinical safety and manufacturing for the drug carriers, and stability plus biocompatibility over wear time for the capture patches.

## Notes

Averaging the therapeutic and diagnostic branches into one readiness number is misleading. Coordination Pharmaceuticals being in the clinic says nothing about whether a MOF-hydrogel sweat patch will hold up on skin for a week.
