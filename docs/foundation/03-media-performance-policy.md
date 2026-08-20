# Asset, Media & Performance Policy

This file owns the durable asset/media delivery contract for the Hellocraft Studios Website.

It exists because the website is expected to be media-heavy while **strong visual quality + lightweight delivery** is an approved product constraint. Product meaning remains owned by `01-project-overview.md` and `02-product-requirements.md`; this file owns the technical policy for images, video, fonts, asset placement, and media performance proof.

## Status

```text
MEDIA_POLICY_APPROVED
ENHANCED_IMG_LOCAL_RASTER_PIPELINE_APPROVED
VIDEO_POSTER_FIRST_POLICY_APPROVED
SELF_HOSTED_WOFF2_FONT_POLICY_APPROVED
PERFORMANCE_MEASUREMENT_POLICY_APPROVED
```

Exact asset filenames, project media inventory, crop choices, font families, and performance byte budgets are **not** invented here. They are fixed only when authoritative media/design evidence exists.

## Core principle

```text
best available source asset
→ smallest suitable delivery path
→ reserve layout space
→ load only when useful
→ measure built/browser output
```

Do not optimize by making the work look visibly poor. Do not preserve visual quality by shipping every source asset at full resolution.

## Asset ownership

### Imported / build-processed assets

Use source-imported assets for files that are referenced by application source and benefit from Vite hashing, caching, or build-time processing.

Default owner:

```text
src/lib/assets/**
```

Suitable examples:

- local raster images used by pages/components;
- authoritative logo/brand source files used by the application;
- local fonts referenced by CSS/source;
- modest local video/audio files when bundling them with the site is genuinely appropriate.

Do not create a large category taxonomy under `assets/` before real content exists. Add folders only for actual ownership, such as `brand/` or later project-slug ownership once the authoritative project inventory exists.

### `static/` passthrough assets

Use `static/` only when a file must be served as-is at a stable public URL or should intentionally bypass the source-processing pipeline.

Typical examples may include:

- favicon/site-icon files;
- files referenced by external systems that require a predictable URL;
- a social/OG asset when a stable public path is operationally simpler;
- downloadable public files that must keep an exact path.

`static/` is **not** the default dumping ground for portfolio images.

### Remote/CDN media

No image CDN or media CDN is required initially.

If future CMS, remote project media, streaming video, or operational scale creates a real remote-media responsibility, define that provider then. Do not copy remote media locally merely to pretend the current build pipeline owns it.

## Local raster image pipeline

`@sveltejs/enhanced-img` is approved as a **build-time development dependency** for local raster imagery that benefits from responsive delivery.

Reason it is earned:

- Hellocraft is expected to present substantial visual project evidence;
- SvelteKit's official image guidance identifies AVIF/WebP generation, responsive sizes, effective caching, intrinsic dimensions, and LCP prioritization as important image-performance concerns;
- the plugin performs local build-time transformation without adding a client runtime library.

Use it only for local files available at build time.

Expected scaffold integration:

```text
Vite plugins
→ enhancedImages()
→ sveltekit()
```

The enhanced-images plugin must precede the SvelteKit plugin according to current official setup guidance. Exact package versions are owned by the scaffold and `bun.lock`.

Do **not** use `@sveltejs/enhanced-img` for:

- remote/CMS URLs that are unavailable at build time;
- SVG/vector assets;
- files that intentionally require an exact untouched public path;
- assets where build-time transformation provides no material value.

## Image source and output rules

### Source quality

Keep the best practical source image and let the delivery pipeline create smaller outputs.

For a raster image expected to appear large, provide enough source resolution for the largest intended display, including high-DPI use. Do not upscale low-resolution source assets simply to satisfy a nominal target.

Do not commit a hand-maintained matrix of `image-small.webp`, `image-medium.webp`, `image-large.avif`, etc. when the approved build pipeline can generate those delivery variants.

### Formats

Use:

```text
SVG
→ vector logos/icons/illustration when the asset is truly vector

local raster source
→ high-quality JPEG / PNG / WebP / other supported source as appropriate
→ enhanced image pipeline generates efficient browser delivery variants

video-like animation
→ video, not a large animated GIF by default
```

Do not rasterize a vector Hellocraft logo merely for convenience. The supplied JPEG is reference evidence; production brand assets should use an authoritative vector/source file when available.

### Responsive sizing

For large or fluid images, provide an accurate `sizes` contract so the browser can select an appropriate generated width.

Do not generate arbitrary width sets merely because the tool allows them. Width variants should correspond to real layout behavior.

Use `<enhanced:img>` for local raster page media by default when responsive optimization is useful. Use ordinary `<img>` when the image is remote or when build-time processing is not the correct owner.

### Layout stability

Every meaningful image/video region must reserve its display space before the media finishes loading.

Use one or more of:

- intrinsic width/height;
- generated intrinsic dimensions from the approved local image pipeline;
- a deliberate CSS `aspect-ratio` container.

Do not accept a layout that visibly jumps because media dimensions were unknown.

## Loading priority

### LCP / critical image

A real LCP/hero image must not be lazy-loaded.

When an image is confirmed as the primary LCP candidate, use the appropriate browser priority signal such as:

```text
fetchpriority="high"
```

Do not mark every above-the-fold image as high priority. Priority is scarce and must reflect real page hierarchy.

### Non-critical media

Below-the-fold images should use native lazy loading when appropriate:

```text
loading="lazy"
```

Do not lazy-load content merely because it is an image if doing so harms the initial experience or causes a visible late pop-in in the first viewport.

Do not add a custom JavaScript lazy-loader while native browser behavior is sufficient.

## Crop, aspect ratio, and focal point

Project media is evidence, not generic stock imagery. Do not crop away important Minecraft build/gameplay details merely to force every card into the same shape.

Rules:

- preserve natural aspect ratio when consistency is not required;
- use a fixed display ratio only when the actual component composition needs it;
- use `object-fit: cover` only when cropping is acceptable;
- if a crop needs a focal point, store/define that focal point with the real media/content responsibility later rather than guessing globally;
- keep an uncropped/original source available so a presentation crop is reversible;
- project-detail media may use a different/natural ratio from listing thumbnails.

Final portfolio ratios are a visual/content decision and are not locked before real portfolio assets exist.

## Alt text and non-text content

Accessibility requirements from `web-accessibility-validation` remain mandatory:

- meaningful images receive accurate useful alternatives;
- decorative imagery uses an empty alternative when appropriate;
- do not invent details not actually visible/known;
- captions/transcripts are added when the real media responsibility requires them.

Optimization does not override accessibility semantics.

## Video policy

Video is treated as a high-cost asset.

### Default behavior

For normal portfolio/editorial video:

```text
poster image
+ explicit user play action
+ preload="none" by default when playback is optional/below fold
```

Use `preload="metadata"` only when likely playback makes the small early fetch worthwhile.

Do not use `preload="auto"` for large optional videos by default.

### Autoplay

Autoplay video is **not** the default Hellocraft visual technique.

If a specific approved visual concept genuinely requires autoplay:

- it must be muted/inaudible;
- use `playsinline` where required for inline mobile playback;
- remove the audio track from an always-muted export rather than shipping unused audio bytes;
- provide a poster/static fallback;
- respect reduced-motion preferences and preserve the information without the motion;
- looping must have a real visual purpose and remain compatible with accessibility requirements;
- performance cost must be measured in the actual page.

Do not autoplay audible media.

### Large/recurring video

If long-form/high-resolution video becomes common, reconsider streaming/CDN delivery instead of expanding the application repository into a video warehouse.

Do not choose a video platform/CDN before that need exists.

## Font policy

Typography must support the brand without becoming a major loading penalty.

Initial rules:

```text
primary webfont families = 1 by default
optional display family  = only if final art direction earns it
maximum normal target    = 2 families
runtime font format      = WOFF2
runtime third-party font CDN = none by default
```

### Hosting

Self-host fonts when the license allows it. Do not depend on a runtime Google Fonts/other third-party font request merely for convenience.

### Weights and files

Ship only the weights/styles actually used.

A variable font is not automatically better; use it only when its real byte/feature tradeoff is better than the static files needed by the design.

Subset fonts when practical and permitted, but do not create a fragile custom font pipeline before the selected font family and glyph requirements are known.

### Loading

Use `font-display: swap` as the default unless measured behavior shows another strategy is materially better.

Preload only a genuinely critical above-the-fold WOFF2 file when measurement proves the preload is useful. Do not preload every family/weight.

Choose fallback fonts/metrics to minimize visible reflow. Font loading must be checked in the real browser rather than assumed from CSS.

The Hellocraft wordmark should remain an authoritative logo asset; do not approximate it with a webfont.

## Icons and small graphics

Prefer:

- authored SVG for branded/vector icons;
- simple CSS shapes only when they are truly simpler;
- a small explicit icon set if later earned.

Do not install a huge icon package for a handful of symbols. Avoid shipping thousands of unused icon components.

## Performance measurement procedure

Media performance claims require a built/rendered target.

For the first scaffold/dry-run and later representative visual prototypes:

```text
bun run validate
→ build a production-like target
→ run/serve the built target locally using the scaffold's normal preview path
→ Chrome DevTools validation
```

Inspect at minimum:

- console errors relevant to the page;
- failed/duplicated/unexpected network requests;
- JavaScript and CSS transfer/work;
- font request count and timing;
- LCP image/media request priority and size;
- below-the-fold media not loading prematurely without reason;
- layout shift caused by media/font loading;
- long tasks/interaction delay when interaction exists.

Use current `good` Core Web Vitals guidance as an external experience baseline:

```text
LCP ≤ 2.5 s
INP ≤ 200 ms
CLS ≤ 0.1
```

These thresholds are not permission to ignore a clearly wasteful network payload merely because a local lab run happens to pass.

Local lab results and future field/CrUX data are different evidence. Do not claim real-user performance from localhost traces.

## Performance budget calibration

Do **not** invent permanent KB/MB limits before a representative Hellocraft visual prototype exists.

After the first representative visual direction has real project-like media, measure and then establish route-appropriate budgets for categories such as:

- initial client JavaScript;
- CSS;
- font bytes/requests;
- LCP/hero image transfer;
- above-the-fold supporting images;
- initial video transfer (normally zero when video is optional);
- third-party requests.

Budgets should prevent regression while preserving the approved visual quality. They are not vanity targets detached from actual content.

## Third-party media boundary

Initial media delivery should not require an external image CDN, video platform, font CDN, analytics script, or image-service SDK.

Any third-party media/provider request must have a current responsibility, measurable benefit, privacy/security review where relevant, and production acceptance path.

## Scaffold requirements created by this policy

When the minimal SvelteKit scaffold is created:

- add `@sveltejs/enhanced-img` as a development/build dependency;
- wire `enhancedImages()` before `sveltekit()` in the current Vite configuration using current official guidance;
- create only the asset directories actually needed by the scaffold/dry-run;
- do not fabricate project folders/media taxonomy;
- include one representative local raster image in the non-product dry-run so responsive/intrinsic/lazy-loading behavior can be proven;
- keep video optional and out of the initial dry-run unless a video-specific implementation is actually being tested;
- use the approved `bun run validate` gate before browser performance inspection.

## Acceptance

This policy is satisfied for a bounded implementation only when the media behavior it claims is proven at the matching level.

Examples:

```text
local responsive raster
→ build output + picture/srcset/sizes inspection

layout stability
→ rendered browser inspection

LCP priority
→ Chrome network/performance evidence

below-fold lazy loading
→ network evidence before/after viewport approach

font loading
→ network + rendered/reflow inspection

video deferral
→ network evidence showing video bytes are not fetched prematurely
```

Source configuration alone is not performance proof.

## External technical basis

This policy was curated against current primary guidance including:

- SvelteKit image best practices and `@sveltejs/enhanced-img` behavior;
- browser-native image loading/priority behavior;
- current web video `poster`/`preload`/autoplay semantics;
- WOFF2/font loading guidance;
- current Core Web Vitals thresholds.

Version-sensitive implementation details must still pass `context7-documentation-validation` or current official documentation at implementation time, followed by project build/browser proof.
