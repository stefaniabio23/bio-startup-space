---
id: prime-medicine
name: Prime Medicine
website: https://primemedicine.com/
founded: 2019
area: In-vivo and ex-vivo prime editing gene therapies
substrate_family: E
substrate_tags:
  - E.3
  - D.4
technology_platform_ids:
  - prime-base-editing
technology_platform_name: DNA data storage
funding_stage: public
total_funding_usd_m: 490
public: true
business_model: platform_to_pipeline_hybrid
buyer:
  - pharma
  - provider
customer:
  - pharma
  - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 10000
new_capability: Programmable search-and-replace editing of a target DNA sequence that installs precise insertions, deletions, and all base-to-base changes without cutting both strands of the double helix.
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
  - licensed
moat:
  - IP
  - wet-lab
  - clinical-evidence
primary_value_chain_layer: therapeutic development
input:
  - pegRNA-designs
  - prime-editor-protein-payloads
  - lipid-nanoparticle-and-viral-delivery-vehicles
transformation_type: generate
output:
  - precisely-edited-genomic-DNA
  - in-vivo-and-ex-vivo-gene-editing-therapeutics
technology_readiness_level: 5
limiting_factor: In-vivo delivery efficiency to target tissues, manufacturing of large prime-editor payloads, and clinical translation of durable editing plus capital runway to reach human proof-of-concept.
commercialisation_status: preclinical
barrier_to_entry: very-high
barrier_to_entry_logic: Requires foundational prime-editing IP licensed from the Broad Institute, proprietary pegRNA and editor engineering, delivery chemistry, and heavy regulatory precedent. Very few groups can run the full search-and-replace editing stack.
hardness: very-hard
hardness_reason: Precise in-vivo genome editing that installs an exact correction in a living patient's cells is a first-in-class capability with unproven durability, delivery, and clinical pathways.
last_verified: "2026-07-06"
---

## One-liner

Prime Medicine develops gene-editing therapies built on prime editing, a search-and-replace technology that rewrites a targeted DNA sequence precisely without cutting both strands, aiming to correct the underlying mutations that cause genetic disease.

## Problem

Most first-generation CRISPR editing works by cutting both DNA strands, which reliably knocks a gene out but cannot make a clean, defined correction, and it risks unwanted insertions, deletions, and chromosomal rearrangements. The large majority of known disease-causing mutations need a precise rewrite that cut-and-repair tools cannot deliver.

## Workaround

Patients with genetic disease rely on symptom management, protein or enzyme replacement, transplants, or gene-addition therapies that add a working copy without fixing the defective gene. Base editors handle single-letter changes but cannot perform insertions, deletions, or arbitrary sequence swaps.

## Entry wedge

The original lead program, PM359, targeted p47phox chronic granulomatous disease as an ex-vivo edit of a patient's own blood stem cells, chosen because the disease has a clear genetic cause and a well-understood cell-therapy route. After the 2025 restructuring the company refocused its wedge on large genetic liver diseases delivered in vivo, led by PM577 for Wilson disease.

## Method

A prime editor fuses a nickase Cas protein to a reverse transcriptase and is guided by a prime editing guide RNA (pegRNA) that both specifies the target site and templates the new sequence. The editor nicks one strand and writes the desired edit directly from the pegRNA template, installing insertions, deletions, or any base substitution without a double-strand break. Prime Medicine engineers the editor proteins, pegRNAs, and lipid-nanoparticle or viral delivery to reach target tissues in vivo or edited cell products ex vivo.

## Validated by

Prime editing was invented by David Liu and Andrew Anzalone at the Broad Institute and published in Nature in 2019; Prime Medicine holds the foundational license. The company reported clearance to dose the first patients in its PM359 chronic granulomatous disease trial, an early clinical validation of therapeutic prime editing, before deprioritizing the program in the 2025 restructuring. Wilson disease preclinical data were slated for the ASGCT 2026 meeting.

## Competes with

Intellia Therapeutics and Beam Therapeutics (in-vivo CRISPR and base editing for liver diseases), Verve Therapeutics, and broadly gene-addition and small-molecule players in the same rare-disease indications such as Wilson disease and alpha-1 antitrypsin deficiency.

## Complements

The Broad Institute and academic prime-editing labs that extend the toolkit, lipid-nanoparticle and viral-vector delivery specialists, contract manufacturers for editor and payload production, and pharma partners who license or co-develop programs the company chooses to out-license.

## Value chain position

**Downstream of:** prime-editing science from the Broad Institute, pegRNA and editor protein engineering, delivery chemistry, and disease genetics that defines correctable targets.

**Upstream of:** clinical-stage gene-editing therapeutics, treating physicians and health systems, and pharma partners who take out-licensed or partnered programs toward market.

## Gaps

No approved product and no durable human efficacy data yet; lead in-vivo programs remain preclinical or early. In-vivo delivery of large prime-editor payloads to non-liver tissues is unproven, and the 2025 cash runway extends only into 2027, forcing program prioritization and reliance on partnering to fund the pipeline.

## Notes

Substrate is in-vivo cells (E.3) with a therapeutic edit output (D.4). The dna-data-storage primitive link is a chemistry-capability analogy, not a product claim: prime editing is programmable DNA writing, the same capability class of precise, sequence-defined "write" chemistry that underlies molecular recording and DNA-based data writing. Prime Medicine's actual business is gene-editing therapeutics, and it does not build data-storage products; the link captures the shared primitive of writing chosen sequences into DNA at chosen positions.

Founded 2019 in Cambridge, Massachusetts; scientific founders David Liu and Andrew Anzalone, with Keith Gottesdiener as founding CEO. Total funding roughly 490M USD (115M Series A, 200M Series B, and a 175M IPO at 17 USD per share on Nasdaq in October 2022 under PRME). May 2025 restructuring deprioritized the chronic granulomatous disease programs, cut workforce and burn by nearly half through 2027, and installed CFO Allan Reine as CEO with Jeff Marrazzo as Executive Chair. Cash was 149.2M USD as of March 31, 2026, guided to fund operations into 2027.

## News signals
- 2026-05: Q1 2026 results report 149.2M USD cash with runway into 2027, IND/CTA filings targeted in 2026 for PM577 (Wilson disease) and PM647 (alpha-1 antitrypsin deficiency), and initial clinical data expected in 2027. (source: https://investors.primemedicine.com/news-releases/news-release-details/prime-medicine-reports-first-quarter-2026-financial-results-and)
- 2025-05: Announced strategic restructuring to focus on large genetic liver diseases, cystic fibrosis, and partnered programs, deprioritizing chronic granulomatous disease and exploring out-licensing of PM359, alongside a CEO leadership transition. (source: https://www.globenewswire.com/news-release/2025/05/19/3084008/0/en/prime-medicine-announces-strategic-restructuring-to-focus-on-opportunities-in-large-genetic-liver-diseases-cystic-fibrosis-and-partnered-programs-alongside-ceo-leadership-transitio.html)
- 2022-10: Raised 175M USD in an upsized IPO, listing on Nasdaq under the ticker PRME. (source: https://www.biopharmadive.com/news/prime-medicine-ipo-price-biotech-gene-editing/634548/)
