# Visual Source Implementation

Source-level implementation notes for the first Hellocraft visual pass.

## Status

```text
VISUAL_SOURCE_BASELINE_IMPLEMENTED
PLAYFUL_EDITORIAL_DIRECTION_APPLIED
DUMMY_CONTENT_LAYOUT_READY
RENDERED_VISUAL_ACCEPTANCE_DEFERRED
LOCAL_RUNTIME_TESTS_DEFERRED_BY_PROJECT_OWNER
```

This pass translates `docs/foundation/04-visual-direction.md` into source without claiming browser/rendered acceptance.

## Applied language

```text
canvas        → warm white / paper
structure     → near-black
brand accent  → temporary development cyan
shape         → clean rectangles + restrained star motif
composition   → editorial sections + large type + strong contrast bands
motion        → CSS-only, quick, reduced-motion safe
media         → explicit project-media placeholders until real assets arrive
```

The current cyan is a development approximation only. Replace it with the authoritative brand value when the original/vector logo asset is supplied.

## Source responsibilities affected

```text
src/app.css
→ global visual tokens and document foundation

SiteHeader / SiteFooter
→ brand/navigation shell

ProjectCard
→ reusable work-preview treatment

Home / Work / Work Detail / Studio / Careers / Contact
→ route-specific editorial composition
```

No final project media, brand vector, webfont, animation library, component kit, Tailwind, or hosting-specific code is introduced.

## Acceptance boundary

Current source inspection may establish that:

- the same small color/token language is used across routes;
- dummy content remains separated from layout;
- project cards and shell have consistent source ownership;
- motion uses native CSS only;
- focus/reduced-motion declarations exist in source;
- no factual portfolio/client/contact claims were added.

It does not prove the rendered visual quality, responsive behavior, browser accessibility, or performance. Those remain deferred until the project owner re-authorizes runtime/browser testing.
