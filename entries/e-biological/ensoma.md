---
id: ensoma
name: Ensoma
website: https://ensoma.com/
founded: 2021
area: In-vivo hematopoietic stem cell engineering
substrate_family: E
substrate_tags:
  - E.3
  - E.5
technology_platform_ids:
  - engineered-cell-therapy
technology_platform_name: "Engenious in-vivo HSC engineering (virus-like particles)"
funding_stage: series-b
total_funding_usd_m: 155
public: false
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
tam_usd_m: 15000
new_capability: "Engineering blood and immune stem cells inside the body, no chemotherapy conditioning or stem-cell donor, by delivering large genomic-editing cargo directly to HSCs with liver-detargeting virus-like particles."
data_centrality: important-enabler
data_ownership:
  - proprietary
  - generated-in-house
  - licensed
moat:
  - IP
  - wet-lab
  - capital
primary_value_chain_layer: therapeutic development
input:
  - engenious-virus-like-particles
  - genomic-editing-payloads-base-edit-to-multigene-insertion
  - hsc-targeting-ligands
transformation_type: generate
output:
  - in-vivo-engineered-hematopoietic-stem-cells
  - off-the-shelf-conditioning-free-genomic-medicines
technology_readiness_level: 4
limiting_factor: "No clinical program yet; must demonstrate in-vivo HSC editing efficiency, durability, and safety of VLP delivery in humans, plus scalable VLP manufacturing, before first-in-human."
commercialisation_status: preclinical
barrier_to_entry: very-high
barrier_to_entry_logic: "Requires the Engenious virus-like-particle platform (20-plus years of Kiem/Lieber research), 35 kb cargo capacity, HSC-selective liver-detargeting delivery, and CRISPR engineering from the Twelve Bio acquisition, an assembly very few can reproduce."
hardness: moonshot
hardness_reason: "Editing blood stem cells inside the body with no conditioning at all, safely and durably, is a first-in-class delivery problem no company has yet proven in humans."
last_verified: "2026-07-13"
---

## One-liner

Ensoma engineers blood and immune stem cells inside the body with its Engenious virus-like-particle platform, aiming to deliver off-the-shelf genomic medicines that need no chemotherapy conditioning and no stem-cell donor.

## Problem

Curative blood-cell gene therapies today are built one patient at a time: cells are collected by leukapheresis, edited outside the body, and reinfused only after harsh chemotherapy conditioning that carries fertility, cancer, and mortality risk. That process is slow, expensive, and inaccessible to most patients worldwide, especially for diseases like sickle cell or chronic granulomatous disease common in low-resource settings.

## Workaround

Ex-vivo autologous gene and cell therapies (Casgevy, lentiviral products) that require apheresis, external manufacturing, and myeloablative conditioning; allogeneic transplant for the few with matched donors; and chronic management for everyone else.

## Entry wedge

Ensoma's wedge is removing the two hardest logistics of blood-cell gene therapy at once: manufacturing and conditioning. The Engenious virus-like particles preferentially bind hematopoietic stem cells and detarget the liver, so a genomic payload can be dosed directly into the body like a drug with no ex-vivo step and no conditioning. The lead indication is X-linked chronic granulomatous disease (X-CGD), a monogenic immune disorder with a clear genetic target and a well-understood HSC route.

## Method

Engenious vectors are virus-like particles with roughly 35 kilobases of cargo capacity, engineered to bind HSCs and avoid the liver. They carry a range of genomic tools, from single base edits up to large multi-gene insertions, into stem cells in the body, so no cells are removed and no conditioning is needed. The CRISPR engineering capability from the acquired Twelve Bio broadens the editing payloads the particles can deliver. Programs span genetic, immune, and oncology indications, with X-CGD as the lead.

## Validated by

Ensoma launched February 2021 with a 70 million USD Series A led by 5AM Ventures and a Takeda collaboration granting Takeda a worldwide license to Engenious vectors for up to five rare-disease indications, with a 10 million USD equity investment and up to 100 million USD in upfront and preclinical payments. A January 2023 85 million USD Series B accompanied the acquisition of CRISPR-engineering company Twelve Bio. Preclinical data include in-vivo HSC engineering restoring NADPH-enzyme function in an X-CGD mouse model, presented at ASH and ASGCT. Scientific co-founders are Hans-Peter Kiem (Fred Hutchinson) and Andre Lieber (University of Washington).

## Competes with

Ex-vivo edited blood-stem-cell players whose logistics Ensoma aims to leapfrog: CRISPR Therapeutics and Vertex (Casgevy), Beam Therapeutics (ex-vivo base editing), and bluebird bio; on the in-vivo editing frontier, Intellia, Beam (in-vivo liver), and other in-vivo HSC-delivery efforts. On the specific goal of conditioning-free in-vivo HSC engineering, the field is thin, which is the differentiation.

## Complements

Takeda as the licensing and development partner for rare-disease indications, virus-like-particle and payload-manufacturing suppliers, CRISPR and base-editing IP that feeds the cargo, and downstream providers and payers who would deliver a conditioning-free infusion.

## Value chain position

**Downstream of:** the Kiem/Lieber virus-like-particle science, CRISPR editing tools (including from Twelve Bio), HSC biology, and disease genetics defining monogenic blood and immune targets.

**Upstream of:** clinical-stage in-vivo genomic medicines, treating hematologists and immunologists, payers reimbursing off-the-shelf one-time therapies, and Takeda's rare-disease pipeline on licensed indications.

## Gaps

No clinical-stage program disclosed; all data are preclinical, so the central claim that Engenious can edit HSCs in humans efficiently and durably without conditioning is unproven in people. VLP manufacturing at clinical scale, off-target and immunogenicity risk of repeat in-vivo dosing, and long-term durability are open. As a private company, funding runway beyond the disclosed rounds and exact program timelines are not cleanly disclosed.

## Notes

Substrate is in-vivo engineered hematopoietic stem cells (E.3) delivered by virus-like particles (E.5, the exosome/EV/viral-vector tag). Linked to `engineered-cell-therapy` as the closest cell-engineering primitive, but the fit is partial: that primitive centers on ex-vivo allogeneic effector cells, while Ensoma's core novelty is the in-vivo VLP delivery of editing payloads to stem cells with no ex-vivo step. The delivery mechanism is the real differentiator; `extracellular-vesicles` (E.5) is a candidate closer-fit primitive for the VLP delivery angle, and an in-vivo-HSC-delivery primitive would fit better than either if the batch warrants one. Flagged for the next primitive review.

Founded and launched February 2021 in Boston, incubated by 5AM Ventures' company-creation engine; CEO Emile Nuwaysir. Total disclosed funding is roughly 155 million USD (70 million USD Series A in 2021 plus 85 million USD Series B in January 2023), excluding Takeda milestone potential; figure flagged as best-effort since no later round is cleanly disclosed. funding_stage set to `series-b`; commercialisation_status `preclinical`.

## News signals
- 2025-05: Ensoma presented preclinical data and manufacturing advancements for its in-vivo HSC engineering platform across cancer, immune, and genetic diseases at the ASGCT 28th Annual Meeting. (source: https://www.biospace.com/press-releases/ensoma-to-present-preclinical-data-and-manufacturing-advancements-for-in-vivo-hsc-engineering-platform-to-treat-cancer-immune-disorders-and-genetic-diseases-at-asgct-28th-annual-meeting)
- 2023-01: Ensoma raised an 85 million USD Series B and agreed to acquire CRISPR-engineering company Twelve Bio to broaden its in-vivo editing payloads. (source: https://www.finsmes.com/2023/01/ensoma-raises-85m-in-series-b-funding-acquires-twelve-bio.html)
- 2021-02: Ensoma launched with a 70 million USD Series A led by 5AM Ventures and a Takeda collaboration worth up to 100 million USD in upfront and preclinical payments for its off-the-shelf in-vivo genomic medicines. (source: https://ensoma.com/press-release/ensoma-launches-to-pioneer-next-generation-in-vivo-approach-to-deliver-first-off-the-shelf-genomic-medicines/)
