<script lang="ts">
	import { contactCopy, contactMethods } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Contact — Hellocraft Studios</title>
	<meta name="description" content={contactCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="contact-title">
		<div class="shell hero__inner">
			<div class="hero__meta">
				<span class="section-index">01 / Contact</span>
				<p class="eyebrow">{contactCopy.hero.eyebrow}</p>
			</div>
			<h1 id="contact-title">{contactCopy.hero.title}</h1>
			<p class="hero__body">{contactCopy.hero.body}</p>
		</div>
	</section>

	<section class="methods" aria-labelledby="contact-methods-title">
		<div class="shell split">
			<div class="section-heading">
				<span class="section-index">02</span>
				<p class="eyebrow">Channels</p>
				<h2 id="contact-methods-title">{contactCopy.methods.title}</h2>
			</div>

			<div>
				{#if contactMethods.length > 0}
					<ul class="contact-list">
						{#each contactMethods as method (method.href)}
							<li><a href={method.href} rel={method.external ? 'noreferrer' : undefined}>{method.label}<span aria-hidden="true">↗</span></a></li>
						{/each}
					</ul>
				{:else}
					<div class="pending-state">
						<p>{contactCopy.methods.emptyState}</p>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<section class="inquiry" aria-labelledby="contact-inquiry-title">
		<div class="shell split">
			<div class="section-heading">
				<span class="section-index">03</span>
				<p class="eyebrow">Inquiry</p>
				<h2 id="contact-inquiry-title">{contactCopy.inquiry.title}</h2>
			</div>
			<p>{contactCopy.inquiry.body}</p>
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
		padding-block: clamp(5rem, 11vw, 11rem);
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
		max-width: 9ch;
		margin: 0;
		font-size: clamp(5rem, 13vw, 13rem);
		line-height: 0.74;
	}

	.hero__body {
		max-width: 43rem;
		margin: 0;
		color: rgb(255 255 255 / 62%);
	}

	.methods,
	.inquiry {
		padding-block: var(--space-section);
	}

	.methods {
		background: var(--surface);
	}

	.inquiry {
		border-top: 4px solid var(--brand);
		background: var(--paper);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1.2fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.section-heading {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	h2 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(3rem, 7vw, 7rem);
		line-height: 0.84;
	}

	.contact-list {
		display: grid;
		gap: 0;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.contact-list a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 3rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1.2rem, 2.5vw, 2rem);
		font-weight: 850;
		text-decoration: none;
	}

	.pending-state {
		padding-block: 2rem;
		border-block: 1px solid var(--border);
	}

	.pending-state p,
	.inquiry .split > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	@media (max-width: 60rem) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
