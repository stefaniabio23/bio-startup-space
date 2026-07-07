---
id: wetware-biocomputing
name: Wetware biocomputing / neuromorphic bio-computing
aliases:
  - wetware computing
  - synthetic biological intelligence (SBI)
  - biological neural networks
  - neuron-based computing
  - brain-on-a-chip
substrate_family: E
substrate_tags:
  - E.6
enabled_by: Culturing living neurons or brain organoids on high-density microelectrode arrays with life-support housing, plus closed-loop stimulation/readout that lets the network learn from electrical feedback
mechanism: Living neurons grown on an electrode array receive structured electrical input and reward-like feedback; their self-organising synaptic plasticity adapts, so the biological network learns a task
new_capability: Learning computation performed by living neural tissue, at a fraction of the energy of silicon, and a live human-neuron substrate for testing drugs and disease
what_it_could_unlock: Ultra-low-power adaptive learning hardware and human-neuron models that predict drug and disease effects on real neural circuits
capabilities:
- capability: Low-power adaptive compute
  what_it_could_unlock: Ultra-low-power learning hardware
  mechanism: Living neurons on a microelectrode array form networks that learn simple tasks
  technology_readiness_level: 4
  translational_gap: Trivial demonstrated tasks, perishable substrate, scaling
  closest_companies:
  - Cortical Labs
  - FinalSpark
- capability: Human-neuron drug and disease assay
  what_it_could_unlock: In-vitro CNS models for drug response and toxicity
  mechanism: Cultured human neurons report electrophysiological response to compounds
  technology_readiness_level: 5
  translational_gap: Standardisation, throughput, reproducibility
use_cases:
  - Ultra-low-power adaptive / learning compute
  - Drug-response and neurotoxicity testing on human neurons
  - Disease modelling (epilepsy, neurodegeneration) on live circuits
  - Neuroscience research platforms (wetware-as-a-service)
  - Brain-machine interface and neuromorphic research
technology_readiness_level: 4
evidence_level: in_vitro
translational_gap: Neurons live only weeks to months, task complexity is trivial versus silicon, no programming abstraction or scalable architecture, poor reproducibility, and unresolved ethical questions around learning human neural tissue
what_needs_to_happen: Longer-lived and more stable cultures, a real programming/IO abstraction layer, demonstrated tasks with an advantage over silicon, and standardised reproducible manufacturing
closest_companies:
  - Cortical Labs (CL1, Synthetic Biological Intelligence, Wetware-as-a-Service)
  - FinalSpark (Neuroplatform, brain organoids)
related_primitives:
- neuromorphic-memristive-materials
- organ-on-chip
closest_labs:
  - Cortical Labs research group (DishBrain / "Pong" learning)
  - Brett Kagan (Cortical Labs)
  - Thomas Hartung Lab (Johns Hopkins, "organoid intelligence")
commercialisation_status: commercial_early
regulatory_complexity: medium
capex_intensity: high
defensibility: high
notes: Cortical Labs launched the CL1 in March 2025, described as the first commercially available biological computer (about $35,000, neurons kept alive up to ~6 months), and offers a Cortical Cloud Wetware-as-a-Service with a Python SDK. FinalSpark runs a remote Neuroplatform of brain organoids with lifetimes exceeding 100 days. Early-stage products sold mainly to researchers.
last_verified: "2026-07-06"
---

## Mechanism

Wetware biocomputing runs computation on living neural tissue instead of transistors. Human (or rodent) neurons, or 3D brain organoids, are cultured on a microelectrode array inside a housing that keeps them alive with pumps, gas mixing, temperature control, and filtration. The array both stimulates the neurons with structured electrical patterns and records their spiking, forming a closed loop. When the system delivers predictable feedback for "good" activity and noisy feedback for "bad", the network's own synaptic plasticity reorganises to reduce surprise, which is learning without any programmed weights. Cortical Labs demonstrated this with DishBrain learning to play Pong, and packages it as "Synthetic Biological Intelligence."

## What it unlocks

Two capabilities sit here. First, learning that emerges from biology at a tiny fraction of silicon's energy budget, which is the long-shot bet on ultra-low-power adaptive hardware. Second, and nearer-term, a live human-neuron substrate to test how drugs, toxins, and disease processes affect real, active neural circuits, an assay that static cell cultures and animal brains cannot easily provide. Both Cortical Labs and FinalSpark sell access to the substrate today, Cortical via a CL1 unit and a cloud Wetware-as-a-Service, FinalSpark via a remotely accessible organoid Neuroplatform, so the immediate market is researchers rather than compute buyers.

## Translational gap

Honest TRL is around 4: real hardware exists and is on sale, but demonstrated tasks are trivial next to silicon and the compute story is unproven. Neurons survive only weeks to months, so the substrate is perishable. There is no programming abstraction or scalable architecture, no equivalent of a compiler or memory model, and reproducibility across cultures is poor. Learning human neural tissue also raises unresolved ethical questions that could shape regulation. The unlocks are longer-lived stable cultures, a genuine IO and programming layer, at least one task where wetware beats silicon on some axis (usually energy), and standardised manufacturing.

## Notes

Tagged E.6 (organoids and tissue models) since the substrate is cultured neural tissue; conceptually it also spans a model/compute axis (C-family) because the tissue is being used as a computer. The nearest-term commercial value is as a drug and disease assay, not as general-purpose compute.
