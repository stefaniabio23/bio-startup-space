---
id: aitia
name: Aitia
website: aitia.com
founded: 2000
area: digital twins
funding_stage: series-d-plus
total_funding_usd_m: 66
public: false
business_model: partnerships
buyer:
 - pharma
 - biotech
buyer_urgency: medium
buyer_wtp: high
sales_cycle: long
regulatory_burden: medium
tam_usd_m: 119030
substrate_family: C
substrate_tags:
- C.3
- C.2
technology_platform_ids:
  - biosimulation-qsp
new_capability: "Causal disease digital twins inferred from multi-omic patient data, predicting drug targets and responder subgroups before trials"
technology_readiness_level: 5
commercialisation_status: pilot_deployment
customer:
  - pharma
  - biotech
limiting_factor: "Depends on partner data, does not validate targets in vivo, and outputs lack FDA/EMA qualification; low disclosed deal velocity"
last_verified: "2026-07-07"
data_centrality: core-moat
data_ownership:
 - partner-supplied
 - licensed
 - proprietary
moat:
 - model
 - IP
 - data
 - founder-brand
input:
 - "multi-omic patient data (transcriptomics, proteomics, genomics, single-cell)"
 - "clinical phenotype metadata"
 - "human disease cohort data"
transformation_type: predict
output:
 - "Gemini Digital Twins (causal disease models)"
 - "validated drug targets"
 - "responder patient subgroup predictions"
 - "causal disease circuitry maps"
barrier_to_entry: high
barrier_to_entry_logic: 20+ years of causal AI methodology (GNS Healthcare lineage) and pharma relationship-building creates a knowledge and credibility moat that cannot be replicated quickly.
hardness: moonshot
hardness_reason: Inferring causal (not correlative) disease circuitry from noisy, high-dimensional multi-omic data without confounding by population structure or data artefacts.
---

## One-liner

Builds causal disease digital twins from multi-omic patient data to infer hidden disease circuitry and identify targets or responder groups.

## Problem

Most omics analysis is correlative and does not reveal causal disease mechanisms or actionable patient subgroups.

## Workaround

Bioinformatics pipelines, GWAS, pathway analysis, expert biology review, retrospective biomarker analysis.

## Entry wedge

Founded in 2000 (originally as Gene Logic's computational platform, later as an independent entity). Entry into pharma partnerships came via Gemini Digital Twins, causal graphical models built from patient multi-omics that predicted clinical outcomes and target effects before trials. Neurology was the initial focus area for published validation work.

## Method

Causal AI on multi-omic patient data to infer hidden disease circuitry (Gemini Digital Twins).

## TAM logic

Pharma R&D target identification and clinical development productivity is an estimated $119B+ market. Aitia argues that causal inference from human data can raise the probability of success at target selection and Phase 2, saving pharma from the ~90% clinical failure rate (aitia.com, About Us).

## Validated by

Partnership with Gustave Roussy cancer center (Jun 2025) to identify fundamental biological causes of multiple cancers using Gemini Digital Twins. Colin Hill (CEO/founder) elected to Critical Path Institute Board of Directors, signalling regulatory community recognition. Prior published neurology validation work (publicly available publications on aitia.com).

## Competes with

Recursion Pharmaceuticals (phenotypic + causal ML), Owkin (federated multimodal biology), BioSymetrics, Aria Pharmaceuticals. Internally at pharma: AZ's Functional Genomics Centre, Genentech's computational biology groups.

## Complements

Multi-omics data generators (10x Genomics, Illumina, Olink proteomics). Clinical biobank operators (UK Biobank, All of Us). Trial design and endpoint enrichment platforms. CROs with omics profiling capability.

## Value chain position

**Downstream of:** Multi-omic data generation, clinical biobanks, patient cohort collection
**Upstream of:** Target selection, responder stratification, trial design, IND-enabling work

## Gaps

Does not generate wet-lab experimental data internally, depends on partner data. Does not run clinical trials or validate targets in vivo. Limited public press releases suggest low deal velocity relative to competitors. No disclosed product revenue or FDA/EMA regulatory qualification of their output.

## Notes

Closest intellectual cousin to EF clinical inference thesis, same inference-over-observation framing, different data modality (omics vs. longitudinal biomarkers/wearables). CEO Colin Hill is a long-tenured computational biology founder (20+ years). Website note: entry file lists website as aitia.ai but the correct company URL is aitia.com. aitia.ai is an unrelated Hungarian telecom company.
