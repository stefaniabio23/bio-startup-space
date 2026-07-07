---
id: wave-photonics
name: Wave Photonics
website: wavephotonics.com
founded: 2021
area: photonic integrated circuit design
substrate_family: D
substrate_tags:
  - D.2
technology_platform_ids:
  - topological-photonics
technology_platform_name: Photonic integrated circuit design and PDK tooling
funding_stage: seed
total_funding_usd_m: 7
public: false
business_model: saas
buyer:
  - biotech
  - academic_lab
customer:
  - biotech
  - academic_lab
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: medium
regulatory_burden: none
tam_usd_m: 2000
new_capability: Computational design automation for photonic integrated circuits that shortens PIC development time and makes light-based chip components portable across foundries, lowering the barrier to building quantum and biosensing photonics.
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - founder-brand
primary_value_chain_layer: EDA and component design tooling for photonic chips
input:
  - PIC design specifications
  - foundry process design kits
transformation_type: generate
output:
  - optimised photonic component designs
  - foundry-ready S-parameters and PDK libraries
technology_readiness_level: 6
limiting_factor: The photonics design-tools market is small and early; adoption depends on foundry partnerships and a maturing PIC ecosystem.
commercialisation_status: commercial_early
barrier_to_entry: high
barrier_to_entry_logic: Requires deep computational-photonics expertise and foundry PDK relationships; the founding team are Cambridge quantum-photonics PhDs, but the software-tooling niche is defensible mainly through know-how rather than hard IP.
hardness: hard
hardness_reason: Automating inverse design of photonic components that behave predictably across fabrication processes is a genuine computational and physics challenge, though it is software and design rather than a new physical device.
last_verified: "2026-07-06"
---

## One-liner

Cambridge deep-tech startup building computational design automation and PDK tooling for photonic integrated circuits, aimed at quantum, datacentre, and biosensing applications.

## Problem

Designing photonic integrated circuits is slow and foundry-specific: components must be hand-tuned, do not port between fabs, and lack the mature EDA tooling that electronics enjoys, so PIC development is a bottleneck for quantum and sensing hardware.

## Workaround

Manual component design in general-purpose photonics simulators, bespoke per-foundry libraries, and long iterative tape-out cycles.

## Entry wedge

Computational photonics design tooling and a PDK management platform that ensures process design kits work across leading EDA tools and provides ready-calculated S-parameters for circuit simulation, plus a quantum-PIC packaging service.

## Method

Computational (inverse-design) algorithms optimise photonic components against target specifications, and a PDK management layer digitises and standardises foundry libraries so designs port across tools and processes, cutting product development time.

## Validated by

Founded 2021 by Cambridge quantum-photonics PhDs James Lee and Matthew Anderson with CTO Mateusz Kubica. Raised GBP 4.5M (about USD 5.8M) seed in June 2024 led by UKI2S and Cambridge Enterprise Ventures, with total funding of roughly GBP 5.4M including EIC and Innovate UK grants. Leads an Innovate UK consortium developing photonic components for trapped-ion quantum computing.

## Competes with

Other photonic EDA and design-automation players (Ansys Lumerical, Luceda, Flexcompute Tidy3D-adjacent tooling) and in-house foundry design teams.

## Complements

PIC foundries, quantum-computing and quantum-sensing hardware builders, and biosensing photonics developers who need optimised components.

## Value chain position

**Downstream of:** foundry process design kits, photonics simulation physics, semiconductor fabrication
**Upstream of:** PIC hardware developers in quantum, datacentre, and biosensing

## Gaps

The PIC design-tools market is nascent and narrow; revenue scale depends on the broader photonics ecosystem maturing and on displacing incumbent EDA tools. Relationship to biosensing is indirect (enabling tooling, not a sensor).

## Notes

Thin-data entry. Important flag: this is photonic-integrated-circuit design tooling, not topological photonics. The topological-photonics primitive link is aspirational, chosen only as the nearest available join key; Wave Photonics does not itself build topological-photonic devices. Biosensing relevance is as upstream design infrastructure.

## News signals
- 2024-06: Wave Photonics raised GBP 4.5M seed funding and launched a quantum PIC packaging service to speed deployment of light-based chips. (source: https://optics.org/news/15/6/37)
