---
id: protein-design-diffusion-models
name: Protein design / diffusion models
aliases:
  - de novo protein design
  - generative protein design
  - diffusion protein models
  - inverse folding
substrate_family: C
substrate_tags:
  - C.1
  - C.2
enabled_by: Diffusion and flow-matching generative models plus inverse-folding networks trained on structural data, building on AlphaFold-grade structure prediction and RFdiffusion
mechanism: A generative model samples a protein backbone conditioned on a target (an epitope, active site, or ligand), then an inverse-folding model designs the sequence that folds into it, directly modelling the interaction interface
new_capability: Designs binders, enzymes, and receptors from scratch against a chosen target rather than screening or evolving from natural scaffolds
what_it_could_unlock: Bespoke biosensors, programmable smart therapeutics, synthetic antibodies against undruggable targets, and de novo gene-editor components
capabilities:
- capability: De novo binders
  what_it_could_unlock: Synthetic antibodies, biosensor capture reagents, targeted therapeutics
  mechanism: Models design proteins with desired binding interfaces
  technology_readiness_level: 6
  translational_gap: Wet-lab validation, affinity, specificity, developability
- capability: Enzyme design
  what_it_could_unlock: New biocatalysts, metabolic sensors, therapeutic enzymes
  mechanism: Models generate active-site geometry and stabilising scaffolds
  technology_readiness_level: 5
  translational_gap: Activity, stability, screening burden
- capability: Molecular machines
  what_it_could_unlock: Switches, pores, and multi-state systems that integrate binding and conformational change, plus programmable receptors and smart CARs
  mechanism: Designed proteins couple ligand binding to a conformational or signalling state change
  technology_readiness_level: 3
  translational_gap: Multi-state design reliability, cell validation, immunogenicity, safety switches
use_cases:
  - De novo antibodies and binders against hard targets
  - Custom enzymes and biocatalysts
  - Engineered receptors and biosensors
  - Novel components for gene editors and delivery
technology_readiness_level: 5
evidence_level: in_vitro
translational_gap: Wet-lab validation is the bottleneck; hit rates and affinities are rising but designed proteins still fail on developability (stability, expression, immunogenicity, aggregation), and no de novo-designed protein drug is approved
what_needs_to_happen: Higher first-pass experimental success, developability baked into generation, cheaper high-throughput characterisation, and a clinical-stage asset that validates the path
closest_companies:
  - Chai Discovery
  - Latent Labs
  - Nabla Bio
  - Profluent
  - Basecamp Research
related_primitives:
- biology-foundation-models
- ai-lnp-design
closest_labs:
  - Baker Lab (UW Institute for Protein Design)
  - Ovchinnikov Lab
commercialisation_status: preclinical
regulatory_complexity: high
capex_intensity: medium
defensibility: high
notes: These are model-substrate companies. 2025 results (Latent-X, Nabla, Chai) report sub-micromolar binder success up to ~66% on some benchmarks and macrocycle hit rates >90% on select targets, but developability and in-vivo function remain unsolved.
momentum:
  papers: 5016
  cagr_pct: 115.9
  fwci: 23.44
  industry_share_pct: 9.7
  citation_mass: 2750.0
  on_topic_n: 31
  buildable_whitespace: 20/25
  confidence: medium
  status: early-startups
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 27.0
  mean_fwci: 18.47
  industry_share: 0.1
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

The design loop has two learned steps. A generative model (diffusion or flow-matching over atomic or backbone coordinates) proposes a 3D structure conditioned on the target, for example an epitope to bind or a transition state to catalyse. An inverse-folding model then writes the amino-acid sequence predicted to fold into that structure. Newer all-atom models (Latent-X, BoltzGen-class) design the full structure and sequence jointly while explicitly modelling the non-covalent contacts that make binding specific, which raises hit rates over earlier backbone-first pipelines.

## What it unlocks

Screening and directed evolution start from natural scaffolds and are slow and target-limited. Generative design starts from the target and invents the protein, so it can reach interfaces that natural repertoires miss. That opens de novo antibodies and binders against historically undruggable or multipass membrane targets, custom enzymes, engineered receptors and biosensors, and novel components for gene editors and delivery systems. In principle any protein function specifiable as a structural objective becomes a design problem rather than a discovery gamble.

## Translational gap

Honest TRL is 5. Models now produce experimentally validated binders with good affinity and, on some benchmarks, high hit rates, so the core capability is proven in vitro. The gap is everything after the first binder: developability (stability, expression yield, aggregation, immunogenicity), in-vivo function and half-life, and manufacturability. Wet-lab validation throughput gates iteration, and no de novo-designed protein is an approved drug. Moving forward needs higher first-pass success, developability constraints inside the generator, and a clinical asset that de-risks the modality.

## Notes

Chai Discovery, Latent Labs, Nabla Bio, Profluent, and Basecamp Research are model-substrate companies; their moat is the model plus proprietary structural or interaction data feeding it. The academic anchor is the Baker Lab (RFdiffusion), whose 2024 Nobel underlined the field.
