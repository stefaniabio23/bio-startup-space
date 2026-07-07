---
id: axbio
name: AxBio
website: axbio.com
founded: 2016
area: nanopore sequencing
substrate_family: D
substrate_tags:
  - D.2
  - A.1
technology_platform_ids:
  - nanopore-sensing
technology_platform_name: Bio-CMOS integrated nanopore array
funding_stage: series-b
total_funding_usd_m: 130
public: false
business_model: device_consumables
buyer:
  - academic_lab
  - biotech
  - provider
  - pharma
customer:
  - academic_lab
  - biotech
  - provider
  - pharma
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: medium
regulatory_burden: heavy
tam_usd_m: 25000
new_capability: CMOS-integrated nanopore arrays targeting low-cost, high-throughput single-molecule sequencing by putting the sensor and readout electronics on one chip.
data_centrality: important-enabler
data_ownership:
  - customer-generated
  - proprietary
moat:
  - IP
  - wet-lab
  - capital
primary_value_chain_layer: Sequencing instrument and consumables provider
input:
  - native DNA samples
  - native RNA samples
transformation_type: measure
output:
  - long-read DNA sequence
  - single-molecule sequence data
technology_readiness_level: 6
limiting_factor: Moving from pre-commercial CMOS-array sequencer to a shipping product with competitive accuracy and consumable supply.
commercialisation_status: pilot_deployment
barrier_to_entry: very-high
barrier_to_entry_logic: Co-designing biological pores with custom CMOS sensor arrays and a foundry-scale manufacturing path is a rare, capital-heavy full-stack capability.
hardness: very-hard
hardness_reason: Integrating single-molecule nanopore sensing onto a scalable CMOS chip couples semiconductor engineering with protein-pore biophysics.
last_verified: "2026-07-06"
---

## One-liner

Shenzhen and Silicon Valley nanopore company building CMOS-integrated nanopore arrays for low-cost, high-throughput single-molecule sequencing.

## Problem

Nanopore sequencing throughput and cost are limited by sensor-array density and electronics. Bolting pores onto generic electronics leaves performance and unit economics on the table.

## Workaround

Oxford Nanopore's ASIC-based devices, Illumina short-read sequencing, and other Chinese nanopore entrants (Qitan, Genvida).

## Entry wedge

A proprietary Bio-CMOS platform that integrates the nanopore sensor with readout electronics on one semiconductor chip, aiming for lower cost per base and higher array density as a differentiator against incumbents.

## Method

Biological nanopores are integrated directly onto a custom CMOS sensor array; each pore's ionic-current signal is read by on-chip electronics and decoded into sequence. The semiconductor-first design targets scalable manufacturing and high channel counts.

## Validated by

Raised USD 100M Series B in June 2022 led by the AstraZeneca-CICC fund and Yunfeng Capital, with CBC Group and SDIC participating, following a Series A of "tens of millions" in October 2021. Founded 2016 in Silicon Valley by Dr. Hui Tian (CEO) and Igor Ivanov (COO); building a Shenzhen manufacturing facility. Reported preparing a low-cost sequencer for commercial launch.

## Competes with

Oxford Nanopore (category owner), Qitan Technology and Genvida (Chinese nanopore peers), Illumina and MGI (short-read), PacBio (long-read).

## Complements

Semiconductor foundries, bioinformatics providers, and clinical and research labs seeking cheaper sequencing capacity.

## Value chain position

**Downstream of:** CMOS foundries, protein-pore and enzyme engineering, nucleic-acid extraction
**Upstream of:** genome assembly, clinical diagnostics, high-throughput research sequencing

## Gaps

Still pre-commercial as of latest public data; must prove accuracy, yield, and consumable supply against Oxford Nanopore's mature ecosystem. Limited disclosure on shipped-product metrics.

## Notes

Differentiator is the CMOS-integration bet: if the Bio-CMOS array delivers density and cost advantages, it could undercut incumbents on price per base. AstraZeneca's investment signals pharma interest. Total funding is an estimate combining the disclosed Series A and B.

## News signals
- 2022-06: Raised USD 100M Series B led by the AstraZeneca-CICC fund to develop and commercialise its Bio-CMOS nanopore sequencer and build manufacturing. (source: https://www.genomeweb.com/sequencing/chinese-nanopore-sequencing-tech-firm-axbio-raises-100m-series-b-financing)
