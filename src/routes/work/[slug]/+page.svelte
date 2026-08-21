<script lang="ts">
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = data.project;
</script>

<svelte:head>
	<title>{project.title} — Hellocraft Studios</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="project-title">
		<div class="shell hero__inner">
			<a class="back-link" href="/work">Back to work</a>

			<div class="hero__main">
				<div class="hero__heading">
					<p class="eyebrow">Project</p>
					<h1 id="project-title">{project.title}</h1>
				</div>

				<div class="hero__support">
					<p class="hero__summary">{project.summary}</p>

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
				</div>
			</div>
		</div>
	</section>

	<section class="project-visual" aria-label="Project media">
		<div class="shell project-visual__inner">
			<ProjectMediaPlaceholder variant="hero" tone={project.featured ? 'dark' : 'neutral'} />
		</div>
	</section>

	{#if project.contribution && project.contribution.length > 0}
		<section class="contribution" aria-labelledby="project-contribution-title">
			<div class="shell content-grid">
				<div class="section-heading">
					<p class="eyebrow">Contribution</p>
					<h2 id="project-contribution-title">What Hellocraft contributed.</h2>
				</div>

				<ul class="contribution-list">
					{#each project.contribution as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	{#if project.sections && project.sections.length > 0}
		<div class="project-story">
			{#each project.sections as section (section.id)}
				<section class="detail-section" aria-labelledby={`section-${section.id}`}>
					<div class="shell content-grid">
						<div class="section-heading">
							<p class="eyebrow">Project detail</p>
							<h2 id={`section-${section.id}`}>{section.title}</h2>
						</div>

						<div class="section-copy">
							{#each section.body as paragraph, paragraphIndex (`${section.id}-${paragraphIndex}`)}
								<p>{paragraph}</p>
							{/each}
						</div>
					</div>
				</section>
			{/each}
		</div>
	{/if}

	{#if project.links && project.links.length > 0}
		<section class="project-links" aria-labelledby="project-links-title">
			<div class="shell content-grid">
				<div class="section-heading">
					<p class="eyebrow">Explore</p>
					<h2 id="project-links-title">Project links</h2>
				</div>

				<ul>
					{#each project.links as link (link.href)}
						<li>
							<a href={link.href} rel={link.external ? 'noreferrer' : undefined}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<section class="project-close" aria-label="Return to portfolio">
		<div class="shell project-close__inner">
			<p>More Hellocraft projects and development studies.</p>
			<a class="text-link" href="/work">View all work</a>
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--surface);
	}

	.hero__inner {
		display: grid;
		gap: clamp(3rem, 6vw, 5rem);
		padding-block: clamp(3rem, 5vw, 4.5rem) clamp(5rem, 8vw, 7.5rem);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		min-height: 2.75rem;
		color: var(--text-muted);
		font-size: 0.86rem;
		font-weight: 650;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.28em;
		text-decoration-color: rgb(22 23 25 / 35%);
	}

	.hero__main,
	.content-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(3rem, 9vw, 9rem);
		align-items: start;
	}

	.hero__main {
		align-items: end;
	}

	.hero__heading,
	.section-heading {
		display: grid;
		gap: 1rem;
	}

	h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(3.6rem, 6vw, 6.2rem);
		font-weight: 700;
		line-height: 0.93;
	}

	.hero__support {
		display: grid;
		gap: 2rem;
		align-content: end;
	}

	.hero__summary {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1.02rem, 1.3vw, 1.15rem);
		line-height: 1.6;
	}

	.facts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem 2rem;
		margin: 0;
		padding-top: 1.35rem;
		border-top: 1px solid var(--border);
	}

	.facts div {
		display: grid;
		gap: 0.35rem;
	}

	dt {
		color: var(--text-muted);
		font-size: 0.75rem;
		font-weight: 650;
	}

	dd {
		margin: 0;
		font-weight: 650;
	}

	.project-visual {
		padding-block: 0 clamp(5rem, 9vw, 9rem);
		background: var(--surface);
	}

	.project-visual__inner {
		overflow: hidden;
	}

	.contribution {
		padding-block: clamp(5.5rem, 9vw, 8.5rem);
		background: var(--surface-secondary);
	}

	.section-heading h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.4rem, 4.2vw, 4rem);
		font-weight: 680;
		line-height: 0.98;
	}

	.contribution-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.contribution-list li {
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1rem, 1.35vw, 1.12rem);
		line-height: 1.55;
	}

	.project-story {
		background: var(--paper);
	}

	.detail-section {
		padding-block: clamp(5.5rem, 9vw, 8.5rem);
	}

	.detail-section + .detail-section {
		border-top: 1px solid var(--border);
	}

	.section-copy {
		display: grid;
		gap: 1.35rem;
		max-width: var(--measure);
	}

	.section-copy p {
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.2vw, 1.08rem);
		line-height: 1.7;
	}

	.project-links {
		padding-block: clamp(5.5rem, 9vw, 8rem);
		background: var(--ink);
		color: var(--surface);
	}

	.project-links .eyebrow {
		color: rgb(255 253 248 / 55%);
	}

	.project-links ul {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--inverse-border);
		list-style: none;
	}

	.project-links li {
		border-bottom: 1px solid var(--inverse-border);
	}

	.project-links a {
		display: flex;
		align-items: center;
		min-height: 3.5rem;
		padding-block: 1rem;
		color: var(--surface);
		font-weight: 650;
		text-decoration: none;
	}

	.project-links a:hover,
	.project-links a:focus-visible {
		text-decoration: underline;
		text-underline-offset: 0.28em;
	}

	.project-close {
		padding-block: clamp(4.5rem, 7vw, 6.5rem);
		background: var(--surface);
	}

	.project-close__inner {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem 4rem;
	}

	.project-close p {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1.05rem, 1.4vw, 1.2rem);
	}

	@media (max-width: 60rem) {
		.hero__main,
		.content-grid {
			grid-template-columns: 1fr;
		}

		.hero__main,
		.content-grid {
			gap: 2.5rem;
		}

		.hero__support,
		.section-copy,
		.contribution-list {
			max-width: 40rem;
		}
	}

	@media (max-width: 46rem) {
		h1 {
			font-size: clamp(3.05rem, 13vw, 4.7rem);
		}

		.facts {
			grid-template-columns: 1fr;
		}

		.project-close__inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
