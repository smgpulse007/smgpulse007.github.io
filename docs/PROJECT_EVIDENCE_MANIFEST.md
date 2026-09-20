# Project evidence manifest

Every rendered repository asset is represented in `src/data/projectEvidence.ts`. The build test rejects missing source, commit, license, alt text, caption, or public-safety decisions.

| Asset | Source | Commit | License | Treatment |
|---|---|---|---|---|
| LLM Steering activation diagram | `llm-steering/docs/assets/activation_steering_flow.svg` | `8c1242839e1f8f74fd50f4b6bad37f71a2d83122` | MIT | portfolio filename; source-equivalent SVG with normalized line endings |
| LLM Steering hook diagram | `llm-steering/docs/assets/pre_post_hooking.svg` | `8c1242839e1f8f74fd50f4b6bad37f71a2d83122` | MIT | portfolio filename; source-equivalent SVG with normalized line endings |
| HL7 high-level architecture | `hl7-ai-challenge/deliverables/Architechture_High_Level.png` | `31e65d44f535cb94b2b7edc517b60f3703aafbfa` | MIT | Lab detail supporting media; original checked-in bytes |
| AlphaQuant UI screenshot | `AlphaQuant/artifacts/ui-screenshot.png` | `f8f12792d39fdb3e95cccb391620d5128068debf` | MIT | Lab detail supporting media; original checked-in bytes |

Authored diagrams and synthetic artifacts have this portfolio repository as their source. They do not reproduce private interfaces or data.

The large checked-in LLM Steering GIFs were inspected as source evidence but are not required by a V2.1 page. The site uses the smaller source diagrams and a static comparison transcribed from the checked-in JSON, avoiding an unnecessary initial or lazy media transfer.
