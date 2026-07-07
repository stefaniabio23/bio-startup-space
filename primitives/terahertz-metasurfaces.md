---
id: terahertz-metasurfaces
name: Terahertz metasurfaces
aliases:
  - THz metasurface biosensing
  - Metasurface-enhanced terahertz spectroscopy
  - Vibrational spectroscopy with metasurface optics (VISMO, Raman variant)
substrate_family: D
substrate_tags:
  - D.2
enabled_by: Subwavelength metasurface resonators that confine weak terahertz fields into deep-subwavelength hotspots with high Q-factors
mechanism: A metasurface concentrates the terahertz field so low-energy molecular vibrations produce a label-free spectral fingerprint
new_capability: Label-free molecular fingerprinting of conformational and vibrational modes that infrared and optical methods miss
what_it_could_unlock: Non-contact skin-chemistry and hydration sensing, and reagent-free molecular identification of proteins and pathogens
capabilities:
- capability: Label-free hydration and tissue-property sensing
  what_it_could_unlock: Non-contact skin hydration, burns, oedema, tissue composition
  mechanism: THz absorption and scattering change with water content and tissue structure
  technology_readiness_level: 4
  translational_gap: Water dominance, hardware cost, clinical specificity
- capability: Molecular fingerprinting
  what_it_could_unlock: Protein, pathogen, metabolite, or biofluid identification
  mechanism: Metasurface-enhanced resonances shift with molecular vibrational and refractive signatures
  technology_readiness_level: 3
  translational_gap: Specificity in mixed fluids, reference libraries, sensitivity
use_cases:
  - Non-contact skin hydration and skin-chemistry sensing
  - Trace metabolite, ctDNA, and cancer-cell biomarker detection
  - Pathogen and protein sensing, thin-film assays
  - De novo protein sequencing (Raman-metasurface adjacency)
technology_readiness_level: 2
evidence_level: in_vitro
translational_gap: Water absorbs terahertz strongly yet biology is aqueous, plus poor multiplex specificity and bulky, costly terahertz hardware
what_needs_to_happen: Solve the water paradox for in-vivo use, improve spectral specificity, and miniaturise low-cost terahertz sources and detectors
closest_companies:
  - Terahertz Technologies (unverified as a biosensing company)
  - THzNanoVision (unverified, no public footprint)
  - "no verified pure-play THz biosensing company; Pumpkinseed Bio is Raman, see raman-metasurface-sensing"
related_primitives:
- raman-metasurface-sensing
- metamaterials-metasurfaces
- photonic-integrated-biosensing
closest_labs:
  - Hatice Altug lab (EPFL), metasurface-enhanced IR molecular fingerprinting
  - Dispersed THz quasi-BIC and all-dielectric metasensor groups
commercialisation_status: research_only
regulatory_complexity: high
capex_intensity: high
defensibility: high
notes: THz biosensing is early and water-limited (TRL 2-3). The commercially credible vibrational-metasurface activity has migrated to Raman/IR (Pumpkinseed's VISMO), which is a distinct primitive.
momentum:
  papers: 6542
  cagr_pct: 9.9
  fwci: 6.17
  industry_share_pct: 4.2
  citation_mass: 1557.0
  on_topic_n: 191
  buildable_whitespace: 12/25
  confidence: high
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 39.2
  mean_fwci: null
  industry_share: null
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism
Terahertz spectroscopy (0.1 to 10 THz) probes low-energy molecular motions: hydrogen bonds, collective vibrational and rotational modes, and protein conformational states, yielding a label-free fingerprint. The core problem is that THz wavelengths (tens to thousands of microns) are enormous relative to nanometre-scale biomolecules, so light-matter coupling is weak. Metasurfaces (all-dielectric, anapole, or quasi-bound-states-in-the-continuum resonator arrays) confine the THz field into deep-subwavelength hotspots, raising sensitivity by orders of magnitude and delivering high Q-factors. A correction on branding: Pumpkinseed Bio's VISMO ("Vibrational Spectroscopy with Metasurface Optics") is Raman-based on a silicon nanophotonic chip, not terahertz, so it is an adjacent but distinct primitive.

## What it unlocks
Metasurface-enhanced THz sensing promises reagent-free identification of molecules by their vibrational fingerprint, including trace metabolites, circulating tumour DNA, skin-cancer cells, and thin protein films, plus non-contact skin hydration and skin-chemistry readout. The strongest real company in the vibrational-metasurface space is Pumpkinseed Bio (San Francisco), whose deSIPHR silicon photonic chip packs about 100 million sensors per square centimetre, each amplifying Raman scattering more than ten-million-fold to read amino acids one at a time. Pumpkinseed raised a USD 20M Series A (surfaced May 2026, co-led by NfX and Future Ventures) with DARPA PROSE backing, targeting full-length proteins by 2028. The anchor academic group for the broader field is Hatice Altug's lab at EPFL, working on angle-multiplexed all-dielectric metasurfaces and AI-coupled IR sensors for neurodegenerative-protein biomarkers.

## Translational gap
THz-specific metasurface biosensing is TRL 2-4, mostly lab demonstrations on model analytes with almost no real-biofluid or clinical validation; lower bound recorded. The defining obstacle is the water paradox: THz is strongly absorbed by water, yet biology exists only in aqueous media, so every workaround (defined-height chambers, THz-ATR, microfluidic confinement, dried films) compromises the non-contact or in-vivo promise. Specificity is limited because broad overlapping THz bands make multiplexed identification in complex samples hard. Hardware is bulky, expensive, and often photoconductive or cryogenic, with miniaturisation and cost unsolved for point-of-care or wearable skin sensing. The commercially credible activity is migrating to Raman and IR metasurfaces, which keep the "read vibrations directly, enhanced by nanophotonics" thesis while sidestepping THz's water and hardware penalties.

## Notes
"Terahertz Technologies" appears to be a THz test-instrument and photodetector vendor, not a biosensing metasurface startup, and "THzNanoVision" has no verifiable company footprint; both are flagged as thin/unverified. Defensibility is high in principle because metasurface designs and nanofab processes are patentable and hard to replicate (DARPA backing signals a strategic moat), but THz hardware immaturity limits near-term moat capture.
