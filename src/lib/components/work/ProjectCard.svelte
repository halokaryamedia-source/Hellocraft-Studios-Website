<script lang="ts">
	import type { ProjectEntry } from '$lib/content/types';
	import ProjectMediaPlaceholder from './ProjectMediaPlaceholder.svelte';

	let {
		project,
		headingLevel = 3
	}: {
		project: ProjectEntry;
		headingLevel?: 2 | 3;
	} = $props();
</script>

<article class="project-card">
	<a href={`/work/${project.slug}`}>
		<ProjectMediaPlaceholder tone={project.featured ? 'dark' : 'neutral'} />

		<div class="project-card__caption">
			{#if project.year || project.client}
				<div class="project-card__meta">
					{#if project.year}<span>{project.year}</span>{/if}
					{#if project.client}<span>{project.client}</span>{/if}
				</div>
			{/if}

			<div class="project-card__main">
				{#if headingLevel === 2}
					<h2>{project.title}</h2>
				{:else}
					<h3>{project.title}</h3>
				{/if}

				<div class="project-card__description">
					<p>{project.summary}</p>
					<span class="project-card__action">View project</span>
				</div>
			</div>
		</div>
	</a>
</article>

<style>
	.project-card {
		min-width: 0;
		padding-block: clamp(2.75rem, 5vw, 5rem);
	}

	.project-card + .project-card {
		border-top: 1px solid var(--border);
	}

	.project-card a {
		display: grid;
		gap: 1.5rem;
		text-decoration: none;
	}

	.project-card__caption {
		display: grid;
		gap: 1rem;
	}

	.project-card__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		color: var(--text-muted);
		font-size: 0.82rem;
		font-weight: 600;
	}

	.project-card__main {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: start;
	}

	h2,
	h3 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.5rem, 5.2vw, 5.4rem);
		line-height: 0.92;
	}

	.project-card__description {
		display: grid;
		gap: 1.15rem;
		align-content: start;
	}

	p {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
	}

	.project-card__action {
		width: fit-content;
		font-size: 0.9rem;
		font-weight: 650;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.28em;
	}

	@media (max-width: 58rem) {
		.project-card__main {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
	}
</style>
