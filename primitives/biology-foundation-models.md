---
id: biology-foundation-models
name: Biology foundation models
aliases:
  - protein language models
  - genomic foundation models
  - virtual cell models
substrate_family: C
substrate_tags:
  - C.1
  - C.4
enabled_by: transformer architectures trained on internet-scale sequence and multi-omic data, plus the compute to train them
mechanism: a single large model learns the statistics of protein, DNA, RNA, or cell state and can be prompted or fine-tuned for many downstream tasks
new_capability: one pretrained model that predicts structure, function, and design across biology instead of one bespoke model per task
what_it_could_unlock: a general-purpose reasoning layer for biology that new sensors, therapeutics, and diagnostics all build on
capabilities:
  - capability: Sequence-to-function prediction
    what_it_could_unlock: Annotate variants, predict fitness, and prioritise targets from sequence alone
    mechanism: A pretrained language model scores or embeds sequences without task-specific labels
    technology_readiness_level: 6
    translational_gap: Generalisation to unseen families, calibration, wet-lab confirmation
    closest_companies:
      - EvolutionaryScale
      - Basecamp Research
  - capability: Virtual cell and perturbation prediction
    what_it_could_unlock: Predict how a cell responds to a drug or genetic edit in silico
    mechanism: Models trained on single-cell and perturbation atlases predict expression shifts
    technology_readiness_level: 4
    translational_gap: Data coverage, causal validity, out-of-distribution perturbations
    closest_companies:
      - Recursion
      - insitro
related_primitives:
  - protein-design-diffusion-models
  - ai-lnp-design
  - spatial-omics
  - multimodal-clinical-data-platform
use_cases:
  - target discovery and variant effect prediction
  - protein and antibody design priors
  - virtual cell and perturbation modelling
technology_readiness_level: 5
evidence_level: in_vitro
translational_gap: models are fluent on public sequence data but weak on causal, in-vivo, and clinical prediction, and validation still requires the wet lab
what_needs_to_happen: proprietary experimental data flywheels and benchmarks that measure real design or prediction success, not just held-out perplexity
closest_companies:
  - EvolutionaryScale
  - Basecamp Research
  - Recursion
  - insitro
closest_labs:
  - academic protein language model and single-cell foundation model groups
commercialisation_status: pilot_deployment
regulatory_complexity: low
capex_intensity: high
defensibility: high
notes: "Distinct from protein-design-diffusion-models: this is the general pretrained substrate (sequence and cell state), while diffusion models are the generative design layer that often sits on top of it."
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 202.2
  mean_fwci: 13.23
  industry_share: 0.029
  patent_total: 338
  patent_cagr_pct: 349.8
  company_share: 0.097
  as_of: '2026-07-07'
last_verified: "2026-07-07"
---

## Mechanism

A biology foundation model is trained self-supervised on very large corpora of protein sequences, genomes, or single-cell profiles, learning the underlying grammar of biology. Once pretrained, the same model produces embeddings or predictions for many tasks (variant effect, structure, function, design) with little or no task-specific data, the same pattern that made language models general.

## What it unlocks

A shared reasoning layer for biology. Instead of building a new model for each assay, teams prompt or fine-tune one model for target discovery, protein design priors, or virtual-cell perturbation prediction. In principle it becomes the substrate that therapeutics, diagnostics, and even sensor-design pipelines all draw on.

## Translational gap

The models are fluent on public sequence data but far weaker where it matters commercially: causal biology, in-vivo behaviour, and clinical outcome. Benchmarks reward held-out likelihood, not real design or prediction success. The companies that win will own proprietary experimental data flywheels that let the model learn from its own wet-lab feedback, which is the scarce ingredient, not the architecture.

## Notes

Kept separate from `protein-design-diffusion-models` on purpose: foundation models are the pretrained substrate, diffusion models are the generative design layer that frequently sits on top. Many molecule-generation companies touch both.
