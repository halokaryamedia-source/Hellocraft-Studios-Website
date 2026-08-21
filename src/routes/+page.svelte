<script lang="ts">
	import ProjectMediaPlaceholder from '$lib/components/work/ProjectMediaPlaceholder.svelte';
	import { homeCopy } from '$lib/content/pages';
	import { featuredProjects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Hellocraft Studios</title>
	<meta name="description" content={homeCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="home-title">
		<div class="shell hero__inner">
			<div class="hero__heading">
				<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
				<h1 id="home-title">{homeCopy.hero.title}</h1>
			</div>

			<div class="hero__intro">
				<p>{homeCopy.hero.body}</p>
				<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
			</div>

			<ProjectMediaPlaceholder variant="hero" index="Demo" label="Featured work" />
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell">
			<header class="work-heading">
				<div>
					<p class="eyebrow">Portfolio preview</p>
					<h2 id="home-work-title">{homeCopy.work.title}</h2>
				</div>
				<a class="text-link" href="/work">{homeCopy.work.viewAllLabel}</a>
			</header>

			{#if featuredProjects[0]}
				{@const project = featuredProjects[0]}
				<article class="featured-project">
					<a href={`/work/${project.slug}`}>
						<ProjectMediaPlaceholder index="01" label="Demo project" />
						<div class="featured-project__caption">
							<div>
								<p class="project-meta">Development study</p>
								<h3>{project.title}</h3>
							</div>
							<div class="project-description">
								<p>{project.summary}</p>
								<span>View project ↗</span>
							</div>
						</div>
					</a>
				</article>
			{/if}

			{#if featuredProjects[1]}
				{@const project = featuredProjects[1]}
				<article class="secondary-project">
					<a href={`/work/${project.slug}`}>
						<ProjectMediaPlaceholder index="02" label="Demo project" />
						<div class="secondary-project__caption">
							<p class="project-meta">Development study</p>
							<h3>{project.title}</h3>
							<p>{project.summary}</p>
							<span>View project ↗</span>
						</div>
					</a>
				</article>
			{/if}
		</div>
	</section>

	<section class="studio-section" aria-labelledby="home-studio-title">
		<div class="shell studio-grid">
			<div class="studio-heading">
				<p class="eyebrow">{homeCopy.studio.eyebrow}</p>
				<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
			</div>

			<div class="studio-copy">
				<p class="studio-intro">{homeCopy.studio.body}</p>

				<div class="capability-note">
					<p class="eyebrow">{homeCopy.capabilities.eyebrow}</p>
					<h3>{homeCopy.capabilities.title}</h3>
					<p>{homeCopy.capabilities.body}</p>
				</div>

				<a class="text-link" href="/studio">{homeCopy.studio.actionLabel}</a>
			</div>
		</div>
	</section>

	<section class="contact-section" aria-labelledby="home-contact-title">
		<div class="shell contact-grid">
			<div>
				<p class="eyebrow">{homeCopy.contact.eyebrow}</p>
				<h2 id="home-contact-title">{homeCopy.contact.title}</h2>
			</div>
			<div class="contact-copy">
				<p>{homeCopy.contact.body}</p>
				<a class="text-link" href="/contact">{homeCopy.contact.actionLabel}</a>
			</div>
		</div>
	</section>
</main>

<style>
	.hero {
		border-bottom: 1px solid var(--border);
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		gap: clamp(2.5rem, 5vw, 4.5rem);
		padding-block: clamp(4.5rem, 8vw, 7.5rem) clamp(3.5rem, 6vw, 5.5rem);
	}

	.hero__heading {
		display: grid;
		gap: 1.1rem;
	}

	.hero h1 {
		max-width: 18ch;
		margin: 0;
		font-size: clamp(3.7rem, 6.6vw, 6.65rem);
		font-weight: 730;
		line-height: 0.93;
	}

	.hero__intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		max-width: 70rem;
	}

	.hero__intro p {
		max-width: 37rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1.02rem, 1.5vw, 1.16rem);
	}

	.work-section {
		padding-block: clamp(5rem, 9vw, 9rem);
	}

	.work-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: clamp(2.5rem, 5vw, 4.5rem);
		padding-bottom: 1.3rem;
		border-bottom: 1px solid var(--border);
	}

	.work-heading > div {
		display: grid;
		gap: 0.6rem;
	}

	.work-heading h2 {
		margin: 0;
		font-size: clamp(2.6rem, 5vw, 4.7rem);
		line-height: 0.96;
	}

	.featured-project,
	.secondary-project {
		border-bottom: 1px solid var(--border);
	}

	.featured-project {
		padding-bottom: clamp(4rem, 8vw, 7rem);
	}

	.featured-project a,
	.secondary-project a {
		display: grid;
		gap: 1.5rem;
		text-decoration: none;
	}

	.featured-project__caption {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: start;
	}

	.featured-project__caption > div:first-child,
	.secondary-project__caption {
		display: grid;
		gap: 0.65rem;
	}

	.project-meta {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.8rem;
	}

	.featured-project h3 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.7rem, 5vw, 5rem);
		line-height: 0.94;
	}

	.project-description {
		display: grid;
		gap: 1rem;
	}

	.project-description p,
	.secondary-project__caption > p:not(.project-meta) {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
	}

	.project-description span,
	.secondary-project__caption > span {
		width: fit-content;
		font-size: 0.88rem;
		font-weight: 650;
	}

	.secondary-project {
		width: min(78%, 68rem);
		margin-left: auto;
		padding-block: clamp(4rem, 7vw, 6rem);
	}

	.secondary-project__caption {
		grid-template-columns: minmax(0, 1.1fr) minmax(15rem, 0.8fr);
		column-gap: clamp(1.5rem, 5vw, 4rem);
	}

	.secondary-project__caption .project-meta {
		grid-column: 1 / -1;
	}

	.secondary-project h3 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.1rem, 4vw, 3.7rem);
		line-height: 0.96;
	}

	.studio-section {
		padding-block: clamp(5rem, 9vw, 9rem);
		border-top: 1px solid var(--border);
		background: var(--surface);
	}

	.studio-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
		gap: clamp(3rem, 9vw, 9rem);
		align-items: start;
	}

	.studio-heading {
		display: grid;
		gap: 1rem;
	}

	.studio-heading h2 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.8rem, 5.4vw, 5.2rem);
		line-height: 0.94;
	}

	.studio-copy {
		display: grid;
		gap: 2.2rem;
		padding-top: 0.2rem;
	}

	.studio-intro,
	.capability-note > p:last-child,
	.contact-copy p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.capability-note {
		display: grid;
		gap: 0.65rem;
		padding-top: 1.4rem;
		border-top: 1px solid var(--border);
	}

	.capability-note h3 {
		max-width: 18ch;
		margin: 0;
		font-size: clamp(1.5rem, 2.7vw, 2.35rem);
		font-weight: 650;
		line-height: 1.08;
	}

	.contact-section {
		padding-block: clamp(4rem, 7vw, 6rem);
		border-top: 1px solid var(--border);
		background: var(--paper);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2.5rem, 8vw, 8rem);
		align-items: end;
	}

	.contact-grid > div:first-child {
		display: grid;
		gap: 0.75rem;
	}

	.contact-grid h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.6rem, 5vw, 4.8rem);
		line-height: 0.97;
	}

	.contact-copy {
		display: grid;
		gap: 1.4rem;
		justify-items: start;
	}

	@media (max-width: 64rem) {
		.featured-project__caption,
		.studio-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.secondary-project {
			width: 100%;
		}

		.secondary-project__caption {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 46rem) {
		.hero__intro,
		.work-heading {
			align-items: flex-start;
			grid-template-columns: 1fr;
		}

		.work-heading {
			display: grid;
		}

		.hero h1 {
			font-size: clamp(3.05rem, 13vw, 4.45rem);
			line-height: 0.95;
		}
	}
</style>
