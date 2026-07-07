---
id: engineered-living-materials
name: Engineered Living Materials
aliases:
  - ELMs
  - living materials
  - engineered living building materials
  - cells-in-matrix materials
  - programmable living matter
substrate_family: E
substrate_tags:
  - E.1
enabled_by: Synthetic-biology control of cells combined with materials science, so genetically programmed cells are embedded in a polymer, hydrogel, or mineral matrix and keep sensing, synthesising, and repairing while structurally integrated
mechanism: Living cells engineered with genetic sensor-actuator circuits are held in a scaffold matrix, where they respond to stimuli by producing signals, materials, or therapeutics and can regrow or reseal damage
new_capability: A structural material that is also alive, so it senses its environment, manufactures compounds in place, and self-heals rather than degrading like an inert material
what_it_could_unlock: Buildings, implants, and devices that grow, adapt, and repair themselves and manufacture drugs or chemicals continuously at the point of use
capabilities:
- capability: Self-healing structural and building materials
  what_it_could_unlock: Concrete-like and hydrogel composites that reseal cracks and self-propagate
  mechanism: Biomineralising microbes in a sand-hydrogel scaffold precipitate mineral to reseal damage and can be regrown from a fragment
  technology_readiness_level: 3
  translational_gap: Cell viability over years, mechanical strength, biocontainment, cost versus inert materials
  closest_companies:
  - BioMason (adjacent, biocement not live-cell resident)
- capability: In-situ therapeutic-producing living implants
  what_it_could_unlock: Implanted matrices that manufacture and dose a biologic on demand inside the body
  mechanism: Engineered bacteria contained in a semipermeable capsule or hydrogel secrete a therapeutic in response to a trigger
  technology_readiness_level: 3
  translational_gap: Long-term containment of live GMOs, immune response, dosing control, regulatory acceptance
  closest_companies:
  - mostly academic (Wyss, MIT); no commercial pure-play
use_cases:
  - Self-healing living concrete and construction composites
  - Implanted living depots that synthesise therapeutics in place
  - Living biosensor coatings that report environmental contaminants
  - Programmable bioplastics grown with tunable material properties
  - Wound dressings that sense and respond to infection
technology_readiness_level: 3
evidence_level: in_vitro
translational_gap: Cells must stay alive and functional inside a matrix for months to years without contamination or genetic drift; biocontainment of live engineered organisms is unsolved at product scale; and no regulator has a pathway for a structural or implantable material that is a living GMO
what_needs_to_happen: Robust encapsulation chemistry that keeps engineered cells viable and contained for the product lifetime, kill-switch biocontainment that satisfies environmental and clinical review, and a first regulatory precedent for a live-cell-resident material
closest_companies:
  - mostly academic (no commercial pure-play)
  - BioMason (biocement, adjacent not live-cell resident)
  - Ecovative (mycelium materials, adjacent)
related_primitives:
- cell-free-synthetic-biology
- self-healing-polymers
- biohybrid-microbots
closest_labs:
  - Neel Joshi Lab (Northeastern)
  - Wyss Institute (Harvard)
  - Chris Voigt Lab (MIT)
  - Wilfried Weber Lab (Saarland / INM)
commercialisation_status: research_only
regulatory_complexity: very-high
capex_intensity: medium
defensibility: high
notes: This primitive has extreme adjacency (construction, therapeutics, biosensing, packaging) but almost no products. The nearest commercial plays (BioMason biocement, Ecovative mycelium) use grown or fixed biological material rather than a matrix of living, genetically programmed cells that keep sensing and computing, so they are adjacent, not the pure primitive. TRL is honestly around 3.
momentum:
  papers: 3807
  cagr_pct: 19.3
  fwci: 5.84
  industry_share_pct: 2.5
  citation_mass: 893.0
  on_topic_n: 40
  buildable_whitespace: 25/25
  confidence: high
  status: uncommercialized
  as_of: 2026-07
last_verified: "2026-07-07"
---

## Mechanism

Engineered living materials embed genetically programmed cells (bacteria, fungi, or mammalian cells) inside a structural matrix such as a hydrogel, polymer, or mineral scaffold, so the material stays alive and functional rather than inert. The cells carry synthetic-biology circuits that couple an input to an output: a stimulus like stress, pH, humidity, light, or a chemical trigger switches on the production of a signal, a structural biomolecule, or a therapeutic. Because the cells are living, the material can do things inert matter cannot: self-heal by regrowing and re-mineralising over damage, self-replicate from a fragment, and continuously manufacture a compound at the point of use. The matrix both holds the cells in place and mediates diffusion of nutrients in and products out.

## What it unlocks

The unlock is a material that behaves like an organism. In construction, biomineralising microbes in a sand-hydrogel scaffold produce a living building material that reseals its own cracks and can be regrown, pointing at structures that maintain themselves. In medicine, an implanted matrix of contained engineered bacteria can synthesise and dose a biologic in place, turning a drug into a resident factory instead of a repeated injection. Other directions include living biosensor coatings that report contamination, bioplastics grown to a specified stiffness, and wound dressings that sense infection and respond. The strategic point for this map is that ELMs collapse the boundary between a device and its manufacturing: the material is both the product and the factory.

## Translational gap

Honest TRL is around 3. Three blockers dominate. First, viability: keeping engineered cells alive, contained, and genetically stable inside a matrix for the months-to-years lifetime of a real product is unsolved outside the lab. Second, biocontainment: these are live genetically modified organisms, and no kill-switch or encapsulation scheme yet satisfies environmental or clinical review at product scale. Third, regulation: there is no precedent for approving a structural or implantable material that is itself a living GMO, so even a technically sound demonstration has no clearance path. Until encapsulation chemistry, containment, and a first regulatory precedent all arrive, deployments stay as lab demonstrations.

## Notes

There is no commercial pure-play. The nearest companies (BioMason for biocement, Ecovative for mycelium materials) grow or fix biological material rather than maintaining a matrix of living, genetically programmed cells that keep sensing and computing, so they are adjacent rather than the primitive itself. The field is almost entirely academic (Joshi at Northeastern, the Wyss Institute, Voigt at MIT, Weber at Saarland). The extreme adjacency is precisely why it earns a primitive: it sits upstream of construction, therapeutics, biosensing, and packaging at once, but with no product yet, which is the honest reading.
