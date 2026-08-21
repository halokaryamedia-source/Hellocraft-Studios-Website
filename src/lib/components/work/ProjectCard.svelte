<script lang="ts">
	import type { ProjectEntry } from '$lib/content/types';

	let { project }: { project: ProjectEntry } = $props();
</script>

<article class="project-card">
	<a href={`/work/${project.slug}`}>
		<div class="project-card__media" aria-hidden="true">
			<span class="project-card__media-label">Project visual</span>
			<span class="project-card__star"></span>
		</div>

		<div class="project-card__copy">
			<div class="project-card__meta">
				<span>{project.featured ? 'Featured' : 'Project'}</span>
				{#if project.year}<span>{project.year}</span>{/if}
				{#if project.client}<span>{project.client}</span>{/if}
			</div>

			<div class="project-card__title-row">
				<h2>{project.title}</h2>
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

	.project-card__media {
		position: relative;
		display: grid;
		align-items: end;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		padding: clamp(1rem, 3vw, 1.5rem);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background:
			linear-gradient(90deg, rgb(12 13 14 / 7%) 1px, transparent 1px) 0 0 / 2rem 2rem,
			linear-gradient(rgb(12 13 14 / 7%) 1px, transparent 1px) 0 0 / 2rem 2rem,
			var(--brand);
		transition:
			transform var(--motion-medium) cubic-bezier(0.2, 0.75, 0.2, 1),
			border-radius var(--motion-medium) ease-out;
	}

	.project-card__media-label {
		position: relative;
		z-index: 2;
		width: fit-content;
		padding: 0.45rem 0.65rem;
		border-radius: 999px;
		background: var(--ink);
		color: var(--surface);
		font-size: 0.7rem;
		font-weight: 850;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.project-card__star {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(48%, 10rem);
		aspect-ratio: 1;
		background: var(--surface);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
		transform: translate(-50%, -50%) rotate(-8deg);
		transition: transform var(--motion-medium) cubic-bezier(0.2, 0.75, 0.2, 1);
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

	h2 {
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

	a:hover .project-card__media,
	a:focus-visible .project-card__media {
		border-radius: calc(var(--radius-md) * 0.65);
		transform: translateY(-0.2rem);
	}

	a:hover .project-card__star,
	a:focus-visible .project-card__star {
		transform: translate(-50%, -50%) rotate(8deg) scale(1.08);
	}

	a:hover .project-card__arrow,
	a:focus-visible .project-card__arrow {
		background: var(--ink);
		color: var(--surface);
		transform: rotate(8deg);
	}
</style>
