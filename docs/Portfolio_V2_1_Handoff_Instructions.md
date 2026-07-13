# Portfolio V2.1 â€” Clean Codex Handoff Instructions

This document tells the owner exactly how to place the V2.1 files in the repository and begin a fresh Codex execution thread.

## 1. Package contents

Copy these files into the repository:

```text
docs/
  Portfolio_V2_1_Experience_Evidence_Revamp_Spec.md
  Portfolio_V2_1_Handoff_Instructions.md
  Portfolio_V2_1_Codex_Goal_Prompt.md
  Portfolio_V2_1_Cutover_Prompt.md
```

The main implementation specification is the controlling brief.

The goal prompt is the text used to start the new Codex chat.

The cutover prompt is deliberately reserved until live staging has been independently reviewed.

## 2. Do not overwrite the existing Portfolio V2 documents

Keep the current files, including:

- `AGENTS.md`
- original Portfolio V2 master brief;
- Hostinger production addendum;
- autonomous execution playbook;
- deployment documentation;
- staging documentation;
- cutover and rollback documentation;
- QA report;
- content provenance;
- release documentation.

V2.1 builds on that foundation. It does not replace the safety and release system.

## 3. Add the files without manually changing application code

Recommended Windows/VS Code procedure:

1. Download all four Markdown files.
2. Open the local repository in VS Code/Codex.
3. Open the repositoryâ€™s `docs` directory.
4. Copy the four files into `docs`.
5. Confirm the filenames match exactly.
6. Do not edit application files.
7. It is acceptable to leave the four documents uncommitted; the new Codex task is instructed to create the V2.1 branch and commit the handoff documents first.
8. Confirm no rÃ©sumÃ© PDF, API token, Hostinger credential, screenshot containing a token, or private file was added accidentally.

Optional verification in the terminal:

```powershell
git status --short
Get-ChildItem .\docs\Portfolio_V2_1*
```

Expected untracked files may appear with `??`.

## 4. MCP state for the implementation and staging run

For the V2.1 implementation phase:

```text
hostinger-hosting   enabled
hostinger-domains   disabled
hostinger-dns       disabled
```

Keep unrelated Hostinger products disabled:

- billing and subscriptions;
- ecommerce;
- VPS;
- WordPress;
- Horizons;
- Reach/email marketing.

The Hostinger credential must remain in the Windows user environment variable:

```text
HOSTINGER_API_TOKEN
```

Never paste its value into a prompt, repository file, screenshot, terminal transcript, or chat.

Local Codex may use Full Access for repository work, browser automation, package installation, screenshots, Git, and isolated staging. External Hostinger write operations should continue to use the configured MCP approval behavior.

## 5. Restart Codex before beginning

A fresh process prevents stale MCP and environment state.

1. Close the current Codex chat.
2. Fully exit the Codex/VS Code window.
3. Reopen the repository.
4. Start a new Codex chat/task from the repository root.
5. Confirm the enabled MCP server list when practical.
6. Do not enable Domains or DNS.

## 6. Start the new chat

Open:

```text
docs/Portfolio_V2_1_Codex_Goal_Prompt.md
```

Copy only the text inside its fenced `text` block and paste it as the new task goal.

Do not summarize it.

Do not prepend a second competing brief.

Do not tell the agent to â€œjust make it prettier.â€ The specification already defines the product, evidence, copy, UI, QA, staging, and release requirements.

## 7. What Codex should do without owner intervention

The expected autonomous sequence is:

1. verify repository and current production state;
2. create `codex/portfolio-v2.1-experience-evidence`;
3. commit the V2.1 handoff documents;
4. crawl canonical production and legacy routes;
5. inspect all relevant public repositories and demos;
6. create the evidence/source manifest;
7. revise information architecture and copy;
8. add the healthcare analytics platform case study;
9. move Letâ€™s Talk Doc to Recognition;
10. rebuild the hero and project-specific visual systems;
11. integrate real LLM Steering evidence;
12. improve Lab, About, GitHub handoff, and public rÃ©sumÃ©;
13. run five visual passes;
14. deploy isolated no-index Hostinger staging;
15. run remote multi-browser and accessibility QA;
16. open a draft PR marked `DO NOT MERGE`;
17. report the staging URL and evidence.

Codex should not ask the owner to choose among routine design directions.

## 8. What the owner may be asked to approve during staging

Approve only clearly isolated staging operations, such as:

- creating or reusing a temporary Hostinger staging website;
- deploying the staging build;
- clearing staging cache;
- reading staging logs;
- updating the draft pull request.

Reject or stop any staging request involving:

- `shaileshdudala.com`;
- production document-root deletion;
- DNS;
- nameservers;
- domain transfer;
- email;
- billing;
- subscription renewal;
- Website Builder deletion;
- main-branch merge;
- GitHub Pages production mirror.

The implementation prompt explicitly prohibits those operations before the cutover gate.

## 9. When Codex returns a staging URL

Do not immediately approve production.

Review at minimum:

### First five seconds

- Is the role clear?
- Does healthcare/insurance remain primary?
- Does the hero feel memorable rather than like a console?
- Is the main action obvious?

### Visual authorship

- Do the four flagship stories look meaningfully different?
- Does motion show causality rather than decoration?
- Does the site still overuse black cards, green labels, or code blocks?
- Does the mobile design feel intentionally composed?

### Story and evidence

- Is ownership clear?
- Does each case study show decisions, failure, measurement, and outcome?
- Is the new healthcare-platform story convincing?
- Does LLM Steering use actual public evidence?
- Is Letâ€™s Talk Doc credited as a team project?

### Copy

- Are internal evidence enums absent from normal reading mode?
- Does any paragraph sound like AI-generated portfolio commentary?
- Does About sound human without inventing biography?
- Are caveats concise rather than dominant?

### Safety and launch hygiene

- Are old `/contact` and `/my-ai-app-library` pages neutralized in staging?
- Is the public rÃ©sumÃ© intentional?
- Is staging `noindex,nofollow`?
- Did production remain unchanged?

Provide one consolidated feedback message rather than many small rounds.

## 10. Production gate

Use the separate file:

```text
docs/Portfolio_V2_1_Cutover_Prompt.md
```

only after:

- live staging is approved;
- the final staging SHA is known;
- the draft PR is reviewed;
- legacy cleanup behavior is verified;
- the public rÃ©sumÃ© is approved;
- rollback steps are current.

The production authorization phrase is exactly:

```text
V2.1 CUTOVER APPROVED
```

Do not send that phrase casually or inside an earlier discussion.

## 11. After production

The production task should verify:

- canonical site;
- same-SHA mirror;
- apex and `www`;
- SSL;
- raw HTML;
- canonical and robots;
- legacy redirects;
- public rÃ©sumÃ©;
- social cards;
- sitemap;
- structured data;
- browser behavior;
- accessibility;
- performance;
- search reindex documentation;
- GitHub profile link and README handoff;
- rollback path.

## 12. Source-of-truth reminder

The latest detailed `_JRFO`/`_JFRO` application rÃ©sumÃ© remains the career source of truth, but it must not be published directly. The portfolio uses only privacy-cleared, qualified public wording and maintains a separate public rÃ©sumÃ© edition.

## 13. Recovery prompt when an agent stops too early

Use this only when Codex returns a plan or audit without implementing:

```text
Continue the existing Portfolio V2.1 assignment.

The task is not complete. The implementation specification requires working code, isolated live Hostinger staging, five inspected visual passes, remote QA, a public-safe rÃ©sumÃ©, legacy-route behavior, and a draft pull request.

Do not return another plan. Resume from the current branch and working state, implement the remaining requirements, deploy and inspect staging, fix the issues you find, and report only when the staging release satisfies the acceptance criteria or one genuinely unavoidable owner action is required.
```

## 14. Files that must never be committed

- Hostinger API tokens;
- `.env` files containing credentials;
- private application rÃ©sumÃ© PDFs;
- production screenshots containing personal information;
- private employer/client media;
- local browser profiles;
- `node_modules`;
- private source documents;
- temporary archives containing secrets.

