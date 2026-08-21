<script lang="ts">
	import { studioCopy, studioProofItems } from '$lib/content/pages';
</script>

<svelte:head>
	<title>Studio — Hellocraft Studios</title>
	<meta name="description" content={studioCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="studio-title">
		<div class="shell editorial-frame editorial-frame--dark hero__frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>01 / 05</span>
				<span>Studio</span>
			</aside>
			<div class="editorial-body hero__body">
				<p class="eyebrow">{studioCopy.hero.eyebrow}</p>
				<h1 id="studio-title">{studioCopy.hero.title}</h1>
				<p>{studioCopy.hero.body}</p>
			</div>
		</div>
	</section>

	<section class="capabilities" aria-labelledby="studio-capabilities-title">
		<div class="shell editorial-frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>02 / 05</span>
				<span>Capabilities</span>
			</aside>
			<div class="editorial-body split">
				<div class="split__heading">
					<p class="eyebrow">{studioCopy.capabilities.eyebrow}</p>
					<h2 id="studio-capabilities-title">{studioCopy.capabilities.title}</h2>
				</div>
				<p>{studioCopy.capabilities.body}</p>
			</div>
		</div>
	</section>

	<section class="approach" aria-labelledby="studio-approach-title">
		<div class="shell editorial-frame">
			<aside class="editorial-rail" aria-hidden="true">
				<span>03 / 05</span>
				<span>Approach</span>
			</aside>
			<div class="editorial-body split">
				<div class="split__heading">
					<p class="eyebrow">{studioCopy.approach.eyebrow}</p>
					<h2 id="studio-approach-title">{studioCopy.approach.title}</h2>
				</div>
				<p>{studioCopy.approach.body}</p>
			</div>
		</div>
	</section>

	{#if studioProofItems.length > 0}
		<section class="proof" aria-labelledby="studio-proof-title">
			<div class="shell editorial-frame">
				<aside class="editorial-rail" aria-hidden="true">
					<span>04 / 05</span>
					<span>Proof</span>
				</aside>
				<div class="editorial-body proof__inner">
					<div class="proof__heading">
						<p class="eyebrow">Credibility</p>
						<h2 id="studio-proof-title">{studioCopy.proof.title}</h2>
					</div>
					<ul>
						{#each studioProofItems as item, index (item)}
							<li><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
						{/each}
					</ul>
				</div>
			</div>
		</section>
	{/if}

	<section class="contact" aria-labelledby="studio-contact-title">
		<div class="shell editorial-frame editorial-frame--dark">
			<aside class="editorial-rail" aria-hidden="true">
				<span>05 / 05</span>
				<span>Contact</span>
			</aside>
			<div class="editorial-body contact__body">
				<p class="eyebrow">Contact</p>
				<h2 id="studio-contact-title">{studioCopy.contact.title}</h2>
				<div class="contact__footer">
					<p>{studioCopy.contact.body}</p>
					<a class="text-link" href="/contact">{studioCopy.contact.actionLabel}</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.hero {
		background: var(--ink);
		color: var(--surface);
	}

	.hero__frame {
		padding-block: clamp(5rem, 10vw, 10rem);
	}

	.hero__body {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3.5rem);
	}

	h1 {
		max-width: 10.5ch;
		margin: 0;
		font-size: clamp(4.5rem, 11vw, 11rem);
		line-height: 0.78;
	}

	.hero__body > p:last-child {
		max-width: 41rem;
		margin: 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--inverse-border);
		color: rgb(255 255 255 / 60%);
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
		border-block: 1px solid var(--border);
		background: var(--paper);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.75fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.split__heading {
		display: grid;
		gap: 1rem;
	}

	h2 {
		max-width: 11ch;
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

	.proof__inner {
		display: grid;
		grid-template-columns: minmax(0, 0.72fr) minmax(18rem, 1.28fr);
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
		background: var(--ink);
		color: var(--surface);
	}

	.contact__body {
		display: grid;
		gap: clamp(2rem, 5vw, 4rem);
	}

	.contact h2 {
		max-width: 11ch;
		font-size: clamp(4rem, 9.5vw, 9.5rem);
	}

	.contact__footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 2rem;
		align-items: end;
		padding-top: 1.25rem;
		border-top: 1px solid var(--inverse-border);
	}

	.contact__footer p {
		color: rgb(255 255 255 / 56%);
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
