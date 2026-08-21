# Content Update Guide

Use this guide when temporary website content is replaced with real Hellocraft content.

## Keep the page structure stable

Current public pages:

```text
/
├── portfolio
│   └── [slug]
├── about
├── careers
└── contact
```

Do not add new pages, filters, forms, a CMS, or other systems just because final content arrives.

## Where to update content

### Page text

```text
src/lib/content/pages.ts
```

Updates Home, Portfolio, About, Careers, Contact, and footer text.

### Portfolio projects

```text
src/lib/content/projects.ts
```

Replace demo projects with reviewed real projects.

Only use fields supported by real information:

```text
slug
title
summary
featured
year?
client?
contribution?
sections?
links?
```

### Temporary experience and career data

```text
src/lib/content/demo-data.ts
```

Remove or replace demo items when real information is ready.

### Public links

```text
src/lib/content/site.ts
src/lib/content/pages.ts
```

Add only real approved contact and social links.

### Brand files

```text
src/lib/components/brand/BrandLockup.svelte
src/lib/components/brand/BrandSymbol.svelte
src/lib/assets/brand/
```

Replace development logo files when the final logo/vector files are available.

### Project media

```text
src/lib/components/portfolio/ProjectMediaPlaceholder.svelte
```

This is temporary. Replace it with real project images/video after media review.

## Demo mode

Keep:

```text
contentIsDemo = true
```

until temporary public-facing content has been removed or intentionally approved.

Before turning it off, confirm:

```text
[ ] demo portfolio projects removed/replaced
[ ] real project media added
[ ] final page copy approved
[ ] real contact information added
[ ] demo experience/career items removed or replaced
[ ] final brand state approved
[ ] page titles/descriptions are ready
```

## Final source check

Before release, search for obvious development markers such as:

```text
Demo Project
Demo role
Demo experience
Temporary development
Project media
```

Review every remaining match deliberately.

## Important rule

Final content should normally change content files, not page structure. If real content does not fit, change the smallest responsible part instead of redesigning the whole website.
