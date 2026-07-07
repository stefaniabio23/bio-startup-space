---
id: metamaterials-metasurfaces
name: Metamaterials and metasurfaces
aliases:
  - Optical metasurfaces
  - Metalenses / flat optics
  - Metamaterial micro-optics
substrate_family: D
substrate_tags:
  - D.2
enabled_by: CMOS-compatible lithography of subwavelength pillar arrays that replace bulky multi-element glass optics with a single flat layer
mechanism: Subwavelength nanostructures impose an engineered phase, amplitude, and polarisation profile on light in one flat, mass-producible element
new_capability: Collapsing high-resolution imaging and polarisation optics to hair-width scale that fits inside needles and catheters
what_it_could_unlock: Label-free biomarker and chiral sensing plus imaging optics small enough for biopsy needles, endoscopes, and retinal or brain implants
capabilities:
- capability: Optical and THz signal amplification
  what_it_could_unlock: Label-free biomarker and pathogen sensing
  mechanism: Sub-wavelength resonators amplify light-matter interaction
  technology_readiness_level: 4
  translational_gap: Specificity, fouling, scalable fabrication
- capability: Wavefront shaping for implants and devices
  what_it_could_unlock: Better retinal, neural, or acoustic interfaces
  mechanism: Engineered structures shape light or sound at small scale
  technology_readiness_level: 4
  translational_gap: Biocompatibility, implantation, clinical benefit
  closest_companies:
  - Metalenz
  - Leadoptik
use_cases:
  - Hair-width imaging probes inside biopsy needles and catheters
  - Endoscopy and OCT with single flat imaging elements
  - Polarimetric / chiral biomarker sensing (e.g. Polar ID biometrics)
  - Label-free low-concentration biomarker detection, implant optics
technology_readiness_level: 3
evidence_level: real_world_proven
translational_gap: Medical-grade metasurface yield, sterile single-use integration into needles, achromatic broadband performance, and clinical validation
what_needs_to_happen: Manufacturable medical-grade probes, regulatory validation of imaging devices, and broadband achromatic designs
closest_companies:
  - Metalenz
  - Leadoptik
related_primitives:
- terahertz-metasurfaces
- raman-metasurface-sensing
- photonic-integrated-biosensing
- topological-photonics
closest_labs:
  - Federico Capasso lab (Harvard SEAS)
  - Melissa Suter lab (Massachusetts General Hospital), nano-optic OCT endoscope
commercialisation_status: commercial_scaled
regulatory_complexity: high
capex_intensity: high
defensibility: high
notes: TRL split. Consumer/sensing metaoptics ship in over 140M devices (TRL 8-9); the medical imaging-probe wedge is early (TRL 3-5). Lower bound of the medical path recorded.
momentum:
  papers: 41315
  cagr_pct: 20.5
  fwci: 15.04
  industry_share_pct: 4.1
  citation_mass: 2346.0
  on_topic_n: 193
  buildable_whitespace: 12/25
  confidence: high
  status: early-startups
  as_of: 2026-07
scan:
  bucket: over-patented-crowded
  paper_cagr_pct: 19.4
  mean_fwci: 7.14
  industry_share: 0.009
  patent_total: 3503
  patent_cagr_pct: 44.2
  company_share: 0.571
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism
Metasurfaces are nanofabricated arrays of subwavelength pillars or fins (dielectric nanostructures) that impose an engineered phase, amplitude, and polarisation profile on transmitted light, replacing a stack of bulky glass lenses with a single flat, lithographically mass-produced layer. Because they are made on standard semiconductor lines, they scale in cost and volume like chips. In biosensing and imaging this enables collapsing high-resolution optics to hair-width diameters that fit inside catheters and biopsy needles, single-element polarisation (chiral / polarimetric) sensing, and extended depth-of-focus or aberration correction for endoscopy and OCT.

## What it unlocks
Metalenz (Boston, spun out of Federico Capasso's Harvard group) is the proof that metasurface optics is a shipping, high-volume technology: its Polar ID metasurface polarisation-imaging system does anti-spoof face-unlock, and its licensee STMicroelectronics has shipped over 140 million metasurface optics and FlightSense modules using Metalenz IP since 2022, with the two firms broadening their license in July 2025. Metalenz has raised roughly USD 47M total (USD 30M Series B in 2022). The biomedical wedge is Leadoptik (Bay Area), whose dielectric-metasurface probe shrinks imaging optics to human-hair scale for its single-use "Last Inch Assessment" probe that images deep in the lung and integrates with biopsy needles for live guidance; it raised a USD 5M seed (MetaVC, Sony Innovation Fund, SOSV). Capasso's lab, with MGH, built the canonical nano-optic OCT endoscope integrating a metalens into a catheter.

## Translational gap
The TRL is bimodal. Consumer and sensing metaoptics (Metalenz plus ST) are TRL 8-9, in mass production across more than 100 million devices. The medical imaging-probe path (Leadoptik, metalens endoscopy and OCT) is TRL 3-5: lab-validated with early clinical translation but limited human and regulatory data; lower bound recorded. The medical blockers are manufacturing consistency and yield of medical-grade metasurfaces, sterile single-use integration into needles and catheters, regulatory validation as imaging devices, and broadband achromatic performance across the imaging band (chromatic dispersion was historically a metalens weakness now being engineered around). The physics risk is low; the consumer side has already crossed the manufacturing gap, de-risking the fab story for medical use.

## Notes
This is the most de-risked primitive in the photonics set. The licensing and foundry model (Metalenz to ST and UMC) is capital-light for the IP owner even though the absolute capex of semiconductor lithography is high. Defensibility is high via dense patent estates (Metalenz from Capasso IP, Leadoptik patents across three continents) plus nanofab process know-how and foundry partnerships; the main competitive threat is a growing crowd of metalens startups and academic groups.
