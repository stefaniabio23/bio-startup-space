---
id: owkin
name: Owkin
website: owkin.com
founded: 2016
area: multimodal patient stratification
funding_stage: series-c
total_funding_usd_m: 350
public: false
business_model: partnerships
buyer:
 - pharma
 - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 50000
last_verified: "2026-06-22"
data_centrality: core-moat
data_ownership:
 - partner-supplied
 - licensed
moat:
 - data
 - model
 - clinical-evidence
 - IP
 - distribution
input:
 - H&E histopathology slides
 - bulk RNA sequencing
 - single-cell sequencing
 - spatial transcriptomics
 - whole exome sequencing
 - EHR clinical data
 - scientific literature (26.5M+ articles)
transformation_type: predict
output:
 - biomarker discovery insights
 - patient subgroup characterizations
 - drug target assessments
 - clinical trial enrichment strategies
 - companion diagnostic models
barrier_to_entry: very-high
barrier_to_entry_logic: Federated hospital network required regulatory trust-building and data governance agreements across multiple countries over years; Sanofi's $180M investment creates a pharma distribution moat.
hardness: very-hard
hardness_reason: Maintaining consistent data quality and clinical partnerships across a federated network while building commercially viable pharma products on top.
---

## One-liner

Multimodal patient stratification using EHR data, computer vision on histopathology, and federated learning across hospital networks.

## Problem

Patient populations in trials are biologically heterogeneous; existing criteria do not identify who will respond.

## Workaround

Single-biomarker stratification, expert oncologist selection, broad eligibility criteria, retrospective subgroup analysis.

## Entry wedge

Owkin entered via federated learning infrastructure for hospitals, building trust with academic medical centers by enabling multi-site AI model training without centralizing data. This gave them access to hard-to-obtain multimodal oncology cohorts (histopathology + omics + clinical outcomes). The founding wedge was the MELLODDY project (10 pharma companies training on distributed data). From this data network they pivoted to building pharma-facing AI tools, culminating in the K Pro AI Scientist agent launched May 2025.

## Method

Federated learning across hospital networks; computer vision on histopathology slides; EHR data fusion.

## TAM logic

Not explicitly stated on their site. Positioned in the AI drug discovery and precision oncology markets. The Sanofi $180M deal (2021) and subsequent multi-year K Pro license agreements with AstraZeneca (May 2026) and Sanofi (June 2026) imply pharma is willing to pay large sums for access to their data network and AI tools. The $50B TAM reflects addressable R&D services spend across oncology and I&I. (Source: Wikipedia, owkin.com/news)

## Validated by

$180M investment from Sanofi (2021, unicorn valuation). Multi-year K Pro collaboration with AstraZeneca (May 2026). Multi-year K Pro collaboration with Sanofi (June 2026). 104 academic data partners including 50% of the world's top 20 medical institutions. CE-marked diagnostics (RlapsRisk BC, MSIntuit CRC) spun out into Waiv ($33M, March 2026). Publications in Nature Medicine and Nature Communications. Partner list includes Amgen, AstraZeneca, BMS, MSD, Servier.

## Competes with

Tempus (multimodal oncology data platform, RWE), Foundation Medicine (genomic profiling), PathAI (pathology AI), Paige (digital pathology AI), Recursion (data-driven drug discovery), Insitro. On the AI Scientist angle: Microsoft Azure AI, Alphabet DeepMind for biology.

## Complements

Hospital EHR systems (Epic, Cerner) as data sources. Sequencing providers (Illumina, 10x Genomics) upstream of their spatial transcriptomics inputs. CROs running the clinical trials their insights inform. Anthropic (Claude powers their Pathology Explorer agent, Jan 2026).

## Value chain position

**Downstream of:** EHR data, histopathology imaging
**Upstream of:** Trial enrollment, patient stratification, biomarker discovery

## Gaps

Stratifies on static site-level data; does not use longitudinal wearable/biomarker time-series for latent-state inference during trials. K Pro pivot toward autonomous AI Scientist is an expansion beyond original patient stratification wedge, commercial traction at the new layer is unproven. Federated learning is a data access strategy, not an algorithmic moat; the models still need to be better than alternatives.

## Notes

Spun out Waiv (formerly Owkin Dx) in March 2026 to house their CE-marked diagnostic products, separating the diagnostics business from the pharma AI platform. Also incubated Bioptimus for biological foundation models.

## News signals

- 2026-03: Spun out Waiv (formerly Owkin Dx) with $33M financing led by OTB Ventures and Alpha Intelligence Capital, housing the CE-marked diagnostics business. (source: https://www.businesswire.com/news/home/20260312916609/en/Owkin-Creates-New-Spin-out-Waiv-Formerly-Owkin-Dx-With-$33M-Financing)
- 2026-05: Signed a three-year K Pro license agreement with AstraZeneca to build biopharma AI agents. (source: https://www.businesswire.com/news/home/20260512749977/en/Owkin-to-Build-AI-Agents-as-Part-of-a-Multi-Year-K-Pro-License-Agreement-With-AstraZeneca)
- 2026-06: Announced a multi-year K Pro collaboration with Sanofi backed by a five-year license, extending a partnership active since 2021. (source: https://www.businesswire.com/news/home/20260605704506/en/Owkin-to-Build-AI-Agents-as-Part-of-a-Multi-Year-K-Pro-Collaboration-with-Sanofi)
