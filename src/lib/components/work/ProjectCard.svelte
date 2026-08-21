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
		<ProjectMediaPlaceholder />

		<div class="project-card__copy">
			<div class="project-card__meta">
				<span>{project.featured ? 'Featured' : 'Project'}</span>
				{#if project.year}<span>{project.year}</span>{/if}
				{#if project.client}<span>{project.client}</span>{/if}
			</div>

			<div class="project-card__title-row">
				{#if headingLevel === 2}
					<h2>{project.title}</h2>
				{:else}
					<h3>{project.title}</h3>
				{/if}
				<span class="project-card__arrow" aria-hidden="true">↗</span>
			</div>
			<p>{project.summary}</p>
		</div>
	</a>
</article>

<style>
	.project-card {
		min-width: 0;
	}

	.project-card a {
		display: grid;
		gap: 1rem;
		text-decoration: none;
	}

	.project-card__copy {
		display: grid;
		gap: 0.65rem;
		padding-inline: 0.15rem;
	}

	.project-card__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1rem;
		color: var(--text-muted);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.project-card__title-row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 1rem;
		align-items: start;
	}

	h2,
	h3 {
		margin: 0;
		font-size: clamp(1.55rem, 3vw, 2.5rem);
		line-height: 0.98;
	}

	.project-card__arrow {
		display: grid;
		place-items: center;
		width: 2.2rem;
		aspect-ratio: 1;
		border: 1px solid var(--border);
		border-radius: 50%;
		font-size: 1rem;
		transition:
			background var(--motion-fast) ease-out,
			color var(--motion-fast) ease-out,
			transform var(--motion-fast) ease-out;
	}

	p {
		max-width: 42rem;
		margin: 0;
		color: var(--text-muted);
		font-size: 0.95rem;
	}

	a:hover .project-card__arrow,
	a:focus-visible .project-card__arrow {
		background: var(--ink);
		color: var(--surface);
		transform: rotate(8deg);
	}
</style>
