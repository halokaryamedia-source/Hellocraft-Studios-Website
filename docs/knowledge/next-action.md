# Next Steps

## Current state

The Hellocraft Studios Website on branch `Local` now uses the standard public page names:

```text
Home
Portfolio
Project Detail
About
Careers
Contact
```

Main navigation:

```text
Portfolio
About
Careers
Contact
```

Old URLs remain only as redirects:

```text
/work        → /portfolio
/work/[slug] → /portfolio/[slug]
/studio      → /about
```

## Completed

```text
page structure        = complete
page names            = approved
page design           = approved
old page duplicates   = removed
standard internal names = applied
content inventory     = created
```

The source now uses straightforward internal names such as:

```text
portfolio
about
whatWeDo
howWeWork
experience
contact
```

Do not reintroduce `Work`, `Studio`, `visual propagation`, `route baseline`, or similar terms as current project language unless they are specifically referring to an old URL or historical note.

## Current content status

Still missing or temporary:

```text
real portfolio project information
real project screenshots / renders / videos
final Home / Portfolio / About / Careers / Contact copy
public contact details
public social links
real current job openings, if any
final logo/vector files
final font choice
```

The current website repository only contains development logo PNG files. Project media is still placeholder content.

## Next task

The next major task is to review real Hellocraft material before putting it on the website.

Priority order:

```text
1. portfolio project information
2. project screenshots / renders / videos
3. About/company information
4. contact and social details
5. career openings, if any
6. final logo/colors/font
```

For each project, useful information includes:

```text
project name
what Hellocraft worked on
short project description
client/partner if it can be published
year/date if confirmed
public link if available
screenshots/renders/video
credits or publication restrictions
```

Missing information should stay marked as unknown instead of being guessed.

## How incoming content should be handled

```text
receive files/information
→ record every item
→ group items by project or subject
→ remove duplicates from the working set
→ check facts
→ confirm whether each item can be public
→ record missing information
→ select what appears on the website
```

Material that is not selected for the public website should still remain recorded.

## Files used for content updates

```text
src/lib/content/pages.ts
→ page text

src/lib/content/projects.ts
→ portfolio projects

src/lib/content/demo-data.ts
→ temporary experience/career data

src/lib/content/site.ts
→ navigation, contact, and public links

src/lib/components/portfolio/ProjectMediaPlaceholder.svelte
→ temporary media area that will be replaced by real project media
```

## Demo mode

Keep:

```text
contentIsDemo = true
```

until the public website no longer contains temporary development content.

Before turning demo mode off, confirm:

```text
[ ] demo portfolio entries removed or replaced
[ ] real project media added
[ ] final page copy approved
[ ] real contact details added
[ ] demo experience/career items removed or replaced
[ ] final brand assets approved
[ ] final metadata ready
```

## Testing and deployment

Final testing remains pending. When the project owner reopens technical validation, continue with:

```text
responsive review
→ accessibility review
→ media/loading/performance review
→ format/lint/Svelte checks/build
→ browser testing
→ final metadata cleanup
→ turn off demo mode when ready
→ hosting setup
→ deployed website review
```

The following are still deferred until explicitly reopened:

```text
bun install
bun.lock generation
bun run validate
full browser/runtime testing
hosting provider selection
production adapter selection
```

## Immediate next step

**Collect and review real Hellocraft portfolio material. Do not redesign the approved pages unless real content reveals a specific layout problem.**
