# Portfolio V2.1 QA report

Status: `complete_pending_owner_review`

Staging: <https://aquamarine-mole-482437.hostingersite.com/>

Portfolio V2.1 has completed implementation, local validation, five inspected visual passes, isolated Hostinger staging deployment, and remote release QA. The work is intentionally stopped before production, mirror, `main`, DNS, or account changes.

## Release boundary

- Branch: `codex/portfolio-v2.1-experience-evidence`
- Initial remotely validated code SHA: `b027c266fe56feda5aa106cd7a80ce2127ce9b66`
- Staging target: `hostinger-staging`
- Staging canonical: `https://aquamarine-mole-482437.hostingersite.com/`
- Staging robots: `noindex,nofollow`
- Staging sitemap: absent; `/sitemap-index.xml` returns 404
- Production and mirror remained at `1ae06ad45315baffaef6d1564aae0da4d4051a53` throughout staging QA.

The live staging `/build.json` is the authoritative final review SHA after evidence-only documentation commits. No production or mirror deployment is authorized until the owner supplies the exact phrase `V2.1 CUTOVER APPROVED`.

## Product result

- Repositioned the site around Senior Applied AI Engineering in healthcare and insurance.
- Replaced the former single dark-console rhythm with an operational-editorial system spanning ink, paper, jade, coral, amber, cyan, and violet surfaces.
- Added a complete packet-to-decision React island with a meaningful server-rendered fallback, keyboard controls, reduced-motion behavior, offscreen pause, and four scenarios.
- Gave all four flagship stories distinct visuals: claim trace, local privacy boundary, nine-program Health Index, and checked-in activation steering comparison.
- Added the healthcare analytics platform case study and moved Let’s Talk Doc into Recognition with explicit team attribution.
- Redesigned Lab, About, Experience, Work, Contact, Recognition, and résumé surfaces.
- Added `/contact/`, `/recognition/`, `/my-ai-app-library/`, Lab detail pages, and compatibility coverage for legacy routes.
- Published a one-page privacy-cleared résumé at `/resume/Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf`.

## Local automated gates

| Gate | Result |
| --- | --- |
| `npm run test:secrets` | Pass; no recognized credential material in tracked or unignored repository files |
| `npm run check` | Pass; 95 files, 0 errors, 0 warnings, 0 hints |
| `npm test` | Pass; 6 unit tests |
| `npm run build` | Pass; 37 HTML pages |
| `npm run test:content` | Pass; 37 HTML pages and 12 primary pages |
| `npm run test:copy` | Pass; prohibited meta-language and stale positioning checks |
| `npm run test:legacy` | Pass; 16 compatibility artifacts and redirect contracts |
| `npm run test:links` | Pass; 643 local references and 13 inventoried external references |
| `npm run test:targets` | Pass; local, Hostinger staging, Hostinger production, and GitHub mirror fail-closed metadata builds |
| `npm run test:media` | Pass; required assets under 1 MB; all shipped JS 62.3 KB gzip; home-referenced JS 59.4 KB gzip |
| `npm run test:evidence` | Pass; public claims, source notes, SHA/license manifest, and checked-in LLM comparison |
| `npm run validate` | Pass as one uninterrupted secrets-to-E2E chain |
| `npm run test:e2e:all` | Pass; 96 Chromium/Firefox/WebKit cases |
| `npm run test:a11y:all` | Pass; 36 route/engine Axe WCAG A/AA cases |
| `npm run test:live-modes` | Pass; 24 route/engine adverse-mode cases |

The live-mode matrix covers JavaScript disabled, reduced motion, keyboard-only operation, forced colors, 200% reflow, cold cache, slow-network first content, and device-scale-factor 2.

## Five inspected visual passes

Each formal pass covers 12 routes, 10 required viewport profiles, and Chromium, Firefox, and WebKit: 360 screenshots per pass.

| Pass | Result | Human review and action |
| --- | --- | --- |
| 1 — identity and hierarchy | 357/360 | Found the same 13px `/contact/` overflow at 320px in all three engines. Replaced emergency word-breaking with a deliberate narrow type scale and safe email wrapping. |
| 2 — signature interaction | 360/360 | Confirmed the packet instrument reads as a causal decision surface on desktop and independently stacks on mobile. |
| 3 — editorial depth | 360/360 | Confirmed all four cases carry context, role, constraints, failures, validation, outcome, and inspectable limits without repeated terminal-card styling. |
| 4 — craft and microdetail | 360/360 | Confirmed narrow labels, borders, footer links, résumé shell, and dense cards remain legible at every required width. |
| 5 — restraint and memorability | 360/360 local and 360/360 remote | Preserved the final system after contrast refinements; the authoritative manifest is from the actual Hostinger staging origin. |

GitHub Actions portability follow-up: the initial staging-review heads exposed narrow homepage and page-hero overflow only on Ubuntu fallback-font metrics (18–19px at 320px initially, then 4px at 360px and 16px at 320px after the first correction). A fluid 320–600px type scale, sized against the longest unbroken heading word, added real layout margin. The functional width gate now waits for `document.fonts.ready`, matching the visual harness, and collects every offending element before failing. After synchronization isolated a settled 34px `/experience/` overflow at 320px on hosted Firefox/WebKit, the lower Experience grids received explicit shrink boundaries, responsive era/evidence headings, and scoped emergency word wrapping. Final correction proof includes a 72/72 all-route 320/360px screenshot pass, 18/18 affected-surface screenshots, 6/6 post-hardening Experience screenshots, 96/96 E2E cases in CI-mode, a 9/9 repeated cross-engine width stress run, a clean uninterrupted repository validation, and a serial 96/96 Ubuntu Noble Playwright 1.61.1 container run. The hosted PR check remains a mandatory release gate.

Ignored machine manifests live under `test-results/pass-*/qa-manifest.json`. Selected review images are committed under [`docs/screenshots/v2.1-review/`](screenshots/v2.1-review/).

## Remote Hostinger staging gates

| Gate | Result |
| --- | --- |
| Static archive | 146 root-level entries; `.htaccess` included; 5,304,841 bytes |
| Initial archive SHA-256 | `5021D17B06750F9A2D2FA3B3F92687972903623A900B37B51D7781085EA7AB7B` |
| Build identity | `/build.json` returned the deployed branch SHA and `hostinger-staging` target |
| Metadata | Temporary-origin canonical and `noindex,nofollow` on primary routes |
| Search safety | No sitemap; staging banner present; raw HTML retains no-index metadata |
| Primary routes | 12/12 complete pages with one `h1`, social image, canonical, and robots contract |
| Compatibility | 12/12 inbound routes preserved by static fallback or path-preserving server redirect |
| Functional/browser | 96/96 across Chromium, Firefox, and WebKit |
| Accessibility | 36/36 Axe WCAG A/AA route/engine checks |
| Adverse modes | 24/24 across Chromium, Firefox, and WebKit |
| Final visual matrix | 360/360 remote screenshots |
| Public résumé | HTTP 200, `application/pdf`, one page, 5,709 bytes, visually inspected |
| Custom 404 | HTTP 404 for missing routes with the authored no-index page |

Two remote-test harness assumptions were corrected during QA: compatibility checks now recognize either the static meta-refresh fallback or Hostinger’s server redirect, and the hydrated trace test waits for the island before exercising controls. These changes make local and deployed behavior explicit without weakening any assertion.

## Lighthouse and performance

Lighthouse 12.6.1 ran against local static preview, the actual Hostinger staging origin, and a local production-profile build. Lab measurements are not field data; INP is not applicable to these navigation audits, so TBT is recorded.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Local staging mobile | 100 | 100 | 100 | 66 intentional | 0.77s | 0 | 0ms |
| Local staging desktop | 100 | 100 | 100 | 66 intentional | 0.21s | 0.0042 | 0ms |
| Live staging mobile | 100 | 100 | 100 | 66 intentional | 0.91s | 0 | 0ms |
| Live staging desktop | 100 | 100 | 100 | 66 intentional | 0.25s | 0.0043 | 0ms |
| Production-profile mobile | 100 | 100 | 100 | 100 | 0.76s | 0 | 0ms |
| Production-profile desktop | 100 | 100 | 100 | 100 | 0.20s | 0.0042 | 0ms |

The staging SEO score is intentionally reduced by `noindex,nofollow`; weakening that release safeguard to inflate the score is prohibited.

## Privacy, evidence, and copy

- No PHI, PII, claim records, credentials, employer-confidential screenshots, proprietary rules, or production secrets are published.
- Professional visuals are synthetic reconstructions; public-project visuals and comparison text are linked to exact repository SHAs and licenses.
- Outcome language remains attached to the measured workstream or broader program and preserves approximation qualifiers.
- Let’s Talk Doc is presented as team recognition, never as sole authorship or clinical deployment.
- Internal evidence enums are available to machine-readable manifests and source notes, not used as reader-facing headings.
- Raw server HTML contains final metrics and the complete six-stage packet trace; no `0K`, `0%`, or `$0M` placeholders remain.

## Aesthetic release rubric

Accessibility, privacy, factual accuracy, target safety, and performance passed independently and are not traded for aesthetic points.

| Category | Score | Weight | Evidence |
| --- | ---: | ---: | --- |
| Positioning clarity | 8 | 8 | Role, seniority, healthcare/insurance domain, and operating-system thesis are visible in the first fold. |
| Originality | 9 | 10 | Operational editorial direction and causal trace avoid the former generic dark-dashboard pattern. |
| Memorability | 8 | 8 | “A packet becomes a decision” creates one coherent visual idea that repeats as engineering logic, not decoration. |
| Typography | 9 | 10 | Large editorial serif/sans contrast, deliberate mobile scaling, and monospaced evidence labels remain readable. |
| Composition | 9 | 10 | Dark/paper/color pacing creates section-level rhythm; the Work page now intentionally transitions from dark hero to paper evidence field. |
| Artifact quality | 9 | 10 | Four bespoke visuals, checked-in comparison text, source notes, public PDF, and social images are polished and bounded. |
| Case-study storytelling | 10 | 10 | Every flagship covers context, decisions, failure modes, validation, outcomes, and public/private boundaries. |
| Signature interaction | 8 | 8 | Keyboard-operable, reduced-motion-safe, server-complete packet replay explains reviewer authority and evidence lineage. |
| Recruiter scanability | 7 | 8 | Strong role, results, Work, Experience, résumé, and contact paths; technical depth remains intentionally substantial. |
| Technical depth | 8 | 8 | Contracts, routing, evaluation, privacy boundaries, model behavior, observability, and limitations are inspectable. |
| Mobile authorship | 6 | 6 | 320–430px layouts restack intentionally, preserve visual metaphors, and pass 200% reflow without overflow. |
| Micro-polish | 4 | 4 | Focus rings, no-index staging banner, legacy behavior, share images, PDF metadata, and footer details are complete. |
| **Total** | **95** | **100** | **Passes the 90-point release threshold.** |

## Review images

- [Before: desktop first fold](screenshots/v2.1-review/before-home-desktop-firstfold.png)
- [After: desktop first fold](screenshots/v2.1-review/after-home-desktop-firstfold.png)
- [Before: mobile first fold](screenshots/v2.1-review/before-home-mobile-firstfold.png)
- [After: mobile first fold](screenshots/v2.1-review/after-home-mobile-firstfold.png)
- [After: full desktop home](screenshots/v2.1-review/after-home-desktop-full.png)
- [After: full mobile home](screenshots/v2.1-review/after-home-mobile-full.png)
- [Claims case](screenshots/v2.1-review/after-case-claims-full.png)
- [On-prem document AI case](screenshots/v2.1-review/after-case-on-prem-full.png)
- [Healthcare analytics platform case](screenshots/v2.1-review/after-case-healthcare-platform-full.png)
- [LLM Steering case](screenshots/v2.1-review/after-case-llm-steering-full.png)

## Owner review gate

The remaining work is intentionally owner-gated:

1. Review staging and the draft PR.
2. Decide whether to apply the prepared GitHub profile README/pin plan and LinkedIn refresh.
3. Supply `V2.1 CUTOVER APPROVED` only if the exact staging build should proceed to production and the same-SHA mirror release.

No production, mirror, `main`, tag, DNS, nameserver, email, billing, subscription, or domain-registration change occurred during this assignment.
