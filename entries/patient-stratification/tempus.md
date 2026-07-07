---
id: tempus
name: Tempus
website: tempus.com
founded: 2015
area: multimodal oncology data platform
funding_stage: public
total_funding_usd_m: 1420
public: true
business_model: hybrid
buyer:
 - pharma
 - provider
 - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 100000
substrate_family: A
substrate_tags:
- A.2
technology_platform_ids:
  - multimodal-clinical-data-platform
new_capability: "Multimodal molecular + clinical data platform linking tumor sequencing, EHR and outcomes into RWE and trial matching for pharma."
technology_readiness_level: 9
commercialisation_status: commercial_scaled
customer:
  - pharma
  - provider
  - biotech
limiting_factor: "Converting diagnostics volume into recurring high-margin RWE while pharma may build internal capabilities; non-oncology expansion is early."
last_verified: "2026-07-07"
data_centrality: core-moat
data_ownership:
 - proprietary
 - partner-supplied
 - customer-generated
moat:
 - data
 - distribution
 - clinical-evidence
 - regulatory-trust
 - IP
input:
 - tumor genomic sequencing (somatic + germline)
 - whole transcriptome RNA sequencing
 - liquid biopsy cfDNA
 - EHR clinical records
 - pathology images
 - real-world treatment and outcomes data
transformation_type: predict
output:
 - genomic profiling reports for clinicians
 - companion diagnostic assays
 - real-world evidence datasets for pharma
 - trial eligibility matches (TIME trial program)
 - biomarker strategy analyses
 - MRD monitoring
barrier_to_entry: very-high
barrier_to_entry_logic: $1.42B deployed to build molecular profiling at oncology centre scale with EHR integrations; 95% of top 20 pharma already customers creates switching-cost lock-in.
hardness: very-hard
hardness_reason: Converting a diagnostics and data business into high-margin recurring RWE contracts while defending against pharma building internal capabilities.
---

## One-liner

Combines diagnostics, oncology data, trial matching, and RWE analytics into a single patient-to-trial and drug-development support platform.

## Problem

Pharma sponsors cannot efficiently match patients to trials or use real-world oncology data alongside clinical trial data.

## Workaround

Manual chart review, CRO recruitment, independent RWE vendors, separate diagnostics providers.

## Entry wedge

Eric Lefkofsky founded Tempus in 2015 after his wife was diagnosed with breast cancer, the initial motivation was the fragmentation of clinical and molecular data in cancer care. The entry wedge was clinical genomic sequencing (the xT panel, a 648-gene solid tumor sequencing test) sold to oncologists at academic medical centers. This built a proprietary database of matched molecular + clinical records at scale. They then monetized the data asset with pharma through RWE and trial recruitment products (TIME trial network). Sequencing-to-data flywheel: diagnostics volume funds data accumulation; data accumulation funds pharma licensing revenue.

## Method

Molecular profiling (genomic sequencing) + EHR integration at provider level + trial eligibility matching + RWE analytics.

## TAM logic

Tempus calls themselves "the operating system for precision medicine 2.0" and states they serve 95% of the top 20 pharma companies and 250+ biopharma companies. They have 8.5M+ de-identified research records, 5K+ connected healthcare institutions, and 5M+ cancer patients in the TIME network. They position total RWE + precision oncology market at $100B+. (Source: tempus.com/life-sciences, Wikipedia)

## Validated by

IPO after $1.42B raised. Multiple active pharma partnerships. Named pharma customers include AstraZeneca, Pfizer, BMS, GSK, Merck, Janssen, Eli Lilly, BioNTech, Genmab, Takeda, Boehringer Ingelheim, Recursion, United Therapeutics. FDA-approved companion diagnostic (xT CDx, 648-gene solid tumor panel). Acquired Ambry Genetics for $600M (announced Nov 2024, closed February 2025) to expand germline testing. IPO on Nasdaq June 14, 2024 (TEM), raising $410.7M. SoftBank joint venture in Japan (SB Tempus, June 2024). 2K+ peer-reviewed publications citing Tempus data.

## Competes with

Flatiron (RWD), ConcertAI (RWD), Deep 6 AI (recruitment)

## Complements

EHR vendors (Epic, Cerner) as integration partners for data collection. Sequencing instrument manufacturers (Illumina) upstream. CROs (IQVIA, Covance) that run the trials Tempus supports with recruitment and data. Wearable/remote monitoring vendors for longitudinal signal during trials (not yet integrated).

## Value chain position

**Downstream of:** Molecular profiling, EHR data
**Upstream of:** Trial enrollment, drug commercialisation, RWE submissions

## Gaps

Strong on diagnostics and molecular profiling at enrollment; less clear on longitudinal in-trial signal inference or latent-state modelling from wearables/biomarkers during trials. The xT-to-RWE flywheel works in oncology; expansion into other therapeutic areas (cardiology, psychiatry) is earlier stage and faces different data dynamics. Ambry acquisition adds germline genetic testing complexity.

## Notes

Hero comparison from EF previous batch (Immunara): investors excited by proprietary data partnerships.

## News signals

- 2025-02: Closed the Ambry Genetics acquisition on February 3, 2025 (announced November 2024), expanding hereditary/germline testing. (source: https://www.businesswire.com/news/home/20250203899156/en/Tempus-Completes-Acquisition-of-Ambry-Genetics)
- 2026-05: Reported Q1 2026 revenue of $348.1M, up ~36% year-over-year, and raised full-year 2026 revenue guidance to roughly 25% growth with an adjusted EBITDA target of $65M. (source: https://www.businesswire.com/news/home/20260505411869/en/Tempus-Reports-First-Quarter-2026-Results)
- 2026: Expanded the AI-enabled Next platform to six additional cancer indications, including breast, colorectal, ovarian, prostate, and urothelial. (source: https://stockanalysis.com/stocks/tem/)
