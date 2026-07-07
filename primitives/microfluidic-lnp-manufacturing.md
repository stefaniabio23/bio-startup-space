---
id: microfluidic-lnp-manufacturing
name: Microfluidic LNP manufacturing
aliases:
  - microfluidic mixing
  - NanoAssemblr
  - staggered herringbone mixer
  - LNP formulation systems
substrate_family: B
substrate_tags:
  - B.5
enabled_by: Microfluidic mixer designs (staggered herringbone, NxGen) that impose reproducible, rapid mixing of an aqueous nucleic-acid stream with an ethanolic lipid stream, driving controlled nanoparticle self-assembly
mechanism: A chip-based mixer brings nucleic acid and lipid solutions together under precisely controlled flow so lipids self-assemble around the payload into uniform nanoparticles, with critical quality attributes preserved from bench to GMP scale
new_capability: Produces monodisperse, high-encapsulation LNPs reproducibly and scales the same physics from microliter discovery batches to hundreds of litres of cGMP material
what_it_could_unlock: Reliable, comparable LNP manufacturing across the whole development path, removing formulation as a bottleneck for RNA medicines
capabilities:
- capability: Reproducible LNP mixing
  what_it_could_unlock: Uniform, high-quality nanoparticles for RNA drugs
  mechanism: Microfluidic mixers control lipid and nucleic-acid self-assembly
  technology_readiness_level: 9
  translational_gap: N/A, commercially proven
  closest_companies:
  - Precision NanoSystems
- capability: Research-to-GMP scale transfer
  what_it_could_unlock: Same formulation from bench to clinical manufacture
  mechanism: Controlled microfluidic mixing scales from 0.5L to 400L with electronic batch records
  technology_readiness_level: 8
  translational_gap: Throughput, scale-transfer consistency
use_cases:
  - Research-scale LNP formulation screening
  - Clinical and commercial cGMP LNP production
  - Reproducible batch-to-batch nanoparticle manufacture
  - Scale-up of RNA vaccines and gene therapies
technology_readiness_level: 9
evidence_level: real_world_proven
translational_gap: Small herringbone mixers are low-throughput (<100 mL/h) so scale-up requires parallelisation or larger systems that can shift particle attributes; process transfer, lipid supply, and cold-chain still constrain very large campaigns
what_needs_to_happen: Higher-throughput mixers that hold quality attributes constant across scales, better parallelisation, and standardised tech transfer from discovery to commercial
closest_companies:
  - Precision NanoSystems (Cytiva)
  - Inside Therapeutics
  - PreciGenome
  - Knauer
related_primitives:
- mrna-lnp-delivery
- ai-lnp-design
- organ-on-chip
closest_labs:
  - Pieter Cullis Lab (UBC)
commercialisation_status: commercial_scaled
regulatory_complexity: medium
capex_intensity: high
defensibility: medium
notes: "Precision NanoSystems (now Cytiva) NanoAssemblr with NxGen microfluidics spans 0.5L to 400L batches with automated priming, calibration, and electronic batch records; the physics behind approved COVID-19 vaccine LNPs. Defensibility medium: mixer IP plus workflow, but multiple credible vendors."
last_verified: "2026-07-06"
---

## Mechanism

LNP quality is set at the moment of mixing. Bring a lipid-in-ethanol stream together with a nucleic-acid-in-buffer stream too slowly or unevenly and you get large, polydisperse particles with poor encapsulation. A microfluidic mixer (staggered herringbone, or Precision NanoSystems' NxGen) forces the two streams to interleave on a fixed, reproducible timescale, so lipids self-assemble around the payload into uniform nanoparticles. Because the mixing physics is defined by channel geometry and flow rate rather than by vessel size, the same critical quality attributes can be held constant from discovery microbatches to commercial-scale runs.

## What it unlocks

Reproducibility and scale are the two things RNA medicine manufacturing needs, and microfluidic mixing delivers both. It gives monodisperse particles with high, consistent encapsulation, batch after batch, which regulators and process development depend on. The same platform carries a formulation from a screening run through clinical supply to commercial cGMP without re-inventing the process, so formulation stops being the bottleneck between a designed LNP and a dosable drug. Applications run from research screening through cGMP production of RNA vaccines and gene therapies.

## Translational gap

Honest TRL is 9: this is the manufacturing physics behind approved COVID-19 vaccine LNPs and is sold as validated GMP equipment. The residual gap is throughput and transfer. Single herringbone mixers run slow (<100 mL/h), so reaching commercial volumes means parallelising many channels or moving to larger systems, either of which can subtly shift particle attributes and demand re-validation. Tech transfer between scales, ionizable-lipid supply, and cold-chain remain practical constraints on very large campaigns.

## Notes

Substrate_family B (automation/execution). Sits downstream of ai-lnp-design and mrna-lnp-delivery: it manufactures the particles those primitives design and use. Precision NanoSystems (Cytiva) is the dominant vendor; defensibility is medium because credible competitors (Inside Therapeutics, PreciGenome, Knauer) offer comparable mixers.
