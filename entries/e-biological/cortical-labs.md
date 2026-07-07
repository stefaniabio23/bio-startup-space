---
id: cortical-labs
name: Cortical Labs
website: corticallabs.com
founded: 2019
area: wetware biocomputing
substrate_family: E
substrate_tags:
  - E.6
technology_platform_ids:
  - wetware-biocomputing
technology_platform_name: CL1 biological computer (living human neurons on silicon) with biOS and Cortical Cloud Wetware-as-a-Service
funding_stage: series-a
total_funding_usd_m: 11
public: false
business_model: device_consumables
buyer:
  - academic_lab
  - biotech
  - pharma
customer:
  - academic_lab
  - biotech
  - pharma
buyer_urgency: low
buyer_wtp: medium
sales_cycle: medium
regulatory_burden: light
tam_usd_m: 2000
new_capability: A commercial biological computer that runs learning computation on living human neurons and serves them remotely as Wetware-as-a-Service.
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - wet-lab
  - IP
  - founder-brand
primary_value_chain_layer: living-neuron compute hardware and cloud access for research
input:
  - lab-grown human cortical neurons
  - structured electrical stimulation
  - closed-loop feedback signals
transformation_type: predict
output:
  - learned neural-network responses
  - neural-activity recordings for drug and disease research
technology_readiness_level: 4
limiting_factor: Neurons live only weeks to months, task complexity is trivial versus silicon, and there is no programming abstraction or scalable architecture yet.
commercialisation_status: commercial_early
barrier_to_entry: very-high
barrier_to_entry_logic: Culturing human neurons on high-density electrode arrays with months-long life support and closed-loop learning is a deep wet-lab and engineering capability few can reproduce.
hardness: moonshot
hardness_reason: Making living neural tissue perform reliable, programmable, scalable computation is an unsolved problem spanning biology, hardware, and unresolved ethics.
last_verified: "2026-07-06"
---

## One-liner

Builds biological computers that integrate living human neurons on silicon chips, sold as the CL1 device and offered remotely as Wetware-as-a-Service.

## Problem

Silicon neural networks are power-hungry and only approximate biology, and there is no live human-neuron substrate that researchers can program, run learning experiments on, or use to test drugs on real neural circuits.

## Workaround

In-silico neural-network simulation, animal models, static neuron cultures on multi-electrode arrays without closed-loop learning, and brain-organoid assays that are hard to interface and control.

## Entry wedge

Synthetic biological intelligence as a product. Cortical Labs grows human cortical neurons on a multi-electrode array in a closed-loop feedback system (the DishBrain demo learned to play Pong), then ships the CL1 device and rents access via Cortical Cloud so labs can run experiments without the wet-lab overhead.

## Method

Lab-grown human (and mouse) cortical neurons are cultured on a silicon multi-electrode array, receive structured electrical input and reward-like feedback, and adapt via synaptic plasticity so the network learns tasks. The CL1 keeps neurons viable up to ~6 months in a life-support unit that can rack in a server, running the biOS operating system with a Python SDK. Founded in Melbourne in 2019 by CEO Hon Weng Chong, Andy Kitchen, and CSO Brett Kagan.

## Validated by

DishBrain / Pong result published in Neuron (October 2022). CL1 launched at Mobile World Congress Barcelona (March 2025) at ~$35,000 per unit, ~$20,000 in rack volume, and ~$300/week for remote cloud access, with units shipping and demos running Doom on living neurons by 2026. Raised ~$11M total: a $1.62M seed (2019) and a $10M Series A (2023) led by Horizons Ventures with Blackbird Ventures, LifeX, Radar, and In-Q-Tel.

## Competes with

FinalSpark (bioprocessor cloud), Koniku, brain-organoid intelligence groups (Johns Hopkins), and, at the substrate level, neuromorphic silicon vendors.

## Complements

Organoid and iPSC neuron suppliers, drug-discovery and neurotoxicity CROs, neuroscience and disease-modeling labs, and neuromorphic and brain-machine-interface research.

## Value chain position

**Downstream of:** iPSC and neuron culture, multi-electrode-array and life-support hardware, closed-loop control software
**Upstream of:** neuroscience research, drug-response and neurotoxicity testing, low-power adaptive-compute and disease-modeling programs

## Gaps

Neuron lifespan (weeks to months), trivial task complexity versus silicon, no programming abstraction or scalable architecture, and unresolved ethics around learning human neural tissue. Current cumulative funding may exceed the ~$11M documented through 2023.

## Notes

TRL 4 per the wetware-biocomputing primitive (in-vitro). Classed device_consumables: the CL1 hardware plus finite-lifespan neuron cultures form the razor-and-blade economics, with Cortical Cloud as the WaaS layer. transformation_type set to predict (the network computes and learns responses); the same substrate also serves as a measurement platform for drug response.

## News signals
- 2026-03: CL1 biological computers shipping to customers, with demos running Doom on living neurons. (source: https://hothardware.com/news/cortical-labs-ships-35k-bio-computer-human-brain-cells-ai-research)
- 2025-03: Unveiled the CL1, described as the first commercial biological computer, at MWC Barcelona. (source: https://www.datacenterdynamics.com/en/news/australian-startup-cortical-labs-unveils-worlds-first-commercial-biological-computer/)
