# Content Inventory

This file tracks the real content and media available for the Hellocraft Studios Website.

## Current status

```text
page design        = approved
draft page copy    = reviewed and humanized
sample portfolio   = active for preview only
real portfolio     = not supplied yet
real project media = not supplied yet
demo mode          = still active
```

## Website source

```text
Repository: halokaryamedia-source/Hellocraft-Studios-Website
Branch: Local
```

Current findings:

- page structure and design are ready;
- public-facing draft copy has been rewritten in clear, normal website language;
- portfolio entries are clearly labelled fictional samples;
- About experience and career examples remain sample data;
- sample career roles are not published as real openings;
- public contact details are empty;
- social links are empty;
- no real project screenshots, renders, or videos are stored in this website repository.

The current copy is suitable for preview and layout review, but it is **not final production copy**. Real portfolio and company material may justify further wording changes later.

## Current brand files

```text
src/lib/assets/brand/hellocraft-logo-cyan.png
src/lib/assets/brand/hellocraft-logo-white.png
```

Status:

```text
confirmed as current development assets
final vector/original files still needed
final brand color specification still pending
```

## Current portfolio records

Source:

```text
src/lib/content/projects.ts
```

Current fictional sample records:

```text
Sample Adventure World
Sample Multiplayer Game
Sample Environment Build
```

These are **not real Hellocraft portfolio projects**. They exist only to preview the Portfolio and Project Detail layouts.

## Current project media

```text
real screenshots   = none
real renders       = none
real videos        = none
real video posters = none
```

`src/lib/components/portfolio/ProjectMediaPlaceholder.svelte` remains a temporary visual placeholder.

Do not replace it with invented artwork or material taken from unrelated repositories.

## Current About information

Source:

```text
src/lib/content/pages.ts
src/lib/content/demo-data.ts
```

The About page now uses a factual draft based on confirmed project positioning:

- Hellocraft Studios is focused on Minecraft;
- Minecraft is used as both a game platform and creative medium;
- project work may include custom worlds, gameplay, game development, technical systems, and supporting 3D art;
- project context can include normal game content as well as events, exhibitions, and other public experiences.

The `Experience` section remains hidden while demo mode is active because verified public experience/results have not yet been supplied.

Final About wording should be refined after the real project inventory is reviewed.

## Current Careers information

Sample roles exist only for layout testing:

```text
Sample Level Designer Role
Sample Game Developer Role
Sample 3D Artist Role
```

They are not real openings and are not shown as public vacancies while demo mode is active.

Current public state:

```text
real job openings  = none supplied
application method = none supplied
```

The page correctly states that there are no public openings right now.

## Current contact and social information

```text
contactMethods = []
socialLinks    = []
```

Not supplied yet:

```text
business email
public social profiles
public Discord/community link
other public contact route
```

The Contact page currently uses a launch placeholder message instead of fabricated contact details.

## Current font

The website currently uses the system font stack for development.

Final font choice is still pending.

## Other repositories

Other repositories under the same GitHub account, such as `BuildIT`, `TranslateIT`, `PRD-Creator`, `MotionTracker`, and `Develop-Builder`, are **not automatically public portfolio projects**.

Before using material from another repository, confirm:

```text
what project it belongs to
what Hellocraft worked on
whether client/partner names may be shown
whether images/files may be published
```

## Information needed next

### Portfolio projects

For each project, provide whatever is known:

```text
project name
what Hellocraft worked on
short description
client/partner if public
year/date if confirmed
public link if available
publication restrictions if any
```

### Project media

For each image/video:

```text
original filename
related project
what it shows
whether it can be published
required credit if any
```

### About

Useful confirmed information:

```text
short company description
main areas of work
public location if desired
approved clients/partners if public
public experience/results if supported
```

### Contact

```text
business email or contact route
public social profiles
other public channels
```

### Careers

```text
real current openings, if any
location/type
application method
```

No openings is a valid final state.

### Brand

```text
final logo/vector files
approved logo variants
final brand colors
final font choice if changing from the system stack
```

## Update order

When real material is supplied:

```text
1. record every item
2. group by project/topic
3. check duplicates and facts
4. confirm public/private status
5. select portfolio projects and media
6. update project information and media
7. refine page text from the real evidence
8. add contact/social details
9. add real careers only if active
10. update final brand assets
11. keep demo mode on until the release checklist is complete
```
