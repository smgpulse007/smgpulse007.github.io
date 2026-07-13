# Hostinger MCP configuration

Status: post-cutover lockdown complete; Codex restart required to unload the previously active Domains and DNS servers

## Final user-level server policy

| Server | Enabled | Default approval mode | Package |
| --- | --- | --- | --- |
| `hostinger-hosting` | yes | `writes` | `hostinger-api-mcp@1.5.1` |
| `hostinger-domains` | no | `prompt` | `hostinger-api-mcp@1.5.1` |
| `hostinger-dns` | no | `prompt` | `hostinger-api-mcp@1.5.1` |

Billing, subscriptions, ecommerce, VPS, WordPress, Horizons, Reach, agency hosting, and every unrelated Hostinger server are absent from the user configuration. Hosting remains available for future static release maintenance. Explicitly read-only Hosting tools may run autonomously; Hosting writes continue to require approval.

The credential is referenced only by the Windows user environment-variable name `HOSTINGER_API_TOKEN` through each configured server's `env_vars` field. No inline `env` value exists. The value is not stored in the repository, project configuration, documentation, generated evidence, or commands. The repository secret scan passes.

## Version decision

The configuration stays pinned to `hostinger-api-mcp@1.5.1`. The npm stable release checked on 2026-07-13 was `1.5.3`. Hostinger's [official `v1.5.1...v1.5.3` comparison](https://github.com/hostinger/api-mcp-server/compare/v1.5.1...v1.5.3) adds an Agency Hosting server, normalizes the Node.js restart tool identifier, and refreshes generated/package metadata. It does not document a Windows-launch, authentication, credential-handling, security, or static Business-hosting deployment fix required by this portfolio. Retaining the already verified pin avoids changing the operational surface immediately after release. Re-evaluate a newer exact pin in a separate non-production preflight; never switch to `@latest` automatically.

## Validation

- Python standard-library TOML parsing loaded the user configuration successfully and confirmed the three server records above.
- `npx.cmd` resolves from the installed Node.js runtime.
- With the process credential deliberately unset, `npx.cmd --yes --package=hostinger-api-mcp@1.5.1 hostinger-hosting-mcp --help` exited `0`, proving the Windows package/binary launch path without making an authenticated Hostinger request.
- `npm run test:secrets` passed after lockdown.

A Codex restart is required before the running task reflects the disabled Domains and DNS server entries. No Hostinger API call should be made after this lockdown record.
