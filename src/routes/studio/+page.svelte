<script lang="ts">
	import { contentIsDemo } from '$lib/content/demo';
	import { studioCopy, studioProofItems } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Studio — Hellocraft Studios</title>
	<meta name="description" content={studioCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="studio-title">
		<div class="shell hero__inner">
			<p class="eyebrow">{studioCopy.hero.eyebrow}</p>
			<h1 id="studio-title">{studioCopy.hero.title}</h1>
			<p class="hero__body">{studioCopy.hero.body}</p>
		</div>
	</section>

	<section class="capabilities" aria-labelledby="studio-capabilities-title">
		<div class="shell split">
			<div>
				<p class="eyebrow">{studioCopy.capabilities.eyebrow}</p>
				<h2 id="studio-capabilities-title">{studioCopy.capabilities.title}</h2>
			</div>
			<p>{studioCopy.capabilities.body}</p>
		</div>
	</section>

	<section class="approach" aria-labelledby="studio-approach-title">
		<div class="shell split">
			<div>
				<p class="eyebrow">{studioCopy.approach.eyebrow}</p>
				<h2 id="studio-approach-title">{studioCopy.approach.title}</h2>
			</div>
			<p>{studioCopy.approach.body}</p>
		</div>
	</section>

	{#if !contentIsDemo && studioProofItems.length > 0}
		<section class="proof" aria-labelledby="studio-proof-title">
			<div class="shell split">
				<div>
					<p class="eyebrow">Proof</p>
					<h2 id="studio-proof-title">{studioCopy.proof.title}</h2>
				</div>
				<ul>
					{#each studioProofItems as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<section class="contact" aria-labelledby="studio-contact-title">
		<div class="shell contact__inner">
			<p class="eyebrow">Contact</p>
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
		border-bottom: 1px solid var(--border);
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
		padding-block: clamp(5rem, 10vw, 10rem);
	}

	h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(4.5rem, 10vw, 10rem);
		line-height: 0.84;
	}

	.hero__body {
		max-width: 41rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.5vw, 1.1rem);
	}

	.capabilities,
	.approach,
	.proof {
		padding-block: var(--space-section);
	}

	.capabilities,
	.proof {
		background: var(--surface);
	}

	.approach {
		background: var(--ink);
		color: var(--surface);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.split > div {
		display: grid;
		gap: 0.8rem;
	}

	h2 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(3rem, 6.5vw, 6.5rem);
		line-height: 0.9;
	}

	.split > p,
	.contact__footer p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.approach .split > p {
		color: rgb(255 255 255 / 58%);
	}

	.proof ul {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.proof li {
		padding-block: 1.2rem;
		border-bottom: 1px solid var(--border);
		font-size: clamp(1rem, 1.8vw, 1.35rem);
		font-weight: 700;
	}

	.contact {
		padding-block: var(--space-section);
		border-top: 1px solid var(--border);
		background: var(--paper);
	}

	.contact__inner {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	.contact h2 {
		max-width: 12ch;
		font-size: clamp(3.5rem, 8vw, 8rem);
	}

	.contact__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border);
	}

	@media (max-width: 60rem) {
		.split {
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
