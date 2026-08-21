<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = data.project;
</script>

<svelte:head>
	<title>{project.title} — Hellocraft Studios</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<main id="main-content" class="page">
	<header class="project-hero">
		<a class="back-link" href="/work">Work</a>
		<h1>{project.title}</h1>
		<p class="summary">{project.summary}</p>

		{#if project.year || project.client}
			<dl class="facts">
				{#if project.year}
					<div>
						<dt>Year</dt>
						<dd>{project.year}</dd>
					</div>
				{/if}
				{#if project.client}
					<div>
						<dt>Client / Partner</dt>
						<dd>{project.client}</dd>
					</div>
				{/if}
			</dl>
		{/if}
	</header>

	{#if project.contribution && project.contribution.length > 0}
		<section class="section" aria-labelledby="project-contribution-title">
			<h2 id="project-contribution-title">Hellocraft contribution</h2>
			<ul>
				{#each project.contribution as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#each project.sections ?? [] as section (section.id)}
		<section class="section" aria-labelledby={`section-${section.id}`}>
			<h2 id={`section-${section.id}`}>{section.title}</h2>
			<div class="section-copy">
				{#each section.body as paragraph, index (`${section.id}-${index}`)}
					<p>{paragraph}</p>
				{/each}
			</div>
		</section>
	{/each}

	{#if project.links && project.links.length > 0}
		<section class="section" aria-labelledby="project-links-title">
			<h2 id="project-links-title">Project links</h2>
			<ul>
				{#each project.links as link (link.href)}
					<li>
						<a href={link.href} rel={link.external ? 'noreferrer' : undefined}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</main>

<style>
	.page {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.project-hero,
	.section {
		padding-block: var(--space-section);
	}

	.project-hero {
		display: grid;
		gap: 1rem;
	}

	.project-hero h1 {
		max-width: 16ch;
	}

	.summary,
	.section-copy {
		max-width: var(--measure);
	}

	.facts {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin: 1rem 0 0;
	}

	.facts div {
		display: grid;
		gap: 0.25rem;
	}

	dt {
		font-size: 0.875rem;
	}

	dd {
		margin: 0;
		font-weight: 700;
	}

	.section {
		display: grid;
		gap: 1rem;
	}

	.section-copy {
		display: grid;
		gap: 1rem;
	}

	h1,
	h2,
	p,
	ul {
		margin-top: 0;
	}

	.back-link {
		width: fit-content;
	}
</style>
