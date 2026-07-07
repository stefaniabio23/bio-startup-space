---
id: pw-rfdiffusion-2023
title: "De novo design of protein structure and function with RFdiffusion"
authors:
  - Joseph L. Watson
  - David Juergens
  - Nathaniel R. Bennett
  - Brian L. Trippe
  - Jason Yim
  - David Baker
year: 2023
venue: Nature
doi: 10.1038/s41586-023-06415-8
technology_platform_ids:
  - protein-design-diffusion-models
substrate_tags:
  - C.1
  - C.2
hypothesis: "A diffusion generative model built on a structure-prediction network can design novel protein backbones and functions from scratch."
methods: "Fine-tune the RoseTTAFold structure-prediction network on a denoising (diffusion) objective, then generate backbones for unconditional monomers, binders, symmetric oligomers, and active-site scaffolds, and validate hundreds experimentally."
what_it_proves: "Diffusion over protein backbones is a general, experimentally validated route to de novo structure, symmetric assemblies, metal-binding sites, and target-specific binders."
next_question: "Can the same generative pipeline reliably design high-affinity binders and catalytic enzymes against arbitrary targets without extensive experimental screening?"
related_works:
  - "Illuminating protein space with a programmable generative model (Chroma)"
  - "Robust deep learning-based protein sequence design using ProteinMPNN"
notes: "Landmark de novo design paper; the reference primitive for protein-design diffusion models."
last_verified: "2026-07-07"
---

## Summary
RFdiffusion adapts the RoseTTAFold network into a denoising diffusion model over protein backbones, giving one generative engine for unconditional monomer design, symmetric oligomers, metal-binding proteins, active-site scaffolding, and target binders. The authors experimentally characterised hundreds of designs, showing the approach works in the wet lab rather than only in silico. It is the anchoring result for treating protein design as a diffusion sampling problem, which is why it grounds the protein-design-diffusion-models primitive.
