---
id: merge-labs
name: Merge Labs
website: unknown
founded: 2025
area: Non-invasive brain-computer interface via sonogenetics
substrate_family: E
substrate_tags:
  - E.3
  - D.4
technology_platform_ids:
  - optogenetics-sonogenetics
technology_platform_name: optogenetics and sonogenetics
funding_stage: seed
total_funding_usd_m: 252
public: false
business_model: platform_to_pipeline_hybrid
buyer:
  - consumer
customer:
  - consumer
buyer_urgency: low
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 6000
new_capability: Read and write neural activity non-invasively by using gene therapy to make neurons ultrasound-sensitive, so ultrasound alone can interface with the brain without surgery.
data_centrality: important-enabler
data_ownership:
  - generated-in-house
  - proprietary
moat:
  - founder-brand
  - capital
primary_value_chain_layer: Neural interface hardware plus gene-therapy wetware
input:
  - ultrasound-sensitive protein gene therapy delivered to neurons
  - focused ultrasound signal
transformation_type: monitor
output:
  - non-invasive neural read/write signal
technology_readiness_level: 2
limiting_factor: Unproven core modality, sonogenetic read/write in humans has not been demonstrated, plus gene-therapy delivery, safety, and resolution risk.
commercialisation_status: research_only
barrier_to_entry: very-high
barrier_to_entry_logic: Requires convergence of gene therapy, biomolecular engineering, ultrasound neuromodulation, and very large capital, with a rare founder/researcher combination (Caltech's Shapiro, Forest Neurotech founders) and OpenAI backing that few can assemble.
hardness: moonshot
hardness_reason: The core sonogenetic read/write mechanism is still a research hypothesis, not a validated modality, and depends on solving gene delivery, spatial resolution, and safety simultaneously.
last_verified: "2026-07-06"
---

## One-liner

Merge Labs is an OpenAI-backed research company building a non-invasive brain-computer interface that uses gene therapy to make neurons respond to ultrasound, so ultrasound can read and modulate brain activity without surgery.

## Problem

Existing high-bandwidth brain-computer interfaces such as Neuralink require invasive surgery, where electrodes are implanted into brain tissue. Surgery limits adoption, carries risk, and constrains how broadly a BCI can reach consumers.

## Workaround

Today users rely on either surgical implants for high-fidelity signals or low-resolution external wearables (EEG) that cannot precisely read or write neural activity. Neither offers non-invasive, high-resolution read and write at once.

## Entry wedge

The wedge is sonogenetics, delivering ultrasound-sensitive proteins to targeted neurons via gene therapy so an external ultrasound device can interface with them. This sidesteps skull-opening surgery while aiming for deeper, more specific access than surface electrodes.

## Method

Genetically modify brain cells so they express mechanosensitive proteins that react to ultrasound, then use a focused ultrasound device to read neural activity and modulate it, without penetrating the brain. The approach combines gene therapy, biomolecular engineering, and ultrasound neuromodulation.

## Validated by

The technical premise draws on Caltech co-founder Mikhail Shapiro's published work on sonogenetics and acoustic biomolecules, plus neural-decoding work from Forest Neurotech co-founders Tyson Aflalo and Sumner Norman. Human read/write via sonogenetics has not yet been demonstrated by the company.

## Competes with

Neuralink (invasive implanted electrodes), Synchron (endovascular stentrode BCI), Precision Neuroscience, and Forest Neurotech, along with other non-invasive neurotech efforts.

## Complements

OpenAI's models and interfaces (a BCI channel could feed users to OpenAI products), gene-therapy delivery platforms (AAV and other vectors), and focused-ultrasound hardware ecosystems.

## Value chain position

**Downstream of:** gene-therapy delivery vectors, ultrasound-sensitive protein engineering, focused-ultrasound hardware, and neural-decoding models.

**Upstream of:** consumer human-AI interface applications and any downstream software that consumes decoded neural signals.

## Gaps

No demonstrated human sonogenetic read/write, unproven gene-delivery safety and durability, unclear spatial and temporal resolution, and a heavy regulatory path for both a gene therapy and an implant-free neural device. Website and detailed pipeline are not public.

## Notes

THIN-DATA. Merge Labs is a new, largely stealth research lab founded in 2025 with limited public technical disclosure. Most information comes from funding-announcement press coverage in August 2025 and January 2026 rather than peer-reviewed results or a company website. Reported seed round is $252M at a roughly $850M valuation, with OpenAI writing the largest check alongside Bain Capital Ventures, Interface Fund, Fifty Years, and Gabe Newell. Sam Altman is associated in a personal capacity; day-to-day leadership includes Alex Blania. Founding-year, website, and pipeline details should be treated as provisional.

## News signals
- 2026-01: OpenAI confirmed its investment in Merge Labs' ~$252M seed round, the largest single check, at a reported ~$850M valuation, framing it as a non-invasive BCI challenger to Neuralink. (source: https://techcrunch.com/2026/01/15/openai-invests-in-sam-altmans-brain-computer-interface-startup-merge-labs/)
- 2025-08: Reports emerged that Merge Labs, tied to Sam Altman, was raising ~$250M to combine gene therapy and ultrasound (sonogenetics) for a non-surgical brain-computer interface. (source: https://www.packgene.com/frontier/081525-merge-labs/)
