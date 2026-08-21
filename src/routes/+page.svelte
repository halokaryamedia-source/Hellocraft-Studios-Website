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
			<div class="hero__masthead">
				<div class="hero__heading">
					<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
					<h1 id="home-title">{homeCopy.hero.title}</h1>
				</div>

				<div class="hero__aside">
					<p>{homeCopy.hero.body}</p>
					<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
				</div>
			</div>

			<div class="hero__media" aria-hidden="true">
				<ProjectMediaPlaceholder variant="hero" tone="dark" />
			</div>
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell">
			<header class="work-heading">
				<h2 id="home-work-title">{homeCopy.work.title}</h2>
				<div class="work-heading__aside">
					<p>{homeCopy.work.body}</p>
					<a class="text-link" href="/work">{homeCopy.work.viewAllLabel}</a>
				</div>
			</header>

			{#if featuredProjects[0]}
				{@const project = featuredProjects[0]}
				<article class="lead-project">
					<a class="project-media-link" href={`/work/${project.slug}`} aria-label={`View ${project.title}`}>
						<ProjectMediaPlaceholder tone="dark" />
					</a>

					<div class="lead-project__caption">
						<h3><a href={`/work/${project.slug}`}>{project.title}</a></h3>
						<div class="project-description">
							<p>{project.summary}</p>
							<a class="project-action" href={`/work/${project.slug}`}>View project</a>
						</div>
					</div>
				</article>
			{/if}

			{#if featuredProjects[1]}
				{@const project = featuredProjects[1]}
				<article class="secondary-project">
					<div class="secondary-project__copy">
						<h3><a href={`/work/${project.slug}`}>{project.title}</a></h3>
						<p>{project.summary}</p>
						<a class="project-action" href={`/work/${project.slug}`}>View project</a>
					</div>

					<a class="project-media-link" href={`/work/${project.slug}`} aria-label={`View ${project.title}`}>
						<ProjectMediaPlaceholder tone="neutral" />
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
			<div class="contact-heading">
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
		background: var(--surface);
	}

	.hero__inner {
		display: grid;
		gap: clamp(3.5rem, 7vw, 6.5rem);
		padding-block: clamp(4.5rem, 8vw, 7.5rem) clamp(3rem, 5vw, 4.5rem);
	}

	.hero__masthead {
		display: grid;
		grid-template-columns: minmax(0, 1.45fr) minmax(18rem, 0.55fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
	}

	.hero__heading {
		display: grid;
		gap: 1rem;
	}

	.hero h1 {
		max-width: 12.5ch;
		margin: 0;
		font-size: clamp(3.8rem, 6.4vw, 6.35rem);
		font-weight: 700;
		line-height: 0.94;
	}

	.hero__aside {
		display: grid;
		gap: 1.5rem;
		align-content: end;
		justify-items: start;
		padding-bottom: 0.35rem;
	}

	.hero__aside p {
		max-width: 30rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1.02rem, 1.25vw, 1.12rem);
		line-height: 1.6;
	}

	.hero__media {
		overflow: hidden;
		background: var(--ink);
	}

	.work-section {
		padding-block: clamp(5.5rem, 9vw, 9rem);
		background: var(--paper);
	}

	.work-heading {
		display: grid;
		grid-template-columns: minmax(10rem, 0.55fr) minmax(18rem, 0.45fr);
		gap: clamp(2.5rem, 8vw, 8rem);
		align-items: start;
		margin-bottom: clamp(3.5rem, 7vw, 6rem);
	}

	.work-heading h2 {
		margin: 0;
		font-size: clamp(1.2rem, 1.8vw, 1.55rem);
		font-weight: 680;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.work-heading__aside {
		display: grid;
		gap: 1rem;
		justify-items: start;
	}

	.work-heading__aside > p {
		max-width: 32rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	.project-media-link {
		display: block;
		text-decoration: none;
	}

	.lead-project {
		display: grid;
		gap: clamp(1.75rem, 3vw, 2.5rem);
	}

	.lead-project__caption {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(2.5rem, 7vw, 7rem);
		align-items: start;
	}

	.lead-project h3,
	.secondary-project h3 {
		margin: 0;
	}

	.lead-project h3 {
		max-width: 15ch;
		font-size: clamp(2.6rem, 4.7vw, 4.6rem);
		line-height: 0.98;
	}

	.lead-project h3 a,
	.secondary-project h3 a {
		text-decoration: none;
	}

	.project-description,
	.secondary-project__copy {
		display: grid;
		gap: 1.2rem;
		align-content: start;
		justify-items: start;
	}

	.project-description p,
	.secondary-project__copy > p {
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

	.secondary-project {
		display: grid;
		grid-template-columns: minmax(18rem, 0.7fr) minmax(0, 1.3fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: center;
		padding-top: clamp(5rem, 9vw, 8.5rem);
	}

	.secondary-project h3 {
		max-width: 13ch;
		font-size: clamp(2.2rem, 3.4vw, 3.35rem);
		line-height: 1;
	}

	.studio-section {
		padding-block: clamp(6rem, 10vw, 10rem);
		background: var(--ink);
		color: var(--surface);
	}

	.studio-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: start;
	}

	.studio-heading {
		display: grid;
		gap: 1.2rem;
	}

	.studio-heading .eyebrow,
	.capability-note .eyebrow {
		color: rgb(255 253 248 / 58%);
	}

	.studio-heading h2 {
		max-width: 13.5ch;
		margin: 0;
		font-size: clamp(3rem, 5.3vw, 5.25rem);
		font-weight: 680;
		line-height: 0.98;
	}

	.studio-copy {
		display: grid;
		gap: clamp(2.5rem, 5vw, 4.5rem);
		padding-top: 0.4rem;
	}

	.studio-intro,
	.capability-note > p:last-child {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 253 248 / 72%);
	}

	.studio-intro {
		font-size: clamp(1.08rem, 1.45vw, 1.25rem);
		line-height: 1.55;
	}

	.capability-note {
		display: grid;
		gap: 0.9rem;
	}

	.capability-note h3 {
		max-width: 18ch;
		margin: 0;
		font-size: clamp(1.8rem, 2.8vw, 2.65rem);
		font-weight: 640;
		line-height: 1.05;
	}

	.studio-section .text-link {
		color: var(--surface);
		text-decoration-color: rgb(255 253 248 / 38%);
	}

	.studio-section .text-link:hover,
	.studio-section .text-link:focus-visible {
		text-decoration-color: currentColor;
	}

	.contact-section {
		padding-block: clamp(5.5rem, 9vw, 8.5rem);
		background: var(--surface);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(3rem, 9vw, 9rem);
		align-items: end;
	}

	.contact-heading {
		display: grid;
		gap: 1rem;
	}

	.contact-heading h2 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.8rem, 5vw, 4.8rem);
		font-weight: 680;
		line-height: 0.99;
	}

	.contact-copy {
		display: grid;
		gap: 1.5rem;
		justify-items: start;
	}

	.contact-copy p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	@media (hover: hover) {
		.project-media-link {
			transition: opacity var(--motion-medium) ease-out;
		}

		.project-media-link:hover {
			opacity: 0.9;
		}

		.lead-project h3 a:hover,
		.secondary-project h3 a:hover {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-underline-offset: 0.18em;
		}
	}

	@media (max-width: 64rem) {
		.hero__masthead,
		.work-heading,
		.lead-project__caption,
		.secondary-project,
		.studio-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.hero__masthead,
		.studio-grid {
			gap: 2.75rem;
		}

		.hero__aside,
		.work-heading__aside,
		.contact-copy {
			max-width: 38rem;
		}

		.secondary-project {
			gap: 2rem;
		}

		.secondary-project__copy {
			max-width: 38rem;
		}

		.secondary-project .project-media-link {
			grid-row: 1;
		}
	}

	@media (max-width: 46rem) {
		.hero__inner {
			gap: 3rem;
			padding-top: 3.75rem;
		}

		.hero h1 {
			font-size: clamp(3.05rem, 13vw, 4.6rem);
			line-height: 0.96;
		}

		.lead-project h3 {
			font-size: clamp(2.45rem, 11vw, 3.6rem);
		}

		.studio-heading h2,
		.contact-heading h2 {
			font-size: clamp(2.7rem, 11.5vw, 3.75rem);
		}
	}
</style>
