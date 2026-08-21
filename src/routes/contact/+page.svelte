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
			<div class="hero__copy">
				<p class="eyebrow">{contactCopy.hero.eyebrow}</p>
				<h1 id="contact-title">{contactCopy.hero.title}</h1>
				<p>{contactCopy.hero.body}</p>
			</div>
			<div class="hero__art" aria-hidden="true">
				<div class="hero__star"></div>
				<span>HELLO?</span>
			</div>
		</div>
	</section>

	<section class="methods" aria-labelledby="contact-methods-title">
		<div class="shell methods__inner">
			<div>
				<p class="eyebrow">01 / Channels</p>
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
						<span aria-hidden="true">✦</span>
						<p>{contactCopy.methods.emptyState}</p>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<section class="inquiry" aria-labelledby="contact-inquiry-title">
		<div class="shell inquiry__inner">
			<div class="inquiry__mark" aria-hidden="true"></div>
			<div>
				<p class="eyebrow">02 / Inquiry</p>
				<h2 id="contact-inquiry-title">{contactCopy.inquiry.title}</h2>
			</div>
			<p>{contactCopy.inquiry.body}</p>
		</div>
	</section>
</main>

<style>
	.shell {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.hero {
		background: var(--ink);
		color: var(--surface);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.65fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: center;
		padding-block: clamp(4rem, 10vw, 10rem);
	}

	.hero__copy {
		display: grid;
		gap: 1.2rem;
	}

	.hero .eyebrow {
		color: var(--brand);
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(4rem, 10vw, 10rem);
		line-height: 0.82;
	}

	.hero__copy > p:last-child {
		max-width: var(--measure);
		margin: 0;
		color: rgb(255 255 255 / 66%);
	}

	.hero__art {
		position: relative;
		display: grid;
		place-items: center;
		min-height: clamp(20rem, 40vw, 34rem);
		overflow: hidden;
		border: 1px solid var(--inverse-border);
		border-radius: var(--radius-md);
		background: #17191b;
	}

	.hero__star {
		width: min(68%, 20rem);
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
		transform: rotate(-8deg);
	}

	.hero__art span {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(2.5rem, 7vw, 6rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		line-height: 0.8;
	}

	.methods {
		padding-block: var(--space-section);
		background: var(--surface);
	}

	.methods__inner,
	.inquiry__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.methods__inner > div:first-child,
	.inquiry__inner > div:nth-child(2) {
		display: grid;
		gap: 1rem;
	}

	h2 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.5rem, 6vw, 6rem);
		line-height: 0.9;
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
		justify-content: space-between;
		gap: 1rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1.1rem, 2vw, 1.5rem);
		font-weight: 850;
		text-underline-offset: 0.3em;
	}

	.pending-state {
		display: grid;
		gap: 1rem;
		padding: clamp(1.5rem, 4vw, 2.5rem);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background: var(--paper);
	}

	.pending-state span {
		color: var(--brand-strong);
		font-size: 2rem;
	}

	.pending-state p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.inquiry {
		padding-block: var(--space-section);
		background: var(--brand);
	}

	.inquiry__inner {
		grid-template-columns: auto minmax(0, 1.05fr) minmax(18rem, 0.75fr);
	}

	.inquiry__inner > p {
		max-width: var(--measure);
		margin: 0;
		color: rgb(12 13 14 / 70%);
	}

	.inquiry__mark {
		width: clamp(3rem, 6vw, 5rem);
		aspect-ratio: 1;
		background: var(--surface);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}

	@media (max-width: 60rem) {
		.hero__inner,
		.methods__inner,
		.inquiry__inner {
			grid-template-columns: 1fr;
		}
	}
</style>
