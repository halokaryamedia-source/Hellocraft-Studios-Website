<script lang="ts">
	import { studioCopy, studioProofItems } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Studio — Hellocraft Studios</title>
	<meta name="description" content={studioCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="studio-title">
		<div class="shell hero__inner">
			<div class="hero__meta">
				<span class="section-index">01 / Studio</span>
				<p class="eyebrow">{studioCopy.hero.eyebrow}</p>
			</div>
			<h1 id="studio-title">{studioCopy.hero.title}</h1>
			<p class="hero__body">{studioCopy.hero.body}</p>
		</div>
	</section>

	<section class="capabilities" aria-labelledby="studio-capabilities-title">
		<div class="shell split">
			<div class="split__heading">
				<span class="section-index">02</span>
				<p class="eyebrow">{studioCopy.capabilities.eyebrow}</p>
				<h2 id="studio-capabilities-title">{studioCopy.capabilities.title}</h2>
			</div>
			<p>{studioCopy.capabilities.body}</p>
		</div>
	</section>

	<section class="approach" aria-labelledby="studio-approach-title">
		<div class="shell split">
			<div class="split__heading">
				<span class="section-index">03</span>
				<p class="eyebrow">{studioCopy.approach.eyebrow}</p>
				<h2 id="studio-approach-title">{studioCopy.approach.title}</h2>
			</div>
			<p>{studioCopy.approach.body}</p>
		</div>
	</section>

	{#if studioProofItems.length > 0}
		<section class="proof" aria-labelledby="studio-proof-title">
			<div class="shell proof__inner">
				<div class="proof__heading">
					<span class="section-index">04</span>
					<p class="eyebrow">Proof</p>
					<h2 id="studio-proof-title">{studioCopy.proof.title}</h2>
				</div>
				<ul>
					{#each studioProofItems as item, index (item)}
						<li><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<section class="contact" aria-labelledby="studio-contact-title">
		<div class="shell contact__inner">
			<div class="contact__meta">
				<span class="section-index">05</span>
				<p class="eyebrow">Contact</p>
			</div>
			<h2 id="studio-contact-title">{studioCopy.contact.title}</h2>
			<div class="contact__footer">
				<p>{studioCopy.contact.body}</p>
				<a class="text-link" href="/contact">{studioCopy.contact.actionLabel}</a>
			</div>
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

	.hero__meta,
	.contact__meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.hero__meta .eyebrow {
		color: rgb(255 255 255 / 58%);
	}

	h1 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(5rem, 13vw, 13rem);
		line-height: 0.75;
	}

	.hero__body {
		max-width: 43rem;
		margin: 0;
		color: rgb(255 255 255 / 62%);
		font-size: clamp(1rem, 1.6vw, 1.15rem);
	}

	.capabilities,
	.approach,
	.proof {
		padding-block: var(--space-section);
	}

	.capabilities {
		background: var(--surface);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.split__heading {
		display: grid;
		gap: 1rem;
	}

	h2 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(3rem, 7vw, 7rem);
		line-height: 0.84;
	}

	.split > p,
	.contact__footer p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.approach {
		border-block: 1px solid var(--border);
		background: var(--paper);
	}

	.proof {
		background: var(--surface);
	}

	.proof__inner {
		display: grid;
		grid-template-columns: minmax(0, 0.75fr) minmax(18rem, 1.25fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.proof__heading {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.proof ul {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.proof li {
		display: grid;
		grid-template-columns: 3.5rem minmax(0, 1fr);
		gap: 1.25rem;
		padding-block: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.proof li span {
		color: var(--brand-strong);
		font-weight: 900;
	}

	.proof li p {
		margin: 0;
		font-size: clamp(1.1rem, 2vw, 1.5rem);
		font-weight: 700;
	}

	.contact {
		padding-block: var(--space-section);
		border-top: 4px solid var(--brand);
		background: var(--ink);
		color: var(--surface);
	}

	.contact__inner {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
	}

	.contact h2 {
		max-width: 12ch;
		font-size: clamp(4rem, 10vw, 10rem);
	}

	.contact__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
	}

	.contact__footer p {
		color: rgb(255 255 255 / 58%);
	}

	.contact .text-link {
		color: var(--surface);
	}

	@media (max-width: 60rem) {
		.split,
		.proof__inner {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 44rem) {
		.contact__footer {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}
</style>
