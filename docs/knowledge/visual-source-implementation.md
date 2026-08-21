# Visual Source Implementation

Current source-level implementation notes for the Hellocraft Studios Website.

## Status

```text
BLIND_SQUIRREL_PRIMARY_REFERENCE_RETAINED
PROFESSIONAL_GAME_STUDIO_SYSTEM_RETAINED
DE_AI_RESTRAINT_PASS_IMPLEMENTED
EDITORIAL_RAIL_REMOVED
CUT_CORNER_MEDIA_REMOVED
PRODUCTION_HUD_STYLING_REMOVED
FAKE_PROOF_HIDDEN_IN_DEMO_MODE
PROJECT_FIRST_PRESENTATION_RETAINED
RENDERED_ACCEPTANCE_PENDING
```

This file records implementation direction, not a browser approval claim.

## Why the previous refinement was rolled back

The previous source pass added an editorial rail, cut-corner media, coordinate labels, large project numbers, and cyan structural motifs to create a distinct Hellocraft grammar.

Preview review showed that these devices made the interface feel more AI-designed and self-consciously art-directed.

The current correction is therefore subtraction, not another new aesthetic layer.

## Current translation of Blind Squirrel

Keep the useful qualities:

```text
confidence
large clear typography
project-first hierarchy
real game-media emphasis
simple navigation
strong but controlled dark/light contrast
```

Do not mimic its exact branding or add invented Hellocraft equivalents for every Blind Squirrel brand gesture.

## Global source system

`src/app.css` now returns to a small global system:

```text
warm neutral canvas
near-black ink
cyan accent
simple shell
simple eyebrow
simple text action
minimal surface styling
```

Removed global primitives:

```text
editorial-frame
editorial-rail
editorial-body
cut-corner token
signature rail token
```

## Brand lockup

Until an authoritative logo/vector is supplied, `BrandLockup.svelte` uses a restrained text-only development lockup instead of an invented star symbol.

This avoids presenting a fabricated graphic as if it were the official Hellocraft mark.

## Header

The header is light and quiet:

```text
text lockup
→ simple navigation
→ small cyan active underline
```

No top rail, pill CTA, decorative mark, or dark poster treatment.

## Home

Current hierarchy:

```text
light hero
→ label
→ large headline
→ concise body + one action
→ large plain media placeholder

selected work
→ simple heading
→ large stacked project showcases

studio
→ one dark statement section

capabilities
→ light text-led section

proof
→ hidden while demo mode is active

contact
→ simple light closing section
```

The goal is to let real logo/media carry distinctiveness later rather than forcing placeholder graphics to do that job now.

## Project presentation

`ProjectCard.svelte` is now intentionally simple:

```text
large media
→ small metadata row
→ title + summary/action
```

It no longer alternates direction, shows oversized decorative numbers, or uses cyan metadata rails.

`ProjectMediaPlaceholder.svelte` is a neutral dark placeholder with only label/index metadata. No coordinates, HC ghost mark, cut corners, or decorative geometry remain.

## Work / Project detail

Work uses one vertical project sequence. Project detail uses a clear title/summary hero, large media, and straightforward content sections.

## Studio / Careers / Contact

These pages use simple text-led sections with only occasional dark fields where contrast improves hierarchy. Section numbering and decorative rails are removed.

Demo proof is hidden from Home and Studio until real approved evidence exists.

## Footer

The footer is a simple dark information surface with the textual development lockup, navigation, optional social links, and a small bottom line.

## Dependency boundary

No new UI framework, component kit, motion library, font package, or image package was added by this correction.

## Deferred proof

Still intentionally unproven until local/runtime/browser work is re-authorized:

- Svelte compilation/build;
- actual responsive rendering;
- final typography fit;
- keyboard/focus behavior in-browser;
- actual performance;
- real project-media crop quality.
