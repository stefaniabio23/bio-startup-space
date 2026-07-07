---
id: photonic-inc
name: Photonic Inc
website: photonic.com
founded: 2016
area: silicon-photonic quantum computing
substrate_family: D
substrate_tags:
  - D.2
technology_platform_ids:
  - topological-photonics
technology_platform_name: Silicon-spin photonic quantum computing (Entanglement First architecture)
funding_stage: series-b
total_funding_usd_m: 475
public: false
business_model: platform_partnership
buyer:
  - biotech
  - pharma
  - academic_lab
customer:
  - biotech
  - pharma
  - academic_lab
buyer_urgency: low
buyer_wtp: high
sales_cycle: long
regulatory_burden: none
tam_usd_m: 20000
new_capability: Distributed quantum computing built on silicon T-centre spin qubits with native telecom-wavelength photonic links, letting quantum modules entangle over existing fibre and scale horizontally instead of in a single fridge.
data_centrality: not-central
data_ownership:
  - proprietary
moat:
  - IP
  - capital
  - founder-brand
primary_value_chain_layer: Quantum computing hardware and compute platform
input:
  - silicon T-centre spin qubits
  - telecom-wavelength photons
transformation_type: generate
output:
  - distributed quantum entanglement
  - quantum compute capacity
technology_readiness_level: 4
limiting_factor: Fault-tolerant, application-scale quantum computing is years away; qubit counts and error rates remain far from useful chemistry-simulation thresholds.
commercialisation_status: research_only
barrier_to_entry: nearly-impossible
barrier_to_entry_logic: Requires silicon-photonic qubit fabrication, cryogenics, telecom-photonic interfaces, and hundreds of millions in capital; only a handful of well-funded teams (backed by Microsoft, USD 475M raised) can pursue this.
hardness: moonshot
hardness_reason: Building a fault-tolerant distributed quantum computer from silicon spin qubits entangled over fibre is one of the hardest open problems in physics and engineering.
last_verified: "2026-07-06"
---

## One-liner

Canadian quantum-computing company building a distributed, "Entanglement First" silicon-photonic architecture using T-centre spin qubits linked over telecom fibre, backed by Microsoft.

## Problem

Scaling quantum computers inside a single cryostat hits hard limits on qubit count and wiring. Simulating molecules for drug discovery needs far more logical qubits than any single-fridge machine can hold, so a way to network quantum modules is required.

## Workaround

Superconducting and trapped-ion quantum processors confined to single dilution refrigerators, plus classical HPC and approximate quantum-chemistry methods for molecular simulation.

## Entry wedge

Distributed quantum computing and networking: T-centre defects in silicon that emit and receive telecom-wavelength photons, enabling entanglement between separate quantum modules over standard optical fibre and horizontal scaling.

## Method

The T-centre spin qubit in silicon provides an optical interface at telecom wavelengths, so qubits in separate cryostats can be entangled photonically. Photonic's "Entanglement First" architecture uses this native connectivity to distribute computation and networking across modules rather than packing qubits into one device.

## Validated by

Founded 2016 (Stephanie Simmons, SFU); demonstrated a teleported CNOT between remote silicon spin qubits over telecom fibre (2024). Raised roughly USD 475M total: USD 140M by 2023 (Microsoft, BCI), then a round closing over USD 200M in May 2026 led by Planet First Partners at a USD 2B post-money valuation.

## Competes with

Other quantum-computing hardware makers (IBM, Google, IonQ, PsiQuantum, Quantinuum) racing toward fault tolerance, and photonic-quantum players (Xanadu, PsiQuantum on the silicon-photonics side).

## Complements

Quantum-chemistry and drug-discovery software, cloud and networking infrastructure, and pharma R&D groups that would consume quantum molecular simulation once it matures.

## Value chain position

**Downstream of:** silicon-photonic fabrication, cryogenics, telecom-photonics components
**Upstream of:** quantum chemistry and materials simulation, drug-discovery compute, quantum networking

## Gaps

Fault-tolerant, application-relevant quantum computing remains years out; no near-term bio revenue. Relevance to drug discovery is a long-horizon adjacency, not a current product.

## Notes

Adjacency flag: Photonic Inc is not a bio company. It is included as a potential upstream compute enabler for drug discovery and molecular simulation. topological-photonics is the nearest primitive join key; the actual technology is silicon-spin photonic qubits, not topological photonics specifically. data_centrality set to not-central and commercialisation_status to research_only accordingly.

## News signals
- 2026-05: Photonic Inc closed an investment round of over USD 200M led by Planet First Partners, reaching a USD 2B post-money valuation to accelerate its distributed silicon-quantum architecture. (source: https://thequantuminsider.com/2026/05/12/photonic-inc-closes-investment-round-with-over-200-million-usd/)
