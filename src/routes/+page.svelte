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
			<div class="hero__statement">
				<div class="hero__heading">
					<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
					<h1 id="home-title">{homeCopy.hero.title}</h1>
				</div>

				<div class="hero__support">
					<p>{homeCopy.hero.body}</p>
					<a class="text-link" href="/work">{homeCopy.hero.primaryActionLabel}</a>
				</div>
			</div>

			<div class="hero__visual" aria-hidden="true">
				<div class="hero__visual-main">
					<ProjectMediaPlaceholder tone="dark" />
				</div>
				<div class="hero__visual-brand">
					<ProjectMediaPlaceholder tone="brand" />
				</div>
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
					<div class="lead-project__media">
						<a class="project-media-link" href={`/work/${project.slug}`} aria-label={`View ${project.title}`}>
							<ProjectMediaPlaceholder tone="dark" />
						</a>
					</div>

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
		gap: clamp(4rem, 8vw, 7rem);
		padding-block: clamp(5rem, 8vw, 7.5rem) clamp(4.5rem, 7vw, 6.5rem);
	}

	.hero__statement {
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
		max-width: 11.5ch;
		margin: 0;
		font-size: clamp(4rem, 6.8vw, 6.8rem);
		font-weight: 700;
		line-height: 0.92;
	}

	.hero__support {
		display: grid;
		gap: 1.5rem;
		align-content: end;
		justify-items: start;
		padding-bottom: 0.35rem;
	}

	.hero__support p {
		max-width: 30rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1.02rem, 1.25vw, 1.12rem);
		line-height: 1.6;
	}

	.hero__visual {
		position: relative;
		padding-right: clamp(2rem, 5vw, 5rem);
		padding-bottom: clamp(1.5rem, 3vw, 3rem);
	}

	.hero__visual-main {
		width: min(100%, 76rem);
		overflow: hidden;
	}

	.hero__visual-brand {
		position: absolute;
		right: 0;
		bottom: 0;
		width: clamp(12rem, 22vw, 20rem);
		overflow: hidden;
	}

	.work-section {
		padding-block: clamp(6rem, 10vw, 10rem);
		background: var(--paper);
	}

	.work-heading {
		display: grid;
		grid-template-columns: minmax(10rem, 0.55fr) minmax(18rem, 0.45fr);
		gap: clamp(2.5rem, 8vw, 8rem);
		align-items: start;
		margin-bottom: clamp(4rem, 8vw, 7rem);
	}

	.work-heading h2 {
		margin: 0;
		font-size: clamp(1.7rem, 2.5vw, 2.3rem);
		font-weight: 680;
		line-height: 1.05;
		letter-spacing: -0.025em;
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
		gap: clamp(2rem, 4vw, 3rem);
	}

	.lead-project__media {
		width: min(100%, 75rem);
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
		font-size: clamp(2.65rem, 4.8vw, 4.7rem);
		line-height: 0.97;
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
		grid-template-columns: minmax(18rem, 0.68fr) minmax(0, 1.32fr);
		gap: clamp(3.5rem, 9vw, 9rem);
		align-items: center;
		padding-top: clamp(6.5rem, 11vw, 11rem);
	}

	.secondary-project h3 {
		max-width: 13ch;
		font-size: clamp(2.25rem, 3.5vw, 3.45rem);
		line-height: 0.99;
	}

	.studio-section {
		padding-block: clamp(6rem, 10vw, 9.5rem);
		background: var(--surface-secondary);
		color: var(--ink);
	}

	.studio-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: start;
	}

	.studio-heading {
		display: grid;
		gap: 1.1rem;
	}

	.studio-heading h2 {
		max-width: 13.5ch;
		margin: 0;
		font-size: clamp(2.9rem, 4.9vw, 4.8rem);
		font-weight: 680;
		line-height: 0.98;
	}

	.studio-copy {
		display: grid;
		gap: clamp(2.75rem, 5vw, 4.5rem);
		padding-top: 0.4rem;
	}

	.studio-intro,
	.capability-note > p:last-child {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.studio-intro {
		font-size: clamp(1.08rem, 1.4vw, 1.22rem);
		line-height: 1.58;
	}

	.capability-note {
		display: grid;
		gap: 0.9rem;
		padding-top: 1.75rem;
		border-top: 1px solid var(--border);
	}

	.capability-note h3 {
		max-width: 18ch;
		margin: 0;
		font-size: clamp(1.75rem, 2.7vw, 2.55rem);
		font-weight: 640;
		line-height: 1.05;
	}

	.contact-section {
		padding-block: clamp(5.5rem, 8vw, 7.5rem);
		background: var(--surface);
	}

	.contact-grid {
		display: grid;
		gap: clamp(2.75rem, 5vw, 4.5rem);
	}

	.contact-heading {
		display: grid;
		gap: 1rem;
	}

	.contact-heading h2 {
		max-width: 17ch;
		margin: 0;
		font-size: clamp(2.8rem, 4.8vw, 4.7rem);
		font-weight: 680;
		line-height: 0.99;
	}

	.contact-copy {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
	}

	.contact-copy p {
		max-width: 34rem;
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
		.hero__statement,
		.work-heading,
		.lead-project__caption,
		.secondary-project,
		.studio-grid {
			grid-template-columns: 1fr;
		}

		.hero__statement,
		.studio-grid {
			gap: 2.75rem;
		}

		.hero__support,
		.work-heading__aside {
			max-width: 38rem;
		}

		.hero__visual {
			padding-right: clamp(2rem, 6vw, 4rem);
		}

		.secondary-project {
			gap: 2.25rem;
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
			gap: 3.5rem;
			padding-top: 3.75rem;
		}

		.hero h1 {
			font-size: clamp(3.1rem, 13.5vw, 4.75rem);
			line-height: 0.95;
		}

		.hero__visual {
			padding-right: 0;
			padding-bottom: 0;
		}

		.hero__visual-brand {
			position: relative;
			right: auto;
			bottom: auto;
			width: 58%;
			margin-top: -1.75rem;
			margin-bottom: 0;
			justify-self: end;
		}

		.lead-project h3 {
			font-size: clamp(2.45rem, 11vw, 3.6rem);
		}

		.secondary-project {
			padding-top: 6rem;
		}

		.studio-heading h2,
		.contact-heading h2 {
			font-size: clamp(2.65rem, 11.5vw, 3.7rem);
		}

		.contact-copy {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}
</style>
