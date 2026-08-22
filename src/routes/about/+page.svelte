<script lang="ts">
	import { contentIsDemo } from '$lib/content/demo';
	import { aboutCopy, aboutExperienceItems } from '$lib/content/pages';
</script>

<svelte:head>
	<title>About — Hellocraft Studios</title>
	<meta name="description" content={aboutCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="about-title">
		<div class="shell hero__inner">
			<div class="hero__heading">
				<p class="section-label">{aboutCopy.hero.label}</p>
				<h1 id="about-title">{aboutCopy.hero.title}</h1>
			</div>

			<div class="hero__support">
				<p>{aboutCopy.hero.body}</p>
			</div>
		</div>
	</section>

	<section class="what-we-do" aria-labelledby="about-what-we-do-title">
		<div class="shell section-layout">
			<div class="section-heading">
				<p class="section-label">{aboutCopy.whatWeDo.label}</p>
				<h2 id="about-what-we-do-title">{aboutCopy.whatWeDo.title}</h2>
			</div>

			<div class="section-copy section-copy--lead">
				<p>{aboutCopy.whatWeDo.body}</p>
			</div>
		</div>
	</section>

	<section class="how-we-work" aria-labelledby="about-how-we-work-title">
		<div class="shell how-we-work__inner">
			<div class="how-we-work__intro">
				<p class="section-label">{aboutCopy.howWeWork.label}</p>
				<h2 id="about-how-we-work-title">{aboutCopy.howWeWork.title}</h2>
			</div>

			<div class="how-we-work__body">
				<p>{aboutCopy.howWeWork.body}</p>
			</div>
		</div>
	</section>

	{#if !contentIsDemo && aboutExperienceItems.length > 0}
		<section class="experience" aria-labelledby="about-experience-title">
			<div class="shell section-layout">
				<div class="section-heading">
					<p class="section-label">Experience</p>
					<h2 id="about-experience-title">{aboutCopy.experience.title}</h2>
				</div>

				<ul class="experience-list">
					{#each aboutExperienceItems as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<section class="contact" aria-labelledby="about-contact-title">
		<div class="shell contact__inner">
			<div class="contact__heading">
				<p class="section-label">Contact</p>
				<h2 id="about-contact-title">{aboutCopy.contact.title}</h2>
			</div>

			<div class="contact__support">
				<p>{aboutCopy.contact.body}</p>
				<a class="text-link" href="/contact">{aboutCopy.contact.actionLabel}</a>
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
		grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
		padding-block: clamp(5rem, 8vw, 7.5rem) clamp(5.5rem, 9vw, 8rem);
	}

	.hero__heading,
	.section-heading,
	.how-we-work__intro,
	.contact__heading {
		display: grid;
		gap: 1rem;
	}

	h1 {
		max-width: 12.5ch;
		margin: 0;
		font-size: clamp(3.6rem, 6vw, 6rem);
		line-height: 0.94;
	}

	.hero__support {
		display: grid;
		align-content: end;
		padding-bottom: 0.35rem;
	}

	.hero__support p,
	.section-copy p,
	.how-we-work__body p,
	.contact__support p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.hero__support p,
	.section-copy--lead p {
		font-size: clamp(1.05rem, 1.4vw, 1.22rem);
		line-height: 1.58;
	}

	.what-we-do {
		padding-block: clamp(6rem, 10vw, 9.5rem);
		background: var(--paper);
	}

	.section-layout {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: start;
	}

	.section-heading h2,
	.how-we-work__intro h2,
	.contact__heading h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.8rem, 4.8vw, 4.7rem);
		font-weight: 680;
		line-height: 0.98;
	}

	.section-copy {
		padding-top: 0.3rem;
	}

	.how-we-work {
		padding-block: clamp(6rem, 10vw, 9rem);
		background: var(--surface-secondary);
	}

	.how-we-work__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: end;
	}

	.how-we-work__body {
		display: grid;
		align-content: end;
		padding-bottom: 0.3rem;
	}

	.how-we-work__body p {
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	.experience {
		padding-block: clamp(5.5rem, 9vw, 8.5rem);
		background: var(--surface);
	}

	.experience-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.experience-list li {
		padding-block: 1.15rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1rem, 1.5vw, 1.18rem);
	}

	.contact {
		padding-block: clamp(5.5rem, 8vw, 7.5rem);
		background: var(--surface);
	}

	.contact__inner {
		display: grid;
		gap: clamp(2.75rem, 5vw, 4.5rem);
		padding-top: clamp(2rem, 4vw, 3rem);
		border-top: 1px solid var(--border);
	}

	.contact__heading h2 {
		max-width: 17ch;
	}

	.contact__support {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
	}

	.contact__support p {
		max-width: 34rem;
	}

	@media (max-width: 60rem) {
		.hero__inner,
		.section-layout,
		.how-we-work__inner {
			grid-template-columns: 1fr;
		}

		.hero__inner,
		.section-layout,
		.how-we-work__inner {
			gap: 2.75rem;
		}

		.hero__support,
		.section-copy,
		.how-we-work__body,
		.contact__support {
			max-width: 38rem;
		}
	}

	@media (max-width: 44rem) {
		h1 {
			font-size: clamp(3.1rem, 13vw, 4.7rem);
		}

		.section-heading h2,
		.how-we-work__intro h2,
		.contact__heading h2 {
			font-size: clamp(2.55rem, 11vw, 3.6rem);
		}

		.contact__support {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}
</style>
