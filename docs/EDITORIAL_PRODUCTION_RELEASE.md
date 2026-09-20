# Editorial Production Release

Production verified on September 20, 2026 UTC (September 19 EDT).

## Release Identity

| Item | Value |
| --- | --- |
| Canonical production | https://shaileshdudala.com/ |
| Production commit | `b258345e18ad99682fe3952a603a37e7b6557caf` |
| Build time | `2026-09-20T01:10:39.995Z` |
| Target | `hostinger-production` |
| Merged PR | https://github.com/smgpulse007/smgpulse007.github.io/pull/5 |
| Approved application source | `43ac9fc651ae115037215d641a752866f8623b0f` |
| Tested PR head | `f1cf9f68f64233c54219a3e9bc0313925a65fa02` |
| Release tag | `portfolio-v2.3.0` |
| Mirror | https://smgpulse007.github.io/; same production SHA; `github-pages-mirror` |

The owner supplied the exact production approval phrase. PR #5 was retargeted to `main` and merged after both CI runs passed. The merge tree is identical to the tested PR head; its only change from the approved application source is the prior documentation receipt. GitHub automatically marked the ancestor PRs #2, #3, and #4 merged through this history. They were not separately merged.

## Deployment And Rollback

- Hostinger accepted `dist_20260919_211041.zip`; no separate deployment identifier was returned.
- Deployment archive SHA-256: `6C0E83F36E23A7FF4757DC384D48F68AAF7835B954B33AB2373B329794729E59`.
- Fresh document-root backup: `tmp/production-root_20260919_205842.zip`.
- Backup SHA-256: `7D4EBDF7C864712C508B743870EE88835CB9CED769AC897B33583297C9FE1F8E`.
- All 76 backed-up source files matched the known-good July release by SHA-256. The read-only Hostinger file inventory confirmed the complete document root, including `.htaccess`, with no symlinks or extra application files.
- The line-oriented file API omitted `.htaccess`'s final newline. Its restored byte length and checksum were verified against the existing release archive.
- The deployment endpoint replaced the site contents. A fresh authenticated inventory found exactly the 132 build files and no stale files.
- Original rollback archive is also retained: `tmp/deploy/portfolio-v2-production_20260713_024555_1ae06ad.zip`, SHA-256 `25EDE1D4CCA851CC432B9456E40A891F0D94CB74AE656934EC944AA9FF0CF71B`.

Rollback uses the fresh backup archive and the same scoped static deployment endpoint, followed by verification of the old `1ae06ad45315baffaef6d1564aae0da4d4051a53` build identity. Do not recreate the website or restore the DNS zone.

The documented endpoint semantics are available in [Hostinger's SDK reference](https://github.com/hostinger/api-python-sdk/blob/main/docs/HostingWebsitesApi.md). The live inventory used [Hostinger's read-only files API](https://github.com/hostinger/api-python-sdk/blob/main/docs/HostingFilesApi.md).

## Verification

| Gate | Result |
| --- | --- |
| PR CI | Passed, run `35479623107` |
| Branch CI | Passed, run `35479620959` |
| CI browser checks | 93 accessibility + 147 end-to-end + 30 mode + 15 editorial checks passed |
| CI visual matrix | 930 captures/checks passed: 31 pages, ten viewports, three engines |
| Production-target local tests | 347 passed, zero failures, skips, or flaky tests |
| Live production tests | 347 passed, zero failures, skips, or flaky tests |
| Live mirror tests | 95 passed; same SHA, production canonical, `noindex,follow`, no sitemap |
| Mirror workflow | Passed, run `35480866899` |
| Browser engines | Chromium, Firefox, WebKit; strict default TLS validation |
| Fallbacks | No JavaScript, reduced motion, standard/reduced tiers, no WebGL, mobile navigation |
| HTTPS apex | 200, expected HTML and release SHA |
| HTTPS www | 301 to apex, preserving path and query |
| HTTP | Redirects to HTTPS |
| Canonical and robots | Custom domain; `index,follow` |
| Sitemap, JSON endpoints, OG image, public resume | Available and verified |
| Legacy routes and custom 404 | Passed; missing routes return 404 and no-index error content |
| Production root | Exactly matches the build file set |
| Protected DNS/email records | Nine NS/MX/SPF/DMARC/DKIM records unchanged before and after |

Live mobile Lighthouse 13.5.0: performance **100**, accessibility **100**, best practices **100**, SEO **100**; LCP **1.1s**, CLS **0**, TBT **0ms**. Its additional agentic-browsing category scored 67; this is not included in the four scores above. These are single-run laboratory measurements, not field performance claims.

Evidence remains locally in `tmp/production-live.json`, `test-results/production-live/`, `tmp/production-verification.json`, `tmp/production-backup-receipt.json`, and `tmp/lighthouse-production.{json,html}`. Public CI evidence is attached to the linked workflow runs. Raw credentials and DNS payloads are not committed.

## Boundaries And Follow-Up

- DNS, nameservers, email service, billing, subscriptions, domain registration, and unrelated websites were not modified.
- Existing staging sites and rollback releases remain available.
- The GitHub profile website field now points to `https://shaileshdudala.com`; no biography or repository visibility was changed.
- An already-open browser initially retained old HTML; an ordinary reload displayed the new release. Fresh browser contexts and direct HTTP checks passed.
- Search engines have not been claimed to recrawl the site. The owner can submit the production sitemap and request URL inspection through their search-console accounts.
- Frontend remains Astro static HTML, TypeScript, custom CSS, and selective React tooling. Hostinger serves static files; there is no application backend or database.
- See [Homepage Presentation Assessment](HOMEPAGE_PRESENTATION_ASSESSMENT.md) for the requested graphics/personality evaluation. This cutover does not silently introduce another homepage redesign.
