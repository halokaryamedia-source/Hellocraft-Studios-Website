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
			<div class="hero__meta">
				<span class="section-index">01 / Work</span>
				<p class="eyebrow">Selected projects</p>
			</div>
			<h1 id="work-title">{workCopy.hero.title}</h1>
			<div class="hero__footer">
				<p>{workCopy.hero.body}</p>
				<p class="count">{String(projects.length).padStart(2, '0')} projects in development preview</p>
			</div>
		</div>
	</section>

	<section class="projects" aria-label="Projects">
		<div class="shell">
			{#if projects.length > 0}
				<div class="project-list">
					{#each projects as project, index (project.slug)}
						<ProjectCard
							{project}
							headingLevel={2}
							index={index + 1}
							reverse={index % 2 === 1}
						/>
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
		background: var(--ink);
		color: var(--surface);
	}

	.hero__inner {
		display: grid;
		gap: clamp(2.5rem, 6vw, 6rem);
		padding-block: clamp(5rem, 10vw, 10rem);
	}

	.hero__meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.hero__meta .eyebrow {
		color: rgb(255 255 255 / 58%);
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(5rem, 13vw, 13rem);
		line-height: 0.75;
	}

	.hero__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.5rem;
		border-top: 1px solid var(--inverse-border);
	}

	.hero__footer > p:first-child {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 255 255 / 62%);
	}

	.count {
		margin: 0;
		color: var(--brand);
		font-size: 0.68rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.projects {
		padding-block: clamp(2rem, 5vw, 5rem) var(--space-section);
	}

	.project-list {
		border-bottom: 1px solid var(--border);
	}

	.pending-state {
		padding-block: 3rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	@media (max-width: 46rem) {
		.hero__footer {
			grid-template-columns: 1fr;
			align-items: start;
		}

		h1 {
			font-size: clamp(4.5rem, 22vw, 7rem);
		}
	}
</style>
