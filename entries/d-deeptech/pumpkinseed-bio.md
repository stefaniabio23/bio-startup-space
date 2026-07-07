---
id: pumpkinseed-bio
name: Pumpkinseed Bio
website: pumpkinseed.bio
founded: 2021
area: single-molecule protein sequencing
substrate_family: D
substrate_tags:
  - D.2
technology_platform_ids:
  - raman-metasurface-sensing
technology_platform_name: deSIPHR silicon nanophotonic Raman metasurface
funding_stage: series-a
total_funding_usd_m: 20
public: false
business_model: fee_for_service_research
buyer:
  - pharma
  - biotech
  - academic_lab
customer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: light
tam_usd_m: 10000
new_capability: Label-free single-molecule de novo protein sequencing on a nanophotonic metasurface chip, reading full sequences including post-translational modifications and non-canonical amino acids without a reference catalog.
data_centrality: core-moat
data_ownership:
  - generated-in-house
  - proprietary
moat:
  - IP
  - wet-lab
  - data
primary_value_chain_layer: single-molecule optical readout
input:
  - purified protein samples
transformation_type: measure
output:
  - single-molecule de novo protein sequences with PTMs and modifications
technology_readiness_level: 4
limiting_factor: Scaling read length to full-length proteins (300+ residues) and throughput while keeping single-molecule Raman signals reliable.
commercialisation_status: pilot_deployment
barrier_to_entry: very-high
barrier_to_entry_logic: High-Q metasurface nanophotonic chips fabricated in standard semiconductor processes that concentrate light below the size of a single protein to amplify Raman scattering, plus the proteomic data it generates.
hardness: very-hard
hardness_reason: Making single-molecule Raman detection of amino acids work reliably at scale on a chip, then reconstructing full protein sequences including modifications with no reference library.
last_verified: "2026-07-06"
---

## One-liner

The "Biology Mining Company" building a nanophotonic chip (deSIPHR / VISMO) for de novo single-molecule protein sequencing, reading the proteome's hidden data layer including modifications.

## Problem

Proteins carry biology's most valuable functional information, but most of it is unreadable at single-molecule resolution. Mass spectrometry misses low-abundance species, post-translational modifications, and non-canonical amino acids, and it depends on reference catalogs.

## Workaround

Mass spectrometry and antibody-based assays, which are ensemble methods that need references, undercount rare proteoforms, and cannot cleanly resolve modifications at the single-molecule level.

## Entry wedge

Paid contracts with biopharma and government to read hard proteomic questions: over USD 12M in committed near-term revenue across Genentech (immunology, precision medicine), DARPA, and BARDA (biothreat detection).

## Method

Vibrational Spectroscopy with Metasurface Optics (VISMO), commercialized as the deSIPHR platform. High-Q metasurfaces, nanostructured silicon chips developed at Stanford, concentrate light into a volume smaller than a single protein, amplifying Raman scattering enough to read single molecules. The chip carries over 100 million sensors per square centimeter and reads sequences label-free without a reference catalog.

## Validated by

USD 20M Series A to scale deSIPHR. NSF SBIR Phase I for VISMO. Over USD 12M committed revenue from Genentech, DARPA, and BARDA. Backed by DARPA's PROSE program, targeting full-length proteins of 300+ residues by 2028.

## Competes with

Other next-generation protein sequencing platforms (Quantum-Si, Nautilus Biosciences, Erisyon) and high-end mass spectrometry.

## Complements

Biopharma proteomics and precision-medicine programs, biosecurity and biothreat detection efforts, and AI protein-modeling groups needing ground-truth proteoform data.

## Value chain position

**Downstream of:** semiconductor metasurface chip fabrication and Raman nanophotonics.
**Upstream of:** biopharma discovery, precision medicine, and bio-AI training data.

## Gaps

Read length still short of full-length proteins; 300+ residue goal targeted for 2028. Revenue is contract-based, not a shipping commercial product. Pre-clinical for any diagnostic use.

## Notes

Palo Alto, CA. Stanford spin-out (high-Q metasurface work, co-founder Jack Hu). IMPORTANT platform note: Pumpkinseed's technology is Raman spectroscopy on silicon nanophotonic metasurfaces, not terahertz sensing. Linked to the terahertz-metasurfaces primitive as the closest metasurface-optics match in the enum; the shared primitive is engineered metasurface light control, not the THz band.

## News signals
- 2026: Raised USD 20M Series A to scale deSIPHR nanophotonic protein sequencing. (source: https://www.pumpkinseed.bio/news/pumpkinseed-raises-20m-series-a-to-unlock-biologys-most-valuable-hidden-data-layer)
