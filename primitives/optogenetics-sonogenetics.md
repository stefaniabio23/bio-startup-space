---
id: optogenetics-sonogenetics
name: Optogenetics / sonogenetics
aliases:
  - optogenetics
  - sonogenetics
  - light-controlled neurons
  - ultrasound-controlled neurons
substrate_family: E
substrate_tags:
  - E.3
  - D.4
enabled_by: Gene therapy that installs light-sensitive opsins (channelrhodopsins) or mechanosensitive/ultrasound-responsive proteins into specific cells, plus the light or focused-ultrasound hardware to actuate them
mechanism: A viral vector delivers a gene encoding a light- or ultrasound-sensitive ion channel to target cells, which then open or close in response to an external light pulse or ultrasound wave, switching cell activity on demand
new_capability: Confers on-off control of genetically chosen cells from outside the body, with ultrasound reaching deep tissue non-invasively where light cannot penetrate
what_it_could_unlock: Precision switches for cell and gene therapies and neuromodulation, and high-bandwidth, minimally invasive brain-computer interfaces
capabilities:
- capability: Light-controlled cellular activity (optogenetics)
  what_it_could_unlock: Retinal therapy, neural control, controllable cell therapies
  mechanism: Engineered light-sensitive proteins modulate ion flow or signalling
  technology_readiness_level: 6
  translational_gap: Delivery, tissue penetration, device burden
  closest_companies:
  - Science Corporation
- capability: Ultrasound-controlled cellular activity (sonogenetics)
  what_it_could_unlock: Deep-tissue non-invasive cell and neuro control
  mechanism: Engineered mechanosensitive channels respond to focused ultrasound
  technology_readiness_level: 3
  translational_gap: Specificity, safety, human validation
  closest_companies:
  - Merge Labs
use_cases:
  - Vision restoration in retinitis pigmentosa and macular degeneration
  - Programmable neuromodulation for neurological and psychiatric disease
  - Controllable cell and gene therapies (inducible circuits)
  - Non-invasive high-bandwidth brain-computer interfaces
technology_readiness_level: 4
evidence_level: human_pilot
translational_gap: Optogenetics needs implanted light hardware and only reaches surface tissue like the retina; sonogenetics is largely preclinical with immature ultrasound-responsive proteins and unproven spatial precision and safety in humans
what_needs_to_happen: Deeper, safer light delivery or maturation of ultrasound-responsive actuators, durable gene expression, demonstrated spatial specificity, and controlled clinical efficacy data
closest_companies:
  - Merge Labs
  - Science Corporation
  - GenSight Biologics
  - Bionic Sight
related_primitives:
- biohybrid-microbots
closest_labs:
  - Sreekanth Chalasani Lab (Salk)
  - Karl Deisseroth Lab (Stanford)
  - Botond Roska Lab (IOB Basel)
commercialisation_status: preclinical
regulatory_complexity: very-high
capex_intensity: high
defensibility: high
notes: "Optogenetics is furthest along: GenSight GS030 (ChrimsonR) and Bionic Sight are in Phase 1/2 for vision, with a published human case of partial vision restoration. Sonogenetics is earlier, mostly animal-stage. Merge Labs raised $252M (OpenAI-backed) to pair gene therapy with ultrasound for a non-implant BCI; Science Corporation pursues optogenetic and photovoltaic vision restoration."
momentum:
  papers: 21093
  cagr_pct: 16.8
  fwci: 4.66
  industry_share_pct: 0.0
  citation_mass: 690.0
  on_topic_n: 29
  buildable_whitespace: 20/25
  confidence: medium
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: emerging
  paper_cagr_pct: 13.5
  mean_fwci: 2.2
  industry_share: 0.0
  patent_total: null
  patent_cagr_pct: null
  company_share: null
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

Both techniques make a chosen cell population controllable by an external signal. A viral vector delivers a gene: for optogenetics an opsin like a channelrhodopsin that opens an ion channel when hit by light of a specific wavelength; for sonogenetics a mechanosensitive channel (such as MscL variants) that opens under ultrasound. Once the protein is expressed, an external light pulse or focused-ultrasound beam switches those cells on or off in real time. Ultrasound matters because it penetrates deep tissue non-invasively, whereas light is absorbed within millimetres and needs an implanted emitter for anything below the surface.

## What it unlocks

This is a control layer for biology: pick the cells by genetics, then actuate them from outside the body. In vision, optogenetics re-sensitises surviving retinal ganglion cells so a patient with retinitis pigmentosa can perceive light again, with GenSight and Bionic Sight in trials and a published human case of partial restoration. More broadly it offers programmable neuromodulation for neurological and psychiatric disease, inducible switches for cell and gene therapies, and, via sonogenetics, a route to non-invasive high-bandwidth brain-computer interfaces that avoid electrode surgery, which is the Merge Labs thesis.

## Translational gap

Honest TRL is 4, reflecting the lower bound of a wide range. Optogenetics for vision is at human_pilot (Phase 1/2, one published restoration case), but it works only because the retina is at the surface and even so needs external light hardware; reaching deep targets is unsolved. Sonogenetics is largely preclinical: the ultrasound-responsive proteins are immature, and spatial precision, expression durability, and safety are unproven in humans. Progress needs deeper and safer light delivery or better ultrasound actuators, durable gene expression, demonstrated cell-level specificity, and controlled clinical efficacy.

## Notes

Substrate_family E (in-vivo engineered cells via gene therapy) tagged D.4 for the therapeutic hardware (light emitters, ultrasound). This is the highest-variance primitive in the set: optogenetic vision is genuinely in clinic while sonogenetic BCI is a well-funded bet (Merge Labs, $252M, OpenAI-backed) that is still preclinical. Very-high regulatory complexity: gene therapy plus an active implant or neuromodulation device.
