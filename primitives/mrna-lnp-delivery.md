---
id: mrna-lnp-delivery
name: mRNA / LNP delivery
aliases:
  - lipid nanoparticle delivery
  - mRNA lipid nanoparticles
  - LNP-mRNA
  - in-vivo mRNA delivery
substrate_family: D
substrate_tags:
  - D.4
  - E.3
enabled_by: Ionizable-lipid chemistry that is neutral in blood and protonates in the endosome, combined with modified-nucleoside mRNA that evades innate immune sensing, proven at scale by COVID-19 vaccines
mechanism: A lipid nanoparticle encapsulates mRNA, is taken up by cells, and the ionizable lipid triggers endosomal escape so the mRNA reaches the cytosol and is translated into the encoded protein
new_capability: Delivers arbitrary genetic instructions into cells in vivo, turning the cell into the factory and enabling intracellular targets that small molecules and antibodies cannot reach
what_it_could_unlock: Personalised neoantigen cancer vaccines, in-vivo gene-editing and in-vivo CAR-T, and direct drugging of previously undruggable intracellular targets
capabilities:
- capability: Vaccine antigen expression
  what_it_could_unlock: Infectious-disease and personalised cancer vaccines
  mechanism: An LNP delivers mRNA encoding an antigen into host cells
  technology_readiness_level: 9
  translational_gap: Durability, tolerability, tumour response evidence
- capability: In vivo gene-editing delivery
  what_it_could_unlock: One-shot editing for liver and other tissues
  mechanism: An LNP delivers editor mRNA plus guide RNA into target cells
  technology_readiness_level: 7
  translational_gap: Tissue targeting beyond liver, off-target editing, repeat dosing
- capability: Transient therapeutic protein expression
  what_it_could_unlock: Temporary replacement of missing proteins, cytokines, antibodies, enzymes
  mechanism: mRNA drives short-lived therapeutic protein production
  technology_readiness_level: 6
  translational_gap: Dosing window, immunogenicity, organ targeting
  closest_companies:
  - Capstan Therapeutics
use_cases:
  - Individualised neoantigen cancer vaccines (e.g. mRNA-4157 plus checkpoint)
  - In-vivo delivery of gene-editing payloads
  - In-vivo cell engineering (targeted LNP CAR-T)
  - Protein-replacement and prophylactic vaccines
technology_readiness_level: 8
evidence_level: real_world_proven
translational_gap: Unmodified LNPs default to the liver, so extrahepatic targeting is unsolved; immunogenicity, dosing durability, and repeat-dose tolerability limit expansion beyond vaccines and hepatic indications
what_needs_to_happen: Reliable tissue-selective targeting (beyond liver), lower innate immunogenicity, more durable expression, and validated targeting ligands or SORT-style formulations
closest_companies:
  - Capstan Therapeutics (AbbVie)
  - Moderna
  - BioNTech
  - Intellia Therapeutics
related_primitives:
- ai-lnp-design
- microfluidic-lnp-manufacturing
- prime-base-editing
closest_labs:
  - Robert Langer Lab (MIT)
  - Daniel Anderson Lab (MIT)
  - Kathryn Whitehead Lab (CMU)
commercialisation_status: commercial_scaled
regulatory_complexity: high
capex_intensity: high
defensibility: high
notes: "COVID vaccines proved the platform at billions of doses. Frontier is extrahepatic and cell-selective delivery: Capstan's tLNP delivers anti-CD19 CAR mRNA to T cells in vivo (CPTX2309, Phase I), acquired by AbbVie for $2.1B in 2025. mRNA-4157 (Moderna/Merck) is in Phase 3 for melanoma."
momentum:
  papers: 2424
  cagr_pct: 83.4
  fwci: 12.51
  industry_share_pct: 12.2
  citation_mass: 2393.0
  on_topic_n: 181
  buildable_whitespace: 10/25
  confidence: high
  status: commercialized
  as_of: 2026-07
last_verified: "2026-07-06"
---

## Mechanism

An LNP is a four-lipid particle (ionizable lipid, helper phospholipid, cholesterol, PEG-lipid) wrapping mRNA. The ionizable lipid is roughly neutral at blood pH, so the particle circulates, then becomes positively charged in the acidic endosome after uptake, disrupting the endosomal membrane and releasing mRNA into the cytosol. Ribosomes translate it into the encoded protein. Modified nucleosides (like N1-methylpseudouridine) keep the mRNA from triggering innate immune shutdown, which is what made durable expression practical.

## What it unlocks

Small molecules and antibodies cannot reach most intracellular targets, and making arbitrary proteins as drugs is hard. mRNA/LNP sidesteps both by shipping the instructions and letting the patient's own cells make the protein transiently and in vivo. That enables personalised neoantigen vaccines that encode a patient-specific tumour signature (mRNA-4157 with pembrolizumab cut recurrence risk roughly in half in Phase 2b), in-vivo delivery of gene-editing payloads, in-vivo cell engineering such as targeted-LNP CAR-T that avoids ex-vivo manufacturing and lymphodepletion, and protein-replacement therapies.

## Translational gap

Honest TRL is 8. The platform is real-world proven at scale for vaccines and is clinically validated for hepatic gene editing, but the highest-value expansion, delivery to tissues other than the liver, is unsolved. Systemic LNPs default to hepatocytes; reaching lung, immune cells, muscle, or CNS reliably needs targeting ligands or altered lipid composition (SORT-style) that are still maturing. Immunogenicity on repeat dosing, expression durability, and manufacturing consistency further constrain indications. The unlock is dependable cell- and tissue-selective targeting.

## Notes

Substrate_family D (the materials/delivery unlock is the LNP), tagged E.3 because the killer application is engineering cells in vivo. Capstan's 2025 acquisition by AbbVie ($2.1B) signalled that in-vivo cell engineering via targeted LNP is now a validated modality.
