---
id: verily
name: Verily
website: verily.com
founded: 2015
area: precision health AI platform
funding_stage: series-d-plus
total_funding_usd_m: 2800
public: false
business_model: saas
buyer:
  - pharma
  - provider
  - payer
  - biotech
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 80000
data_centrality: core-moat
data_ownership:
  - proprietary
  - partner-supplied
  - licensed
moat:
  - data
  - distribution
  - capital
  - regulatory-trust
primary_value_chain_layer: health data harmonization and precision health AI
input:
  - multimodal EHR data from health system partners
  - claims and insurance data
  - wearable and device data streams
  - genomic and omics data
  - clinical trial protocol documents and study data
transformation_type: predict
output:
  - harmonized FHIR-native AI-ready health datasets (Refinery)
  - shared AI-ready dataset and model marketplace (Exchange)
  - collaborative research environment for AI analytics (Workbench)
  - precision health AI models for disease prediction and care management
  - clinical trial operations intelligence (Viewpoint/Verily Intelligence)
  - "Lightpath Metabolic: AI-guided metabolic care (diabetes, obesity)"
  - "Verily Me: consumer-facing precision health app"
barrier_to_entry: high
barrier_to_entry_logic: Alphabet pedigree, $2.8B raised, FHIR-native data infrastructure integrated with major health systems, NIH All of Us partnership, and 10+ years of multimodal health data accumulation create a platform moat that requires both capital and institutional trust to replicate.
hardness: very-hard
hardness_reason: Converting multimodal health data harmonization into durable clinical AI models that consistently improve patient outcomes and justify enterprise SaaS pricing across health systems, pharma, and payers simultaneously.
last_verified: "2026-06-21"
---

## One-liner

Builds an AI-native data platform that harmonizes multimodal health data and activates it for precision health research, clinical trial optimization, and personalized care.

## Problem

Health data is siloed, heterogeneous, and inconsistently structured across EHRs, claims, devices, and research databases — making it impossible for health systems, pharma companies, and researchers to build AI models that generalize and improve patient outcomes at scale.

## Workaround

Custom data engineering projects within individual health systems, manual data curation by CROs and pharma biostatistics teams, one-off research data sharing agreements, and proprietary data lakes that remain siloed within single institutions.

## Entry wedge

Verily started as Google Life Sciences within Google X in 2012, conducting research projects (smart contact lens for glucose monitoring, surgical robotics via Verb Surgical, bioelectronics medicine via Galvani with GSK). In December 2015 it rebranded as Verily under Alphabet. The first commercial anchor was the Project Baseline longitudinal health study (launched 2017), which recruited thousands of participants for continuous multimodal health data collection. This seeded the proprietary data asset and research credibility that later powered the Pre platform. In December 2024 Verily transitioned to a standalone company (Alphabet no longer holding controlling interest), and in March 2026 raised $300M Series D (led by Series X Capital) to accelerate its AI strategy independently.

## Method

The Verily Pre platform is the core commercial product, consisting of three components:

1. **Refinery**: A curation engine that ingests siloed, multimodal health data (EHR, claims, genomics, wearables) and harmonizes it into structured, FHIR-native AI-ready datasets. Uses a clinically informed data model to standardize across institutions.

2. **Exchange**: A centralized marketplace for sharing Refinery-processed, AI-ready datasets and pre-trained models across research participants, enabling federated and collaborative discovery without raw data transfer.

3. **Workbench**: A scalable Trusted Research Environment (TRE) with analytics tools, governance controls, and cloud infrastructure for running AI models and studies on harmonized data. Powers the NIH All of Us Researcher Workbench (partnership with Vanderbilt extended June 2025).

Clinical trial and real-world evidence arm: Verily Intelligence and Viewpoint Clinical Operations use LLMs and agents to transform PDF protocols into dynamic data models, accelerate trial operations, support recruitment, and run real-world studies using the participant registry.

Care delivery arm: Lightpath Metabolic (January 2026) is an AI-guided metabolic care platform for diabetes and obesity management combining AI agents for triage and personalized coaching with human clinical team escalation. Verily Me is a consumer-facing app for personalized health tracking.

Key partnerships: Samsung Galaxy Watch (biomarker development on Pre), Salesforce / Agentforce Health (enterprise integration), Nvidia (AI infrastructure and agent development), UCHealth and University of Colorado Anschutz (health system partner and investor), Mayo Clinic (not confirmed as investor), Michael J. Fox Foundation (Parkinson's research partnership).

## TAM logic

No formal TAM stated on Verily's website. The combination of pharma/biotech enterprise data and AI services ($20B+), health system AI and analytics ($15B+), clinical trial technology ($10B+), and consumer precision health ($10B+) suggests an $80B+ combined addressable market. Verily's platform-first approach means it is competing across multiple of these segments simultaneously rather than owning a single vertical.

## Validated by

$2.8B total funding across 6 rounds. $300M Series D (March 2026) led by Series X Capital with Alphabet, UCHealth, Michael J. Fox Foundation, and others. Standalone company status as of December 2024 (Alphabet no longer controlling). NIH All of Us Researcher Workbench powered by Verily (partnership extended June 2025). Multiple pharma and health system enterprise customers using Pre platform (specific names not disclosed publicly). Galvani Bioelectronics (joint venture with GSK) and Verb Surgical (joint venture with J&J) as evidence of multi-partner platform strategy.

## Competes with

Medidata (IQVIA) and Veeva Systems (clinical trial data management), IQVIA (real-world evidence and data services), Tempus AI (multimodal clinical data and AI, primarily oncology), Komodo Health (claims data and patient journey analytics), Innovaccer (health system AI platform), Palantir (government and enterprise health data infrastructure), Flatiron Health (oncology RWE), AWS HealthLake and Microsoft Azure Health Data Services (cloud health data infrastructure).

## Complements

Samsung, Garmin, WHOOP (wearable data streams that feed into Pre as inputs), EHR vendors (Epic, Cerner — source systems for Refinery ingestion), CROs (Covance, ICON — use Viewpoint tools for trial operations), pharma sponsors running real-world studies on the Pre platform.

## Value chain position

**Downstream of:** Raw health data sources (EHRs, claims databases, wearables, genomic sequencers, clinical trial systems)
**Upstream of:** Drug discovery AI models, clinical trial analytics, care management decisions, regulatory submissions using real-world evidence

## Gaps

Verily has been operating for 11 years and has not yet achieved the market position its Alphabet pedigree implied. The transition to a standalone company in 2024 signals Alphabet reducing its commitment, not deepening it. The Pre platform is competing against well-capitalized incumbents (IQVIA, Medidata, Tempus) that have years of pharma relationship entrenchment. Lightpath Metabolic (care delivery) and the research platform are structurally different businesses being operated under one brand, which creates buyer confusion. No published validation of Pre platform outcomes (e.g., how much faster do trials run, how much better do models generalize) vs. competitors. The consumer Verily Me app has low public visibility.

## Notes

The $300M Series D in March 2026 included UCHealth and the University of Colorado Anschutz Medical Campus as investors — health system investors are also customers, a common enterprise SaaS flywheel strategy. Series X Capital as lead investor is notable: Series X specifically invests in health system-adjacent companies, suggesting Verily is now being positioned as a health system infrastructure play more than a pharma technology company. The Salesforce Agentforce and Nvidia partnerships signal an agentic AI layer being built on top of the Pre data platform, which would be a meaningful differentiation if it ships. Verily's failure to achieve profitability or a clear market leadership position after $2.8B raised is the central strategic question.
