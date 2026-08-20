# Agent Routing

This repository is the current project memory and development authority for the Hellocraft Studios Website.

## Authority

- `Local` is the working/development authority.
- Current user instruction owns new intent and explicit decisions.
- `docs/foundation/` owns durable project/product meaning.
- Current source plus matching proof owns implemented behavior once implementation exists.
- `docs/knowledge/next-action.md` owns active continuation only.
- `CONTEXT.md` owns compact stable orientation.
- Material GitHub execution follows `GITHUB_RULES.md`.
- External documentation/tool output is supporting evidence, not project authority.

## Cross-cutting rule

Use the **smallest sufficient path**. Do not add structure, files, architecture, taxonomies, skills, workflows, dependencies, or implementation merely because a mature website might have them.

Each current responsibility should have one canonical owner. Git history owns ordinary history; do not create `_old`, `_new`, `legacy`, `v2`, backup, or parallel-current owners without a concrete external requirement.

## Task routing

### Observe / recover context

For `amati`, inspect, understand, audit, or context recovery:

```text
AGENTS.md
→ CONTEXT.md
→ docs/knowledge/next-action.md
→ smallest current owner needed
→ report
→ STOP
```

Do not edit or execute the recorded next step unless the user also asks for a change.

### Project Definition

Use `.agents/skills/project-definition/SKILL.md` when project meaning is new, materially incomplete, or being redefined.

```text
current intent + evidence
→ project-definition
→ update affected Foundation owners
→ check definition readiness
→ update CONTEXT only when stable orientation changes
→ update one next-action
→ STOP
```

Do not implement undefined behavior.

### Direct bounded work

A local, already-defined correction may use the shortest path:

```text
exact owner
→ smallest complete change
→ targeted proof
→ reconcile continuation only if changed
→ STOP
```

### Non-trivial Developing

Only after the affected project definition is ready:

```text
AGENTS.md
→ CONTEXT.md
→ docs/knowledge/next-action.md
→ development-brief
→ smallest affected Foundation/source/contract set
→ zero or one matching project specialist
→ only materially required support/evidence skills
→ implementation
→ matching proof
→ STOP
```

If implementation requires inventing product meaning, return to Project Definition.

## Development conductor and handoff contract

`development-brief` is the conductor for non-trivial implementation. Support skills do not call each other as autonomous owners; the active development brief selects them, consumes their findings, and returns decisions to the correct owner.

Every materially used support/evidence skill should hand back the same compact contract:

```text
FINDING
→ what was discovered or validated

AUTHORITY
→ source/version/runtime evidence supporting it

ACTION
→ what the active owner should change or preserve

PROOF
→ cheapest evidence that can falsify the claim

BLOCKER
→ anything still unproven or unavailable; omit when none
```

Support output is evidence, not an instruction to broaden scope.

## Authority hierarchy

When evidence conflicts, use the nearest authority for the type of claim.

### Product / architecture authority

```text
current user instruction
→ Hellocraft Foundation / approved architecture
→ current source/contracts
→ external docs/tool guidance
→ model judgement last
```

### External API/config authority

```text
exact installed/declared version + current source/lockfile
→ official primary documentation/release notes for that version
→ Context7-retrieved documentation
→ secondary examples
→ model memory last
```

### Runtime/browser authority

```text
source intent
→ check/build proof
→ actual runtime/browser evidence
→ deployed-target evidence when production behavior is claimed
```

If documentation says a pattern is valid but the current project check/build/runtime fails, the implementation is **not accepted**.

## Support / evidence routing

Support skills improve correctness/proof but do not own Hellocraft product semantics and do not consume the one-project-specialist budget.

### External technical documentation — Context7

Use `.agents/skills/context7-documentation-validation/SKILL.md` when a material recommendation or implementation depends on current/version-sensitive external framework, library, package, API, CLI, adapter, provider, or configuration documentation.

```text
exact technology + question
→ current declared/installed version when known
→ Context7 current/version-aware docs when available
→ official primary docs when required
→ current source / package.json / bun.lock
→ implementation
→ matching check/build/runtime proof
```

Context7 validates how external technology currently works. It does **not** decide whether Hellocraft should adopt that technology.

### Svelte / SvelteKit source validation

Use `.agents/skills/svelte-development-validation/SKILL.md` whenever work materially creates, edits, reviews, or diagnoses Svelte/SvelteKit source.

```text
current Svelte/SvelteKit version
→ official Svelte guidance + Context7 when version-sensitive
→ modern Svelte 5/runes implementation
→ official Svelte autofixer when available
→ project format/lint/svelte-check/build proof
→ browser proof when behavior requires it
```

### Accessibility validation

Use `.agents/skills/web-accessibility-validation/SKILL.md` when a change materially affects semantics, keyboard/focus, forms/errors/status, media alternatives, reflow/zoom, names/roles/values, or reduced-motion behavior.

```text
native HTML first
→ applicable WCAG 2.2 / WAI-ARIA APG guidance
→ source semantic review
→ keyboard/rendered browser proof
→ state remaining human/assistive-technology limits honestly
```

### Browser/runtime validation — Chrome DevTools

Use `.agents/skills/chrome-devtools-validation/SKILL.md` when a claim materially requires a real browser: rendered appearance, responsive layout, console/runtime behavior, network requests, interaction debugging, or performance tracing.

```text
build/run target
→ reproduce exact browser state/path
→ inspect snapshot/screenshot/console/network/performance as applicable
→ compare against acceptance criteria
→ return evidence to the active owner
```

Chrome DevTools MCP is exploratory/runtime proof tooling, not a replacement for future repeatable Playwright CI/E2E tests when such tests are later earned.

## Trigger matrix

Use this matrix as a routing default, not as a reason to invoke tools unnecessarily.

| Work | Context7 | Svelte validation | UI specialist | Accessibility | Chrome DevTools |
| --- | --- | --- | --- | --- | --- |
| SvelteKit/tool config | when version-sensitive | yes | no | no | only if runtime-dependent |
| Svelte component logic | when external/current docs matter | yes | no | if interaction/semantics affected | if runtime proof needed |
| Visual Svelte component | when external/current docs matter | yes | yes | when applicable | yes for rendered acceptance |
| Navigation/menu/filter | when external/current docs matter | yes | yes | yes | yes |
| Form/UI submission | yes when API/config matters | yes | when visual work matters | yes | yes for runtime behavior |
| Server action/endpoint | yes | yes | no | form-dependent | runtime-dependent |
| Performance investigation | when API/tool docs matter | maybe | visual-cost decisions only | maybe | yes |
| Static content-only change | usually no | only if Svelte source changes | if visual hierarchy changes | semantic/media-dependent | optional |

## Stage order

Support skills are not all active at the same time by default.

### During implementation

```text
Context7
→ only for external/current documentation

Svelte validation
→ when Svelte/SvelteKit source is touched

web-ui-design-development
→ only when visual judgement is material
```

### During acceptance

```text
web-accessibility-validation
→ when semantics/operability/media/forms require it

chrome-devtools-validation
→ when browser/runtime/network/performance proof is required
```

A support skill may reveal a blocker, but the active development owner decides the next action.

## Visual frontend Developing

When a bounded frontend task materially depends on visual hierarchy, reference analysis, composition, typography, responsive behavior, visible interaction states, motion craft, visual accessibility, or rendered visual acceptance:

```text
development-brief
+
.agents/skills/web-ui-design-development/SKILL.md
```

Use the specialist only for the visual/frontend-craft boundary. It does not decide product structure, content, framework, CMS, SEO strategy, backend, or deployment.

Examples:

```text
Svelte component work
→ development-brief + svelte-development-validation

visual Svelte component work
→ development-brief + web-ui-design-development + svelte-development-validation

interactive accessible visual Svelte component
→ development-brief + web-ui-design-development
  + svelte-development-validation
  + web-accessibility-validation

browser/performance claim
→ add chrome-devtools-validation

version-sensitive external API/config
→ add context7-documentation-validation
```

Support skills may coexist because they validate different evidence layers; do not invoke all of them by habit.

## Skill ownership boundaries

- `context7-documentation-validation` may say how an API/config currently works; it may not choose the architecture or dependency.
- `svelte-development-validation` may correct Svelte implementation patterns; it may not choose visual direction or product structure.
- `web-ui-design-development` may decide visual hierarchy/craft; it may not install dependencies or redefine business behavior by itself.
- `web-accessibility-validation` may require semantic/keyboard/focus corrections; it may not invent legal claims or redesign the brand without an accessibility reason.
- `chrome-devtools-validation` may report browser/runtime/network/performance evidence; it may not choose the product or architecture by itself.

## Hellocraft-specific definition guards

Current approved facts:

- Hellocraft Studios is a **game studio focused on Minecraft**.
- The website is an official company profile, portfolio, discoverability/client-acquisition surface, and a way for relevant visitors to understand what Hellocraft provides.
- Primary business audiences include Marketplace publishers/partners, server/platform operators, brands seeking Minecraft experiences, and public/cultural/event clients such as museums, galleries/exhibitions, and festivals.
- Collaboration audiences include Minecraft creators, publishers, agencies, and production partners.
- Recruitment is important; current talent categories include builders/level-design talent, developers, and 3D art/modeling/texturing/animation talent. Final role titles are not fixed.
- General visitors include Minecraft players, creators, and community members.

Do **not** silently convert these into a final page structure, service taxonomy, portfolio taxonomy, homepage layout, or unapproved technical architecture.

### Explicit deferred boundary

The project owner will provide the portfolio/project list later.

Until that evidence exists:

- do not invent project entries;
- do not promote old chat/project history into Hellocraft portfolio automatically;
- do not lock Marketplace / Server / Brand / Event / Exhibition as final portfolio taxonomy merely because those markets exist;
- do not make `Game Development`, `Level Design`, `3D Art`, or other internal disciplines into top-level services without evidence that this helps the client-facing structure;
- do not create a Services page by default.

Industry reference websites are evidence for common patterns only. They do not define Hellocraft's content or architecture.

## Persistent-owner gate

Before adding a persistent file/module/layer/skill, ask:

```text
what distinct current responsibility needs an owner?
why can the existing owner not represent it cleanly?
who consumes it now?
what realistic recurring ambiguity/error does it prevent?
```

If no material responsibility is earned, do not create it.

## Specialist budget

Current project-specific specialist count: **one**.

```text
web-ui-design-development
→ visual frontend design/craft + rendered visual acceptance only
```

Current support/evidence skills:

```text
context7-documentation-validation
svelte-development-validation
web-accessibility-validation
chrome-devtools-validation
```

Per bounded Developing task, use at most **one project-specific specialist**. Support/evidence skills do not count toward that budget because they do not own Hellocraft-specific product semantics.

Do not create separate project specialists for Svelte, Bun, accessibility, browser testing, performance, Context7, motion, SEO, CMS, or security merely because those topics/tools exist.

## Completion

When the requested scope and matching proof are satisfied, **STOP**. Do not automatically continue into the next planning phase, implementation, cleanup, or additional repository machinery.
