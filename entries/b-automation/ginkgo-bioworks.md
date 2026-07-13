---
id: ginkgo-bioworks
name: Ginkgo Bioworks
website: ginkgo.bio
founded: 2008
area: biofoundry
funding_stage: public
total_funding_usd_m: 0
public: true
business_model: platform_partnership
buyer:
  - biotech
  - pharma
  - academic_lab
buyer_urgency: medium
buyer_wtp: medium
sales_cycle: long
regulatory_burden: light
tam_usd_m: 50000
data_centrality: core-moat
data_ownership:
  - proprietary
  - generated-in-house
  - customer-generated
moat:
  - wet-lab
  - data
  - capital
  - distribution
primary_value_chain_layer: automated organism engineering and lab-as-a-service
input:
  - organism engineering specifications from partners
  - DNA designs and genetic constructs
  - assay and screening campaigns
transformation_type: generate
output:
  - engineered strains and cell programs
  - high-throughput biological datapoints
  - autonomous lab run capacity
barrier_to_entry: very-high
barrier_to_entry_logic: "Building a large automated biofoundry (robots, DNA synthesis, assays, software) and the accumulated datapoints to run it is a capital-heavy, multi-year effort few can assemble."
hardness: very-hard
hardness_reason: "Whether automated cell programming is reliably cheaper and faster than bespoke lab work across many organisms, and whether that converts to durable revenue, remains unproven at profitability."
substrate_family: B
substrate_tags:
  - B.3
  - B.1
  - B.2
  - B.6
technology_platform_name: "Nebula autonomous lab plus the Ginkgo cell-programming foundry"
new_capability: "Runs organism engineering and biological experiments as an automated, around-the-clock lab service, generating structured datapoints at scale for partners and AI models instead of bespoke manual lab campaigns."
technology_readiness_level: 8
commercialisation_status: commercial_early
customer:
  - biotech
  - pharma
  - academic_lab
limiting_factor: "N/A"
last_verified: "2026-07-13"
---

## One-liner

Cell-programming biofoundry that runs organism engineering and biology experiments as an automated, around-the-clock lab service, now pivoting to sell autonomous-lab capacity and structured datapoints.

## Problem

Engineering an organism (a strain, enzyme, or pathway) or running a large biology campaign is slow, manual, and hard to reproduce: each program is a bespoke lab effort, throughput is bounded by human hands, and the data rarely comes out structured enough to train models or compound across projects.

## Workaround

In-house wet labs staffed by scientists running experiments at human timescales, outsourced strain-engineering and screening at CROs, and manual data capture that stays siloed per project and rarely feeds cleanly into computational models.

## Entry wedge

Started as a foundry-as-a-service: partners bring an organism-engineering goal (a better enzyme, a fermentation strain, a natural-product pathway) and Ginkgo runs the design-build-test on shared automated infrastructure, charging upfront plus downstream value. Accumulated automation and datapoints across many programs, then repositioned around Nebula, an autonomous lab sold as capacity (Cloud Lab) plus the structured Datapoints the lab generates.

## Method

The foundry couples automated DNA synthesis and assembly, high-throughput strain construction, robotic assays, and software into a design-build-test-learn loop. Nebula runs over 50 instruments as an autonomous lab operating around the clock, executing real customer science and generating structured biological datapoints. Reasoning models with access to the robotic lab run many parallel hypotheses continuously, and the accumulated data is meant to compound across programs.

## Validated by

Public company (NYSE: DNA), listed via SPAC in 2021. Full-year 2025 revenue about $170M; cash and marketable securities about $423M at year-end 2025. Named partners include ProQR and Amazon on Cloud Lab. Completed divestiture of the Biosecurity business on 3 April 2026 to refocus on autonomous labs. Long history of pharma, biotech, agricultural, and industrial cell-engineering partnerships.

## Competes with

Other biofoundries and lab-automation / self-driving-lab players (Emerald Cloud Lab, Strateos, Culture Biosciences, Lila Sciences, Recursion on the automated-experimentation and AI-data leg), CROs offering strain engineering, and in-house pharma and biotech automation groups.

## Complements

DNA-synthesis suppliers (Twist Bioscience), reagent and instrument vendors, AI and foundation-model teams that consume the structured datapoints, and downstream pharma, biotech, agriculture, and industrial partners who commercialise the engineered organisms.

## Value chain position

**Downstream of:** DNA synthesis, target and pathway selection, and partner program specifications.
**Upstream of:** Strain scale-up and fermentation, product development, and clinical or industrial deployment at partners.

## Gaps

Revenue fell about 25% in 2025 and Q1 2026 revenue dropped roughly 49% year over year, partly from the biosecurity divestiture and weak core service revenue; the company is restructuring and burning $125-150M of cash in 2026. The autonomous-lab pivot is early and its economics unproven. Persistent losses and no clear path to profitability disclosed. total_funding_usd_m set to 0 because it is public and pre-IPO private totals are not the relevant figure; ticker and cash position captured in Notes.

## Notes

Founded 2008 by Jason Kelly and Reshma Shetty (and others from MIT); Boston, Massachusetts. Public via SPAC 2021, NYSE: DNA. Filed under substrate family B (automation / execution) because the differentiating asset is the automated biofoundry and autonomous lab, with substrate tag B.3 (biofoundry) primary plus B.1 (wet-lab automation), B.2 (high-throughput screening), and B.6 (DNA and RNA synthesis). Business model set to platform_partnership (foundry-as-a-service plus Cloud Lab capacity and Datapoints). funding_stage set to public per the listed-company rule; total_funding_usd_m set to 0 as a public-company placeholder. Primitive-link: no clean fit. Candidate primitive "biofoundry / automated-cell-programming" (robotic design-build-test-learn infrastructure for organism engineering plus autonomous-lab-as-a-service) would fit Ginkgo and the self-driving-lab peers, and overlaps the candidate flagged for Capable. Omitted technology_platform_ids and flagged this candidate.

## News signals
- 2026-05: Ginkgo reported Q1 2026 revenue of about $19M (down roughly 49% year over year), completed the divestiture of its Biosecurity business, and reaffirmed a focus on scaling the Nebula autonomous lab. (source: https://www.prnewswire.com/news-releases/ginkgo-bioworks-reports-first-quarter-2026-financial-results-completes-divestiture-of-biosecurity-and-continues-to-scale-autonomous-lab-302766171.html)
- 2026-04: Ginkgo completed the divestiture of its Biosecurity business to a consortium for a minority equity stake, refocusing the company on autonomous labs. (source: https://www.stocktitan.net/news/DNA/ginkgo-bioworks-reports-fourth-quarter-and-full-year-2025-financial-8hrduc3wywfa.html)
