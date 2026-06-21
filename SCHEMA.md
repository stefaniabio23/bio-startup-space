# Schema

Frontmatter = structured tags, numbers, enums (machine-readable, CSV-exportable).
Body = prose fields (one-liner, problem, workaround, method, TAM logic, gaps, notes).

---

## Frontmatter fields

### Identity
| Field | Type | Notes |
|---|---|---|
| `id` | string | kebab-case slug |
| `name` | string | Canonical company name |
| `website` | string | URL |
| `founded` | integer | Year |
| `area` | string | Single broad category tag |

### Funding
| Field | Type | Values |
|---|---|---|
| `funding_stage` | enum | `pre-seed` `seed` `series-a` `series-b` `series-c` `series-d-plus` `public` `acquired` `bootstrapped` `unknown` |
| `total_funding_usd_m` | number | USD millions |
| `public` | boolean | default false |

### Business
| Field | Type | Values |
|---|---|---|
| `business_model` | enum | `partnerships` `own-pipeline` `saas` `services` `reimbursement` `hybrid` |
| `buyer` | list | `pharma` `biotech` `payer` `provider` `consumer` `cro` `investor` |
| `buyer_urgency` | enum | `high` `medium` `low` |
| `buyer_wtp` | enum | `high` `medium` `low` |
| `sales_cycle` | enum | `short` `medium` `long` |
| `regulatory_burden` | enum | `none` `light` `medium` `heavy` |

### Market
| Field | Type | Notes |
|---|---|---|
| `tam_usd_m` | number | TAM in USD millions |

### Mechanics
| Field | Type | Values |
|---|---|---|
| `data_centrality` | enum | `core-moat` `important-enabler` `supporting-evidence` `product` `not-central` |
| `data_ownership` | list | `proprietary` `public` `licensed` `partner-supplied` `generated-in-house` `customer-generated` |
| `moat` | list | `data` `model` `wet-lab` `clinical-evidence` `IP` `distribution` `regulatory-trust` `founder-brand` `capital` |
| `primary_value_chain_layer` | string | free text tag |
| `input` | list | free text tags |
| `transformation_type` | enum | `measure` `predict` `generate` `monitor` |
| `output` | list | free text tags |

### Competitive
| Field | Type | Values |
|---|---|---|
| `barrier_to_entry` | enum | `low` `medium` `high` `very-high` `nearly-impossible` |
| `hardness` | enum | `moderate` `hard` `very-hard` `moonshot` |

---

## Body sections

```markdown
## One-liner

[What they do in one line.]

## Problem

[The real bottleneck. What pain point they address.]

## Workaround

[What buyers do today. Incumbent solution.]

## Entry wedge

[What they built first. Starting substrate.]

## Method

[One-line description of the core technical method.]

## TAM logic

[Direct argument from their statements or public sources. Link if possible.]

## Validated by

[What constitutes proof at their stage — pharma deal, clinical data, regulatory clearance, etc.]

## Competes with

[Similar product, buyer, or layer.]

## Complements

[Adjacent players; potential partners.]

## Value chain position

**Downstream of:** [what happens upstream / before their input exists]
**Upstream of:** [what they hand off to / what happens after their output]

## Gaps

[What they do not solve. Gaps in their value chain.]

## Notes

[Only very important notes. Leave blank if none.]
```

---

## Entry template

```markdown
---
id: company-slug
name: Company Name
website: example.com
founded: 2020
area: ai drug design
funding_stage: series-b
total_funding_usd_m: 50
public: false
business_model: hybrid
buyer:
  - pharma
  - biotech
buyer_urgency: high
buyer_wtp: high
sales_cycle: long
regulatory_burden: heavy
tam_usd_m: 50000
data_centrality: core-moat
data_ownership:
  - generated-in-house
moat:
  - data
  - model
primary_value_chain_layer: discovery
input:
  - biomolecular structure data
transformation_type: predict
output:
  - drug candidates
barrier_to_entry: very-high
hardness: moonshot
last_verified: "2026-06-21"
---

## One-liner

## Problem

## Workaround

## Entry wedge

## Method

## TAM logic

## Validated by

## Competes with

## Complements

## Value chain position

**Downstream of:**
**Upstream of:**

## Gaps

## Notes
```
