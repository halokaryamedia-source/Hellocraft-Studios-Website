---
name: web-ui-design-development
description: Hellocraft Studios Website specialist for visual frontend design and rendered UI quality. Use for bounded website work where visual hierarchy, reference analysis, layout/composition, typography, spacing, color/tokens, responsive behavior, interaction states, motion, visual accessibility, or browser-rendered acceptance materially determine correctness. Use with development-brief for visual frontend development. Do not use to invent page taxonomy, portfolio/services content, copy, framework/CMS/backend choices, SEO strategy, or deployment architecture.
---

# Web UI Design Development

Own the recurring visual-design and frontend-craft boundary for the Hellocraft Studios Website.

This skill exists so visual work is not improvised from generic model defaults. It turns approved product meaning, real references, and current source into a coherent, responsive, accessible, visually intentional website surface, then verifies the result in a rendered browser context.

`AGENTS.md` owns routing. `development-brief` owns the bounded implementation contract. Foundation owns product meaning. Current source owns implemented behavior. This skill owns visual judgment and rendered visual acceptance only.

## Use when

Use this specialist when the active task materially involves one or more of:

- visual hierarchy and composition;
- art-direction translation into web UI;
- analysis or reconciliation of website/image/design references;
- typography, spacing, grid, color, shape, borders, elevation, texture, or visual tokens;
- portfolio/studio presentation craft once the content itself is authoritative;
- reusable component appearance and visible interaction states;
- responsive composition across materially different viewport sizes;
- visual accessibility, focus visibility, contrast, reduced motion, or readable state distinction;
- hover, transition, scroll, page-transition, or micro-interaction craft;
- visual consistency across an existing frontend;
- rendered browser acceptance, visual regression diagnosis, or reference comparison.

## Do not use when

Do not use this specialist to decide:

- what pages Hellocraft should have;
- final navigation or information architecture;
- portfolio entries, categories, attribution, or case-study facts;
- service/capability taxonomy;
- company/About copy or marketing claims;
- framework, rendering model, CMS, backend, database, hosting, analytics, or deployment provider;
- SEO/content strategy;
- business behavior merely because it is represented visually.

If the visual task requires inventing any of those, return to Project Definition / the appropriate current owner instead of hiding the missing decision inside design work.

## Authority and reference precedence

Use the nearest current authority for each claim:

1. current explicit user direction and approved Hellocraft decisions;
2. current Foundation requirements;
3. approved Hellocraft brand assets / design references when supplied;
4. current source and rendered behavior for an existing implementation;
5. project reference inventory in `docs/knowledge/frontend-reference-inventory.md`;
6. external inspiration/design-system references only for bounded design evidence;
7. generic model taste last.

A reference is evidence, not policy. A screenshot, Awwwards-style site, design system, component library, or external Agent Skill cannot silently redefine Hellocraft.

## Core principle: reference-grounded, not reference-copied

When references matter, classify every material visual rule as:

```text
OBSERVED
→ directly visible or verifiable in the reference

INFERRED
→ likely design intent, not directly proven

ADOPTED
→ intentionally selected for Hellocraft because it serves the current goal

REJECTED
→ deliberately not carried over because it conflicts with Hellocraft, usability, accessibility, performance, or scope
```

Do not average conflicting references into a vague middle style. Decide which reference solves which problem.

## Reference routing by problem

Choose references by the question being solved instead of browsing everything.

### Broad visual discovery / mood

Use sources such as:

- Cosmos — broad visual language, imagery, mood, color, composition inspiration.

Do not use a moodboard source as proof of page architecture.

### Whole-site studio / portfolio composition

Use sources such as:

- Httpster;
- Curated Design;
- approved Minecraft/game-studio references already studied for this project.

Compare several relevant sites before adopting a pattern. One reference should not become a hidden template.

### Experimental interaction / non-generic presentation

Use:

- Hoverstates.

Treat unusual interactions as candidates that must still pass usability, accessibility, performance, and Hellocraft-fit checks.

### Section-specific problems

Use:

- Unsection;
- Curated Design section references.

Use these when a particular hero, work grid, client proof block, footer, contact block, or other section needs stronger composition. Do not default to whatever card/bento pattern is most common.

### User-flow problems

Use:

- Page Flows.

Use it for forms, applications, filtering/browsing, inquiry flows, and other interaction sequences. Do not use it as the main visual-style authority.

### Design-system questions

Use current official guidance from systems such as:

- GitHub Primer;
- Material Design 3;
- IBM Carbon;
- Atlassian Design System;
- Adobe Spectrum.

Use them to study spacing systems, semantic typography, interaction states, elevation, accessibility, tokens, and mature component behavior. Never merge their visual identities or copy screenshot values as Hellocraft defaults.

### Low-authority pattern/tool references

Resources such as Aceternity UI, glassmorphism generators, CSS loaders, unDraw, and similar prefab sources are optional pattern references only.

```text
concrete problem + strong fit
→ may inspect one bounded pattern

no concrete problem
→ do not browse/install/import it
```

Their existence is never a reason to use their aesthetic.

## Two working modes

Choose the mode from current state.

### ESTABLISH

Use when the affected website surface has no approved coherent visual language yet and the user has authorized visual-direction work.

```text
product meaning + brand evidence + relevant references
→ compact visual thesis
→ minimum shared rules/tokens
→ implementation/prototype
→ rendered review
```

Do not invent product structure as part of establishing visual language.

### ALIGN

Use when a coherent visual language already exists.

```text
current visual owner + affected reference/requirement
→ preserve identity
→ correct hierarchy/consistency/responsiveness
→ implement the minimum complete change
→ rendered review
```

Do not redesign the whole website because one component is weak.

## Visual thesis

Before a material new visual system or page family is implemented, establish the smallest useful thesis internally and expose it to the user when approval can materially change the direction.

Cover only dimensions that matter:

```text
Hierarchy      → what must be noticed first, second, third
Composition    → grid, alignment, rhythm, whitespace, density, asymmetry
Typography     → role hierarchy, voice, scale relationship, line length/readability
Color/material → neutral/accent balance, surface language, borders/elevation/texture
Media          → screenshots, video, artwork, logos, crops, aspect-ratio behavior
Interaction    → states, motion character, feedback, scrolling/transition behavior
```

Do not turn this into a questionnaire. Recover what is already knowable, recommend a direction, and ask only when one unresolved choice would materially change the result.

## Design-system discipline without design-system bureaucracy

Separate three useful dimensions inspired by prior Design DNA work:

```text
MEASURABLE SYSTEM
→ color roles, type roles, spacing, layout, shape, elevation, motion tokens, component states

QUALITATIVE STYLE
→ mood, personality, composition strategy, imagery treatment, interaction feel

SPECIAL EFFECTS
→ WebGL/3D, particles, shader effects, scroll effects, cursor effects, animated textures, unusual rendering
```

Use the separation to reason clearly. Do **not** require a giant Design-DNA JSON, theme registry, or every-field-filled schema.

Create persistent visual tokens only for durable repeated rules. One-off values may remain local when centralizing them would add ceremony without preventing real drift.

Prefer semantic names tied to role rather than arbitrary implementation names.

Good:

```text
surface-primary
text-muted
accent-primary
space-section
motion-fast
```

Avoid turning every pixel value into a token.

## Composition and hierarchy

The page should communicate before it decorates.

Prioritize:

1. the visitor's current question / next meaningful action;
2. work/media or proof that supports that question;
3. readable grouping and progression;
4. typography and contrast;
5. interaction polish;
6. decoration.

For Hellocraft specifically, do not make Minecraft imagery fight the interface. Real work/media should be able to carry visual weight when it is the strongest evidence.

Avoid mechanically repeating:

```text
heading
→ short paragraph
→ three equal cards
```

across every section. Repetition is correct only when the content relationship genuinely repeats.

Use asymmetry, editorial pacing, large media, dense grids, quiet whitespace, or other composition strategies only when they support the current content and approved direction.

## Typography

Choose type from brand/reference/communication needs, not from an LLM's favorite font list.

Rules:

- establish semantic roles rather than arbitrary one-off font sizes;
- preserve readable line length and hierarchy;
- ensure display typography survives real copy lengths and responsive sizes;
- do not mix font families merely to manufacture visual interest;
- do not default to serif, monospace, ultra-condensed, or oversized type just because the project is creative;
- do not default to common AI/tech typography merely because it is safe;
- verify actual font licensing, loading, weights, and rendering before treating a font as production-ready.

Typography should feel intentional even when conventional.

## Color, surface, shape, and elevation

Use a coherent small language rather than decorative accumulation.

- Use accent color because it has a role, not because the page feels empty.
- Use gradients when art direction calls for them, not as automatic 'premium' treatment.
- Use glass/transparency only when depth/material logic and readability support it.
- Use radius and borders consistently enough to communicate relationships.
- Elevation should communicate layer/interaction, not merely add polish.
- Avoid stacking glow + blur + gradient + border + shadow + noise on every surface.

A simple surface is often stronger when the media/content is already visually rich.

## Media and Minecraft content

Treat project imagery and video as primary studio evidence once authoritative assets exist.

- preserve meaningful focal points when cropping;
- define deliberate aspect-ratio behavior instead of accidental stretching;
- keep media sharp at target sizes without wasteful payloads;
- do not place busy UI effects over screenshots that already carry detail;
- distinguish decorative media from content-bearing media for accessibility;
- client/partner logos must remain legible and must not be stylistically distorted merely to fit a theme;
- do not fabricate Minecraft scenes/assets to represent real portfolio work unless explicitly labeled as concept/demo material.

## Components and visible states

Create a shared component only when there is a real reusable visual/interaction responsibility.

A component does not deserve abstraction merely because markup repeats twice.

For each affected interactive component, handle only states that can really occur, such as:

```text
default
hover
focus-visible
active / pressed
selected / current
loading
success
error
disabled / unavailable
```

State differences must match actual behavior. This skill does not invent runtime states.

Use one coherent icon family when icons are needed. Do not add icons as decoration where text or imagery already communicates clearly.

## Responsive craft

Responsive design is composition, not a desktop layout squeezed smaller.

- make hierarchy survive narrow and wide viewports;
- use content-driven breakpoints where practical rather than creating many arbitrary device classes;
- allow type, spacing, media, and layout relationships to scale fluidly when useful;
- prevent horizontal overflow, clipped text, inaccessible off-screen actions, and unstable viewport-height behavior;
- reconsider composition when stacking changes meaning, not just column count;
- test long labels, real content lengths, and media crops;
- do not assume hover exists on touch devices;
- preserve usable reading order independent of visual rearrangement.

## Accessibility is part of visual quality

For affected surfaces:

- preserve semantic reading order and meaningful HTML structure;
- keep keyboard focus clearly visible;
- do not rely on color alone for important distinctions;
- maintain readable text/background contrast;
- ensure interactive targets and labels are understandable;
- provide useful alt text for content images and empty/appropriate alternatives for decorative imagery;
- avoid interaction that requires precise pointer movement when a simpler accessible path exists;
- respect reduced-motion preferences for non-essential motion;
- do not hide important information only behind hover.

Accessibility requirements override decorative preferences when they conflict.

## Motion and interaction craft

Motion needs a job. Acceptable purposes include:

```text
feedback
orientation
attention
continuity
state transition
brand expression
narrative emphasis
```

If it does none of these, omit it.

Use prior motion-design principles as judgment, not as universal numeric presets:

- define an emotional/brand intent when motion is material;
- choose a consistent motion character rather than random easing per component;
- entrances generally orient; exits should get out of the way;
- interactive feedback must feel immediate;
- choreography should establish a hero/attention order instead of moving everything simultaneously;
- use the minimum properties needed for the effect;
- ambient motion must remain subordinate to content;
- motion distance, timing, easing, and stagger should scale with perceived weight and context;
- reduced-motion behavior must preserve function and comprehension.

Prefer existing/native CSS or framework motion capabilities when sufficient. A new motion library is justified only by a concrete recurring need that native capabilities cannot represent cleanly.

Do not create a separate motion specialist unless motion later becomes an independent recurring acceptance boundary.

## Stack and dependency neutrality

This skill intentionally does not choose the frontend stack.

Do not silently impose:

- React / Next.js / Astro / Svelte or another framework;
- Tailwind or another styling system;
- shadcn, Radix, Aceternity, Material, Carbon, Primer, or another component system;
- GSAP, Motion, Lottie, Three.js, or another animation/rendering dependency.

When the current project stack is approved, use its native capabilities and existing dependencies first.

Before adding a dependency, establish:

```text
what concrete current problem does it solve?
why is the existing stack insufficient?
what maintenance/performance/accessibility cost does it add?
can the same accepted result be achieved more directly?
```

Do not install a library merely because a reference demonstrates it.

## Anti-generic / anti-AI-slop review

Before considering a visual slice complete, challenge common model defaults:

- generic purple/blue glow or mesh gradient with no brand reason;
- centered hero + vague slogan + two buttons + three identical cards by reflex;
- glassmorphism used as shorthand for 'modern';
- excessive pill buttons, rounded rectangles, and soft shadows everywhere;
- bento/card grids where content does not naturally form cards;
- random serif/sans mixing for fake editorial personality;
- template illustration style that weakens Minecraft/studio identity;
- decorative icons or badges that add no meaning;
- animation on every hover or scroll event;
- identical section rhythm from top to bottom;
- copying an admired reference so literally Hellocraft loses its own identity;
- inventing content to fill a visually convenient layout;
- importing a large component kit to avoid designing a small number of real components.

A conventional solution is acceptable when it is the clearest and most appropriate solution. Anti-slop does not mean forcing novelty.

## Procedure

1. **Ground the boundary.** Read the applicable `development-brief`, current Foundation requirement, and affected source. If product meaning is missing, stop and return to Project Definition.
2. **Choose ESTABLISH or ALIGN.** Do not broaden a local polish task into a redesign.
3. **Recover evidence.** Inspect current visual owners and only the references that can materially change the decision.
4. **Classify references.** Record or reason through `OBSERVED / INFERRED / ADOPTED / REJECTED` for material rules.
5. **Form the smallest visual thesis.** Cover hierarchy, composition, type, color/material, media, and interaction only as needed.
6. **Reuse before adding.** Reuse valid tokens/components/patterns. Add a shared visual owner only when repeated responsibility justifies it.
7. **Implement the minimum complete slice.** Keep content authority, semantics, and business behavior unchanged unless separately approved.
8. **Check real states and responsiveness.** Include keyboard/focus/reduced-motion behavior where applicable.
9. **Render and inspect.** Visual claims require actual browser/rendered evidence at the relevant sizes; source intent is not visual proof.
10. **Compare against acceptance, not taste alone.** Verify the adopted reference rules, hierarchy, readability, responsiveness, interaction quality, and absence of obvious generic contamination.
11. **Return to the development-brief acceptance gate and STOP.** Do not continue redesigning adjacent surfaces automatically.

## Rendered acceptance

Static/source inspection can prove:

- style/token ownership;
- component structure;
- semantic markup intent;
- responsive declarations;
- motion declarations;
- dependency usage;
- absence of duplicate style systems.

It cannot by itself prove:

- that the composition looks correct;
- that visual hierarchy is effective;
- that a reference was matched appropriately;
- that responsive behavior works at actual sizes;
- that motion feels coherent;
- that media crops/focal points are correct;
- that the website avoids visual defects in the target browser.

Those claims require rendered browser inspection at the relevant viewport(s). Human approval remains authoritative for subjective final art direction.

## External influence boundary

This Hellocraft skill is a project-specific synthesis, not a copy of any external skill.

Useful principles were distilled from:

- Hellocraft's curated `docs/knowledge/frontend-reference-inventory.md`;
- `zanwei/design-dna` — measurable system vs qualitative style vs special-effects decomposition;
- `AThevon/genjutsu` — establish-vs-align thinking, reference-backed visual thesis, preview/validation discipline, and anti-generic design practice;
- `Leonxlnx/taste-skill` — brief/audience inference and explicit resistance to common LLM frontend clichés;
- `LottieFiles/motion-design-skill` — purposeful motion, emotional intent, timing/easing/choreography principles;
- TranslateIT `desktop-ui-design-development` — project-specific visual ownership, stack neutrality, accessibility, and source-vs-rendered proof boundaries;
- Anthropic `skill-creator` — clear activation description, concise reusable procedure, and skill-scope discipline;
- mature public design systems such as Primer, Material 3, Carbon, Atlassian, and Spectrum as bounded research sources.

External references do not become Hellocraft product policy, dependencies, visual identity, or implementation requirements unless separately adopted by current authority.

## STOP boundary

When the bounded visual result is implemented and the required rendered proof/approval is satisfied, stop.

Do not automatically:

- redesign another page;
- establish a new theme system;
- install a motion/component library;
- create another visual specialist;
- invent missing portfolio/About/services content;
- optimize unrelated frontend architecture;
- start the next milestone.
