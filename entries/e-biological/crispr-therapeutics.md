---
id: crispr-therapeutics
name: CRISPR Therapeutics
website: https://www.crisprtx.com/
founded: 2013
area: CRISPR/Cas9 gene-edited medicines
substrate_family: E
substrate_tags:
  - E.2
  - E.3
technology_platform_ids:
  - engineered-cell-therapy
technology_platform_name: "CRISPR/Cas9 gene editing"
funding_stage: public
total_funding_usd_m: 2000
public: true
business_model: platform_to_pipeline_hybrid
buyer:
  - pharma
  - payer
  - provider
customer:
  - pharma
  - payer
  - provider
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 20000
new_capability: "First approved CRISPR therapy: ex-vivo Cas9 editing of a patient's own blood stem cells to raise fetal hemoglobin, delivering a one-time functional cure for sickle cell disease and beta-thalassemia."
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
  - licensed
moat:
  - clinical-evidence
  - IP
  - regulatory-trust
  - capital
primary_value_chain_layer: therapeutic development
input:
  - cas9-guide-rna-designs
  - patient-or-donor-hematopoietic-stem-cells
  - lipid-nanoparticle-and-viral-delivery-vehicles
transformation_type: generate
output:
  - ex-vivo-edited-cell-therapy-products
  - in-vivo-gene-editing-therapeutics
  - approved-casgevy-treatment
technology_readiness_level: 9
limiting_factor: "N/A for the approved Casgevy product; pipeline programs (in-vivo cardiovascular, allogeneic CAR-T) remain gated on delivery efficiency and durable off-the-shelf cell persistence."
commercialisation_status: commercial_early
barrier_to_entry: very-high
barrier_to_entry_logic: "An approved first-in-class CRISPR therapy, foundational Cas9 IP, a validated ex-vivo edited-cell manufacturing chain, and a partnered commercial footprint with Vertex form a lead that is extremely costly to reproduce."
hardness: very-hard
hardness_reason: "Extending from a proven ex-vivo blood-stem-cell edit to durable in-vivo editing and off-the-shelf allogeneic CAR-T requires solving delivery and cell persistence problems that remain unproven at commercial scale."
last_verified: "2026-07-13"
---

## One-liner

CRISPR Therapeutics develops CRISPR/Cas9 gene-edited medicines and co-developed Casgevy with Vertex, the first CRISPR therapy approved anywhere, a one-time treatment for sickle cell disease and transfusion-dependent beta-thalassemia, alongside in-vivo editing and allogeneic CAR-T programs.

## Problem

Sickle cell disease and beta-thalassemia are inherited blood disorders that today require lifelong transfusions, pain management, and hospitalizations, with a bone-marrow transplant the only prior cure and only for the minority with a matched donor. More broadly, most severe genetic and immune diseases have no route to a durable one-time fix.

## Workaround

Chronic transfusions, hydroxyurea, iron chelation, and pain management for hemoglobinopathies; allogeneic stem-cell transplant for the few with matched donors; and patient-specific autologous CAR-T that is slow and costly to manufacture one patient at a time.

## Entry wedge

Casgevy (exa-cel) was the wedge: an ex-vivo edit chosen because raising fetal hemoglobin by knocking out the BCL11A erythroid enhancer had strong human genetic support and a clear cell-therapy route through blood stem cells. Winning the first-ever CRISPR approval established manufacturing, regulatory, and payer precedent the company now extends into in-vivo cardiovascular editing and off-the-shelf allogeneic CAR-T.

## Method

A guide RNA directs Cas9 to a chosen genomic site where it cuts DNA, and the cell's repair either disrupts a target gene or, with a template, inserts new sequence. For Casgevy, a patient's own CD34+ blood stem cells are collected, edited ex vivo to disrupt the BCL11A enhancer so fetal hemoglobin rises, then reinfused after conditioning. In-vivo programs (CTX310, CTX340, CTX321) deliver Cas9 by lipid nanoparticle to edit liver lipid genes directly, and allogeneic CAR-T (zugo-cel, formerly CTX112) uses multiplexed Cas9 knockouts plus CAR insertion to make donor T cells off-the-shelf.

## Validated by

FDA approved Casgevy for sickle cell disease in December 2023 and for transfusion-dependent beta-thalassemia in January 2024, the first approved CRISPR-based medicine; the EU granted conditional marketing authorization in February 2024. By end of 2024 more than 50 patients had initiated cell collection across more than 50 activated authorized treatment centers. CTX310 (ANGPTL3) reported positive Phase 1 in-vivo cardiovascular data, with further updates due in the second half of 2026. Cash and marketable securities were roughly 1.86 billion USD as of March 31, 2025.

## Competes with

Beam Therapeutics (base-edited sickle cell and in-vivo AATD), bluebird bio (lovo-cel gene therapy for sickle cell), Intellia and Verve/Eli Lilly (in-vivo lipid editing), and allogeneic CAR-T players (Allogene, Caribou) on the off-the-shelf cell-therapy leg. Vertex is the commercial partner on Casgevy, not a competitor.

## Complements

Vertex Pharmaceuticals, which leads global development, manufacturing, and commercialization of Casgevy and splits costs and profits 60/40; lipid-nanoparticle and viral-vector delivery suppliers; authorized treatment centers and conditioning-regimen providers; and payers reimbursing one-time curative therapies.

## Value chain position

**Downstream of:** foundational CRISPR/Cas9 science and IP, human genetics of fetal hemoglobin and lipid targets, and cell-manufacturing and delivery chemistry.

**Upstream of:** Vertex's Casgevy commercialization, treating hematologists and cardiologists, authorized treatment centers, and payers reimbursing gene-editing cures.

## Gaps

Casgevy is approved but its ex-vivo, conditioning-dependent model is expensive and slow to scale, limiting patient throughput. The in-vivo and allogeneic CAR-T pipeline is still early clinical, with durable off-the-shelf cell persistence and in-vivo delivery efficiency unproven. Casgevy revenue accrues largely through Vertex under the 60/40 split, so CRISPR captures a minority share of the first approved product.

## Notes

Substrate spans ex-vivo edited cells (E.2, Casgevy) and in-vivo editing (E.3, CTX310 line). Linked to `engineered-cell-therapy` because the approved product is an ex-vivo gene-edited autologous HSC therapy; that primitive centers on non-MHC-restricted allogeneic cells, so the fit is partial. Casgevy is autologous edited HSCs, and the company's allogeneic CAR-T (zugo-cel) is closer to the primitive's off-the-shelf thesis. The `prime-base-editing` primitive is a poorer fit since CRISPR Therapeutics uses nuclease Cas9 editing, not base or prime editing.

Founded 2013 (Basel, Switzerland and Cambridge, Massachusetts), co-founded by Emmanuelle Charpentier, a co-inventor of CRISPR/Cas9. IPO October 2016 on Nasdaq under ticker CRSP. Total capital raised across private, IPO, and follow-on offerings is roughly 2.0 billion USD (estimate, cumulative figure not cleanly disclosed, flagged uncertain); cash and marketable securities were about 1.86 billion USD at Q1 2025. commercialisation_status set to `commercial_early` given one approved product (Casgevy) with an early ramp under Vertex.

## News signals
- 2026-05: CRISPR Therapeutics reported Q1 2026 results and reiterated a data-rich year, with CTX310 in-vivo cardiovascular updates expected in the second half of 2026 and allogeneic CAR-T (zugo-cel) in Phase 1 autoimmune and hematology baskets. (source: https://ir.crisprtx.com/news-releases/news-release-details/crispr-therapeutics-provides-business-update-and-reports-first-7/)
- 2024-01: FDA approved Casgevy (exa-cel) for transfusion-dependent beta-thalassemia, extending the December 2023 sickle cell approval as the first authorized CRISPR therapy. (source: https://ir.crisprtx.com/news-releases/news-release-details/crispr-therapeutics-announces-us-food-and-drug-administration)
- 2023-12: FDA granted the first-ever approval of a CRISPR-based medicine, Casgevy, for sickle cell disease with recurrent vaso-occlusive crises. (source: https://news.vrtx.com/news-releases/news-release-details/vertex-and-crispr-therapeutics-announce-us-fda-approval)
