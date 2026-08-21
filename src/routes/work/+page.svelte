<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
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
			<p class="eyebrow">{workCopy.hero.eyebrow}</p>
			<div class="hero__grid">
				<h1 id="work-title">{workCopy.hero.title}</h1>
				<p>{workCopy.hero.body}</p>
			</div>
		</div>
	</section>

	<section class="projects" aria-label="Projects">
		<div class="shell">
			<div class="projects__heading">
				<p class="eyebrow">Project index</p>
				<p class="count">{String(projects.length).padStart(2, '0')} entries</p>
			</div>

			{#if projects.length > 0}
				<div class="project-grid">
					{#each projects as project (project.slug)}
						<ProjectCard {project} headingLevel={2} />
					{/each}
				</div>
			{:else}
				<p class="pending-state">{workCopy.emptyState}</p>
			{/if}
		</div>
	</section>
</main>

<style>
	.shell {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.hero {
		background: var(--ink);
		color: var(--surface);
	}

	.hero__inner {
		display: grid;
		gap: clamp(2rem, 5vw, 5rem);
		padding-block: clamp(5rem, 11vw, 10rem);
	}

	.hero__grid {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.7fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
	}

	.eyebrow {
		margin: 0;
		color: var(--brand);
		font-size: 0.72rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(4rem, 10vw, 10rem);
		line-height: 0.83;
	}

	.hero__grid p {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 255 255 / 66%);
		font-size: clamp(1rem, 1.7vw, 1.2rem);
	}

	.projects {
		padding-block: var(--space-section);
	}

	.projects__heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: clamp(2rem, 5vw, 4rem);
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.projects__heading .eyebrow {
		color: var(--ink);
	}

	.count {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.8rem;
		font-weight: 750;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(3rem, 7vw, 7rem) clamp(1.5rem, 4vw, 3.5rem);
	}

	.project-grid :global(.project-card:nth-child(3n)) {
		grid-column: 1 / -1;
		width: min(100%, 62rem);
		margin-inline: auto;
	}

	.pending-state {
		padding: 2rem;
		border: 1px dashed var(--border);
		border-radius: var(--radius-sm);
	}

	@media (max-width: 58rem) {
		.hero__grid,
		.project-grid {
			grid-template-columns: 1fr;
		}

		.project-grid :global(.project-card:nth-child(3n)) {
			grid-column: auto;
			width: auto;
		}
	}
</style>
