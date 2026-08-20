---
name: project-skill-planner
description: Use only when Hellocraft Studios Website work shows a plausible recurring project-specific semantic responsibility that Foundation, AGENTS, development-brief, and the current specialist set cannot cover sufficiently, or when existing project-specific specialists need overlap/pruning review. The current baseline contains one earned specialist; additional skills must pass the full creation gate.
---

# Project Skill Planner

Determine the **minimum justified reusable project-specific specialist set**.

This is not a mandatory bootstrap step and is not a mechanism for turning every technical topic into a skill.

## Current baseline

```text
project-specific specialists = 1

web-ui-design-development
→ visual frontend design/craft + rendered visual acceptance
```

`web-ui-design-development` is currently justified because visual frontend work repeatedly requires project-specific reference judgment, anti-generic design discipline, responsive/accessibility craft, interaction/motion judgment, and rendered visual acceptance that generic development procedure does not sufficiently own.

Its existence does **not** justify adjacent frontend/framework/SEO/testing skills.

## Activate only when

At least one current condition is true:

- approved scope clearly requires recurring specialized semantic judgment across multiple development slices;
- specialist need is genuinely ambiguous;
- an existing project-specific specialist set needs overlap, sufficiency, routing, or pruning review.

Do not activate merely because the website may use design, frontend code, SEO, CMS, analytics, deployment, testing, a framework, animation, accessibility work, 3D, or a difficult technical task.

## What qualifies

A project-specific specialist must represent a distinct recurring semantic or acceptance responsibility whose judgment cannot be represented sufficiently by:

```text
Foundation
+ AGENTS.md
+ development-brief
+ current project specialists
+ nearest source/module rules
```

Technology names and job roles alone are not specialist boundaries.

Examples that do **not** automatically justify another skill:

- frontend expert;
- React / Next / Astro / Svelte expert;
- CSS / TypeScript expert;
- SEO expert;
- accessibility expert;
- motion expert;
- tester;
- researcher;
- CMS expert;
- deployment expert;
- security expert;
- Three.js / WebGL expert.

A future project responsibility may justify a specialist only after its recurring semantic/acceptance boundary is real and distinct.

## Existing specialist boundary

Before considering a new visual/frontend-related specialist, check `web-ui-design-development` first.

It already owns the bounded visual responsibility for:

- reference analysis;
- visual hierarchy and composition;
- typography/color/spacing/tokens;
- responsive visual behavior;
- component visible states;
- purposeful motion and interaction craft;
- visual accessibility;
- rendered visual acceptance;
- anti-generic / anti-AI-slop design judgment.

Do not create separate Design DNA, Taste, Genjutsu, motion, responsive, accessibility, design-system, or visual-audit specialists merely because those reference families exist. Their useful overlapping principles have already been distilled into the current Hellocraft specialist.

## Classification

For each real candidate use one result:

```text
NO SKILL
→ generic/current owners are sufficient

USE EXISTING
→ `web-ui-design-development` or another current owner already covers it

CREATE
→ a distinct recurring responsibility passes the full gate

REFINE / MERGE
→ current specialist boundary is wrong or overlapping

REMOVE / FOLD
→ no live distinct responsibility remains

BLOCKED
→ current evidence cannot classify it responsibly yet
```

Prefer `NO SKILL` or `USE EXISTING` whenever they are sufficient.

## Creation gate

Create only when all material conditions are supported:

- real current semantic/acceptance responsibility;
- recurring use proven by current scope or repeated work;
- distinct reusable judgment/procedure;
- Foundation + development-brief + current specialists are insufficient;
- nearest source/module rules do not already own it;
- clear non-overlapping boundary;
- current approved consumer/use exists;
- persistent skill reduces realistic repeated error, reasoning cost, or coordination ambiguity.

If not, do not create it.

## Second-pass candidate curation

The earlier broad candidate list has been reduced. Keep only responsibilities that are plausibly distinct; do not retain speculative skill names merely as placeholders.

### `portfolio-content-production` — BLOCKED / likely future

Potential boundary:

```text
authoritative project evidence
→ attribution / publication-safety check
→ normalized project facts
→ showcase vs case-study judgment
→ evidence-backed project narrative + media requirements
→ publication-ready portfolio content package
```

It must **not** own visual layout, portfolio UI, CMS mechanics, general company copy, unsupported marketing claims, or SEO strategy.

Create only after the project owner supplies enough portfolio inventory to prove this workflow is recurring. Until then the candidate remains blocked, not installed.

### `website-release-development` — BLOCKED / likely future

This replaces the earlier, overly broad `website-delivery-development` name.

Potential boundary:

```text
working website source
→ production build/config
→ deployed target
→ domain/redirect/cache/security-header wiring
→ production smoke/performance/security proof
→ release-ready public website
```

It may own production wiring for forms, analytics, CMS endpoints, or third-party scripts only when those integrations already have defined product semantics. It must **not** own CMS/editorial policy, analytics strategy, form/business semantics, SEO content strategy, or frontend visual design.

Its proof should escalate from configuration/build proof to deployed-target proof. Production performance belongs here as a release acceptance concern when it depends on the real host/runtime; Core Web Vitals and security headers are acceptance evidence, not separate project skills.

Create only after the frontend stack, hosting/deployment target, and material production integrations are known.

### `web-motion-development` — USE EXISTING

Do not keep this as an active candidate. `web-ui-design-development` already owns purposeful motion, transitions, scroll interaction, reduced-motion behavior, and rendered motion acceptance.

Re-run this planner only if future motion work develops a genuinely independent architecture/acceptance boundary that the visual specialist cannot represent cleanly.

### `web-3d-development` — NO SKILL

Three.js, WebGL, shaders, particles, or interactive 3D are technologies/features, not a semantic skill boundary by themselves.

If an approved interactive-graphics feature later becomes large and recurring, start with `development-brief` + nearest source/module rules. Reconsider a specialist only after the recurring acceptance problem is proven; do not reserve a skill name now.

### `cms-content-development` — NO SKILL

CMS is a technology choice. Content schemas, adapters, queries, and editor integration should live with source/module contracts once a CMS exists.

If Hellocraft later develops a substantial recurring editorial workflow with its own semantic rules such as draft/review/publish ownership, publication states, or governance, reconsider a **content-publishing** responsibility then. Do not create a CMS expert skill in advance.

### `content-discoverability-development` — NO SKILL

Technical search plumbing such as metadata, canonical URLs, robots, sitemaps, structured markup, and crawlability belongs to normal frontend/release requirements and source rules.

Project/page messaging and portfolio claims remain content/product responsibilities. If a future independent search/content strategy becomes recurring and materially larger than those owners, reassess from evidence rather than preserving an SEO specialist placeholder.

## Candidate set after curation

Only two future candidates remain worth tracking:

```text
portfolio-content-production
→ blocked until authoritative portfolio workflow exists

website-release-development
→ blocked until production architecture exists
```

Everything else from the earlier candidate list is currently `USE EXISTING` or `NO SKILL`.

## Skill authoring

A justified project-specific specialist uses:

```text
.agents/skills/<semantic-responsibility>/SKILL.md
```

Use current skill-authoring principles:

- precise activation description;
- clear use / do-not-use boundary;
- smallest reusable procedure;
- explicit authority and proof boundary;
- no duplicate product facts from Foundation;
- no temporary task/status state;
- no technology preference unless the semantic responsibility genuinely requires it.

## Per-task budget

Normal bounded Developing uses:

```text
development-brief
+
zero or one matching project-specific specialist
```

Do not stack multiple project specialists merely because one task touches several technical topics. If two genuinely independent acceptance boundaries are both material, split/reframe the work.

## Completion

Skill planning is complete when:

- every current specialist has one justified distinct responsibility;
- no unnecessary candidate skills remain;
- overlap is removed rather than routed around;
- routing remains the smallest sufficient mechanism;
- no registry/matrix/persona layer was added without a real need.

Return control to `AGENTS.md` and STOP.
