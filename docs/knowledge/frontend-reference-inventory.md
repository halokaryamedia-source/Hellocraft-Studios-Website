# Frontend Reference & Skill Inventory

Current reference inventory for the Hellocraft Studios Website. This is a **living current-use catalog**, not a historical review archive.

Last audited: **2026-08-20**

## Purpose

Record every supplied development/design reference so useful material is not forgotten, while keeping a clear boundary between what should influence the project now, what should be adapted later, and what should not be installed or used by default.

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

## Classification

| Classification | Meaning |
|---|---|
| `ADOPT NOW` | Principle should shape current Hellocraft design/development procedure. |
| `REFERENCE — HIGH/MEDIUM` | Useful external research source; consult selectively, do not copy as project policy. |
| `PARTIAL ADOPT` | Keep a bounded principle while rejecting platform-specific or over-broad parts. |
| `DEFER` / `DEFER TO DELIVERY` | Legitimate later topic, but no current owner/implementation should be created yet. |
| `DO NOT INSTALL/USE BY DEFAULT` | Keep recorded, but current project should not adopt it automatically. |
| `OUT OF SCOPE — WEBSITE` | Useful elsewhere, but not part of the current website-development skill architecture. |
| `RECORDED` | Summary/index/CTA card with no additional independent rule. |

## Current curation result

### Principles worth carrying into Hellocraft now

1. **Reference-grounded design** — do not ask an agent for vague `modern`, `clean`, or `premium` output and accept the model average. Use explicit real references, then distinguish what is observed from what Hellocraft intentionally adopts.
2. **Use references by problem type** — whole-site references for overall composition, section libraries for a weak section, user-flow libraries for interaction/process problems, and official design systems for specific spacing/state/type/accessibility questions.
3. **Design-system discipline without design-system copying** — Primer, Material 3, Carbon, Atlassian, and Spectrum are evidence for how mature systems solve recurring problems; none defines Hellocraft's visual identity.
4. **Skill authoring discipline** — Anthropic `skill-creator` is a strong meta-reference for clear trigger descriptions, progressive disclosure, validation, and evals. It is not a Hellocraft project specialist.
5. **Security belongs to the eventual delivery contract** — HSTS/HTTPS, MIME sniffing controls, framing policy, CSP, and optional `security.txt` are real concerns, but exact configuration depends on the final hosting/runtime/integrations.
6. **Avoid prefab-style contamination** — Aceternity UI, glassmorphism generators, theme presets, generic illustration libraries, and prebuilt animation patterns may solve bounded problems later, but must not become the default aesthetic source.

### Agent Skill decision from this upload

| Candidate | Current decision |
|---|---|
| `theme-factory` | Do not install for the production website. Keep only as a consistency/theme-token reference for non-web artifacts if useful. |
| `web-artifacts-builder` | Do not install for production website development. Its Claude-artifact target and fixed React/Tailwind/shadcn/bundled-HTML assumptions are the wrong authority boundary. |
| `canvas-design` | Defer. Potentially useful later for static moodboards, key art, or visual-direction experiments. |
| `algorithmic-art` | Defer. Revisit only if generative/seeded visuals become an approved website feature. |
| `skill-creator` | Keep as high-value meta-reference when creating/refining Hellocraft skills; do not add it as a project-specific specialist. |

### Implication for Hellocraft's own skill set

The upload strengthens the case for **one** future project-specific visual specialist, not a stack of external skills:

```text
development-brief
+
web-ui-design-development   # project-specific, to be designed for Hellocraft
```

That skill should absorb the useful principles: reference analysis, visual hierarchy, layout/typography/spacing/state discipline, anti-generic judgment, responsive craft, motion only when purposeful, accessibility, and rendered acceptance. It should **not** inherit a framework, component library, preset theme, or visual style before those are separately approved.

## Complete unique-image inventory

| # | Subject | Type | Current verdict | Audit note |
|---:|---|---|---|---|
| 01 | Cosmos | Design reference library | `REFERENCE — HIGH` | Use for broad visual discovery, moodboards, image/color/style references. Not a page-layout authority. |
| 02 | Hoverstates | Alternative web-design archive | `REFERENCE — HIGH` | Strong source for experimental studio/portfolio interaction and unconventional web presentation. Adopt patterns selectively, not site identity. |
| 03 | Page Flows | UX/user-flow library | `REFERENCE — MEDIUM` | Useful when designing contact, application, filtering, forms, and other flows. Less useful as primary visual-style source. |
| 04 | Httpster | Whole-site inspiration library | `REFERENCE — HIGH` | Useful for scanning real agency/studio/portfolio websites quickly. |
| 05 | Unsection | Section-pattern library | `REFERENCE — HIGH` | Useful when one section is weak. Guard against copying generic card/bento/template patterns by default. |
| 06 | Curated Design | Whole-site + section inspiration library | `REFERENCE — HIGH` | Useful for page-type and industry-filtered inspiration; compare multiple examples before adopting patterns. |
| 07 | Explicit-source principle: 'a model averages when it has nothing to copy' | Design-process principle | `ADOPT NOW` | Use explicit references and published examples instead of vague prompts like 'modern/clean'. Separate observed pattern from adopted Hellocraft rule. |
| 08 | X-Content-Type-Options / MIME-sniffing slide | Security practice | `DEFER TO DELIVERY` | Valid baseline concept; exact hosting/header config comes later. Do not treat screenshot syntax as final production policy. |
| 09 | Six-tabs recap for design references | Index/summary | `RECORDED` | Summary of Cosmos, Hoverstates, Page Flows, Httpster, Unsection, Curated Design; no separate implementation. |
| 10 | 'Rebuilding what already exists' resource index | Tool/resource index | `RECORDED` | Indexes Aceternity UI, Glassmorphism generator, CSS Loaders, unDraw, JSON Crack, DevDocs. Each item audited separately. |
| 11 | Aceternity UI | React/Tailwind/motion component library | `REFERENCE / DO NOT INSTALL BY DEFAULT` | Potential single-pattern reference later. Do not make it a foundation dependency: distinctive prebuilt effects can contaminate visual identity and it presupposes React/Tailwind/motion. |
| 12 | Response-header principle: security may live outside page source | Security-process principle | `ADOPT LATER` | Correct conceptual reminder: security headers are often hosting/server/CDN concerns, not only page code. |
| 13 | JSON Crack | Data-visualization developer tool | `DEFER` | Potentially useful if CMS/content/config schemas become complex. Not needed for current frontend foundation. |
| 14 | Content-Security-Policy / script sources | Security practice | `DEFER TO DELIVERY` | Important later. CSP must be built around actual scripts, embeds, analytics, media, and hosting; not copied as a generic string now. |
| 15 | Security-series closing slide | Index/CTA | `RECORDED` | No additional technical rule beyond related security slides. |
| 16 | GitHub Primer spacing/radius reference | Design-system reference | `REFERENCE — HIGH` | Useful evidence for disciplined spacing and tokens. Do not hard-code influencer one-line values as universal Primer policy; consult official docs when adopting. |
| 17 | CSS Loaders | UI utility library | `DEFER` | Only consider if the final site has real loading states. Prefer simple/native loading feedback before importing decorative loaders. |
| 18 | Five public design-systems summary: Primer, Material 3, Carbon, Atlassian, Spectrum | Design-system reference index | `ADOPT AS RESEARCH SET` | Excellent reference set for spacing, states, elevation, typography, accessibility, and token discipline. Never merge all visual styles into Hellocraft. |
| 19 | unDraw | Illustration library | `DO NOT USE BY DEFAULT` | Generic illustration language is a weak fit for a Minecraft game studio and risks template-like visuals. Keep only as emergency generic illustration source. |
| 20 | Design-resource closing slide | Index/CTA | `RECORDED` | No additional rule. |
| 21 | IBM Carbon spacing / 2x-grid slide | Design-system reference | `REFERENCE — HIGH` | Use as evidence for coherent spacing systems, not as a command that every Hellocraft measurement must be 8px. |
| 22 | Adobe Spectrum named type-scale slide | Design-system reference | `REFERENCE — HIGH` | Useful principle: named semantic type roles beat arbitrary one-off font sizes. Exact Spectrum scale is not Hellocraft policy. |
| 23 | security.txt / vulnerability-reporting slide | Security practice | `DEFER TO DELIVERY` | Potentially valuable only when Hellocraft has a real monitored security contact/process. RFC 9116 rules must be followed if implemented. |
| 24 | Glassmorphism generator | CSS visual-effect utility | `DO NOT USE BY DEFAULT` | Keep only as an effect reference. Glassmorphism must be art-direction-led, never a default 'modern' treatment. |
| 25 | DevDocs | Developer documentation aggregator | `REFERENCE — MEDIUM` | Useful personal/dev productivity tool. Official framework/library docs remain authoritative for changing technical facts. |
| 26 | Design-system reference principle: 'you never gave it a reference' | Design-process principle | `ADOPT NOW` | Reinforces reference-grounded design. Use multiple relevant sources; do not force Hellocraft to look like Primer/Material/Carbon/etc. |
| 27 | Material 3 hover/focus/pressed state-layer slide | Design-system reference | `REFERENCE — HIGH` | Useful interaction-state principle. Exact percentages/tokens depend on the official system/component and are not universal CSS values. |
| 28 | Anthropic theme-factory skill | Official Agent Skill | `DO NOT INSTALL FOR WEBSITE` | Official skill applies preset/generated artifact themes. Useful consistency idea, but preset theme selection conflicts with custom Hellocraft art direction. |
| 29 | Five-line security summary | Security checklist/index | `DEFER TO DELIVERY` | Good reminder set: HTTPS/HSTS, framing, MIME types, CSP, security.txt. Technically oversimplified; these are not all 'five lines in one file' across hosts. |
| 30 | Anthropic skills installation + description-trigger advice | Skill-operations/meta guidance | `PARTIAL ADOPT` | Keep the lesson that descriptions determine triggering and should be precise. Installation commands shown are Claude Code-specific and are not Hellocraft repo policy. |
| 31 | Five Anthropic creative skills summary | Skill index | `RECORDED` | Indexes canvas-design, theme-factory, web-artifacts-builder, algorithmic-art, skill-creator. Each is audited separately. |
| 32 | Security-series intro | Index/summary | `RECORDED` | No independent implementation beyond detailed security entries. |
| 33 | Anthropic web-artifacts-builder skill | Official Agent Skill | `DO NOT INSTALL FOR PRODUCTION WEBSITE` | Designed for Claude HTML artifacts and fixed React/Tailwind/shadcn single-bundle workflow. Useful only for throwaway prototype experiments if explicitly wanted. |
| 34 | Anthropic canvas-design skill | Official Agent Skill | `DEFER / REFERENCE` | Static PNG/PDF visual-art workflow. Could help future moodboards/key-art/visual concept work, but it is not a frontend development skill. |
| 35 | Anthropic skill-creator skill | Official Agent Skill / meta-skill | `REFERENCE — HIGH` | Strong source for skill anatomy, progressive disclosure, validation, and evals. Use as meta-reference when authoring Hellocraft skills; do not install as a project specialist. |
| 36 | Atlassian elevation/shadow slide | Design-system reference | `REFERENCE — HIGH` | Useful reminder that elevation should be systematic. The slide's one-line rule is simplified; consult official tokens/patterns before implementation. |
| 37 | Anthropic algorithmic-art skill | Official Agent Skill | `DEFER` | Potential future use only if generative/seeded visuals become a real Hellocraft visual feature. Official artifact viewer/Anthropic branding is not production-site architecture. |
| 38 | Five Anthropic skills closing slide | Index/summary | `RECORDED` | No additional rule. |
| 39 | The Analyst | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Keep for future marketing/SMM operations; not a frontend/project skill. |
| 40 | The Hook Writer | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Potential future marketing-copy workflow; not a frontend skill. |
| 41 | Seven AI Specialists / one workspace system | Social-media operating model | `OUT OF SCOPE — WEBSITE` | Useful as a separate content-operations concept, not as Hellocraft website agent architecture. |
| 42 | The Designer | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Targets carousel/thumbnail/reel/brand assets. Distinct from web UI design. |
| 43 | The Manager | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Content operations/planning/automation role; keep outside website repo skill set for now. |
| 44 | The Publisher | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Social publishing/scheduling role; not website development. |
| 45 | The Scriptwriter | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Video/carousel/caption scripting; may matter to future marketing, not frontend development. |
| 46 | The Researcher | Social-media workflow role | `OUT OF SCOPE — WEBSITE` | Competitor/trend research role. Website research should remain task-scoped rather than a permanent specialist at this stage. |
| 47 | Six high-end web-design sites recap | Reference index | `RECORDED` | Recap of the six design-reference sites. Keep as fast research entrypoint. |

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

## Prior external references already present in the older project skill lineage

These were discussed/used in earlier repositories and are **not contained in this ZIP**, but they must remain recorded so this new inventory does not accidentally replace them.

| Reference | Current Hellocraft treatment |
|---|---|
| `zanwei/design-dna` | Keep as a reference for systematic decomposition of visual references/tokens/effects. Do not install or create Design-DNA JSON until the project has a real need for persistent structured visual extraction. |
| `AThevon/genjutsu` | Keep as a reference for existing-UI alignment vs establishing a new system, stack discipline, and anti-generic interaction judgment. Adapt useful principles into Hellocraft's web UI specialist rather than stacking another skill. |
| `taste-skill` (previous TranslateIT influence) | Keep as anti-generic visual-judgment reference. Merge useful principles into the Hellocraft visual specialist; no separate project specialist by default. |
| `LottieFiles/motion-design-skill` | Keep as motion-craft reference. Do not create a separate motion specialist unless motion becomes a distinct recurring acceptance boundary. |

## Technical audit notes

### Inspiration libraries

- **Cosmos** is strongest for broad visual discovery/moodboarding rather than page architecture.
- **Hoverstates** is especially relevant to experimental studio/portfolio interaction.
- **Httpster** is useful for quickly scanning complete real websites.
- **Unsection** and **Curated Design** are useful when the problem is a specific page/section pattern; using them blindly risks template-like repetition.
- **Page Flows** is strongest when the problem is a flow (form, application, browsing/filtering, onboarding-like interaction), not when the problem is only aesthetic.

### Public design systems

The influencer one-line summaries are useful memory aids but are **not implementation specifications**:
- Primer's screenshot values must not become universal Hellocraft spacing/radius rules.
- Material state-layer percentages/tokens vary by system/component and should be checked against current official guidance before implementation.
- Carbon's 2x Grid supports systematic spacing, but the screenshot should not be interpreted as 'every value must be 8px'.
- Atlassian elevation involves coordinated surface/elevation tokens; 'shadow follows surface' is a simplification.
- Spectrum's named type roles are a useful semantic principle, not a requirement to copy Spectrum's exact type scale.

### Security cards

The security series identifies real concerns, but the claim that they are simply 'five lines in one file' is too broad:
- HSTS is an HTTP response header and should only be enabled with a correct HTTPS deployment; `includeSubDomains`/preload have wider consequences.
- `X-Content-Type-Options: nosniff` is a valid MIME-sniffing protection, assuming content types are served correctly.
- CSP `frame-ancestors` controls who may embed the site; it is distinct from `frame-src`, which controls frames loaded by the site.
- CSP `script-src` must reflect the actual script/analytics/embed model and can break the site if copied prematurely.
- RFC 9116 places `security.txt` under `/.well-known/security.txt`; `Contact` and `Expires` are required, and publishing it only makes sense if the contact is monitored.
- Exact header ownership depends on the eventual host/CDN/server platform, so this belongs to delivery architecture after the stack/hosting decision.

### Anthropic Agent Skills shown in the upload

- All five names shown (`theme-factory`, `web-artifacts-builder`, `canvas-design`, `algorithmic-art`, `skill-creator`) currently exist in the public `anthropics/skills` repository.
- Their screenshot installation instructions are Claude Code/Anthropic workflow instructions, not a requirement for this repository's `.agents/skills/` system.
- `web-artifacts-builder` is specifically aimed at elaborate Claude HTML artifacts and bundles to a self-contained HTML file; it should not define a production website architecture.
- `skill-creator` is the most directly reusable source at the skill-system level because its anatomy, progressive-disclosure, validation, and evaluation patterns can improve how Hellocraft-specific skills are authored.

### Social-media specialist cards

The seven-role system is recorded intact:

```text
Researcher
Hook Writer
Scriptwriter
Designer
Analyst
Manager
Publisher
```

This is a **content/SMM operating model**, not a website-development skill architecture. Keep it available for a future marketing/content workflow instead of importing those roles into the frontend repository now.

## Revisit triggers

- Revisit `canvas-design` when visual direction needs static concept boards/key art.
- Revisit `algorithmic-art` if generative Minecraft-inspired web visuals become an approved feature.
- Revisit Aceternity or other component libraries only after the framework and visual language are approved and one concrete interaction warrants them.
- Revisit security items once hosting, forms, analytics, embeds, third-party scripts, and deployment are known.
- Revisit social-media roles only if Hellocraft decides to define a separate ongoing marketing/content production system.
- Revisit Design DNA only if reference reconciliation becomes large/repetitive enough to justify a persistent structured visual owner.

## Current stop boundary

Do **not** install the external skills or libraries from this inventory yet. The next skill-design task is to define the smallest Hellocraft-specific `web-ui-design-development` boundary from the adopted principles, then review it before adding it to `.agents/skills/`.
