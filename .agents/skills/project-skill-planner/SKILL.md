---
name: project-skill-planner
description: Use only when Hellocraft Studios Website work shows a plausible recurring project-specific semantic responsibility that Foundation, AGENTS, and development-brief cannot cover sufficiently, or when existing project-specific specialists need overlap/pruning review. Zero specialists is valid.
---

# Project Skill Planner

Determine the minimum justified reusable project-specific specialist set.

This is **not** a mandatory bootstrap step.

Current valid baseline:

```text
project-specific specialists = 0
```

## Activate only when

At least one current condition is true:

- approved scope clearly requires recurring specialized semantic judgment across multiple development slices;
- specialist need is genuinely ambiguous;
- an existing project-specific specialist set needs overlap, sufficiency, or pruning review.

Do not activate merely because the website may use design, frontend code, SEO, CMS, analytics, deployment, testing, a framework, or a difficult technical task.

## What qualifies

A project-specific specialist must represent a distinct recurring semantic responsibility whose judgment cannot be represented sufficiently by:

```text
Foundation
+ AGENTS.md
+ development-brief
+ nearest source/module rules
```

Technology names and job roles alone are not specialist boundaries.

Examples that do **not** automatically justify a skill:

- frontend expert;
- React/Next/Svelte expert;
- SEO expert;
- tester;
- researcher;
- UI designer;
- CMS expert;
- deployment expert.

A future project responsibility may justify a specialist only after its recurring semantic/acceptance boundary is real and distinct.

## Classification

For each candidate:

```text
NO SKILL
USE EXISTING
CREATE
REFINE / MERGE
REMOVE / FOLD
BLOCKED
```

Prefer `NO SKILL` whenever existing current owners are sufficient.

## Creation gate

Create only when all material conditions are supported:

- real current responsibility;
- recurring use;
- distinct reusable judgment/acceptance rules;
- current generic owners are insufficient;
- clear non-overlapping boundary;
- current approved consumer/use exists;
- the persistent skill reduces realistic repeated error or reasoning cost.

If not, do not create it.

## Authoring

A justified project-specific specialist uses:

```text
.agents/skills/<semantic-responsibility>/SKILL.md
```

Keep it minimal and do not duplicate product facts from Foundation or temporary task state.

## Completion

After classification, preserve the smallest sufficient routing. Do not create a registry/matrix merely because skills exist. Return control to `AGENTS.md` and STOP.
