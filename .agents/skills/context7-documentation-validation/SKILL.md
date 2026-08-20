---
name: context7-documentation-validation
description: Support skill for Hellocraft technical work that materially depends on external framework, library, package, API, CLI, adapter, provider, or configuration documentation. Use Context7 MCP to retrieve current/version-aware documentation before implementing or recommending external APIs/configuration, then reconcile against the exact project version, official primary sources when needed, and build/runtime proof. This skill validates technical documentation evidence only; it does not approve product architecture, package adoption, security, maintenance quality, or visual design.
---

# Context7 Documentation Validation

Use this support skill to reduce stale API usage, hallucinated configuration, and version drift during Hellocraft development.

This is **not** a project-specific specialist. It is a reusable evidence/tooling layer and does not count against the one-specialist-per-task budget.

Context7 accelerates access to current and version-aware documentation. It is not the final authority over the current repository, installed package version, official source, or observed runtime behavior.

## Activate when

Use this skill when a material development decision or implementation depends on an external:

- framework or runtime API;
- library/package API;
- package setup or configuration syntax;
- CLI command or option;
- Svelte/SvelteKit convention that may be version-sensitive;
- Bun behavior or package-management command that may be version-sensitive;
- Vite/ESLint/Prettier/tooling configuration;
- SvelteKit adapter or hosting integration;
- form/email/storage/analytics provider API;
- browser/platform API whose current support or usage materially affects implementation;
- code example that should match a current library version.

Typical Hellocraft examples:

```text
Svelte 5 rune syntax
SvelteKit form actions / server routes
Bun package-management behavior
ESLint + Svelte configuration
Vite/SvelteKit configuration
SvelteKit deployment adapters
future Playwright/Vitest APIs if installed
future provider SDK/API integration
```

## Do not activate for

Do not use Context7 as the decision-maker for:

- whether Hellocraft needs a dependency at all;
- product scope, page structure, portfolio content, or business flow;
- visual hierarchy or art direction;
- whether a package is lightweight enough for Hellocraft;
- whether a package is secure, maintained, trustworthy, or free of vulnerabilities;
- runtime correctness that can only be proven by execution;
- browser/rendered visual quality;
- project-specific architecture tradeoffs already owned by Foundation, `development-brief`, source contracts, or a project specialist.

Context7 answers **how the external technology currently works**, not **whether Hellocraft should adopt it**.

## Authority hierarchy

Keep retrieval order and authority order distinct.

### Retrieval order

For external technical documentation:

```text
exact current question
→ identify current package/library + version if known
→ Context7 lookup when available
→ official primary documentation/release notes when Context7 is unavailable, weak, ambiguous, or the decision is high-impact
→ implementation
→ matching check/build/runtime proof
```

### Authority order

When evidence conflicts:

```text
current Hellocraft requirement / approved architecture
→ exact installed/declared version + current source/lockfile
→ official primary documentation / release notes for that version
→ Context7-retrieved documentation
→ secondary articles/examples
→ model memory last
```

Context7 is a retrieval accelerator, not a replacement for the authoritative package/source actually used by the repository.

## Context7 procedure

When Context7 MCP tools are available:

1. Identify the exact library/framework/package from the current task.
2. Identify the relevant version from `package.json`, `bun.lock`, configuration, or the approved planned version when available.
3. Resolve the Context7 library ID using the exact name and the concrete question.
4. Prefer the official/primary project match and a version-specific ID when available.
5. Query one concept at a time. Split unrelated questions instead of diluting one documentation query.
6. Extract only the rules/examples needed for the current implementation decision.
7. If the result is ambiguous, incomplete, surprising, security-sensitive, deployment-sensitive, or conflicts with the repository, check the official primary source directly.
8. Implement against the current repository version and architecture.
9. Run the cheapest proof capable of falsifying the claim.

Do not repeatedly resolve the same library ID within one bounded task unless the package/version identity changed.

## When Context7 is unavailable

Do not pretend Context7 was used.

Use this fallback:

```text
official primary docs / release notes
→ exact installed/declared version
→ implementation
→ check/build/runtime proof
```

For current public documentation, use a live authoritative source rather than training memory.

Context7 availability is a tooling condition, not a blocker for development when official documentation is accessible.

## Validation categories

Keep these distinctions explicit when they matter:

### Documentation validity

Question:

> Is this API/configuration documented for the relevant version?

Proof:

```text
Context7 + official/version-aware documentation as needed
```

### Version validity

Question:

> Does the repository actually use the version for which this guidance applies?

Proof:

```text
package.json / bun.lock / current config / installed source
```

### Compatibility validity

Question:

> Does the documented approach compile/check/build in Hellocraft?

Proof:

```text
format/lint/svelte-check/build or the nearest matching technical check
```

### Runtime validity

Question:

> Does it actually behave correctly in the target browser/server/deployment?

Proof:

```text
matching runtime/browser/deployed-target execution
```

### Architectural validity

Question:

> Should Hellocraft use this technology or approach?

Owner:

```text
Foundation + development-brief + nearest source/contract + matching project specialist when earned
```

Context7 does not decide this.

### Security / maintenance validity

Question:

> Is the dependency/provider safe, maintained, supported, or appropriate to trust?

Use primary security advisories, official repository/release state, provider policy, and other authoritative evidence. Context7 alone is insufficient.

## Dependency-adoption guard

Before adding a dependency, combine documentation evidence with Hellocraft's lightweight requirement:

```text
current problem exists
+ native Svelte/SvelteKit/CSS/browser capability is insufficient
+ Context7/official docs confirm the candidate API/config
+ maintenance/security/performance cost is acceptable
+ installed version is explicit
→ dependency may be proposed/implemented through the normal development owner
```

Never install a dependency because Context7 has documentation for it.

## Proof hierarchy

Documentation proves documented intent only.

```text
docs/config evidence
→ type/check/build evidence
→ runtime/browser evidence
→ deployed-target evidence when release behavior is claimed
```

Use only the proof level required by the current claim, but never substitute documentation for executable proof.

For visual work, `web-ui-design-development` still owns rendered acceptance.

## Codex / MCP wiring

Context7 is development tooling, not application runtime.

The project-scoped Codex MCP configuration may point to Context7's hosted MCP endpoint. Do not commit API keys or other Context7 credentials to the repository.

If authenticated/higher-limit access is needed, configure it in the user's Codex/Context7 environment using the official Context7 setup flow rather than storing secrets in project files.

Do not add `@upstash/context7-mcp` to Hellocraft's application dependencies merely to satisfy this skill.

## External-source basis

This skill adapts the durable workflow from Context7's official skill and Codex integration guidance:

- resolve the correct library before querying docs;
- prefer official/primary matches;
- use version-specific documentation when available;
- query one concept at a time;
- use Context7 automatically for library/framework/API/setup questions;
- keep Context7 as documentation retrieval rather than project/product authority.

Hellocraft adds stricter authority, fallback, dependency, performance, and proof boundaries on top.

## Completion

Documentation validation is complete when:

- the external technology/package is correctly identified;
- the applicable version is known when version materially matters;
- current documentation supports the implemented/recommended API/configuration;
- important ambiguity/conflict has been reconciled with primary sources;
- the implementation has the required technical/runtime proof;
- no architectural/product decision was silently delegated to Context7.

Then return to the active development owner and STOP.
