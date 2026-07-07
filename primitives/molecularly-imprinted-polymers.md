---
id: molecularly-imprinted-polymers
name: Molecularly Imprinted Polymers
aliases:
  - MIPs
  - synthetic receptors
  - plastic antibodies
  - nanoMIPs
  - artificial antibodies
substrate_family: D
substrate_tags:
  - D.2
enabled_by: Template-directed polymerisation that casts a target-shaped cavity into a crosslinked polymer, then removes the template to leave a reusable synthetic binding site
mechanism: A polymer is cured around a target molecule so its shape and chemistry are imprinted as a cavity; removing the target leaves a lock-and-key site that rebinds it selectively
new_capability: Antibody-like molecular recognition from cheap synthetic material that survives heat, pH extremes and long shelf storage, with no animals or cell culture required
what_it_could_unlock: Low-cost, stable home and field diagnostics for targets where antibodies are fragile, expensive, or impossible to raise
capabilities:
- capability: Artificial receptor for small molecules
  what_it_could_unlock: Low-cost sensing of drugs, hormones, toxins, metabolites
  mechanism: Polymer cavities are templated around a target molecule and rebind it selectively
  technology_readiness_level: 4
  translational_gap: Specificity in complex fluids, reproducible imprinting, clinical validation
  closest_companies:
  - MIP Discovery
  - Tozaro
- capability: Synthetic capture layer for preconcentration
  what_it_could_unlock: Enrich low-abundance sweat or ISF analytes before sensing
  mechanism: A MIP layer selectively traps target molecules before electrochemical or optical readout
  technology_readiness_level: 3
  translational_gap: Recovery efficiency, reversibility, fouling, batch variability
use_cases:
  - low-cost home tests for hormones, drugs and metabolites
  - point-of-care and field diagnostics in low-resource settings
  - electrochemical biosensor recognition layers
  - sample cleanup and toxin capture
technology_readiness_level: 5
evidence_level: in_vitro
translational_gap: Selectivity degrades in complex biofluids such as blood or saliva where structurally similar molecules compete; binding sites are heterogeneous and batch-to-batch reproducibility is hard to guarantee to a diagnostic standard
what_needs_to_happen: Manufacturing control that yields uniform high-affinity sites reproducibly, plus validated performance against real patient samples rather than spiked buffers, to match the trust antibodies have earned
closest_companies:
  - MIP Discovery
  - Tozaro
related_primitives:
- electrochemical-aptamer-biosensing
- mof-hydrogels
closest_labs:
  - Sergey Piletsky lab (University of Leicester)
  - Ken Shimizu lab (University of South Carolina)
commercialisation_status: commercial_early
regulatory_complexity: medium
capex_intensity: low
defensibility: medium
notes: nanoMIP reagents already sell as antibody replacements; the open question is whether MIPs can carry a regulated diagnostic on their own recognition rather than as a component.
momentum:
  papers: 10941
  cagr_pct: 17.1
  fwci: 3.66
  industry_share_pct: 2.0
  citation_mass: 510.0
  on_topic_n: 150
  buildable_whitespace: 25/25
  confidence: high
  status: uncommercialized
  as_of: 2026-07
scan:
  bucket: patented-not-company-led
  paper_cagr_pct: 15.6
  mean_fwci: 6.32
  industry_share: 0.015
  patent_total: 2816
  patent_cagr_pct: 2.4
  company_share: 0.067
  as_of: '2026-07-07'
last_verified: "2026-07-06"
---

## Mechanism

A monomer mix is polymerised in the presence of the target molecule, which acts as a template. The growing polymer forms hydrogen bonds and shape contacts around the target, freezing a complementary cavity into the crosslinked network. Washing out the template leaves a rigid synthetic receptor whose cavity rebinds the original molecule by shape and chemical complementarity, the same lock-and-key principle antibodies use. The nanoMIP variant makes nanoparticle-scale polymers with roughly one binding site each, which behave much more like a monoclonal antibody than bulk imprinted material.

## What it unlocks

The value is antibody-grade recognition without antibody fragility or cost. MIPs are cheap to make, need no animals or cell lines, and survive heat, organic solvents, and years of storage, which makes them attractive for home tests and field diagnostics in settings where a cold chain is impractical. MIP Discovery, a University of Leicester spinout formerly called MIP Diagnostics, sells nanoMIP detection reagents commercially as antibody replacements, has raised over 7 million pounds, and won Gates Foundation funding to develop low-cost rapid tests for low and middle income countries. Concrete applications are home hormone and drug tests, point-of-care assays where refrigerated antibodies fail, and recognition layers for electrochemical sensors.

## Translational gap

The hard problem is selectivity in messy biofluids. In clean buffer a MIP binds its target well, but blood, saliva, and sweat contain thousands of competing molecules, some structurally close to the target, and imprinted cavities are more promiscuous than a well-raised monoclonal. Compounding this, imprinting produces a distribution of site qualities rather than one uniform site, so affinity and cross-reactivity vary within a batch and between batches, which is exactly the reproducibility a regulated diagnostic cannot tolerate. Honest TRL is 5: nanoMIP reagents are already commercial as antibody-replacement components, but a MIP carrying a standalone regulated diagnostic on real patient samples, rather than spiked buffer, is still being proven. The unlock is manufacturing control that delivers uniform, reproducible, high-affinity sites at diagnostic grade.

## Notes

Treat the commercial status carefully: MIP Discovery selling reagents is real revenue, but that is a components business. The higher-value and less-proven claim is MIPs as the recognition core of an approved diagnostic in a complex sample.
