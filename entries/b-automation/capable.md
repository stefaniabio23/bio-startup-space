---
id: capable
name: Capable
website: capable.com
founded: 2025
area: autonomous drug discovery
funding_stage: seed
total_funding_usd_m: 12
public: false
business_model: owned_pipeline
buyer:
  - pharma
  - payer
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 30000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - data
  - wet-lab
  - model
primary_value_chain_layer: closed-loop preclinical drug discovery and optimization
input:
  - therapeutic target and mechanism hypotheses
  - peptide and nucleotide sequence space
  - cell and animal assay readouts
transformation_type: generate
output:
  - validated peptide and nucleotide drug leads
  - preclinical in vitro and in vivo data points
barrier_to_entry: high
barrier_to_entry_logic: Verticalizing and re-engineering six preclinical modules to run 10-20x faster is a deep systems-integration effort that is hard to assemble, staff, and reproduce.
hardness: very-hard
hardness_reason: Whether a fully automated design-make-test loop actually yields clinic-ready drugs faster than incumbents is unproven at any clinical endpoint.
substrate_family: B
substrate_tags:
  - B.1
  - B.2
  - B.6
  - C.1
technology_platform_ids:
  - protein-design-diffusion-models
  - biology-foundation-models
technology_platform_name: "Capable Core (6-module semi-autonomous preclinical loop)"
new_capability: "Verticalized, semi-autonomous preclinical loop running key drug-discovery steps 10-20x faster, taking AI-designed peptide and nucleotide leads from design to validated data in about 24 hours."
technology_readiness_level: 4
commercialisation_status: preclinical
customer:
  - pharma
  - payer
limiting_factor: "No clinical-stage program; the speed and fewer-shot claims are self-reported and not yet proven to yield a clinic-ready drug."
last_verified: "2026-07-13"
---

## One-liner

Rapid-iteration therapeutics company whose verticalized, semi-autonomous lab takes AI-designed peptide and nucleotide leads from design to validated data in about 24 hours, starting with sleep and cognition.

## Problem

Preclinical drug discovery is slow and serial: designing a candidate, synthesizing it, and running cell and animal assays takes months per cycle, so models see too few real data points to iterate well.

## Workaround

Outsourced medicinal chemistry and CRO assay campaigns run at human timescales, with hand-offs between siloed design, synthesis, and testing steps, and data that rarely feeds cleanly back into the design model.

## Entry wedge

Built the "Capable Core," six semi-autonomous modules (drug design, ML infra, rapid synthesis, and the assay and validation steps) re-engineered to run 10-20x faster, closing an end-to-end design-make-test loop in about 24 hours. First programs target sleep, using natural short-sleeper variants to design peptide and nucleotide therapeutics for narcolepsy and hypersomnia, then broader shift-work and cognitive-performance use.

## Method

Models iterate through hundreds of drug candidates, with each cycle generating thousands of validated data points that compound back into the loop for fewer-shot success on later targets. Peptide and nucleotide leads are made in-house with automated polymer synthesis, then screened in fast internal cell and mouse assays. Key cell and mouse results are double-validated with industry-standard contract labs, accepting slower, costlier external confirmation for final data.

## Validated by

Roughly $12M early round from 50 Years and HOF and from OpenAI executives Wojciech Zaremba, Kevin Weil, Srinivas Narayanan, and Fidji Simo. Founding team drawn from MIT, Harvard Medical School, Roche, ETH, and Dana-Farber; co-founder and CEO Isaak Freeman is ex-MIT Boyden Lab. Sample in vitro data and a 24-hour design-to-data claim shared publicly in July 2026; endorsed by Peter Diamandis.

## Competes with

Generative peptide and protein design platforms (Nabla Bio, Chai Discovery, Isomorphic Labs) on the design leg, and self-driving-lab / autonomous-experimentation players (Lila Sciences, Recursion, insitro, Emerald Cloud Lab) on the closed-loop-execution leg. On the sleep therapeutic itself, incumbent wake-promoting and orexin programs at large pharma.

## Complements

Contract labs and CROs used for double-validation, peptide and oligonucleotide synthesis reagent suppliers, and upstream target-discovery and disease-biology sources that feed the design step.

## Value chain position

**Downstream of:** Target identification, disease and short-sleeper genetics, generative-model infrastructure.
**Upstream of:** IND-enabling studies, clinical development, and any eventual pharma out-licensing.

## Gaps

No clinical-stage or IND-stage program; all preclinical. The 10-20x speed, 24-hour loop, and fewer-shot claims are self-reported with no peer-reviewed or third-party benchmark yet. Founding year, exact HQ specifics beyond San Francisco, and a full investor list are not cleanly disclosed. Their strongest differentiator, the closed-loop automated preclinical execution, has no dedicated primitive in the spine yet; linked here to the generative-design primitives the loop is built on.

## Notes

Thin data, best-effort from a July 2026 X thread by co-founder Isaak Freeman plus company web material. Founded set to 2025 and flagged uncertain (recent stealth-to-public launch). Filed under substrate family B (automation / execution) because the differentiating claim is the verticalized, re-engineered preclinical loop, not a single generative model; the C.1 tag and the two model primitives capture the generative-design leg. Owned-pipeline therapeutics company (sleep and cognition first), so buyer and customer are set to the eventual pharma-licensing and payer path rather than a current paying customer. Primitive-link candidate: a "self-driving-lab / autonomous-experimentation" primitive would fit this and the self-driving-lab peers better than the current generative-design links; propose before the next batch.

## News signals
- 2026-07: Co-founder Isaak Freeman publicly detailed the Capable Core, the six-module preclinical loop, and a ~$12M round backed by 50 Years, HOF, and OpenAI executives. (source: https://x.com/isaakfreeman)
- 2026-07: Capable described a lab going from AI-led drug design to data in 24 hours, starting with short-sleeper peptides. (source: https://digg.com/tech/2ju765yd)
