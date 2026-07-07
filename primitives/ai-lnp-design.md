---
id: ai-lnp-design
name: AI for mRNA / LNP design
aliases:
  - ML-guided lipid nanoparticle design
  - AI ionizable lipid design
  - in-silico LNP optimisation
  - AI mRNA sequence optimisation
substrate_family: C
substrate_tags:
  - C.1
  - C.2
enabled_by: Machine-learning models trained on large, systematically generated LNP screening datasets and mRNA expression data, coupled to high-throughput formulation and in-vivo readouts
mechanism: ML models learn structure-property relationships across chemical libraries to predict ionizable-lipid performance, endosomal escape, and tissue tropism, and to optimise mRNA UTRs and codons, then generative and evolutionary methods propose new candidates
new_capability: Replaces trial-and-error formulation chemistry with in-silico design of novel ionizable lipids and expression-optimised mRNA, aimed directly at extrahepatic targeting
what_it_could_unlock: Cell- and tissue-selective LNPs (SORT-style) and high-expression mRNA designed computationally rather than screened, breaking the liver-targeting default
capabilities:
- capability: Ionizable lipid and formulation prediction
  what_it_could_unlock: Extrahepatic and cell-selective LNP delivery
  mechanism: ML over chemistry libraries predicts lipids and ratios for target tissues
  technology_readiness_level: 5
  translational_gap: Proprietary in-vivo screening data, no AI-designed LNP in the clinic yet
  closest_companies:
  - Mana.bio
  - Aganitha AI
- capability: Endosomal escape and encapsulation prediction
  what_it_could_unlock: Higher delivery efficiency per dose
  mechanism: Models predict endosomal escape and RNA encapsulation architecture
  technology_readiness_level: 4
  translational_gap: Mechanistic training data, wet-lab validation
- capability: mRNA UTR and codon optimisation
  what_it_could_unlock: Durable, high-expression, low-immunogenicity mRNA
  mechanism: Sequence models optimise UTRs and open reading frames
  technology_readiness_level: 5
  translational_gap: Expression validation, immunogenicity prediction
  closest_companies:
  - Raina Biosciences
  - Atomic AI
  - InstaDeep
use_cases:
  - Novel ionizable lipid discovery
  - Extrahepatic / cell-selective LNP targeting
  - mRNA UTR and codon optimisation for expression
  - Toxicity and developability prediction for formulations
technology_readiness_level: 5
evidence_level: in_vivo_animal
translational_gap: Training data is proprietary and expensive to generate, predictions still need wet-lab confirmation, and no AI-designed LNP has reached the clinic; models generalise poorly across cell types and species
what_needs_to_happen: Larger shared datasets, better in-vitro-to-in-vivo and cross-species translation, and a clinical candidate whose lipid or mRNA came from an AI pipeline
closest_companies:
  - Mana.bio
  - Aganitha AI
  - Atomic AI
  - InstaDeep (BioNTech)
  - Kerna Health
  - Raina Biosciences
related_primitives:
- mrna-lnp-delivery
- microfluidic-lnp-manufacturing
- protein-design-diffusion-models
- biology-foundation-models
closest_labs:
  - Daniel Anderson Lab (MIT)
  - James Dahlman Lab (Georgia Tech)
commercialisation_status: pilot_deployment
regulatory_complexity: medium
capex_intensity: medium
defensibility: medium
notes: Mana.bio runs a Learn-Design-Make-Generate loop, reporting >45,000 experimental data points across 4,300+ formulations and evolutionary lipid design; published AI-designed LNPs for pulmonary gene therapy (Nat Biotechnol 2024). InstaDeep acquired by BioNTech. Value depends on proprietary screening data, hence medium defensibility.
last_verified: "2026-07-06"
---

## Mechanism

LNP performance depends on the ionizable lipid's structure, the full formulation ratio, and the mRNA sequence, a combinatorial space too large to screen exhaustively. ML models trained on systematically generated screening data learn structure-property maps: predicting potency, endosomal escape, and which tissue or cell type a formulation reaches, plus how UTR and codon choices affect mRNA translation. Generative and evolutionary methods then propose new synthesisable lipids, and an iterative design-make-test loop (Mana.bio's Learn-Design-Make-Generate) feeds each experimental round back into the model.

## What it unlocks

Historically LNP chemistry was empirical: make hundreds of lipids, screen, repeat. AI turns formulation into a prediction problem, compressing that loop and, crucially, targeting the hardest prize in the field, extrahepatic and cell-selective delivery. If models can predict tropism, they can design SORT-style formulations that reach lung, immune cells, or CNS instead of defaulting to liver, and design mRNA for higher, more durable expression. Applications include novel ionizable-lipid discovery, tissue-selective targeting, mRNA UTR/codon optimisation, and toxicity/developability prediction before synthesis.

## Translational gap

Honest TRL is 5. Groups have published AI-designed LNPs validated in animals (pulmonary gene therapy), so the approach is proven in vivo at the research stage, but no AI-originated LNP or mRNA is in the clinic. The binding constraint is data: the useful training sets are proprietary, costly to generate, and specific to each lab's assay, so models generalise poorly across cell types and species and every prediction still needs wet-lab confirmation. Progress needs larger shared datasets, better in-vitro-to-in-vivo translation, and a clinical candidate traceable to an AI pipeline.

## Notes

Substrate_family C (model). This primitive sits directly upstream of mrna-lnp-delivery and microfluidic-lnp-manufacturing: it designs what those platforms deliver and make. Defensibility is medium because the moat is the proprietary screening dataset rather than the modelling method, which is increasingly public.
