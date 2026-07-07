---
id: nanopore-sensing
name: Nanopore sensing
aliases:
  - Nanopore sequencing
  - Single-molecule electrical sensing
  - Protein nanopore sequencing
  - Solid-state nanopore arrays
substrate_family: D
substrate_tags:
  - D.2
enabled_by: Engineered biological and solid-state nanometre pores plus AI basecallers trained on huge labelled current-signal libraries
mechanism: A single molecule threads through a nanometre pore and the ionic-current disruption is decoded into sequence or identity
new_capability: Reads a single molecule electrically as it passes through a nanoscale pore, no labels or amplification
what_it_could_unlock: Full-length single-molecule protein sequencing and single-molecule proteomics, the missing counterpart to DNA sequencing
capabilities:
- capability: DNA and RNA single-molecule sequencing
  what_it_could_unlock: Portable sequencing, pathogen genomics, methylation, transcriptomics
  mechanism: Nucleic acids passing through a pore modulate ionic current
  technology_readiness_level: 9
  translational_gap: Accuracy, cost, sample prep, clinical workflow
  closest_companies:
  - Oxford Nanopore
  - Qitan Technology
  - AxBio
- capability: Protein and peptide sequencing
  what_it_could_unlock: Direct proteomics, isoform detection, PTM detection, low-input diagnostics
  mechanism: Peptides translocate through a pore and generate sequence-dependent current signals
  technology_readiness_level: 4
  translational_gap: Protein unfolding, translocation control, signal decoding, throughput
  closest_companies:
  - Portal Biotech
  - UNOMR
  - Genopore
- capability: Molecular diagnostics and analyte sensing
  what_it_could_unlock: Label-free detection of proteins, metabolites, toxins, miRNAs
  mechanism: Target binding or passage through a pore changes the current blockade
  technology_readiness_level: 4
  translational_gap: Specificity, multiplexing, noisy signals, sample prep
- capability: Extracellular vesicle and particle profiling
  what_it_could_unlock: Exosome diagnostics, liquid biopsy, viral particle sizing
  mechanism: Particles passing through pores create size and charge dependent blockade signatures
  technology_readiness_level: 4
  translational_gap: Clogging, throughput, biological heterogeneity, standardisation
use_cases:
  - Native long-read DNA and RNA sequencing without PCR
  - Direct epigenetic modification calling, methylation without bisulfite
  - Full-length de novo protein sequencing and PTM detection
  - Exosome and peptide diagnostics, pathogen and infectious-disease IVD
technology_readiness_level: 3
evidence_level: regulatory_cleared
translational_gap: Protein sequencing is unsolved, no translocation motor, a 20-plus-residue alphabet with PTMs, noisy raw signal, sample prep and throughput friction
what_needs_to_happen: Reliable translocation control for proteins, larger labelled signal libraries, wafer-scale CMOS pore arrays reaching yield and cost
closest_companies:
  - Oxford Nanopore Technologies
  - Portal Biotech
  - UNOMR
  - Genopore
  - Qitan Technology
  - AxBio
  - Genvida
related_primitives:
- liquid-biopsy-multiomics
- spatial-omics
- raman-metasurface-sensing
closest_labs:
  - Giovanni Maglia lab (University of Groningen)
  - Cees Dekker lab (TU Delft)
  - Hagan Bayley lab (University of Oxford)
  - imec (Leuven), wafer-scale solid-state nanopore fabrication
commercialisation_status: commercial_scaled
regulatory_complexity: high
capex_intensity: high
defensibility: very-high
notes: TRL split. DNA and RNA sequencing is on-market (TRL 9); protein nanopore sequencing is lab-stage (TRL 3-4). Lower bound recorded here.
momentum:
  papers: 14207
  cagr_pct: 32.9
  fwci: 4.98
  industry_share_pct: 2.9
  citation_mass: 1572.0
  on_topic_n: 170
  buildable_whitespace: 15/25
  confidence: high
  status: early-startups
  as_of: 2026-07
last_verified: "2026-07-06"
---

## Mechanism
A single strand or molecule is driven through a nanometre pore in a membrane, and the ionic current passing through the pore is disrupted in a sequence-specific way that a basecaller decodes into identity. Two pore families exist: engineered biological protein pores (Oxford Nanopore, Maglia lineage) and solid-state or CMOS pores (imec, Genvida, AxBio, UNOMR). Because the molecule is read natively, no amplification is needed, so epigenetic modifications survive and can be called directly. The frontier is extending the same electrical readout from nucleic acids to full-length proteins.

## What it unlocks
DNA and RNA nanopore sequencing is a shipping commercial product: Oxford Nanopore reported FY2025 revenue of about GBP 224M, registered its first IVD product (GridION Dx), and has infectious-disease deals with Cepheid and bioMerieux. The transformative unlock ahead is protein sequencing. Oxford Nanopore now reads 20 to 30 peptides in a row from a library of over 500M peptide signals; Portal Biotech (a Groningen spin-off, USD 35M Series A, June 2025) targets the first full-length single-molecule protein sequencer; UNOMR (ETH Zurich, 2025) reads glycosylation via a solid-state interface nanopore. Applications span native long-read sequencing, direct methylation calling, single-molecule proteomics, PTM detection, and exosome/peptide diagnostics. Chinese players (Qitan RMB 700M Series C, AxBio ~USD 100M Series B backed by AstraZeneca-CICC) are commercial domestically on DNA.

## Translational gap
The honest TRL is a split. DNA/RNA sequencing including direct epigenetics is TRL 9, on-market and IVD-registered. Full-length protein nanopore sequencing is TRL 3-4: demonstrations of peptide reads and PTM detection exist, but no product does. The core protein blockers are that the 20-amino-acid alphabet plus modifications is far harder to distinguish than four bases, there is no motor enzyme to ratchet proteins through at controlled speed the way a polymerase paces DNA, the raw signal is noisy and demands AI basecallers trained on enormous labelled libraries, and non-uniform charge and folding make threading hard. Even for DNA, sample prep, per-read accuracy versus short reads, and throughput economics remain friction. The 2025-2026 inflection is imec's wafer-scale (300mm) EUV-fabricated solid-state nanopores plus a 256-channel event-driven CMOS readout ASIC, the manufacturing path that could scale solid-state pores like semiconductors.

## Notes
Independent replication of full de novo protein sequencing does not yet exist. Genopore and Genvida have thin, partly conflicting public data (Genopore founding year and HQ disagree across sources; Genvida has an undisclosed Series A and is described by observers as very early). Defensibility is very-high for leaders: Oxford Nanopore holds a roughly two-decade patent thicket over pores, enzymes, and basecallers; protein entrants defend via novel pore chemistry plus proprietary signal-decoding and labelled-data moats.
