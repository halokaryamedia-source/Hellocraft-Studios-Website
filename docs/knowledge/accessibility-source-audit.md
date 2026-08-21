# Source Accessibility & Semantic Audit

Source-level audit for the current Hellocraft visual implementation.

Last reviewed: **2026-08-21**

This audit is intentionally limited to repository/source evidence because the project owner has deferred local/runtime/browser testing. It does **not** claim WCAG conformance or rendered accessibility acceptance.

## Status

```text
SOURCE_ACCESSIBILITY_AUDIT_COMPLETED
SEMANTIC_SOURCE_BASELINE_REVIEWED
FOCUS_SOURCE_HARDENED
HEADING_HIERARCHY_CORRECTED
DEMO_MEDIA_SEMANTICS_CORRECTED
REFLOW_SOURCE_GUARDS_HARDENED
DEMO_NOINDEX_GUARD_ADDED
BRAND_REPLACEMENT_SURFACE_READY
PROJECT_MEDIA_REPLACEMENT_SURFACE_READY
RENDERED_KEYBOARD_PROOF_DEFERRED
ASSISTIVE_TECH_PROOF_DEFERRED
```

## Authority

Use:

```text
WCAG 2.2 A/AA working target
→ native HTML semantics
→ WAI-ARIA/APG only when native semantics are insufficient
→ actual browser/assistive-technology proof later
```

`web-accessibility-validation` remains the support owner. This file records the current source audit only.

## Findings and corrections

### 1. Landmarks and page language — source acceptable

Current source provides:

- `lang="en"` while current development copy is English;
- one page `<main id="main-content">` per route;
- semantic `<header>`, `<footer>`, and named `<nav>` regions;
- a skip link targeting main content;
- native anchors for navigation/page actions;
- no fake button/div interaction system.

Do not add ARIA roles that duplicate these native landmarks.

### 2. Project-card heading hierarchy — corrected

A project card previously always rendered an `<h2>`. That made Home project titles siblings of the `Selected work` heading instead of children of it.

Current contract:

```text
Home selected-work section
→ section h2
→ project-card h3

Work project index
→ page h1
→ project-card h2
```

`ProjectCard.svelte` accepts only heading level `2 | 3`, with level 3 as its default.

### 3. Demo project-media region — corrected

The project-detail page previously exposed a named `<section aria-label="Project media placeholder">` whose contents were hidden from assistive technology. That created an empty named region.

Current behavior:

```text
development project media
→ decorative placeholder
→ aria-hidden
→ ordinary visual wrapper, not an accessibility landmark
```

When real project media arrives, do **not** inherit development-placeholder semantics.

### 4. Brand replacement surface — centralized

Current brand ownership:

```text
BrandLockup.svelte
→ header/footer development lockup
→ future authoritative logo/wordmark replacement owner

BrandSymbol.svelte
→ decorative temporary star-symbol implementation
```

The temporary graphic is hidden from duplicate announcement while visible Hellocraft text supplies the link name.

When an authoritative vector/logo is supplied, replace the lockup implementation at this owner rather than scattering SVG/image markup across routes.

If a future logo graphic becomes the only visible link content, the link must still expose an accessible Hellocraft/home name.

### 5. Project-media replacement surface — centralized

Current development owner:

```text
ProjectMediaPlaceholder.svelte
```

It is explicitly decorative and `aria-hidden` because it represents no real project evidence.

Future content-bearing image:

```text
real project asset
→ approved image pipeline
→ accurate alt text from actual visible/evidence content
→ intrinsic dimensions / deliberate aspect ratio
```

Future decorative image:

```text
empty alternative / hidden semantics as appropriate
```

Do not fabricate alt text before the actual asset exists.

### 6. Focus visibility — hardened at source level

The previous universal focus outline used the bright development cyan. That accent is not strong enough to be a universal focus boundary against every light surface.

The global focus treatment now uses a two-tone light/dark ring so one edge remains visible against light, dark, and cyan surfaces. A forced-colors fallback is declared.

Rendered focus visibility and possible clipping still require keyboard/browser proof later.

### 7. Small accent text contrast — hardened at source level

The bright cyan remains a large brand/surface accent. A darker `--brand-strong` development token is used for small cyan text/details on light surfaces.

This avoids treating the bright cyan as normal small body text on the warm-white canvas. Final computed contrast must be rechecked after the authoritative brand palette replaces development values.

### 8. Target sizing — source intent improved

Header navigation already reserves approximately 44px vertical control height. Footer navigation and project-detail link surfaces now reserve explicit minimum vertical space instead of relying only on text line height.

Actual rendered pointer target size remains deferred.

### 9. Reflow/overflow source guards — hardened

A global `overflow-x: hidden` on the document body could conceal an actual layout overflow or off-screen focus target. It has been removed.

Long headings and links now have source-level emergency wrapping through `overflow-wrap: anywhere` so unusually long real copy/URLs are less likely to force horizontal document scrolling.

Intentional decorative clipping remains local to decorative containers such as the large footer wordmark.

Rendered 200%/400% zoom and narrow-viewport reflow still require browser proof.

### 10. Reduced motion — source present

The global stylesheet disables non-essential transitions/animations under `prefers-reduced-motion: reduce` and disables smooth scrolling there.

There is currently no custom drag, carousel, modal, hover-only disclosure, or JavaScript menu.

### 11. Demo content search safety — corrected

While `contentIsDemo` is true, the root layout emits:

```html
<meta name="robots" content="noindex, nofollow" />
```

This is a publication-safety guard, not an accessibility conformance mechanism. It reduces the chance that temporary projects/roles/copy are indexed if development source is exposed.

Remove the guard only when real public content is approved and demo mode is deliberately disabled.

## Still unproven by source review

The following remain explicitly deferred:

```text
keyboard traversal in rendered pages
focus clipping/occlusion
actual browser target size
zoom/reflow at 200%/400%
computed contrast after rendering
screen-reader landmark/heading announcements
actual image alternatives for real media
actual form labels/errors/status behavior
reduced-motion rendered behavior
```

These require the later runtime/browser/assistive-technology acceptance phase.

## Result

No new accessibility dependency or project specialist is required. The current semantic architecture remains based on native HTML, and the material source-level issues found in this pass now have direct corrections/owners.
