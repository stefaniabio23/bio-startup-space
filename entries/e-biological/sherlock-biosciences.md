---
id: sherlock-biosciences
name: Sherlock Biosciences
website: https://sherlock.bio/
founded: 2019
area: Boston, Massachusetts, USA
substrate_family: E
substrate_tags:
  - E.1
  - D.2
technology_platform_ids:
  - crispr-diagnostics
  - cell-free-synthetic-biology
technology_platform_name: CRISPR diagnostics and cell-free synthetic biology
funding_stage: acquired
total_funding_usd_m: 111
public: false
business_model: diagnostic_per_test
buyer:
  - consumer
customer:
  - consumer
  - provider
buyer_urgency: high
buyer_wtp: medium
sales_cycle: medium
regulatory_burden: heavy
tam_usd_m: 1500
new_capability: Instrument-free, single-use molecular diagnostic that reads nucleic acids from a self-collected swab at ambient temperature and returns a result in under 30 minutes at home.
data_centrality: supporting-evidence
data_ownership:
  - proprietary
  - generated-in-house
moat:
  - IP
  - regulatory-trust
  - wet-lab
primary_value_chain_layer: diagnostic assay and readout
input:
  - self-collected patient swab (nucleic acids, DNA and RNA)
transformation_type: measure
output:
  - qualitative pathogen detection result (positive/negative)
technology_readiness_level: 7
limiting_factor: FDA regulatory clearance for over-the-counter molecular STI tests and demonstrating central-lab-equivalent sensitivity in a disposable instrument-free format
commercialisation_status: regulatory_review
barrier_to_entry: very-high
barrier_to_entry_logic: Combines a licensed CRISPR IP estate (SHERLOCK, from the Broad Institute) with cell-free synthetic biology (INSPECTR), a heavy FDA regulatory pathway for OTC molecular diagnostics, and the manufacturing know-how to make an instrument-free single-use device at consumer price points.
hardness: very-hard
hardness_reason: Getting central-lab-grade molecular sensitivity into a room-temperature, instrument-free, single-use consumer device while clearing FDA authorization is a deep wet-lab, engineering, and regulatory problem.
last_verified: "2026-07-06"
---

## One-liner

Sherlock Biosciences builds instrument-free molecular diagnostics that let people run lab-grade nucleic-acid tests at home, using CRISPR-based SHERLOCK detection and the cell-free synthetic biology INSPECTR platform.

## Problem

Molecular tests for infectious disease usually need a central lab, thermal cyclers, and days of turnaround, which delays treatment and drives loss to follow-up for sexually transmitted infections. Rising STI rates in the US collide with limited access to fast, private, accurate molecular testing. Rapid at-home antigen tests exist but lack the sensitivity of molecular assays.

## Workaround

Patients visit a clinic or lab, get swabbed or draw blood, and wait days for PCR results, often never returning for treatment. Cheaper rapid antigen tests trade away molecular sensitivity, and true point-of-care molecular systems require an instrument that is impractical for home use.

## Entry wedge

An over-the-counter, instrument-free molecular test for common STIs, self-collected swab in, result in under 30 minutes, starting with chlamydia (Chlamydia trachomatis) and gonorrhea (Neisseria gonorrhoeae) via the INSPECTR platform.

## Method

SHERLOCK uses CRISPR-Cas enzymes as a programmable AND-gate: a guide RNA recognizes a target sequence, activating collateral cleavage of a reporter that produces a readable signal, giving high specificity at attomolar sensitivity. INSPECTR is a cell-free synthetic biology readout that runs at ambient temperature without an instrument, amplifying and reporting nucleic-acid targets in a single-use disposable device. Together they turn a self-collected swab into a qualitative positive/negative result at home.

## Validated by

In May 2020 Sherlock received the first-ever FDA Emergency Use Authorization for a CRISPR-based diagnostic, its SARS-CoV-2 test. The company launched the PROMISE clinical trial in 2024 to compare its disposable OTC molecular STI test against central-lab reference methods. In December 2024, OraSure Technologies acquired Sherlock, validating the platform commercially and funding the path to FDA clearance.

## Competes with

Cepheid (GeneXpert), Binx Health (at-home and point-of-care STI molecular testing), Visby Medical (single-use PCR devices), Roche and Hologic central-lab molecular assays, and rapid antigen or antibody home tests such as NOWDiagnostics for adjacent indications.

## Complements

OraSure Technologies (parent, with self-collection and at-home sample logistics), telehealth and direct-to-consumer STI services, retail pharmacy distribution, and the Broad Institute CRISPR IP licensed into SHERLOCK.

## Value chain position

**Downstream of:** CRISPR IP licensors (Broad Institute), reagent and enzyme suppliers, self-collection swab and consumables manufacturers, and the acquired Sense Biodetection instrument-free assay technology.

**Upstream of:** the patient or consumer receiving a result, and the clinicians, telehealth providers, and treatment pathways that act on a positive test.

## Gaps

No FDA-cleared OTC molecular STI product on market yet as of mid-2026, so revenue depends on clearance of the chlamydia and gonorrhea assay. The acquisition milestone structure (up to $25M, mostly contingent on FDA approval) signals the outcome is unproven. Manufacturing an instrument-free molecular device at consumer price and scale remains a hard cost problem.

## Notes

Founded in 2019 from SHERLOCK research at the Broad Institute (Feng Zhang, Jim Collins, and colleagues) and named for Specific High-sensitivity Enzymatic Reporter unLOCKing. Raised roughly $111M across a Series A (about $49M total) and an $80M Series B (March 2022), with early backing including a $17.5M grant from the Open Philanthropy Project. Acquired Sense Biodetection to strengthen its instrument-free INSPECTR readout. Acquired by OraSure Technologies on December 19, 2024 for up to $25M ($5M upfront plus $20M in FDA-approval milestones and a low-single-digit royalty), and now operates as part of OraSure. The syphilis/STI framing reflects the broader at-home STI diagnostics push; the lead OTC molecular program targets chlamydia and gonorrhea.

## News signals
- 2024-12: OraSure Technologies completed its acquisition of Sherlock Biosciences for up to $25M, expanding into the molecular testing market. (source: https://www.genomeweb.com/business-news/orasure-technologies-acquires-sherlock-biosciences-25m)
- 2024-05: Sherlock enrolled the first patient in the PROMISE trial evaluating its rapid OTC molecular test for chlamydia and gonorrhea against central-lab tests. (source: https://www.clinicaltrialsarena.com/news/sherlock-starts-clinical-trial-for-rapid-otc-diagnostics-for-stis/)
- 2022-03: Sherlock raised $80M in Series B financing to democratize at-home diagnostic testing. (source: https://www.prnewswire.com/news-releases/sherlock-biosciences-raises-80-million-in-series-b-financing-to-democratize-at-home-diagnostic-testing-301497215.html)
- 2020-05: Sherlock received the first FDA Emergency Use Authorization for a CRISPR-based diagnostic (SARS-CoV-2). (source: https://sherlock.bio/sherlock-biosciences-receives-fda-emergency-use-authorization-for-crispr-sars-cov-2-rapid-diagnostic/)
