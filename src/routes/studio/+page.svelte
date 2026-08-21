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
			<div class="hero__copy">
				<p class="eyebrow">{studioCopy.hero.eyebrow}</p>
				<h1 id="studio-title">{studioCopy.hero.title}</h1>
				<p>{studioCopy.hero.body}</p>
			</div>
			<div class="hero__art" aria-hidden="true">
				<div class="hero__star"></div>
				<span>STUDIO</span>
			</div>
		</div>
	</section>

	<section class="capabilities" aria-labelledby="studio-capabilities-title">
		<div class="shell split">
			<div>
				<p class="eyebrow">01 / {studioCopy.capabilities.eyebrow}</p>
				<h2 id="studio-capabilities-title">{studioCopy.capabilities.title}</h2>
			</div>
			<p>{studioCopy.capabilities.body}</p>
		</div>
	</section>

	<section class="approach" aria-labelledby="studio-approach-title">
		<div class="shell approach__inner">
			<div class="approach__mark" aria-hidden="true"></div>
			<div>
				<p class="eyebrow">02 / {studioCopy.approach.eyebrow}</p>
				<h2 id="studio-approach-title">{studioCopy.approach.title}</h2>
			</div>
			<p>{studioCopy.approach.body}</p>
		</div>
	</section>

	{#if studioProofItems.length > 0}
		<section class="proof" aria-labelledby="studio-proof-title">
			<div class="shell">
				<div class="proof__heading">
					<p class="eyebrow">03 / Proof</p>
					<h2 id="studio-proof-title">{studioCopy.proof.title}</h2>
				</div>
				<ul>
					{#each studioProofItems as item, index (item)}
						<li><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<section class="contact" aria-labelledby="studio-contact-title">
		<div class="shell contact__inner">
			<h2 id="studio-contact-title">{studioCopy.contact.title}</h2>
			<div>
				<p>{studioCopy.contact.body}</p>
				<a href="/contact">{studioCopy.contact.actionLabel}<span aria-hidden="true">↗</span></a>
			</div>
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
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: center;
		padding-block: clamp(4rem, 9vw, 9rem);
	}

	.hero__copy {
		display: grid;
		gap: 1.2rem;
	}

	h1 {
		max-width: 11ch;
		margin: 0;
		font-size: clamp(4rem, 9vw, 9rem);
		line-height: 0.84;
	}

	.hero__copy > p:last-child {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.7vw, 1.2rem);
	}

	.hero__art {
		position: relative;
		min-height: clamp(24rem, 48vw, 42rem);
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background: var(--brand);
	}

	.hero__star {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(65%, 24rem);
		aspect-ratio: 1;
		background: var(--surface);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
		transform: translate(-50%, -50%) rotate(7deg);
	}

	.hero__art span {
		position: absolute;
		right: 1rem;
		bottom: 0.75rem;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(2.5rem, 8vw, 7rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		line-height: 0.75;
	}

	.capabilities,
	.proof {
		padding-block: var(--space-section);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.split > div {
		display: grid;
		gap: 1rem;
	}

	h2 {
		max-width: 13ch;
		margin: 0;
		font-size: clamp(2.5rem, 6vw, 6rem);
		line-height: 0.9;
	}

	.split > p,
	.approach__inner > p,
	.contact p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.approach {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.approach__inner {
		display: grid;
		grid-template-columns: auto minmax(0, 1.1fr) minmax(18rem, 0.75fr);
		gap: clamp(1.5rem, 5vw, 5rem);
		align-items: start;
	}

	.approach__inner > div:nth-child(2) {
		display: grid;
		gap: 1rem;
	}

	.approach__inner > p {
		color: rgb(255 255 255 / 66%);
	}

	.approach__mark {
		width: clamp(3rem, 6vw, 5rem);
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}

	.proof__heading {
		display: grid;
		gap: 0.8rem;
		margin-bottom: clamp(2rem, 5vw, 4rem);
	}

	.proof ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.proof li {
		display: grid;
		align-content: space-between;
		gap: 3rem;
		min-height: 15rem;
		padding: 1.25rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		background: var(--surface);
	}

	.proof li span {
		color: var(--brand-strong);
		font-weight: 900;
	}

	.proof li p {
		margin: 0;
		font-size: clamp(1rem, 1.6vw, 1.2rem);
		font-weight: 750;
	}

	.contact {
		padding-block: var(--space-section);
		background: var(--brand);
	}

	.contact__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: end;
	}

	.contact h2 {
		font-size: clamp(3.5rem, 8vw, 8rem);
	}

	.contact__inner > div {
		display: grid;
		gap: 1.25rem;
	}

	.contact p {
		color: rgb(12 13 14 / 70%);
	}

	.contact a {
		display: inline-flex;
		justify-content: space-between;
		gap: 1rem;
		width: fit-content;
		min-width: 11rem;
		padding: 0.9rem 1.1rem;
		border-radius: 999px;
		background: var(--ink);
		color: var(--surface);
		font-weight: 800;
		text-decoration: none;
	}

	@media (max-width: 60rem) {
		.hero__inner,
		.split,
		.approach__inner,
		.contact__inner {
			grid-template-columns: 1fr;
		}

		.proof ul {
			grid-template-columns: 1fr;
		}

		.proof li {
			min-height: auto;
		}
	}
</style>
