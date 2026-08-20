# Frontend Reference & Skill Inventory

Current reference inventory for the Hellocraft Studios Website. This is a **living current-use catalog**, not a historical review archive.

Last audited: **2026-08-20**

## Purpose

Record every supplied development/design reference so useful material is not forgotten, while keeping a clear boundary between what should influence the project now, what has been distilled into a current project skill, what should be revisited later, and what should not be installed or used by default.

This file does **not** make an external website, component library, design system, influencer summary, or Agent Skill authoritative over Hellocraft. Current Foundation, approved design decisions, current source, and matching proof remain authority.

## Uploaded source coverage

- Source archive: `Nitip-20260820T114209Z-1-001.zip`.
- Files inspected: **64 WebP images**.
- Unique images by SHA-256 content: **47**.
- Exact duplicate files: **17**.
- The archive contains screenshots/reference cards, not raw `SKILL.md` packages.
- The five Anthropic skill names shown in the screenshots were independently checked against the current public `anthropics/skills` repository on 2026-08-20.
- The six main web-inspiration resources were checked as live/public resources on 2026-08-20.
- Security concepts were checked against current MDN guidance and RFC 9116; the social-media specialist cards remain screenshot-provided concepts only unless separately sourced later.
- Prior external design-skill lineage from older projects was rechecked where useful during the Hellocraft skill synthesis.

## Classification

| Classification | Meaning |
|---|---|
| `ADOPTED INTO SKILL` | Useful principle has been distilled into Hellocraft's current visual specialist. |
| `REFERENCE — HIGH/MEDIUM` | Useful external research source; consult selectively, do not copy as project policy. |
| `PARTIAL ADOPT` | Keep a bounded principle while rejecting platform-specific or over-broad parts. |
| `DEFER` / `DEFER TO DELIVERY` | Legitimate later topic, but no current owner/implementation should be created yet. |
| `DO NOT INSTALL/USE BY DEFAULT` | Keep recorded, but current project should not adopt it automatically. |
| `OUT OF SCOPE — WEBSITE` | Useful elsewhere, but not part of the current website-development skill architecture. |
| `RECORDED` | Summary/index/CTA card with no additional independent rule. |

## Current synthesis result

### Current project-specific visual specialist

```text
.agents/skills/web-ui-design-development/SKILL.md
```

Normal visual frontend work routes as:

```text
development-brief
+
web-ui-design-development
```

The skill consolidates the useful overlapping principles instead of stacking separate Design DNA, Taste, Genjutsu, motion, accessibility, responsive, design-system, or visual-audit specialists.

### Principles distilled into the skill

1. **Reference-grounded design** — use real references and distinguish `OBSERVED / INFERRED / ADOPTED / REJECTED` instead of accepting model-average `modern/clean/premium` output.
2. **Reference routing by problem** — whole-site references for composition, section libraries for local layout problems, Page Flows for flows, and mature design systems for specific system/state/accessibility questions.
3. **Design-system discipline without design-system copying** — use semantic tokens/roles and coherent systems while keeping Hellocraft's identity independent from Primer, Material, Carbon, Atlassian, or Spectrum.
4. **System / style / effect separation** — retain the useful Design DNA distinction between measurable system, qualitative visual style, and special effects without requiring a giant JSON schema.
5. **Establish vs Align** — preserve the useful Genjutsu/TranslateIT distinction between establishing a visual language and improving an existing one.
6. **Anti-generic judgment** — reject common LLM defaults when they are not grounded in Hellocraft, current content, or approved references.
7. **Purposeful motion** — motion must serve feedback, orientation, continuity, attention, narrative, or brand expression and must respect reduced-motion behavior.
8. **Responsive/accessibility craft** — responsive composition, keyboard/focus visibility, contrast, semantic reading order, and no hover-only critical content are part of visual quality.
9. **Rendered acceptance** — source correctness does not prove visual correctness; relevant browser-rendered evidence is required for visual claims.
10. **Stack neutrality** — the skill does not prescribe React, Astro, Svelte, Tailwind, GSAP, Lottie, Three.js, Aceternity, or any other implementation dependency.

### External Agent Skill decisions

| Candidate | Current decision |
|---|---|
| `web-ui-design-development` | **CURRENT / CREATED** — Hellocraft project-specific visual frontend specialist. |
| Anthropic `theme-factory` | Do not install for the production website. Keep only as a consistency/theme-token reference for non-web artifacts if useful. |
| Anthropic `web-artifacts-builder` | Do not install for production website development. Its Claude-artifact target and fixed React/Tailwind/shadcn/bundled-HTML assumptions are the wrong authority boundary. |
| Anthropic `canvas-design` | Defer. Potentially useful later for static moodboards, key art, or visual-direction experiments. |
| Anthropic `algorithmic-art` | Defer. Revisit only if generative/seeded visuals become an approved website feature. |
| Anthropic `skill-creator` | High-value meta-reference for skill anatomy, descriptions, scope discipline, progressive disclosure, and evaluation; not a project-specific specialist. |

## Complete unique-image inventory

| # | Subject | Type | Current verdict | Audit note |
|---:|---|---|---|---|
| 01 | Cosmos | Design reference library | `REFERENCE — HIGH` | Broad visual discovery, moodboards, image/color/style references. Not page-layout authority. |
| 02 | Hoverstates | Alternative web-design archive | `REFERENCE — HIGH` | Experimental studio/portfolio interaction and unconventional web presentation. Adopt selectively. |
| 03 | Page Flows | UX/user-flow library | `REFERENCE — MEDIUM` | Useful for contact, application, filtering, forms, and other flows. Not primary visual-style source. |
| 04 | Httpster | Whole-site inspiration library | `REFERENCE — HIGH` | Strong for scanning complete agency/studio/portfolio sites. |
| 05 | Unsection | Section-pattern library | `REFERENCE — HIGH` | Useful for bounded section problems; guard against generic card/bento/template copying. |
| 06 | Curated Design | Whole-site + section inspiration library | `REFERENCE — HIGH` | Useful for filtered inspiration; compare multiple examples before adopting patterns. |
| 07 | Explicit-source principle: model averages when it has nothing to copy | Design-process principle | `ADOPTED INTO SKILL` | Reference-grounded design and observed/inferred/adopted/rejected discipline. |
| 08 | X-Content-Type-Options / MIME-sniffing slide | Security practice | `DEFER TO DELIVERY` | Valid baseline concept; exact host/header config comes later. |
| 09 | Six-tabs recap for design references | Index/summary | `RECORDED` | Summary of items 01–06; no separate implementation. |
| 10 | Rebuilding-what-exists resource index | Tool/resource index | `RECORDED` | Indexes Aceternity UI, Glassmorphism, CSS Loaders, unDraw, JSON Crack, DevDocs. |
| 11 | Aceternity UI | React/Tailwind/motion component library | `REFERENCE / DO NOT INSTALL BY DEFAULT` | Inspect only a bounded pattern when justified; distinctive prefab effects can contaminate identity. |
| 12 | Response-header principle: security may live outside page source | Security-process principle | `ADOPT LATER` | Hosting/server/CDN concern, not only page code. |
| 13 | JSON Crack | Data-visualization developer tool | `DEFER` | Revisit if CMS/content/config schemas become complex. |
| 14 | Content-Security-Policy / script sources | Security practice | `DEFER TO DELIVERY` | CSP must reflect actual scripts/embeds/analytics/hosting. |
| 15 | Security-series closing slide | Index/CTA | `RECORDED` | No additional rule. |
| 16 | GitHub Primer spacing/radius reference | Design-system reference | `ADOPTED INTO SKILL` | Systematic spacing/token principle; screenshot values are not Hellocraft defaults. |
| 17 | CSS Loaders | UI utility library | `DEFER` | Only if real loading states exist; prefer simple/native feedback first. |
| 18 | Primer + Material 3 + Carbon + Atlassian + Spectrum summary | Design-system reference index | `ADOPTED INTO SKILL` | Research set for system discipline, states, type, elevation, accessibility. Never merge their visual identities. |
| 19 | unDraw | Illustration library | `DO NOT USE BY DEFAULT` | Generic illustration language is a weak default fit for a Minecraft game studio. |
| 20 | Design-resource closing slide | Index/CTA | `RECORDED` | No additional rule. |
| 21 | IBM Carbon spacing / 2x-grid slide | Design-system reference | `ADOPTED INTO SKILL` | Coherent spacing-system principle, not universal 8px enforcement. |
| 22 | Adobe Spectrum named type-scale slide | Design-system reference | `ADOPTED INTO SKILL` | Semantic type-role principle, not Spectrum's exact scale. |
| 23 | security.txt / vulnerability-reporting slide | Security practice | `DEFER TO DELIVERY` | Revisit when a real monitored security contact/process exists. |
| 24 | Glassmorphism generator | CSS visual-effect utility | `DO NOT USE BY DEFAULT` | Effect reference only; never default `modern` treatment. |
| 25 | DevDocs | Developer documentation aggregator | `REFERENCE — MEDIUM` | Productivity reference; current official framework/library docs remain authority for changing facts. |
| 26 | Design-system principle: you never gave it a reference | Design-process principle | `ADOPTED INTO SKILL` | Reinforces reference-grounded design and multi-reference comparison. |
| 27 | Material 3 hover/focus/pressed state-layer slide | Design-system reference | `ADOPTED INTO SKILL` | Interaction-state discipline; exact percentages/tokens are not universal. |
| 28 | Anthropic theme-factory | Official Agent Skill | `DO NOT INSTALL FOR WEBSITE` | Preset artifact themes conflict with custom Hellocraft art direction as a default. |
| 29 | Five-line security summary | Security checklist/index | `DEFER TO DELIVERY` | Good reminder set but technically oversimplified across hosts. |
| 30 | Anthropic skills installation + description-trigger advice | Skill-operations/meta guidance | `PARTIAL ADOPT` | Precise descriptions/triggers retained; Claude Code installation instructions are not repo policy. |
| 31 | Five Anthropic creative skills summary | Skill index | `RECORDED` | Indexes canvas-design, theme-factory, web-artifacts-builder, algorithmic-art, skill-creator. |
| 32 | Security-series intro | Index/summary | `RECORDED` | No independent rule. |
| 33 | Anthropic web-artifacts-builder | Official Agent Skill | `DO NOT INSTALL FOR PRODUCTION WEBSITE` | Claude HTML artifact workflow is not production-site architecture. |
| 34 | Anthropic canvas-design | Official Agent Skill | `DEFER / REFERENCE` | Potential moodboard/key-art/static concept helper later. |
| 35 | Anthropic skill-creator | Official Agent Skill / meta-skill | `REFERENCE — HIGH` | Skill anatomy, scope, progressive disclosure, validation/eval principles. |
| 36 | Atlassian elevation/shadow slide | Design-system reference | `ADOPTED INTO SKILL` | Systematic elevation principle; simplified slide is not implementation spec. |
| 37 | Anthropic algorithmic-art | Official Agent Skill | `DEFER` | Only if generative/seeded visuals become a real website feature. |
| 38 | Five Anthropic skills closing slide | Index/summary | `RECORDED` | No additional rule. |
| 39 | The Analyst | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Preserve for future marketing/SMM system. |
| 40 | The Hook Writer | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Future marketing-copy workflow, not frontend. |
| 41 | Seven AI Specialists / one workspace system | Social-media operating model | `OUT OF SCOPE — WEBSITE` | Separate content-operations concept. |
| 42 | The Designer | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Carousel/thumbnail/reel/brand assets, distinct from web UI. |
| 43 | The Manager | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Content operations/planning/automation. |
| 44 | The Publisher | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Social publishing/scheduling. |
| 45 | The Scriptwriter | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Video/carousel/caption scripting. |
| 46 | The Researcher | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Keep website research task-scoped rather than permanent specialist. |
| 47 | Six high-end web-design sites recap | Reference index | `RECORDED` | Fast entrypoint to items 01–06. |

## Exact duplicate coverage

The following uploaded files are byte-for-byte duplicates of a canonical image above. They are preserved in the source archive but intentionally not treated as separate conceptual inputs.

| Canonical image # | Canonical file | Duplicate file |
|---:|---|---|
| 07 | `309978d23c6631d19348ba455b09c953.webp` | `309978d23c6631d19348ba455b09c953 (1).webp` |
| 10 | `36893963724fe882485120b7c9d467cc.webp` | `36893963724fe882485120b7c9d467cc (1).webp` |
| 11 | `e941cbf47321eeab6cfaed7f76829fc4.webp` | `e941cbf47321eeab6cfaed7f76829fc4 (1).webp` |
| 13 | `4aaf49edd064a7b4e4cc3345b8c9fc08.webp` | `4aaf49edd064a7b4e4cc3345b8c9fc08 (1).webp` |
| 15 | `0abfb913bcceb9b2dd0c28638ad48995.webp` | `0abfb913bcceb9b2dd0c28638ad48995 (1).webp` |
| 16 | `520ff8cbba7e77cf4a9fb7340fa6207b.webp` | `520ff8cbba7e77cf4a9fb7340fa6207b (1).webp` |
| 17 | `cd7d9c3bea1e61ad65928571650acc58 (1).webp` | `cd7d9c3bea1e61ad65928571650acc58.webp` |
| 18 | `61a24b6bbbb072c09291bacfd322dba6.webp` | `61a24b6bbbb072c09291bacfd322dba6 (1).webp` |
| 19 | `e04351bba01dc3d1ade517d82c208f30.webp` | `e04351bba01dc3d1ade517d82c208f30 (1).webp` |
| 20 | `4645f3faae3f1e41fee91f9e5dd761e3.webp` | `4645f3faae3f1e41fee91f9e5dd761e3 (1).webp` |
| 21 | `97c2cdbab08ef124f5e105ba361a3d78.webp` | `97c2cdbab08ef124f5e105ba361a3d78 (1).webp` |
| 22 | `fd6f13cca3af5e5781111c65ffd04f99 (1).webp` | `fd6f13cca3af5e5781111c65ffd04f99.webp` |
| 24 | `f75654d0f2e1402ef99fb6ad605ea282.webp` | `f75654d0f2e1402ef99fb6ad605ea282 (1).webp` |
| 25 | `c011a3811d8022bf5a3ec0d7f3b326ff.webp` | `c011a3811d8022bf5a3ec0d7f3b326ff (1).webp` |
| 26 | `8c319228a2cfacfc90b7858edcb693a3.webp` | `8c319228a2cfacfc90b7858edcb693a3 (1).webp` |
| 27 | `31a1111faa98266eff0fa33928b32d69.webp` | `31a1111faa98266eff0fa33928b32d69 (1).webp` |
| 36 | `a6cbe758c49fda9dd696824b656a1b38 (1).webp` | `a6cbe758c49fda9dd696824b656a1b38.webp` |

## Prior external references from older project skill lineage

These are not contained in the ZIP but remain part of the curated source lineage.

| Reference | Distilled Hellocraft treatment |
|---|---|
| `zanwei/design-dna` | **DISTILLED** — measurable design system vs qualitative style vs special-effects separation; rejected mandatory giant JSON/every-field population. |
| `AThevon/genjutsu` | **DISTILLED** — establish-vs-align, visual-thesis discipline, show/validate rather than describe only, native-stack preference; rejected mandatory MASTER file and broad ceremony. |
| `Leonxlnx/taste-skill` | **DISTILLED** — audience/brief-aware anti-generic judgment and explicit resistance to common LLM frontend clichés; rejected its React/Tailwind/font/icon/opinionated defaults. |
| `LottieFiles/motion-design-skill` | **DISTILLED** — purposeful motion, emotional intent, easing/timing/choreography reasoning; rejected universal motion personality/timing presets as Hellocraft policy. |
| TranslateIT `desktop-ui-design-development` | **DISTILLED** — project-specific visual ownership, stack neutrality, accessibility, ALIGN/ESTABLISH thinking, source-vs-rendered proof. |
| Anthropic `skill-creator` | **DISTILLED AS META** — precise triggering, scope discipline, concise reusable procedure, and eval/iteration guidance. |

## Technical audit notes

### Inspiration libraries

- **Cosmos** is strongest for broad visual discovery/moodboarding rather than page architecture.
- **Hoverstates** is especially relevant to experimental studio/portfolio interaction.
- **Httpster** is useful for quickly scanning complete real websites.
- **Unsection** and **Curated Design** are useful when the problem is a specific page/section pattern; using them blindly risks template-like repetition.
- **Page Flows** is strongest when the problem is a flow, not when the problem is only aesthetic.

### Public design systems

Influencer one-line summaries remain memory aids, not implementation specifications:

- Primer screenshot values are not universal Hellocraft spacing/radius rules.
- Material state-layer percentages/tokens vary by system/component and should be checked against current official guidance when needed.
- Carbon's 2x Grid supports systematic spacing but does not mean every Hellocraft measurement must be 8px.
- Atlassian elevation involves coordinated surface/elevation tokens; one-line shadow rules are simplified.
- Spectrum's named type roles are a useful semantic principle, not a requirement to copy its exact scale.

### Security cards

The security series identifies real concerns but belongs to the later delivery boundary:

- HSTS requires a correct HTTPS deployment and wider options such as `includeSubDomains`/preload have broader consequences.
- `X-Content-Type-Options: nosniff` is useful when content types are served correctly.
- CSP `frame-ancestors` and `script-src` must reflect the actual application/embedding/script model.
- RFC 9116 `security.txt` belongs under `/.well-known/security.txt`, requires `Contact` and `Expires`, and is useful only with a monitored reporting process.
- Exact header ownership depends on the eventual host/CDN/server platform.

### Social-media specialist cards

The seven-role system remains recorded intact:

```text
Researcher
Hook Writer
Scriptwriter
Designer
Analyst
Manager
Publisher
```

This is a content/SMM operating model, not a website-development skill architecture. Keep it available for a future marketing/content workflow.

## Revisit triggers

- Revisit `canvas-design` when visual direction needs static concept boards/key art.
- Revisit `algorithmic-art` if generative Minecraft-inspired web visuals become an approved feature.
- Revisit Aceternity or another component library only after the framework and visual language are approved and one concrete interaction warrants it.
- Revisit security items once hosting, forms, analytics, embeds, third-party scripts, and deployment are known.
- Revisit social-media roles only if Hellocraft defines a separate ongoing marketing/content production system.
- Revisit a dedicated Design DNA owner only if reference reconciliation becomes large/repetitive enough that the current visual specialist cannot represent it cleanly.
- Revisit a separate motion specialist only if motion becomes an independent recurring acceptance boundary rather than part of normal visual frontend craft.

## Current stop boundary

Do **not** install the external skills or libraries from this inventory by default. Their useful overlapping principles have already been distilled into `web-ui-design-development` where appropriate.

No second project-specific frontend specialist is currently justified.

The next independent development discussion is the smallest suitable frontend stack/rendering model and quality/tooling baseline; that decision remains outside the visual specialist.
