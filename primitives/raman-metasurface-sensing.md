---
id: raman-metasurface-sensing
name: Raman metasurface sensing
aliases:
  - silicon nanophotonic Raman
  - metasurface-enhanced Raman spectroscopy
  - SERS metasurfaces
  - VISMO
  - vibrational spectroscopy with metasurface optics
substrate_family: D
substrate_tags:
  - D.2
enabled_by: high-Q silicon metasurfaces that concentrate light into resonant near-field hotspots, moving Raman spectroscopy off benchtop optics onto mass-producible chips
mechanism: engineered subwavelength structures create resonant field enhancement that amplifies weak inelastic (Raman) scattering, giving a label-free molecular vibrational fingerprint on a silicon chip
new_capability: chip-scale label-free molecular fingerprinting and single-molecule vibrational readout without dyes or amplification
what_it_could_unlock: de novo protein sequencing and low-cost multiplexed molecular diagnostics on a manufacturable chip
capabilities:
- capability: De novo protein sequencing
  what_it_could_unlock: Read a protein's residues directly from vibrational signatures
  mechanism: Metasurface hotspots amplify Raman scattering to single-molecule sensitivity on a silicon chip
  technology_readiness_level: 3
  translational_gap: Wafer-scale metasurface manufacturing, single-molecule reproducibility
  closest_companies:
  - Pumpkinseed Bio
- capability: Label-free molecular fingerprinting
  what_it_could_unlock: Multiplexed metabolite and biomarker diagnostics without binders
  mechanism: Metasurface-enhanced Raman reads a molecule's vibrational fingerprint directly
  technology_readiness_level: 3
  translational_gap: Specificity in complex biofluids, enhancement-factor reproducibility
use_cases:
  - de novo protein sequencing
  - label-free biomarker detection
  - metabolite and small-molecule fingerprinting
  - pathogen identification
technology_readiness_level: 3
evidence_level: in_vitro
translational_gap: manufacturing uniform high-Q metasurfaces at wafer scale, achieving specificity in complex biofluids, and getting reproducible enhancement factors from chip to chip
what_needs_to_happen: demonstrate reproducible single-molecule Raman on a manufacturable silicon chip and validate readout on real clinical analytes
closest_companies:
  - Pumpkinseed Bio
related_primitives:
- terahertz-metasurfaces
- photonic-integrated-biosensing
- metamaterials-metasurfaces
- nanopore-sensing
closest_labs:
  - DARPA PROSE performers
  - silicon photonics and nanophotonics groups
commercialisation_status: research_only
regulatory_complexity: high
capex_intensity: high
defensibility: high
notes: "Distinct from terahertz-metasurfaces: same idea of engineered metasurface light control, but a different physical mechanism (Raman scattering on silicon nanophotonics, not terahertz absorption). Created to give Pumpkinseed Bio a correct join key instead of borrowing the terahertz primitive."
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 10.7
  mean_fwci: 4.98
  industry_share: 0.053
  patent_total: 3851
  patent_cagr_pct: 7.3
  company_share: 0.214
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Raman spectroscopy reads the vibrational fingerprint of a molecule from inelastically scattered light, but the signal is intrinsically weak, so conventional systems need bulky lasers and optics. Engineered silicon metasurfaces (subwavelength resonant structures) concentrate incident light into intense near-field hotspots that amplify the Raman signal by orders of magnitude. Fabricating these structures with standard silicon lithography moves the whole readout onto a mass-producible chip.

## What it unlocks

Label-free molecular fingerprinting on a chip, with no dyes, no amplification, and no reference library of binders. The near-term prize the field is chasing is de novo protein sequencing, reading a protein's residues directly from vibrational signatures, which would break the same bottleneck nanopore proteomics targets from a different angle. Downstream: cheap multiplexed diagnostics and metabolite panels that read chemistry directly rather than through antibodies.

## Translational gap

The physics is demonstrated at chip scale but pre-product. The blockers are manufacturing uniform high-Q metasurfaces at wafer scale, getting reproducible signal enhancement chip to chip, and achieving analyte specificity in messy biofluids where many molecules scatter at once. No commercial device exists yet; the leading effort (Pumpkinseed's deSIPHR / VISMO) is DARPA and BARDA funded and still at the platform stage.

## Notes

Split out from `terahertz-metasurfaces` because the two share the metasurface concept but not the mechanism or the spectral band. If a future company does true terahertz-band metasurface sensing, keep it on that primitive; Raman-on-silicon belongs here.
