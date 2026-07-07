---
id: biomemory
name: Biomemory
website: biomemory.com
founded: 2021
area: DNA data storage
substrate_family: D
substrate_tags:
  - D.2
technology_platform_ids:
  - dna-archival-storage
technology_platform_name: DNA data storage (enzymatic synthesis, DNA card)
funding_stage: series-a
total_funding_usd_m: 18
public: false
business_model: device_consumables
buyer:
  - consumer
  - biotech
customer:
  - consumer
  - biotech
buyer_urgency: low
buyer_wtp: medium
sales_cycle: long
regulatory_burden: none
tam_usd_m: 8000
new_capability: Stores digital data as dry DNA on a portable, room-temperature card, offering archival density and millennia-scale durability far beyond magnetic tape or disk.
data_centrality: important-enabler
data_ownership:
  - proprietary
moat:
  - IP
  - wet-lab
primary_value_chain_layer: DNA-based data storage media and write/read hardware
input:
  - digital data
  - nucleotides
transformation_type: generate
output:
  - dry-DNA storage cards
  - archived digital data
technology_readiness_level: 4
limiting_factor: DNA write cost, throughput, and read latency remain orders of magnitude off the economics needed for datacentre-scale storage.
commercialisation_status: pilot_deployment
barrier_to_entry: very-high
barrier_to_entry_logic: Requires enzymatic DNA-synthesis chemistry, encoding schemes, and read/write hardware; deep-tech capital-intensive with a long path to cost parity, but a small field with strong IP positions.
hardness: very-hard
hardness_reason: Writing and reading arbitrary digital data in synthesized DNA at useful speed and cost demands advances in enzymatic synthesis, error-correcting encoding, and automated fluidics.
last_verified: "2026-07-06"
---

## One-liner

French deep-tech company storing digital data as dry DNA on a portable, credit-card-sized medium, aiming to scale molecular storage toward datacentre archives.

## Problem

The world generates data faster than tape and disk can archive it affordably; magnetic media degrade in decades and consume energy and space. DNA offers extreme density and millennia-scale stability but has never been practical to write and read at scale.

## Workaround

Magnetic tape (LTO) and hard-disk cold storage in datacentres, periodically migrated to fresh media to avoid bit rot.

## Entry wedge

A first tangible DNA storage card (about a kilobyte of text each), the first such device offered for public sale, serving as proof-of-concept while the company builds toward exabyte-scale datacentre deployment.

## Method

Digital data is encoded into nucleotide sequences and written using enzymatic DNA synthesis, then stored dry at room temperature on a card; reading recovers the data by sequencing. Error-correcting encoding handles synthesis and read errors.

## Validated by

Founded 2021 as a Sorbonne University and CNRS spinout (Paris); raised USD 18M Series A (December 2024) led by Credit Mutuel Innovation with Bpifrance France 2030 funds and others. Launched a publicly sold DNA storage card; acquired Catalog Technologies and plans a datacentre deployment in H2 2026.

## Competes with

Other DNA-data-storage efforts (Catalog before acquisition, Atlas Data Storage spun out of Twist, academic and Microsoft/Illumina consortium work) and conventional archival storage incumbents.

## Complements

DNA synthesis-chemistry suppliers, sequencing vendors for the read step, and datacentre and cloud-archive operators as eventual customers.

## Value chain position

**Downstream of:** enzymatic DNA-synthesis chemistry, nucleotide suppliers, sequencing hardware
**Upstream of:** archival data storage, datacentre cold storage, long-term digital preservation

## Gaps

DNA write cost and throughput remain far from datacentre economics; the card is a proof point storing only kilobytes. Whether Biomemory can close the multi-order-of-magnitude cost gap by its 2030 exabyte target is the central open question.

## Notes

Thin-data entry; TRL and TAM are estimates for an early deep-tech field. Reference example of the dna-data-storage primitive on the storage-media side, complementing Twist Bioscience's synthesis-platform angle. The Catalog acquisition (reported 2026) signals consolidation in the space.

## News signals
- 2024-12: Biomemory secured USD 18M Series A to develop enzymatic DNA data-storage technology and scale from its DNA card toward datacentre deployment. (source: https://www.businesswire.com/news/home/20241210725720/en/Biomemory-Secures-$18-Million-in-Series-A-Funding-to-Revolutionize-Data-Storage-With-Molecular-Technology)
