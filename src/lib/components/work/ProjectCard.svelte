<script lang="ts">
	import type { ProjectEntry } from '$lib/content/types';

	let { project }: { project: ProjectEntry } = $props();
</script>

<article class="project-card">
	<a href={`/work/${project.slug}`}>
		<div class="project-card__media" aria-hidden="true"></div>
		<div class="project-card__copy">
			<div class="project-card__meta">
				{#if project.year}<span>{project.year}</span>{/if}
				{#if project.client}<span>{project.client}</span>{/if}
			</div>
			<h2>{project.title}</h2>
			<p>{project.summary}</p>
		</div>
	</a>
</article>

<style>
	.project-card a {
		display: grid;
		gap: 1rem;
		text-decoration: none;
	}

	.project-card__media {
		aspect-ratio: 16 / 10;
		background: var(--surface-secondary);
	}

	.project-card__copy {
		display: grid;
		gap: 0.5rem;
	}

	.project-card__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		font-size: 0.875rem;
	}

	h2,
	p {
		margin: 0;
	}
</style>
