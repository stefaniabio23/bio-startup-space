---
id: biohybrid-microbots
name: Biohybrid xenobots / microbots
aliases:
  - xenobots
  - biobots
  - biohybrid microrobots
  - living robots
substrate_family: E
substrate_tags:
  - E.1
enabled_by: AI evolutionary design that searches for cell-cluster morphologies with a target behaviour, combined with the ability to assemble living cells (frog skin/muscle, or human tissue) into free-moving self-organising constructs
mechanism: A simulator plus evolutionary algorithm proposes a body shape; researchers sculpt living cells into that shape, and the resulting construct moves via cilia beating or muscle contraction and can perform simple tasks
new_capability: Programmable multicellular machines designed in silico and built from living cells, moving and acting without motors, batteries, or foreign materials the body would reject
what_it_could_unlock: Non-invasive internal tissue repair, targeted drug delivery, and debris or plaque clearance by biocompatible constructs that the immune system does not attack
capabilities:
- capability: Living self-propelled micro-actuators
  what_it_could_unlock: Local drug delivery, tissue repair, microsurgery
  mechanism: Living cells or bacteria provide motility and interaction with tissue
  technology_readiness_level: 3
  translational_gap: Control, clearance, immune response, manufacturing
- capability: Externally actuated medical microrobots
  what_it_could_unlock: Targeted delivery to tumour, clot, plaque or gut site
  mechanism: Magnetic, acoustic or optical fields steer microstructures
  technology_readiness_level: 3
  translational_gap: Navigation, imaging, safety, retrieval
use_cases:
  - Targeted, non-invasive internal tissue repair
  - Arterial plaque or debris clearance
  - Immune-tolerated drug delivery from the patient's own cells
  - Environmental sensing and microplastic collection
  - Basic-science probes of morphogenesis and collective cell behaviour
technology_readiness_level: 3
evidence_level: in_vitro
translational_gap: Everything demonstrated in a dish or embryo context; no control system for steering constructs in a living body, no dosing/clearance/safety framework, short lifespan, and no path to manufacture at scale or from patient-matched human cells
what_needs_to_happen: Closed-loop control and steering in vivo, human-cell (anthrobot) constructs with defined lifespan and clearance, and a regulatory and safety model for a self-organising living therapeutic
closest_companies:
  - (early / mostly pre-company; no scaled commercial player)
related_primitives:
- organ-on-chip
- optogenetics-sonogenetics
closest_labs:
  - Michael Levin Lab (Tufts / Allen Discovery Center)
  - Josh Bongard Lab (University of Vermont)
  - Wyss Institute (Douglas Blackiston, Harvard)
  - Bradley Nelson Lab (ETH Zurich, microrobotics)
  - Metin Sitti Lab (Max Planck, biohybrid microrobots)
commercialisation_status: research_only
regulatory_complexity: very-high
capex_intensity: high
defensibility: high
notes: Xenobots were first built from Xenopus frog cells (2020) and shown to self-replicate kinematically (2021); 2023-2025 work extended to human-cell "anthrobots" and to constructs actuated by cilia or muscle. Medical use remains speculative and lab-bound.
momentum:
  papers: 646
  cagr_pct: 40.3
  fwci: 8.28
  industry_share_pct: 8.6
  citation_mass: 1595.0
  on_topic_n: 128
  buildable_whitespace: 15/25
  confidence: high
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: hot-but-under-patented
  paper_cagr_pct: 30.8
  mean_fwci: 0.0
  industry_share: 0.0
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Biohybrid xenobots are made by letting an AI search for a useful shape, then building that shape out of living cells. An evolutionary algorithm running in a physics simulator proposes candidate morphologies scored against a goal (move forward, corral particles), and the best designs are sculpted by hand from dissociated Xenopus frog skin and muscle cells (or, more recently, human airway cells to make "anthrobots"). The assembled construct self-organises, seals into a coherent body, and moves, either by the coordinated beating of surface cilia or by muscle contraction. Levin's group has shown these constructs can even push loose cells together into new copies of themselves (kinematic self-replication), and that AI-suggested C-shapes make that far more efficient.

## What it unlocks

The pitch is a programmable machine built from living, biocompatible cells: no motor, no battery, no synthetic material for the immune system to reject. If steering and control in a body were solved, that points at non-invasive internal tissue repair, clearing arterial plaque or debris, and drug delivery from constructs made of the patient's own cells so there is no rejection. There are also non-medical uses, environmental sensing and microplastic collection, plus real value as a research probe into how cells collectively decide what body to build.

## Translational gap

This is the thinnest primitive in the set. Honest TRL is about 3: striking proof of concept in a dish and in embryos, essentially nothing in a living therapeutic context. There is no closed-loop system to steer a construct inside a body, no dosing, clearance, biodistribution, or safety framework, the constructs are short-lived, and there is no manufacturing route, least of all from patient-matched human cells. It is also effectively pre-company: the frontier is academic (Tufts, UVM, Wyss for xenobots; ETH and Max Planck for magnetically-steered biohybrid microrobots), with no scaled commercial player. Medical application is a decade-plus bet, not a near-term product.

## Notes

Thin-data primitive. Two loosely related threads sit here: AI-designed living xenobots/anthrobots (Levin/Bongard/Blackiston) and engineered biohybrid microrobots that graft cells or bacteria onto steerable synthetic bodies (Sitti, Nelson). Grouped as one substrate because both are living-plus-designed motile constructs, but they differ in how much is biological versus synthetic.
