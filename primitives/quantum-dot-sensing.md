---
id: quantum-dot-sensing
name: Quantum dot sensing
aliases:
  - Perovskite quantum dot sensing
  - QD immunoassays
  - NIR quantum dot bio-imaging
  - QIRT-ELISA
substrate_family: D
substrate_tags:
  - D.2
  - D.4
enabled_by: Colloidal nanocrystals with size-tunable emission and near-unity quantum yield, plus microfluidic assay integration
mechanism: Quantum dot nanocrystals absorb broadly and emit narrow size-tunable colours at near-unity efficiency for multiplexed optical readout
new_capability: Multiplexed, near-infrared deep-tissue sensing and continuous real-time biomarker monitoring under a single excitation
what_it_could_unlock: Ultra-early miRNA liquid biopsy and continuous hormone monitoring (insulin, glucagon, glucose) plus deep-tissue tumour imaging
capabilities:
- capability: Optical fluorescence biosensing
  what_it_could_unlock: miRNA, pathogen, protein and metabolite assays
  mechanism: Target binding changes fluorescence intensity, FRET, or emission lifetime
  technology_readiness_level: 5
  translational_gap: Toxicity, stability, surface chemistry
- capability: Deep-tissue imaging
  what_it_could_unlock: NIR molecular tracking, tumour imaging, cell tracking
  mechanism: Tunable nanocrystals emit bright wavelength-specific signals
  technology_readiness_level: 4
  translational_gap: Clearance, toxicity, regulatory acceptance
- capability: Optoelectronic photodetection
  what_it_could_unlock: Compact biosensor cameras, wearable optical readers
  mechanism: Perovskite or QD materials convert light into high-gain electrical signals
  technology_readiness_level: 5
  translational_gap: Stability, encapsulation, manufacturing
use_cases:
  - Continuous multiplexed hormone monitoring (insulin, glucagon, glucose, lactate)
  - Ultra-early sub-femtomolar miRNA liquid biopsy
  - NIR deep-tissue tumour imaging and image-guided surgery
  - Targeted cancer therapy and cellular tracking
technology_readiness_level: 4
evidence_level: in_vivo_animal
translational_gap: Perovskite QDs contain lead and degrade in biofluids, so in-vivo toxicity and stability are the gating risks, not physics
what_needs_to_happen: Lead-free chemistries, robust encapsulation, and a regulatory toxicology package for any in-vivo nanomaterial use
closest_companies:
  - Quantum Orbit Labs (unverified, no public footprint)
related_primitives:
- nv-diamond-quantum-sensing
- photonic-integrated-biosensing
closest_labs:
  - Poudineh Lab (University of Waterloo), QIRT-ELISA continuous monitoring
  - NIR and perovskite QD bio-imaging groups (dispersed)
commercialisation_status: preclinical
regulatory_complexity: high
capex_intensity: medium
defensibility: medium
notes: TRL split. QD immunoassays and continuous monitoring are TRL 4-6 (ex-vivo validated); in-vivo perovskite use is TRL 2-3, gated by lead toxicity and stability. Lower bound recorded.
momentum:
  papers: 581
  cagr_pct: 29.7
  fwci: 7.17
  industry_share_pct: 5.4
  citation_mass: 1791.0
  on_topic_n: 185
  buildable_whitespace: 16/25
  confidence: high
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 32.6
  mean_fwci: 4.6
  industry_share: 0.13
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism
Semiconductor and nanocrystal quantum dots absorb broadly and emit narrow, size-tunable colours at near-unity photoluminescence quantum yield with tight linewidths. A single UV or blue excitation can drive several QD colours at once, enabling spectral multiplexing. Perovskite QDs (for example CsPbBr3) push brightness and colour purity further and add strong X-ray scintillation, but they are ionic and fragile. Bio applications use near-infrared (700 to 900 nm) emission for deep-tissue in-vivo imaging with minimal autofluorescence, tumour-targeted imaging, cellular tracking, sub-femtomolar miRNA liquid biopsy, and continuous multiplexed monitoring of glucose, insulin, glucagon, and lactate.

## What it unlocks
The near-term unlock is continuous, multiplexed biomarker monitoring that avoids in-vivo exposure. The Poudineh Lab at the University of Waterloo built QIRT-ELISA, a bead-based quantum-dot immunoassay integrated with multi-module microfluidics that detects insulin and glucagon at low-picomolar levels in whole blood and lactate and glucose in ex-vivo lung perfusate, monitoring four biomarkers continuously in multiplex (peer-reviewed in Advanced Science, 2025). Longer-term applications include ultra-early miRNA liquid biopsy (lead-free Cs3Bi2Br9 photoelectrochemical sensors reach sub-femtomolar sensitivity), NIR deep-tissue tumour imaging and image-guided surgery, and targeted cancer therapy. Quantum Orbit Labs is named as an industry player but has no verifiable public footprint.

## Translational gap
The TRL is split. Conventional QD bio-imaging and QD immunoassays are TRL 4-6, validated in relevant and ex-vivo environments, with QIRT-ELISA a working multiplexed platform on real blood and perfusate. Perovskite QDs specifically for in-vivo use are TRL 2-3, lab proof-of-concept with toxicity and stability unsolved; lower bound recorded. The crux is not physics but toxicity plus stability. Perovskite QDs contain lead, and regulators typically require demonstrated Pb release below about 0.1 ppm over 30 days in simulated biofluids before in-vivo use. Perovskites are ionic and degrade on exposure to moisture, oxygen, light, heat, and polar biological solvents, causing halide segregation and luminescence loss; encapsulation mitigates but adds complexity. Lead-free variants (Bi, Sn based) trade brightness for regulatory acceptability and are the likely in-vivo route. Ex-vivo and in-vitro diagnostics are the near-term commercial wedge and sidestep the toxicity gate.

## Notes
Quantum Orbit Labs could not be verified from public sources (no funding, product, or press); flagged as stealth or very early with no stage assigned. Capex is moderate because colloidal nanocrystal synthesis is accessible wet chemistry, cheaper than photonic nanofabrication; the microfluidics and assay integration is the main build cost. Defensibility is medium: core QD chemistry is broadly published and partly commoditised via display supply chains, so the durable moat is application-specific formulation, targeting ligands, encapsulation, system integration, and the toxicity-solving lead-free chemistries plus regulatory data package.
