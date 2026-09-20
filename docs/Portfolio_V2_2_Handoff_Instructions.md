# Portfolio V2.2 — Clean Codex Handoff Instructions

This document gives the owner the exact handoff sequence for a fresh Codex task.

---

# 1. Package contents

Copy these files into the portfolio repository:

```text
docs/
  Portfolio_V2_2_Ambitious_SciFi_Research_Revamp_Spec.md
  Portfolio_V2_2_Independent_Audit_and_Narrative_Map.md
  Portfolio_V2_2_Research_Atlas_Seed_Library.md
  Portfolio_V2_2_Handoff_Instructions.md
  Portfolio_V2_2_Codex_Goal_Prompt.md
  Portfolio_V2_2_Cutover_Prompt.md
```

Do not remove the V2.0 or V2.1 documents.

V2.2 builds on their:

- privacy controls;
- evidence model;
- hosting architecture;
- QA;
- staging;
- rollback;
- protected production process.

---

# 2. Put the files in the correct directory

The repository should look like:

```text
smgpulse007.github.io/
  AGENTS.md
  docs/
    Portfolio_V2_2_Ambitious_SciFi_Research_Revamp_Spec.md
    Portfolio_V2_2_Independent_Audit_and_Narrative_Map.md
    Portfolio_V2_2_Research_Atlas_Seed_Library.md
    Portfolio_V2_2_Handoff_Instructions.md
    Portfolio_V2_2_Codex_Goal_Prompt.md
    Portfolio_V2_2_Cutover_Prompt.md
    ...existing docs...
  src/
  public/
  package.json
```

Do not leave the files under a nested ZIP folder.

---

# 3. Verify locally

From the repository root:

```powershell
Get-ChildItem .\docs\Portfolio_V2_2*
git status --short
```

The six new files may be untracked.

That is acceptable.

The goal prompt tells Codex to create the V2.2 branch from the exact V2.1 SHA and commit the documents first.

Do not manually merge V2.1 into `main`.

Do not close PR #2.

---

# 4. Keep private material out of the repository

Do not add:

- the detailed application résumé;
- a résumé containing phone or precise home location;
- employer/client screenshots;
- actual claims documents;
- private prompts;
- private architecture;
- Hostinger tokens;
- `.env` secrets;
- local browser profiles;
- raw research PDFs;
- copyrighted paper figures;
- screenshots containing personal information.

The public résumé remains a separate privacy-cleared artifact.

---

# 5. MCP state for the V2.2 implementation run

Keep:

```text
hostinger-hosting   enabled
hostinger-domains   disabled
hostinger-dns       disabled
```

Keep unrelated Hostinger products disabled:

- billing/subscriptions;
- ecommerce;
- VPS;
- WordPress;
- Horizons;
- Reach/email marketing.

The Hostinger token remains in the Windows user environment:

```text
HOSTINGER_API_TOKEN
```

Never paste its value into:

- a prompt;
- chat;
- repository file;
- screenshot;
- shell transcript;
- `config.toml`;
- `.env`.

---

# 6. Restart Codex

Before the new task:

1. Close the current Codex chat.
2. Fully exit Codex/VS Code.
3. Reopen the repository root.
4. Start a new Codex task.
5. Confirm `hostinger-hosting` is the only enabled Hostinger server.
6. Use Full Access for:
   - repository work;
   - package installation;
   - browser automation;
   - screenshots/video;
   - Git;
   - isolated staging.

Keep external Hostinger write approvals active.

---

# 7. Start the new task

Open:

```text
docs/Portfolio_V2_2_Codex_Goal_Prompt.md
```

Copy only the text inside the fenced `text` block.

Paste it as the entire new task goal.

Do not summarize it.

Do not append a second visual brief.

Do not tell Codex to reuse the current V2.1 style.

The V2.2 specification deliberately gives broad creative freedom.

---

# 8. Expected branch behavior

Codex should:

1. verify V2.1 SHA;
2. create:
   `codex/portfolio-v2.2-systems-observatory`
3. create it directly from:
   `918077d048ea8873c32e13508e5c6a8648842d19`
4. preserve V2.1 PR #2;
5. commit the V2.2 documents;
6. build V2.2;
7. open a separate V2.2 draft PR to `main`.

Do not let Codex create V2.2 from `main`.

---

# 9. What to approve during implementation

Approve clearly scoped staging operations:

- creating a new temporary Hostinger staging site;
- deploying V2.2 staging;
- clearing V2.2 staging cache;
- reading staging logs;
- redeploying staging;
- creating/updating draft PRs;
- creating branches in public repositories for documentation/media improvements.

Review cross-repository changes before merge.

Reject or pause operations involving:

- `shaileshdudala.com`;
- production document-root deletion;
- production Website Builder deletion;
- DNS;
- nameservers;
- email;
- billing;
- subscription renewal;
- payment;
- main merge;
- production GitHub Pages mirror;
- package publishing;
- public paid API keys.

---

# 10. What Codex should do autonomously

Expected sequence:

1. verify current state;
2. branch from exact V2.1 SHA;
3. capture V2.1;
4. audit live staging and source;
5. audit public repositories;
6. audit research sources;
7. build three working design prototypes;
8. choose/hybridize;
9. rebuild homepage and information architecture;
10. implement Evolution;
11. deepen claims and predictive-ML stories;
12. implement Meta Harness flagship;
13. deepen LLM Steering;
14. rebuild Lab;
15. build Research Atlas;
16. revise About, Recognition, résumé, and GitHub handoff;
17. run adversarial reviews;
18. run local tests;
19. deploy isolated V2.2 staging;
20. run remote tests;
21. revise;
22. open draft PR;
23. report.

Do not answer ordinary design questions for the agent.

The assignment is intentionally autonomous.

---

# 11. If Hostinger capacity prevents a new staging site

Codex should first:

1. archive V2.1 staging screenshots;
2. record V2.1 staging SHA;
3. preserve the final V2.1 archive;
4. document the old staging URL;
5. confirm PR #2 retains the comparison evidence.

Only then may it reuse the existing staging application.

Do not reuse production.

---

# 12. What to look for when V2.2 staging is returned

## First five seconds

Can you understand:

- Senior Applied AI Engineer?
- healthcare/insurance?
- ambiguous problem solving?
- predictive ML through agent systems?
- current frontier?

## Evolution

Can you remember:

> Signal → Prediction → Product → Context → Agent → Harness

after closing the tab?

## Current professional story

Does the claims experience clearly show:

- context;
- agent loop;
- tool;
- validator;
- state;
- human authority;
- operations?

Does it avoid confidential detail?

## Breadth

Are these visible:

- statistical modeling;
- predictive ML;
- scientific/biomedical foundations;
- products/MLOps;
- RAG/document AI;
- agentic AI;
- harness engineering?

## Visual

Does it feel:

- sci-fi;
- professional;
- distinctive;
- coherent;
- legible?

Does it avoid:

- generic cyberpunk;
- game HUD;
- particle wallpaper;
- endless glass cards;
- terminal spam?

## Interactions

Are at least three memorable?

- Evolution;
- Claims agent;
- Meta Harness;
- LLM Steering;
- Research Atlas.

Do they teach something?

## Cards

Can you identify in seconds:

- Problem;
- Built;
- Changed;
- Proof?

## Lab

Does it feel like a laboratory, not a list?

Is Meta Harness prominent?

Are public demos and media used?

## Research

Are papers:

- verified;
- cited;
- status-labeled;
- connected to projects?

Are 2026 preprints clearly labeled?

Is the Meta-Harness paper distinguished from Shailesh’s repository?

## Mobile

Does mobile feel designed?

Do advanced visuals have useful fallbacks?

## Performance and accessibility

Does the meaningful content appear quickly?

Can the experience be used:

- with keyboard;
- with reduced motion;
- without WebGL;
- without JavaScript?

---

# 13. Give one consolidated owner review

When staging is ready, provide one consolidated review.

Do not send a stream of small style changes.

Separate feedback into:

- Must fix before production
- Strong preference
- Optional experiment

Do not authorize production until:

- narrative;
- visual direction;
- current claims story;
- Meta Harness;
- Lab;
- Research;
- mobile;
- résumé;

are approved.

---

# 14. Production gate

The exact phrase is:

```text
V2.2 CUTOVER APPROVED
```

Do not use it in discussion.

Use:

```text
docs/Portfolio_V2_2_Cutover_Prompt.md
```

only after:

- staging URL is approved;
- final SHA is known;
- draft PR is approved;
- QA is green;
- production change plan is reviewed;
- rollback is current.

---

# 15. Recovery prompt

Use only when Codex stops after planning or prototypes:

```text
Continue the active Portfolio V2.2 assignment.

The task is not complete.

The specification requires a complete working product, not an audit, mood board, prototype-only result, or design proposal.

Resume from the current branch.

Complete the final direction, all systems, Evolution, Meta Harness, LLM Steering, Systems Lab, Research Atlas, About, Recognition, public résumé, local QA, isolated Hostinger staging, remote QA, interaction recordings, and draft pull request.

Do not return another plan.

Stop only for one genuinely unavoidable owner action or the protected V2.2 production gate.
```

---

# 16. Files that must never be committed

- tokens;
- credentials;
- private `.env`;
- private application résumé;
- PHI/PII;
- actual claims documents;
- employer-confidential assets;
- private prompts;
- private APIs;
- copyrighted paper PDFs/figures without rights;
- local browser profiles;
- `node_modules`;
- production archives containing secrets.
