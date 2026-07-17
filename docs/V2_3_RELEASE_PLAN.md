# Portfolio V2.3 release plan

Date: 2026-07-17  
Current phase: isolated staging review  
Required approval for any production action: `V2.3 CUTOVER APPROVED`

## Review release

1. Complete source, content, evidence, accessibility, browser, and performance gates.
2. Commit V2.3 on `codex/portfolio-v2.3-creative-expansion`.
3. Create a new isolated Hostinger free-subdomain website on the existing hosting order.
4. Build with:
   - `PUBLIC_DEPLOY_TARGET=hostinger-staging`;
   - staging URL as both site and canonical URL;
   - `noindex,nofollow`;
   - no sitemap.
5. Deploy only the prebuilt static `dist` archive to the new V2.3 hostname.
6. Verify HTML, headers, robots, canonical, build metadata, assets, interactions, and browser matrix remotely.
7. Capture remote screenshots and videos into the V2.3 evidence directories.
8. Push the V2.3 branch and open the draft review PR titled `Portfolio V2.3 — creative expansion staging review (DO NOT MERGE)`.

## Draft PR contract

The draft PR includes:

- staging URL and final SHA;
- live baseline comparison and design references;
- five design directions and the chosen hybrid;
- professional cases, Project Lab, Research, public résumé, and evidence manifests;
- screenshots and four review videos;
- performance tiers, accessibility, and QA results;
- production and rollback plan;
- explicit `DO NOT MERGE` and protected-operation language.

The PR states that V2.3 supersedes PR #3 only if approved. PR #2 and PR #3 remain open and unchanged during staging review.

## Review decisions requested from the owner

No more than five subjective decisions are requested:

1. Approve or reject the professional-first proposition and hero language.
2. Approve or reject the selected Signal Field + Computational Editorial + Living Career Atlas hybrid.
3. Approve or reject the balance between professional cases, Project Lab, and Research.
4. Approve or reject the public résumé and career chronology presentation.
5. Approve staging for production cutover using the exact protected phrase, or request revisions.

## Protected systems

The staging assignment does not authorize changes to:

- `main`;
- production Hostinger files;
- the GitHub Pages mirror;
- DNS or nameservers;
- email;
- billing or subscriptions;
- PR #2 or PR #3;
- private résumé or employer-confidential material.

## Terminal state

This plan reaches `complete_pending_human_review` when the isolated staging URL, branch SHA, draft PR, remote proof, and evidence package are all available. It does not authorize merge or production deployment.

