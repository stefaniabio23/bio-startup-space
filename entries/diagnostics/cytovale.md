---
id: cytovale
name: Cytovale
website: cytovale.com
founded: 2017
area: rapid immune diagnostics
funding_stage: series-d-plus
total_funding_usd_m: 220
public: false
business_model: services
buyer:
 - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: medium
regulatory_burden: heavy
tam_usd_m: 5000
data_centrality: not-central
data_ownership:
 - proprietary
 - generated-in-house
moat:
 - regulatory-trust
 - clinical-evidence
 - IP
primary_value_chain_layer: diagnostics
input:
 - white blood cell biophysical measurements from blood samples
transformation_type: measure
output:
 - sepsis risk score (IntelliSep)
 - treatment urgency recommendation
 - immune state classification
barrier_to_entry: high
barrier_to_entry_logic: FDA-cleared IntelliSep required years of clinical validation across sepsis populations; biophysical WBC measurement is a novel modality requiring proprietary microfluidic hardware.
hardness: hard
hardness_reason: Achieving broad hospital reimbursement and EMR integration for a novel diagnostic modality in a cost-pressured emergency medicine environment.
substrate_family: D
substrate_tags:
- D.2
technology_platform_ids: []
new_capability: "Sepsis risk stratification in about 8 minutes from white-blood-cell biophysical deformability, distinct from protein or gene-expression assays."
technology_readiness_level: 9
commercialisation_status: commercial_early
customer:
  - provider
  - payer
limiting_factor: "Novel modality needs clinician behaviour change plus a new CPT reimbursement pathway to scale adoption."
last_verified: "2026-07-07"
---

## One-liner

Rapid immune-state diagnostics company whose FDA-cleared IntelliSep test risk-stratifies suspected sepsis patients from white-blood-cell biophysical changes in about 8 minutes.

## Problem

Sepsis kills 270,000 Americans annually and is the most expensive hospital condition; current diagnosis relies on clinical judgement and slow culture tests, leading to delayed treatment and unnecessary ICU admissions.

## Workaround

Blood cultures (24-48 hours), lactate levels, SOFA/qSOFA scores, clinical gestalt, all slow, insensitive, or non-specific. Procalcitonin and CRP are used but have limited sepsis specificity.

## Entry wedge

IntelliSep FDA clearance (2023), the first rapid immune-state test specifically cleared for sepsis risk stratification in the ED. Entry through emergency department partnerships at academic medical centres with high sepsis volume.

## Method

Microfluidic cartridge measures the biophysical deformability of white blood cells from a standard blood draw; immune activation causes measurable changes in WBC mechanics within minutes; ML model classifies immune state and risk-stratifies sepsis likelihood.

## TAM logic

Sepsis affects 1.7M Americans per year; hospital sepsis diagnostic market is estimated at $5B+ globally. IntelliSep targets the ED triage decision, reduce ICU admissions for low-risk patients and accelerate treatment for high-risk patients. (Source: cytovale.com/intellisep)

## Validated by

FDA clearance for IntelliSep (2023). Published clinical validation studies showing AUC >0.80 for sepsis risk stratification. Approximately $220M raised: Series C $84M (Nov 2023, Norwest lead), Series D $100M (Oct 2024, Sands Capital lead). Deployed at multiple US academic medical centres.

## Competes with

Procalcitonin assays (Roche, BioMerieux), BioMerieux VIDAS (sepsis biomarker panels), Inflammatix (host-response gene expression sepsis test), standard blood cultures.

## Complements

ED EMR platforms (Epic, Cerner) for result delivery and clinical decision support, hospital laboratory information systems, sepsis management protocols.

## Value chain position

**Downstream of:** Blood draw in emergency department, clinical presentation of suspected sepsis
**Upstream of:** ICU admission decision, antibiotic initiation, fluid resuscitation, sepsis bundle activation

## Gaps

Novel modality means physician adoption requires behaviour change in a time-pressured emergency setting. Reimbursement pathway is complex (new CPT code required). Limited to sepsis, does not address broader immune state monitoring.

## Notes

HQ: San Francisco. CEO Ajay Shah (co-founder). The biophysical WBC measurement approach is genuinely novel, different from protein biomarker or gene expression approaches. IntelliSep addresses a $24B annual sepsis cost problem in US hospitals. Key risk is clinician adoption and reimbursement timeline.

## News signals

- 2023-11: Raised $84M Series C led by Norwest Venture Partners to commercialize IntelliSep. (source: https://www.prnewswire.com/news-releases/cytovale-secures-84-million-series-c-to-advance-commercialization-of-transformative-sepsis-diagnostic-tool-301988581.html)
- 2024-10: Raised $100M Series D led by Sands Capital, with CPP Investments joining. (source: https://www.prnewswire.com/news-releases/cytovale-completes-100-million-series-d-funding-to-accelerate-commercial-expansion-of-its-rapid-sepsis-solution-302272909.html)
- 2026-04: Appointed Eric Khairy as Chief Marketing Officer. (source: https://www.prnewswire.com/news-releases/cytovale-appoints-eric-khairy-as-chief-marketing-officer-302735526.html)
