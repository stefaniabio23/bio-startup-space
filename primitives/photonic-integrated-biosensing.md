---
id: photonic-integrated-biosensing
name: Photonic integrated biosensing
aliases:
  - Photonic integrated circuits (PICs) for biosensing
  - Nanophotonic evanescent field sensing (NES)
  - Silicon photonic biosensors
  - Ring-resonator biosensors
substrate_family: D
substrate_tags:
  - D.2
enabled_by: CMOS-compatible silicon and silicon-nitride photonic foundry platforms plus stable surface bio-functionalisation chemistry
mechanism: A bio-recognition layer on a waveguide captures targets, and the resulting refractive-index shift changes the chip's optical resonance
new_capability: Label-free, real-time, highly multiplexed biomarker detection on a low-cost lab-on-a-chip
what_it_could_unlock: Point-of-care multiplexed diagnostics reading many biomarkers at once from a single drop of sample
capabilities:
- capability: Label-free multiplexed protein detection
  what_it_could_unlock: Multi-biomarker blood or serum testing at point of care
  mechanism: Binding shifts optical resonance in waveguides or ring resonators
  technology_readiness_level: 7
  translational_gap: Assay menu, sample prep, regulatory validation
  closest_companies:
  - Delta Diagnostics
  - SurfixDx
- capability: Binding-kinetics measurement
  what_it_could_unlock: Faster affinity and biophysics assays outside large SPR systems
  mechanism: Real-time optical resonance tracks association and dissociation
  technology_readiness_level: 7
  translational_gap: Sensitivity, workflow adoption, cost
use_cases:
  - Multiplexed protein and biomarker panels at point of care
  - Early cancer detection, infectious-disease diagnostics
  - Real-time binding-kinetics measurement, label-free serology
  - Water, food, and environmental pathogen monitoring
technology_readiness_level: 5
evidence_level: human_pilot
translational_gap: Surface chemistry stability, fouling in real biofluids, low-cost photonic-fluidic-electronic packaging, and assay-level clinical validation
what_needs_to_happen: Robust functionalisation, manufacturable packaging and light coupling, and prospective clinical validation of assay menus
closest_companies:
  - Delta Diagnostics
  - Surfix Diagnostics (SurfixDx)
  - HyPhoX
related_primitives:
- raman-metasurface-sensing
- metamaterials-metasurfaces
- terahertz-metasurfaces
closest_labs:
  - Ghent University / imec Photonics Research Group (Baets, Bogaerts, Bienstman)
  - imec (Leuven)
  - LioniX International (TriPleX SiN PIC platform)
commercialisation_status: pilot_deployment
regulatory_complexity: high
capex_intensity: medium
defensibility: medium
notes: Transducer physics is mature and public; moats sit in surface chemistry, packaging, assay menus, and clinical data, not the core sensing principle.
momentum:
  papers: 555
  cagr_pct: 18.0
  fwci: 5.14
  industry_share_pct: 2.7
  citation_mass: 1616.0
  on_topic_n: 74
  buildable_whitespace: 16/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 15.1
  mean_fwci: 6.92
  industry_share: 0.026
  patent_total: 85
  patent_cagr_pct: -5.9
  company_share: 0.524
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism
Light confined in a silicon or silicon-nitride waveguide carries an evanescent tail that extends a short distance into the sample. A bio-recognition layer (antibodies, aptamers) on the waveguide surface captures target molecules, and the resulting local refractive-index change shifts the optical resonance of a ring resonator or the interference in a Mach-Zehnder or bimodal waveguide. The readout is label-free, real-time (it tracks binding kinetics), highly multiplexed (many rings per chip), and very sensitive. Because the chips ride existing CMOS-compatible silicon-on-insulator processes, cost at volume is the main lever.

## What it unlocks
A single low-cost chip can read many biomarkers simultaneously from one sample, moving multiplexed lab-grade assays to the point of care. Delta Diagnostics (Delft/Eindhoven) detects up to 16 biomolecules at once and raised a EUR 5.25M Series A in 2023. Surfix Diagnostics (Wageningen) differentiates on surface functionalisation chemistry, has a colorectal-cancer screening collaboration with the Netherlands Cancer Institute, and raised a bridge round led by PhotonVentures in 2024. HyPhoX (Germany, an IHP spin-off) combines optical, electrical, and microfluidic components on one CMOS chip, aimed at water, environmental, and point-of-care testing. The Dutch PhotonDelta / LioniX ecosystem supplies the enabling silicon-nitride PIC platforms. Genalyte's earlier silicon-ring "Maverick" serology showed the model can reach market.

## Translational gap
The photonics is largely solved; the bottlenecks are downstream. Surface functionalisation and bio-recognition chemistry must stay stable and reproducible (why Surfix's chemistry focus is strategic); sample handling in real matrices like blood and urine must avoid fouling; low-cost packaging integrating photonics, fluidics, and electronics with reliable light coupling remains hard; and assay-level clinical validation with manufacturing yield is only now being generated. Sensitivity is rarely the limiter. Robustness, specificity in complex samples, and cost at volume are. TRL sits around 5-6 for the leading Dutch players and 4-5 for HyPhoX; lower bound recorded. Non-clinical uses (water, food, environmental) are a lower-regulation, faster-revenue wedge.

## Notes
HyPhoX has thin funding data with no disclosed venture round, and no confirmation it uses graphene despite some secondary claims; its described stack is CMOS photonics plus electrical and microfluidic components. Capex is moderate because sensors reuse existing foundry platforms rather than bespoke fabs, reflected in the small (EUR 5-9M) rounds. Defensibility is medium: the transducer principle is public, so differentiation comes from chemistry, packaging know-how, assay menus, clinical data, and foundry relationships.
