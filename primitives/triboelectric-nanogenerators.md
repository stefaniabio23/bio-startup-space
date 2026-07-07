---
id: triboelectric-nanogenerators
name: Triboelectric Nanogenerators
aliases:
  - TENG
  - triboelectric nanogenerator
  - self-powered sensors
  - mechanical energy harvesters
substrate_family: D
substrate_tags:
  - D.1
enabled_by: Coupling of contact electrification and electrostatic induction in engineered material pairs, so ordinary body motion and fluid flow generate usable electrical charge
mechanism: Two dissimilar materials repeatedly contact and separate, exchanging surface charge that electrostatic induction drives through a circuit as current, converting movement into electricity and into a signal
new_capability: Battery-free power and active sensing from biomechanical motion, breath, pulse and sweat flow, removing the battery as the limiting component of a wearable
what_it_could_unlock: Self-powered, maintenance-free patches and implants that run indefinitely on the body's own motion
capabilities:
- capability: Biomechanical energy harvesting
  what_it_could_unlock: Battery-light or self-powered wearables
  mechanism: Motion or contact creates charge separation and electrical output
  technology_readiness_level: 4
  translational_gap: Stable power, humidity, durability
- capability: Self-powered physical sensing
  what_it_could_unlock: Gait, respiration, pulse, pressure, joint-motion sensing
  mechanism: Mechanical deformation produces a measurable voltage or current
  technology_readiness_level: 5
  translational_gap: Calibration, comfort, textile integration
- capability: Self-powered biochemical sensing
  what_it_could_unlock: Sweat-flow or metabolite sensing without an external battery
  mechanism: Biofluid motion or contact powers or modulates the sensor signal
  technology_readiness_level: 3
  translational_gap: Power-signal separation, reproducibility, biochemical specificity
use_cases:
  - self-powered wearable motion, pulse and respiration sensors
  - battery-free sweat sensor patches
  - energy harvesting to power co-located biosensors
  - implantable self-powered monitors
technology_readiness_level: 3
evidence_level: in_vitro
translational_gap: A TENG is a transducer, not a molecular recognition element, so biochemical selectivity must come from a separate sensing layer; output drifts with humidity and wear, durability over repeated cycles is limited, and there is no standardisation, leaving the field largely academic
what_needs_to_happen: Stable encapsulated output over long cycling, integration with a validated biochemical recognition layer, sweat and signal validity studies, and measurement standardisation before clinical use
closest_companies:
  - none commercial-stage in bio-sensing
related_primitives:
- flexible-epidermal-electronics
- mxene-2d-materials
- electrochemical-aptamer-biosensing
closest_labs:
  - Zhong Lin Wang group (Georgia Tech and Beijing Institute of Nanoenergy)
commercialisation_status: research_only
regulatory_complexity: medium
capex_intensity: low
defensibility: medium
notes: Genuinely useful as a power and motion-sensing layer; the biochemical-sensing claims are mostly academic because the TENG itself recognises nothing.
momentum:
  papers: 13137
  cagr_pct: 27.7
  fwci: 11.09
  industry_share_pct: 24.2
  citation_mass: 2739.0
  on_topic_n: 182
  buildable_whitespace: 16/25
  confidence: high
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 24.4
  mean_fwci: 11.52
  industry_share: 0.222
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

A triboelectric nanogenerator pairs two materials that sit far apart on the triboelectric series, such as a fluoropolymer and a metal or skin. When they touch and separate, they exchange surface charge by contact electrification; the changing separation then drives that charge through an external circuit by electrostatic induction, producing an alternating current. Because the current tracks the mechanical input, the same device is both a power source and a sensor: gait, joint motion, respiration, pulse, and even sweat flow can be read directly from the electrical output, with no battery required.

## What it unlocks

The unlock is removing the battery. A TENG turns the body's own motion into both electricity and signal, so a patch or implant can in principle run maintenance-free and unobtrusively for long periods. Demonstrated uses are self-powered motion, respiration, and cardiovascular pulse sensing, and TENG-powered wearable systems that harvest energy to run a co-located sweat sensor. As a mechanical-signal and power layer this is real and useful. The most cited work comes from Zhong Lin Wang's groups, who originated the field.

## Translational gap

The core limitation is conceptual, not incremental: a TENG recognises motion, not molecules. Any biochemical selectivity, detecting a specific hormone, drug, or metabolite, must come from a separate recognition layer, so headlines describing a TENG as a biochemical sensor usually mean a TENG powering or transducing for a chemistry it does not itself provide. On top of that, output drifts with humidity and mechanical wear, durability over millions of contact cycles is limited, encapsulation against sweat is hard, and there is no measurement standardisation, which together keep the field mostly academic. Where sweat is involved, the same sweat-validity question as other wearables applies. Honest TRL is 3, meaning lab proof of concept, and there is no commercial-stage biosensing company built purely on TENGs. The path forward is stable encapsulated output over long cycling plus tight integration with a validated recognition layer.

## Notes

Position TENGs as an enabling power and motion-sensing substrate that complements a real biochemical sensor, not as a standalone diagnostic. The strongest near-term case is battery elimination, not molecular detection.
