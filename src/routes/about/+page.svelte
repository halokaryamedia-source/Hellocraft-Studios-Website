<script lang="ts">
	import { contentIsDemo } from '$lib/content/demo';
	import { aboutCopy, studioProofItems } from '$lib/content/pages';
</script>

<svelte:head>
	<title>About — Hellocraft Studios</title>
	<meta name="description" content={aboutCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="about-title">
		<div class="shell hero__inner">
			<div class="hero__heading">
				<p class="eyebrow">{aboutCopy.hero.eyebrow}</p>
				<h1 id="about-title">{aboutCopy.hero.title}</h1>
			</div>

			<div class="hero__support">
				<p>{aboutCopy.hero.body}</p>
			</div>
		</div>
	</section>

	<section class="capabilities" aria-labelledby="about-capabilities-title">
		<div class="shell section-layout">
			<div class="section-heading">
				<p class="eyebrow">{aboutCopy.capabilities.eyebrow}</p>
				<h2 id="about-capabilities-title">{aboutCopy.capabilities.title}</h2>
			</div>

			<div class="section-copy section-copy--lead">
				<p>{aboutCopy.capabilities.body}</p>
			</div>
		</div>
	</section>

	<section class="approach" aria-labelledby="about-approach-title">
		<div class="shell approach__inner">
			<div class="approach__intro">
				<p class="eyebrow">{aboutCopy.approach.eyebrow}</p>
				<h2 id="about-approach-title">{aboutCopy.approach.title}</h2>
			</div>

			<div class="approach__body">
				<p>{aboutCopy.approach.body}</p>
			</div>
		</div>
	</section>

	{#if !contentIsDemo && studioProofItems.length > 0}
		<section class="proof" aria-labelledby="about-proof-title">
			<div class="shell section-layout">
				<div class="section-heading">
					<p class="eyebrow">Proof</p>
					<h2 id="about-proof-title">{aboutCopy.proof.title}</h2>
				</div>

				<ul class="proof-list">
					{#each studioProofItems as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<section class="contact" aria-labelledby="about-contact-title">
		<div class="shell contact__inner">
			<div class="contact__heading">
				<p class="eyebrow">Contact</p>
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
	.approach__intro,
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
	.approach__body p,
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

	.capabilities {
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
	.approach__intro h2,
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

	.approach {
		padding-block: clamp(6rem, 10vw, 9rem);
		background: var(--surface-secondary);
	}

	.approach__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: end;
	}

	.approach__body {
		display: grid;
		align-content: end;
		padding-bottom: 0.3rem;
	}

	.approach__body p {
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	.proof {
		padding-block: clamp(5.5rem, 9vw, 8.5rem);
		background: var(--surface);
	}

	.proof-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.proof-list li {
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
		.approach__inner {
			grid-template-columns: 1fr;
		}

		.hero__inner,
		.section-layout,
		.approach__inner {
			gap: 2.75rem;
		}

		.hero__support,
		.section-copy,
		.approach__body,
		.contact__support {
			max-width: 38rem;
		}
	}

	@media (max-width: 44rem) {
		h1 {
			font-size: clamp(3.1rem, 13vw, 4.7rem);
		}

		.section-heading h2,
		.approach__intro h2,
		.contact__heading h2 {
			font-size: clamp(2.55rem, 11vw, 3.6rem);
		}

		.contact__support {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}
</style>
