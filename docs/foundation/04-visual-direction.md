# Visual Direction

Canonical visual-direction baseline for the Hellocraft Studios Website.

This file owns durable art-direction rules that can be decided without inventing page architecture or portfolio content. `02-product-requirements.md` owns product requirements, `03-media-performance-policy.md` owns media delivery/performance, and `web-ui-design-development` owns task-level visual execution and later rendered acceptance.

## Status

```text
VISUAL_DIRECTION_BASELINE_ESTABLISHED
PLAYFUL_EDITORIAL_GAME_STUDIO_ADOPTED
LOGO_LED_BRAND_LANGUAGE_ADOPTED
MEDIA_LED_COMPOSITION_ADOPTED
EXACT_VISUAL_VALUES_NOT_FINAL
RENDERED_VISUAL_ACCEPTANCE_PENDING
```

The baseline is strong enough to guide later UI implementation. It is **not** a claim that a final rendered design has been approved. Exact font families, production brand colors, spacing values, radii, project crop ratios, and page compositions still require the matching real assets/content and later rendered review.

## Authority

Visual decisions use this precedence:

1. explicit current project-owner direction;
2. approved Hellocraft logo/brand assets;
3. current Foundation requirements;
4. real Hellocraft project media/content when later supplied;
5. `docs/knowledge/frontend-reference-inventory.md` and the routed visual references;
6. external inspiration only for a bounded problem;
7. generic model taste last.

References are evidence, not templates.

## Reference synthesis

### OBSERVED

From the supplied Hellocraft logo:

```text
palette      → bright cyan + white + charcoal/black
symbol       → rounded star containing a hand motif + small star accents
wordmark     → chunky, irregular, friendly uppercase lettering
personality  → playful, energetic, approachable, game-oriented
```

The current reference inventory also supports using whole-site/editorial inspiration for composition, mature design systems for state/system discipline, and experimental references only when a concrete interaction problem earns them.

### INFERRED

The logo can support a professional studio website without becoming corporate-tech or childish if the interface remains structurally disciplined and lets the work/media carry most of the visual richness.

The strongest contrast is therefore:

```text
expressive brand mark
+
controlled editorial layout
+
large real project media
```

rather than making every UI element equally playful.

### ADOPTED

The working visual thesis is:

> **Playful editorial game studio** — bold, friendly, graphic, and recognizably Hellocraft, while remaining structured and credible enough for publishers, platforms, brands, cultural/event clients, collaborators, and talent.

Adopt:

- strong hierarchy rather than decorative density;
- editorial pacing and selective asymmetry;
- large media as proof/evidence;
- a small cyan/neutral brand language;
- bold but readable typography;
- mostly clean/flat surfaces with selective playful accents;
- quick purposeful motion rather than ambient spectacle;
- native Svelte/CSS/browser behavior before visual dependencies.

### REJECTED AS DEFAULT

Do not default to:

- Minecraft inventory UI, grass/dirt textures, voxel borders, or pixel fonts as site chrome;
- neon/cyberpunk gaming UI;
- generic purple-blue gradients or glow;
- glassmorphism as the main material language;
- rounded cards/pills everywhere;
- bento grids without a content reason;
- star motifs repeated on every card/button/section;
- WebGL, particles, custom cursor effects, or heavy parallax merely to look premium;
- a generic centered hero with vague slogan + two buttons + three equal cards;
- illustration libraries whose visual language competes with real Minecraft work.

Minecraft identity should come primarily from Hellocraft's real work and media, not from turning the entire interface into Minecraft UI.

## Hierarchy

The interface should make the visitor understand the current surface before noticing decoration.

Default priority:

```text
primary message / primary work
→ supporting evidence/media
→ concise explanatory copy
→ meaningful action
→ brand decoration
```

Page-specific hierarchy still follows later approved content. This file does not invent homepage section order or navigation.

## Composition

Use a media-led editorial system rather than a repeated template system.

Preferred characteristics:

- strong alignment with intentional breaks rather than random placement;
- variable section rhythm where content relationships genuinely differ;
- generous breathing room around important media or statements;
- wide/large project imagery when it is the strongest evidence;
- asymmetry when it improves hierarchy, not simply to appear experimental;
- dense layouts only where comparison/browsing actually benefits from density;
- clean reading order independent of visual rearrangement.

Avoid mechanically repeating:

```text
heading
→ paragraph
→ three equal cards
```

throughout the site.

Responsive composition must be allowed to simplify materially on narrow screens instead of squeezing desktop asymmetry into a smaller viewport.

## Typography

The Hellocraft wordmark is already expressive. Website typography should support it rather than imitate or fight it.

Use semantic roles such as:

```text
display
heading
body
label / metadata
navigation / action
```

Direction:

- display type may be bold and slightly friendly, but must survive real copy lengths;
- body type must remain neutral/clear enough for case-study and company reading;
- one primary family is the default;
- a second display family is allowed only if final art direction proves it adds enough value to justify loading/maintenance cost;
- do not approximate the Hellocraft wordmark using a normal webfont;
- do not default to cartoon, pixel, monospace, serif/sans mixing, or ultra-condensed type simply because the studio is creative.

Exact production font families/weights remain unresolved until licensing, WOFF2 size, rendering, and brand fit are reviewed.

## Color

Use a deliberately small brand system.

Semantic roles to establish later in CSS Custom Properties:

```text
brand / accent primary
ink / text primary
text secondary / muted
paper / surface primary
surface secondary
border / divider
accent-on-brand / inverse text
focus / interaction emphasis
```

Direction:

- cyan is the primary Hellocraft accent;
- white/light neutral and charcoal/near-black form the main structural field;
- project imagery is allowed to provide most secondary color richness;
- additional UI accent colors require a real semantic or brand reason;
- gradients are optional effects, not core identity.

Do not permanently derive exact production colors from the compressed raster logo supplied in chat. Use authoritative vector/source brand assets when available.

## Shape, surface, and elevation

Use simple surfaces so the logo and project media retain visual authority.

Direction:

```text
large clean surfaces
+ mostly rectangular media framing
+ restrained radius
+ selective branded/organic accent
```

Rules:

- radius communicates grouping/interaction; it is not decoration to apply everywhere;
- border/elevation should communicate separation or interaction state;
- avoid layered glow + blur + gradient + noise + shadow combinations;
- the star/hand symbol may appear as a signature/accent, but repetition must remain sparse;
- do not force every media frame to mimic the rounded logo geometry.

Exact radius/elevation values are established later from rendered visual work, not guessed here.

## Media presentation

Real Hellocraft work should become the strongest visual evidence once authoritative media exists.

- allow screenshots/artwork to carry substantial visual weight;
- do not overlay busy UI treatments over already detailed Minecraft imagery;
- preserve important build/gameplay focal points;
- allow listing thumbnails and project-detail media to use different ratios when the content benefits;
- captions/metadata should clarify media rather than compete with it;
- client/partner logos remain legible and undistorted;
- do not fabricate concept Minecraft imagery and present it as real portfolio evidence.

Technical delivery follows `03-media-performance-policy.md`.

## Interaction and motion character

Motion should feel:

```text
quick
responsive
playful
controlled
```

Prefer motion for:

- feedback;
- orientation;
- state transitions;
- small brand expression;
- deliberate media reveal when it improves comprehension.

Examples that can fit the brand later:

- subtle star rotation/shift on a branded hover;
- quick underline or directional link response;
- restrained media reveal;
- short page/section continuity transitions.

Do not make every element animate on scroll/hover. Avoid constant floating/ambient motion. Respect `prefers-reduced-motion`, and preserve all information without motion.

Native CSS/Svelte/browser motion remains the first implementation path; a motion library must be earned by a concrete recurring need.

## Responsive direction

Responsive behavior is compositional, not only breakpoint-based.

- preserve the hierarchy when layouts stack;
- simplify asymmetry on narrow screens when needed;
- keep readable line lengths and meaningful media crops;
- use fluid type/spacing where it improves continuity;
- do not rely on hover for important information;
- ensure visual reordering does not break semantic/keyboard reading order;
- avoid horizontal scrolling or clipped actions unless the pattern explicitly requires horizontal browsing and remains usable.

Exact breakpoints are owned by real component/layout behavior later, not a universal device table.

## Accessibility direction

Visual quality includes accessibility.

- focus-visible states must remain obvious;
- important states cannot rely on color alone;
- cyan usage must still provide sufficient contrast in its actual text/surface role;
- interactive targets and labels must remain understandable;
- decorative brand graphics must not pollute accessible names;
- motion must have reduced-motion behavior;
- meaningful project imagery requires appropriate alternatives/captions according to its role.

Detailed validation remains owned by `web-accessibility-validation`.

## Token discipline

The approved implementation mechanism remains native CSS + CSS Custom Properties.

Only create durable tokens for repeated semantic roles. Candidate role groups are:

```text
color
→ surfaces / text / accent / border / focus

type
→ display / heading / body / metadata

layout
→ page gutter / content measure / section rhythm

shape
→ control/media radius only when repeated

motion
→ a small set of recurring speed/easing roles only when repetition exists
```

Do not create a large numeric token scale before real implementation proves it useful.

## Brand asset requirements

Before final brand implementation, prefer authoritative source assets for:

- full Hellocraft logo;
- mark/symbol-only variant if officially available;
- light/dark or monochrome variants if officially available;
- SVG/vector source where available;
- approved clear-space/minimum-size rules if Hellocraft has them.

Do not invent official variants by redrawing or recoloring the raster reference unless the project owner explicitly authorizes a derived web variant.

## Proof boundary

This document can establish art-direction intent and prevent design drift. It cannot prove that a rendered page looks correct.

Later claims such as:

- final visual hierarchy;
- font fit;
- actual cyan contrast;
- media crop quality;
- responsive composition;
- motion feel;
- overall brand coherence;

require rendered browser inspection and project-owner visual acceptance.

The current project owner has explicitly deferred local/runtime testing. That does not invalidate this non-runtime visual baseline; it only means rendered acceptance remains pending until runtime work is re-authorized.

## Open visual decisions

Still unresolved:

- authoritative production logo/vector files;
- exact production brand color values;
- exact font family/families and weights;
- exact type scale;
- exact spacing/radius/elevation values;
- final page/grid compositions;
- portfolio media ratios/focal points based on real assets;
- final navigation and shell composition after information architecture is approved;
- any motion dependency beyond native capabilities.

Do not resolve those by guessing merely to make the design system appear complete.
