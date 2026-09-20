# Portfolio V2.3 — Clean Codex Handoff Instructions

This document gives the owner the exact procedure for beginning Portfolio V2.3 in a fresh Codex task.

---

# 1. Package files

Copy these files into the repository’s existing `docs/` directory:

```text
Portfolio_V2_3_Package_Index.md
Portfolio_V2_3_Independent_Page_Audit_and_Narrative_Reset.md
Portfolio_V2_3_Design_Animation_Benchmark_Study.md
Portfolio_V2_3_Career_Repository_Content_Map.md
Portfolio_V2_3_Research_Content_Enrichment_Spec.md
Portfolio_V2_3_Master_Implementation_Spec.md
Portfolio_V2_3_Handoff_Instructions.md
Portfolio_V2_3_Codex_Goal_Prompt.md
Portfolio_V2_3_Owner_Review_Checklist.md
Portfolio_V2_3_Cutover_Prompt.md
```

Do not delete:

- V2.0 documents;
- V2.1 documents;
- V2.2 documents;
- AGENTS.md;
- QA;
- release;
- staging;
- rollback;
- evidence;
- hosting documentation.

V2.3 depends on that foundation.

---

# 2. Correct branch base

V2.3 must begin from the exact V2.2 staging SHA:

```text
1eed4c48a762e1dbeb454a318fbe2e7c72b21ae8
```

Required branch:

```text
codex/portfolio-v2.3-creative-expansion
```

Do not branch from `main`.

Do not merge:

- V2.1 PR #2;
- V2.2 PR #3.

Keep both open/draft for comparison.

---

# 3. Repository layout

Expected:

```text
smgpulse007.github.io/
  AGENTS.md
  docs/
    Portfolio_V2_3_Package_Index.md
    Portfolio_V2_3_Independent_Page_Audit_and_Narrative_Reset.md
    Portfolio_V2_3_Design_Animation_Benchmark_Study.md
    Portfolio_V2_3_Career_Repository_Content_Map.md
    Portfolio_V2_3_Research_Content_Enrichment_Spec.md
    Portfolio_V2_3_Master_Implementation_Spec.md
    Portfolio_V2_3_Handoff_Instructions.md
    Portfolio_V2_3_Codex_Goal_Prompt.md
    Portfolio_V2_3_Owner_Review_Checklist.md
    Portfolio_V2_3_Cutover_Prompt.md
    ...existing docs...
  src/
  public/
  package.json
```

Do not leave the files inside a nested ZIP directory.

---

# 4. Verify locally

From the repository root:

```powershell
Get-ChildItem .\docs\Portfolio_V2_3*
git status --short
```

The files may appear untracked.

That is acceptable.

The goal prompt instructs Codex to create the branch from the exact SHA and commit the handoff documents first.

---

# 5. Private files

Do not add:

- detailed application résumé;
- phone or home address;
- Hostinger token;
- `.env` secrets;
- actual claim packets;
- employer screenshots;
- private prompts;
- internal APIs;
- private policy text;
- production payloads;
- research PDFs;
- unlicensed paper figures;
- local browser profiles;
- `node_modules`.

The public résumé remains a separate privacy-cleared edition.

---

# 6. MCP configuration

During implementation/staging:

```text
hostinger-hosting   enabled
hostinger-domains   disabled
hostinger-dns       disabled
```

Keep disabled:

- billing;
- subscriptions;
- ecommerce;
- VPS;
- WordPress;
- Horizons;
- Reach/email marketing.

Credential:

```text
HOSTINGER_API_TOKEN
```

It remains in the Windows user environment.

Never paste the value into:

- prompt;
- chat;
- repository;
- screenshot;
- config file;
- `.env`;
- shell output.

---

# 7. Restart Codex

1. Close the current task.
2. Fully exit Codex/VS Code.
3. Reopen the repository root.
4. Start a new task.
5. Confirm only the hosting MCP server is enabled.
6. Use Full Access for:
   - code;
   - packages;
   - Git;
   - browser;
   - screenshots/video;
   - isolated staging.
7. Keep external write approvals active.

---

# 8. Start V2.3

Open:

```text
docs/Portfolio_V2_3_Codex_Goal_Prompt.md
```

Copy only the text inside the fenced `text` block.

Paste it as the complete new task goal.

Do not summarize it.

Do not add:

- “keep the V2.2 design”;
- “just add more animation”;
- a competing color palette;
- a separate hero concept.

The goal tells Codex to research, prototype, and choose.

---

# 9. Appropriate approvals during the staging run

Approve clearly scoped operations:

- create a new temporary Hostinger staging site;
- deploy V2.3 staging;
- clear V2.3 staging cache;
- read logs;
- push branches;
- open/update V2.3 draft PR;
- create focused branches in public repositories for docs/media improvements.

Review cross-repository changes.

Do not approve:

- canonical production deployment;
- production document-root deletion;
- production Website Builder deletion;
- DNS;
- nameservers;
- email;
- billing;
- subscription renewal;
- payment;
- merge to `main`;
- production GitHub Pages mirror;
- package publishing;
- public paid API secrets.

---

# 10. What Codex should do autonomously

Expected flow:

1. verify SHAs and branches;
2. branch from V2.2;
3. commit V2.3 docs;
4. review V2.0 live;
5. review V2.1 staging;
6. review V2.2 staging;
7. review all source/pages;
8. audit repositories;
9. audit career/evidence;
10. research current design references;
11. build multiple full visual systems;
12. compare and choose/hybridize;
13. restore narrative and content;
14. rebuild professional case studies;
15. rebuild Projects Lab;
16. rebalance Research;
17. revise Experience, About, Recognition, résumé;
18. implement material/glass/motion;
19. run independent critiques;
20. run local QA;
21. deploy isolated V2.3 staging;
22. review staging live;
23. run remote QA;
24. revise;
25. open draft PR;
26. report.

Do not make routine choices for Codex.

The owner has requested autonomy.

---

# 11. New staging site

Prefer a new temporary Hostinger origin.

Preserve:

- V2.1 staging;
- V2.2 staging.

If the hosting plan cannot create another staging site, Codex should:

1. archive V2.2 screenshots;
2. archive videos;
3. preserve the final archive and SHA;
4. document the current URL;
5. preserve PR #3;
6. request one exact owner approval before reuse.

Never reuse production for staging.

---

# 12. What to inspect when V2.3 returns

Use:

```text
docs/Portfolio_V2_3_Owner_Review_Checklist.md
```

Do not judge only the homepage.

Review:

- all design directions;
- final homepage;
- Work;
- Experience;
- Projects;
- Research;
- About;
- Recognition;
- résumé;
- professional case studies;
- open-source flagships;
- mobile;
- reduced motion;
- standard fallback.

---

# 13. Owner feedback format

Send one consolidated review.

Use:

## Must fix before production

Issues that block approval.

## Strong preference

Meaningful improvements.

## Optional experiment

Ideas that may improve the result but are not required.

Avoid many small feedback rounds.

---

# 14. Production gate

The exact phrase is:

```text
V2.3 CUTOVER APPROVED
```

Do not type that phrase before approval.

Use:

```text
docs/Portfolio_V2_3_Cutover_Prompt.md
```

Only after:

- staging is approved;
- final SHA is known;
- PR is approved;
- public résumé is approved;
- QA passes;
- rollback is current;
- production plan is reviewed.

---

# 15. Recovery prompt

Use only if Codex stops at planning, research, or prototypes:

```text
Continue the active Portfolio V2.3 assignment.

The task is not complete.

The controlling specification requires a complete working portfolio, restored content, live design research, multiple working directions, a selected final system, deep professional case studies, rich Projects Lab, balanced Research, public résumé, isolated Hostinger staging, remote QA, videos, screenshots, and a draft pull request.

Do not return another plan or audit.

Resume from the current branch and working state.

Complete the implementation, deploy and review live staging, fix the issues found, and report only when the V2.3 staging release satisfies the acceptance criteria or one genuinely unavoidable owner action is required.
```

---

# 16. Do not accidentally authorize production

The words:

> V2.3 CUTOVER APPROVED

must appear only in the later production instruction.

Do not include them in ordinary feedback.

Use wording such as:

> Continue staging revisions.

until final approval.
