# Visual Source Implementation

Current source-level implementation notes for the Hellocraft Studios Website.

## Status

```text
BLIND_SQUIRREL_INSPIRED_REFACTOR_IMPLEMENTED_IN_SOURCE
PROFESSIONAL_GAME_STUDIO_SYSTEM_IMPLEMENTED
PROJECT_FIRST_EDITORIAL_SEQUENCE_IMPLEMENTED
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

Rejected translation:

```text
copying exact layouts
copying slogans/copy
copying brand graphics
copying project assets
copying exact components
```

Hellocraft logo/content architecture remains authoritative.

## Global source system

`src/app.css` now owns a smaller, more professional global system:

```text
near-black structure
warm neutral canvas
cyan accent
minimal radius
thin rules
strong display typography
shared shell / eyebrow / section index / text-link primitives
```

Rounded/pill treatment is no longer the default surface language.

## Header

The header is now:

```text
dark structural bar
→ Hellocraft lockup
→ simple uppercase text navigation
→ cyan active/hover underline
```

Contact is not visually forced into a generic pill CTA. Navigation stays source-simple and JS-free.

## Home

Current hierarchy:

```text
01 / identity
→ huge studio headline
→ concise body/action
→ full-width cinematic development media surface

02 / selected work
→ editorial heading
→ alternating large project presentations

03 / studio
→ large statement + concise explanation

04 / capabilities
→ dark text-led section

proof
→ restrained ruled list

05 / contact
→ dark closing statement + cyan top rule
```

The previous decorative split-hero star composition, equal card grid, cyan closing block, and repeated star markers were removed.

## Work

`/work` now uses:

```text
dark oversized intro
→ count/context line
→ one editorial project sequence
```

Projects no longer behave like interchangeable product cards.

## Project card / media placeholder

`ProjectCard.svelte` is now a project showcase row rather than a conventional card.

It supports:

```text
index
heading level
alternating direction
```

`ProjectMediaPlaceholder.svelte` no longer repeats the Hellocraft star. It uses a restrained black/cyan temporary production field that can later be replaced by real project imagery.

## Project detail

Project detail now uses:

```text
dark project identity hero
→ full-width media stage
→ contribution list
→ ruled editorial project sections
→ optional dark project-links close
```

Alternating dark/light content blocks were removed so project media/copy can become the real visual interest later.

## Studio

Studio now emphasizes:

```text
large dark identity statement
→ capabilities copy
→ working approach
→ restrained proof list
→ dark contact close
```

Decorative star art and proof cards were removed.

## Careers

Careers now uses:

```text
dark studio-grade hero
→ structured opening rows
→ recruitment context
→ dark application close
```

The previous cyan hero badge and decorative star treatment were removed.

## Contact

Contact now uses:

```text
dark oversized contact hero
→ real-only channel list
→ restrained inquiry section with cyan structural rule
```

No fake contact method is introduced.

## Footer / error

Footer is now smaller and more disciplined: no giant HELLOCRAFT wordmark wall. A thin cyan rule and simple information/navigation structure close the site.

Error pages use the same dark editorial system rather than a separate playful cyan poster composition.

## Dependency boundary

No new UI framework, component kit, motion library, font package, or image package was added by this refactor.

## Deferred proof

Still intentionally unproven until local/runtime/browser work is re-authorized:

- Svelte compilation/build;
- actual responsive rendering;
- visual hierarchy in-browser;
- typography fit at real viewports;
- keyboard/focus behavior in-browser;
- actual performance;
- real project-media crop quality.
