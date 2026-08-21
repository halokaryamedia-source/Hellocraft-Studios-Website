# Visual Source Implementation

Current source-level implementation notes for the Hellocraft Studios Website.

## Status

```text
BLIND_SQUIRREL_PRIMARY_REFERENCE_RETAINED
PROFESSIONAL_GAME_STUDIO_SYSTEM_IMPLEMENTED
PROJECT_FIRST_EDITORIAL_SEQUENCE_IMPLEMENTED
HELLOCRAFT_SIGNATURE_GRAMMAR_IMPLEMENTED
EDITORIAL_RAIL_IMPLEMENTED
CUT_CORNER_MEDIA_IMPLEMENTED
CYAN_STRUCTURAL_RAIL_IMPLEMENTED
UNIFORM_CARD_GRID_REMOVED
REPEATED_STAR_DECORATION_REMOVED
PILL_HEAVY_UI_REMOVED
RENDERED_ACCEPTANCE_PENDING
```

This file records implementation direction, not a browser approval claim.

## Reference translation

Primary external reference: **Blind Squirrel Games**.

Adopted ideas:

```text
oversized confident typography
numbered editorial progression
strong dark/light structure
large project surfaces
project-first credibility
straightforward studio/service communication
minimal decorative UI around game work
```

Hellocraft differentiation is owned durably by `docs/foundation/04-visual-direction.md` through the Hellocraft-specific signature grammar.

## Hellocraft signature layer

The second refinement pass intentionally moves beyond a generic Blind-Squirrel-inspired studio layout.

Current signature language:

```text
editorial rail
+ cyan structural line
+ cut-corner project media
+ restrained hard-edge surfaces
+ asymmetric media/text relationship
+ oversized project indices
```

The rail is structural rather than decorative: it carries section/index metadata and creates a repeatable rhythm across Home, Work, Studio, and shared footer treatment.

The cut-corner media frame abstracts the angular transitions of the Hellocraft star without repeating a literal star motif.

## Global source system

`src/app.css` now owns:

```text
near-black structure
warm neutral canvas
cyan accent
editorial-frame / editorial-rail / editorial-body primitives
cut-corner size token
shared shell / eyebrow / section index / text-link primitives
```

Rounded/pill treatment is not the default surface language.

## Header

The header remains dark and JS-free. A short cyan top rail gives it a stronger Hellocraft signature while navigation stays simple uppercase text with a cyan active underline.

## Home

Current hierarchy:

```text
01 / identity rail
→ huge studio headline
→ ruled copy/action deck
→ offset cinematic cut-corner media

02 / selected work rail
→ editorial heading
→ alternating large project showcases

03 / studio rail
→ large statement + concise explanation

04 / capability rail
→ dark text-led section

proof rail
→ restrained ruled evidence list

05 / contact rail
→ dark closing statement + ruled action deck
```

## Project presentation

`ProjectCard.svelte` is an editorial project showcase rather than a conventional card.

It now uses:

```text
large media / compact text imbalance
alternating direction
large low-contrast project number
cyan metadata rule
cut-corner project media
```

`ProjectMediaPlaceholder.svelte` is a temporary production field with:

```text
cut top-right / bottom-left corners
narrow cyan side rail
subtle production coordinates
low-contrast HC mark
```

Real project imagery will replace the field while preserving the frame responsibility.

## Work / Studio

Work and Studio now share the same editorial rail grammar so the identity is not limited to the homepage.

Other routes retain the professional dark/light system and can adopt the same rail where later visual review proves it improves the page rather than forcing repetition everywhere.

## Footer

The footer uses the same rail grammar instead of a giant decorative word wall. It remains restrained and information-led.

## Dependency boundary

No new UI framework, component kit, motion library, font package, or image package was added by this refinement.

## Deferred proof

Still intentionally unproven until local/runtime/browser work is re-authorized:

- Svelte compilation/build;
- actual responsive rendering;
- visual hierarchy in-browser;
- typography fit at real viewports;
- keyboard/focus behavior in-browser;
- actual performance;
- real project-media crop quality.
