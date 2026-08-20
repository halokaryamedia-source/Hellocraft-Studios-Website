---
name: svelte-development-validation
description: Support skill for creating, editing, reviewing, or debugging Hellocraft Svelte 5 / SvelteKit source. Use current official Svelte guidance, modern runes-first patterns, the official Svelte MCP CLI/autofixer when available, Context7 for version-sensitive documentation, and project check/build proof. This skill validates Svelte implementation quality; it does not choose product architecture, visual design, dependencies, hosting, or content.
---

# Svelte Development Validation

Use this support skill whenever work materially creates, edits, reviews, or diagnoses:

- `.svelte` components;
- `.svelte.ts` / `.svelte.js` reactive modules;
- SvelteKit route/layout/server modules whose correctness depends on Svelte/SvelteKit conventions;
- Svelte-specific state, props, events, snippets, transitions, context, or SSR behavior.

This is **not** a project-specific specialist. It does not consume the one-specialist-per-task budget.

## Authority

Use the nearest current authority:

```text
approved Hellocraft requirement / architecture
→ current source + package.json / bun.lock
→ official Svelte / SvelteKit documentation for the relevant version
→ Context7 version-aware retrieval when useful
→ official Svelte AI tooling / autofixer
→ model memory last
```

Documentation and autofix suggestions do not override the installed version or project requirement.

## Modern Svelte baseline

For new Svelte 5 code, prefer current runes-mode patterns unless current source/version proves a different requirement.

Key rules distilled from the official Svelte AI tooling:

- use `$state` only for values that actually need reactivity;
- prefer `$derived` / `$derived.by` for computed values instead of state-writing `$effect` patterns;
- treat `$effect` as an escape hatch for real side effects, not general data flow;
- use `$props` rather than legacy `export let` for new runes-mode components;
- use modern event attributes such as `onclick` rather than legacy `on:click` in new code;
- use snippets / `{@render ...}` rather than legacy slot patterns when the current Svelte version supports the intended design;
- prefer keyed `{#each}` blocks when item identity matters; never use an index as a fake stable key;
- use CSS custom properties for parent-to-child styling contracts when practical;
- avoid shared server-leaking reactive state; scope state appropriately and use typed context when it is the correct owner;
- do not enable experimental Svelte features merely because documentation mentions them.

Do not mechanically modernize unrelated existing source during a bounded task.

## Workflow

### 1. Pin the actual version

Before relying on version-sensitive behavior, inspect the declared/installed Svelte and SvelteKit versions from the project.

If the scaffold does not exist yet, use only the approved planned baseline and current official documentation; do not invent an exact version.

### 2. Resolve current documentation when material

Use `context7-documentation-validation` for version-sensitive Svelte/SvelteKit APIs or configuration when available.

If Context7 is unavailable or ambiguous, consult the official Svelte/SvelteKit documentation directly.

### 3. Use official Svelte tooling

The Svelte project provides `@sveltejs/mcp` CLI tooling for documentation lookup and Svelte code analysis.

Useful commands when the environment supports them:

```bash
npx @sveltejs/mcp list-sections
npx @sveltejs/mcp get-documentation "<relevant-section>"
npx @sveltejs/mcp svelte-autofixer <path-to-component> --svelte-version 5
```

For every materially changed `.svelte` component, run the official Svelte autofixer when available before finalizing the implementation.

Treat autofixer output as review evidence, not an instruction to apply every suggestion blindly.

### 4. Validate project compatibility

After source changes, use the project-owned checks that match the claim, typically:

```text
format/lint when configured
→ svelte-check
→ SvelteKit build
```

A clean autofixer result is not a substitute for `svelte-check` or build proof.

### 5. Escalate to runtime proof when needed

If correctness depends on browser behavior, hydration, events, navigation, responsive interaction, or performance, continue through `chrome-devtools-validation` and/or the matching browser proof owner.

Visual quality remains owned by `web-ui-design-development`.

## Common error guards

Do not:

- write legacy Svelte syntax from memory when current Svelte 5 guidance has a replacement;
- introduce `$effect` to imitate React-style synchronization without a real side effect;
- make large API responses deeply reactive by reflex when only reassignment is required;
- add a store/global state layer before local/context state proves insufficient;
- place browser-only behavior in server execution paths;
- use Svelte documentation as permission to add an external dependency;
- claim runtime correctness from static source inspection.

## Tooling boundary

`@sveltejs/mcp` is agent/development tooling. Do **not** add it to Hellocraft application dependencies merely to satisfy this workflow.

The website package manager remains Bun. An external support CLI may use its documented invocation independently of the website runtime.

## External-source basis

This skill is a Hellocraft-specific support synthesis of the official Svelte AI tooling skills:

- `sveltejs/ai-tools` → `svelte-core-bestpractices`;
- `sveltejs/ai-tools` → `svelte-code-writer`.

Those sources inform Svelte correctness only; Hellocraft Foundation and current source remain project authority.

## Completion

Svelte validation is complete when:

- the relevant Svelte/SvelteKit version is known when materially required;
- current official guidance supports the implementation;
- materially changed Svelte components have been reviewed with the official autofixer when available;
- `svelte-check` / build or the nearest matching project checks pass once configured;
- runtime/browser proof is obtained when the claim requires it;
- no product, visual, dependency, or deployment decision was silently delegated to this skill.

Then return to the active development owner and STOP.