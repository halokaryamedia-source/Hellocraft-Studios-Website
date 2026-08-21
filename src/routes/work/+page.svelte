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
		<div class="shell editorial-frame editorial-frame--dark hero__frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>01</span>
				<span>Work</span>
			</aside>
			<div class="editorial-body hero__body">
				<p class="eyebrow">{workCopy.hero.eyebrow}</p>
				<h1 id="work-title">{workCopy.hero.title}</h1>
				<div class="hero__deck">
					<p>{workCopy.hero.body}</p>
					<span>{String(projects.length).padStart(2, '0')} / Entries</span>
				</div>
			</div>
		</div>
	</section>

	<section class="projects" aria-label="Projects">
		<div class="shell editorial-frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>Index</span>
				<span>Selected projects</span>
			</aside>
			<div class="editorial-body projects__body">
				<div class="projects__heading">
					<p class="eyebrow">Project index</p>
					<p>Development portfolio sequence</p>
				</div>

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
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--ink);
		color: var(--surface);
	}

	.hero__frame {
		padding-block: clamp(4.5rem, 9vw, 9rem);
	}

	.hero__body {
		display: grid;
		gap: clamp(1.75rem, 4vw, 3.5rem);
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(4.25rem, 10vw, 10rem);
		line-height: 0.8;
	}

	.hero__deck {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.25rem;
		border-top: 1px solid var(--inverse-border);
	}

	.hero__deck p {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 255 255 / 60%);
	}

	.hero__deck span {
		font-size: 0.68rem;
		font-weight: 850;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.projects {
		padding-block: var(--space-section);
	}

	.projects__body {
		display: grid;
		gap: 1.5rem;
	}

	.projects__heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.projects__heading p {
		margin: 0;
	}

	.projects__heading p:last-child {
		color: var(--text-muted);
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.project-list {
		border-bottom: 1px solid var(--border);
	}

	.pending-state {
		padding-block: 2rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	@media (max-width: 46rem) {
		.hero__deck {
			grid-template-columns: 1fr;
			align-items: start;
		}

		.projects__heading {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
