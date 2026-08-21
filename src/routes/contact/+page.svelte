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
			<p class="eyebrow">{contactCopy.hero.eyebrow}</p>
			<h1 id="contact-title">{contactCopy.hero.title}</h1>
			<p class="hero__body">{contactCopy.hero.body}</p>
		</div>
	</section>

	<section class="methods" aria-labelledby="contact-methods-title">
		<div class="shell split">
			<div>
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
			<div>
				<p class="eyebrow">Inquiry</p>
				<h2 id="contact-inquiry-title">{contactCopy.inquiry.title}</h2>
			</div>
			<p>{contactCopy.inquiry.body}</p>
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
		gap: clamp(1.5rem, 4vw, 3rem);
		padding-block: clamp(5rem, 10vw, 10rem);
	}

	h1 {
		max-width: 10ch;
		margin: 0;
		font-size: clamp(4.5rem, 10vw, 10rem);
		line-height: 0.84;
	}

	.hero__body {
		max-width: 43rem;
		margin: 0;
		color: var(--text-muted);
	}

	.methods,
	.inquiry {
		padding-block: var(--space-section);
	}

	.methods {
		background: var(--surface);
	}

	.inquiry {
		background: var(--ink);
		color: var(--surface);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1.2fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.split > div:first-child {
		display: grid;
		gap: 0.8rem;
	}

	h2 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(3rem, 6.5vw, 6.5rem);
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
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 3rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1.2rem, 2.5vw, 2rem);
		font-weight: 800;
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

	.inquiry .split > p {
		color: rgb(255 255 255 / 58%);
	}

	@media (max-width: 60rem) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
