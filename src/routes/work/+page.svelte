<script lang="ts">
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
	import { workCopy } from '$lib/content/pages';
	import { projects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Work — Hellocraft Studios</title>
	<meta name="description" content={workCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="work-title">
		<div class="shell hero__inner">
			<div class="hero__heading">
				<p class="eyebrow">{workCopy.hero.eyebrow}</p>
				<h1 id="work-title">{workCopy.hero.title}</h1>
			</div>

			<div class="hero__support">
				<p>{workCopy.hero.body}</p>
				<span class="count">{projects.length} projects</span>
			</div>
		</div>
	</section>

	<section class="projects" aria-label="Projects">
		<div class="shell">
			{#if projects.length > 0}
				<div class="project-list">
					{#each projects as project, index (project.slug)}
						{#if index === 0}
							<article class="lead-project">
								<a
									class="project-media-link"
									href={`/work/${project.slug}`}
									aria-label={`View ${project.title}`}
								>
									<ProjectMediaPlaceholder tone={project.featured ? 'dark' : 'neutral'} />
								</a>

								<div class="lead-project__caption">
									<div class="project-heading">
										{#if project.year || project.client}
											<p class="project-meta">
												{#if project.year}<span>{project.year}</span>{/if}
												{#if project.client}<span>{project.client}</span>{/if}
											</p>
										{/if}
										<h2><a href={`/work/${project.slug}`}>{project.title}</a></h2>
									</div>

									<div class="project-copy">
										<p>{project.summary}</p>
										<a class="project-action" href={`/work/${project.slug}`}>View project</a>
									</div>
								</div>
							</article>
						{:else}
							<article class="project-row">
								<a
									class="project-media-link"
									href={`/work/${project.slug}`}
									aria-label={`View ${project.title}`}
								>
									<ProjectMediaPlaceholder tone={project.featured ? 'dark' : 'neutral'} />
								</a>

								<div class="project-row__copy">
									{#if project.year || project.client}
										<p class="project-meta">
											{#if project.year}<span>{project.year}</span>{/if}
											{#if project.client}<span>{project.client}</span>{/if}
										</p>
									{/if}
									<h2><a href={`/work/${project.slug}`}>{project.title}</a></h2>
									<p>{project.summary}</p>
									<a class="project-action" href={`/work/${project.slug}`}>View project</a>
								</div>
							</article>
						{/if}
					{/each}
				</div>
			{:else}
				<p class="pending-state">{workCopy.emptyState}</p>
			{/if}
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--surface);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
		padding-block: clamp(5rem, 8vw, 7.5rem);
	}

	.hero__heading {
		display: grid;
		gap: 1rem;
	}

	h1 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(3.5rem, 5.8vw, 5.8rem);
		line-height: 0.95;
	}

	.hero__support {
		display: grid;
		gap: 1.4rem;
		align-content: end;
		justify-items: start;
		padding-bottom: 0.3rem;
	}

	.hero__support > p {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	.count {
		color: var(--text-muted);
		font-size: 0.82rem;
		font-weight: 650;
	}

	.projects {
		padding-block: clamp(5rem, 8vw, 8rem) clamp(7rem, 11vw, 11rem);
		background: var(--paper);
	}

	.project-list {
		display: grid;
		gap: clamp(6rem, 11vw, 11rem);
	}

	.project-media-link {
		display: block;
		min-width: 0;
		text-decoration: none;
	}

	.lead-project {
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
	}

	.lead-project__caption {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(2.5rem, 7vw, 7rem);
		align-items: start;
	}

	.project-heading {
		display: grid;
		gap: 0.8rem;
	}

	.project-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem 1rem;
		margin: 0;
		color: var(--text-muted);
		font-size: 0.8rem;
		font-weight: 650;
	}

	.lead-project h2,
	.project-row h2 {
		margin: 0;
	}

	.lead-project h2 {
		max-width: 14ch;
		font-size: clamp(2.8rem, 4.9vw, 4.8rem);
		line-height: 0.97;
	}

	.lead-project h2 a,
	.project-row h2 a {
		text-decoration: none;
	}

	.project-copy,
	.project-row__copy {
		display: grid;
		align-content: start;
		justify-items: start;
	}

	.project-copy {
		gap: 1.2rem;
	}

	.project-copy > p,
	.project-row__copy > p:not(.project-meta) {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
	}

	.project-action {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		min-height: 2.75rem;
		font-size: 0.9rem;
		font-weight: 650;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.28em;
		text-decoration-color: rgb(22 23 25 / 42%);
	}

	.project-row {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: center;
		padding-top: clamp(4rem, 7vw, 6rem);
		border-top: 1px solid var(--border);
	}

	.project-row__copy {
		gap: 1.15rem;
	}

	.project-row h2 {
		max-width: 13ch;
		font-size: clamp(2.15rem, 3.6vw, 3.55rem);
		line-height: 0.99;
	}

	.pending-state {
		margin: 0;
		padding-block: 3rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	@media (hover: hover) {
		.project-media-link {
			transition: opacity var(--motion-medium) ease-out;
		}

		.project-media-link:hover {
			opacity: 0.9;
		}

		.lead-project h2 a:hover,
		.project-row h2 a:hover {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-underline-offset: 0.18em;
		}
	}

	@media (max-width: 64rem) {
		.hero__inner,
		.lead-project__caption,
		.project-row {
			grid-template-columns: 1fr;
		}

		.hero__inner {
			gap: 2.5rem;
		}

		.hero__support,
		.project-copy,
		.project-row__copy {
			max-width: 38rem;
		}

		.project-row {
			gap: 2rem;
		}
	}

	@media (max-width: 46rem) {
		.hero__inner {
			padding-top: 3.75rem;
		}

		h1 {
			font-size: clamp(3rem, 13vw, 4.5rem);
		}

		.project-list {
			gap: 6rem;
		}

		.lead-project h2 {
			font-size: clamp(2.45rem, 11vw, 3.6rem);
		}

		.project-row {
			padding-top: 3.5rem;
		}
	}
</style>
