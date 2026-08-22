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
			<div class="hero__heading">
				<p class="section-label">{contactCopy.hero.label}</p>
				<h1 id="contact-title">{contactCopy.hero.title}</h1>
			</div>

			<div class="hero__support">
				<p>{contactCopy.hero.body}</p>
			</div>
		</div>
	</section>

	<section class="methods" aria-labelledby="contact-methods-title">
		<div class="shell methods__inner">
			<div class="methods__heading">
				<p class="section-label">Contact</p>
				<h2 id="contact-methods-title">{contactCopy.methods.title}</h2>
			</div>

			<div class="methods__content">
				{#if contactMethods.length > 0}
					<ul class="contact-list">
						{#each contactMethods as method (method.href)}
							<li>
								<a href={method.href} rel={method.external ? 'noreferrer' : undefined}>{method.label}</a>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="pending-state">{contactCopy.methods.emptyState}</p>
				{/if}
			</div>
		</div>
	</section>

	<section class="inquiry" aria-labelledby="contact-inquiry-title">
		<div class="shell inquiry__inner">
			<div class="inquiry__heading">
				<p class="section-label">Project inquiries</p>
				<h2 id="contact-inquiry-title">{contactCopy.inquiry.title}</h2>
			</div>

			<div class="inquiry__copy">
				<p>{contactCopy.inquiry.body}</p>
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
	.methods__heading,
	.inquiry__heading {
		display: grid;
		gap: 1rem;
	}

	h1 {
		max-width: 10.5ch;
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
	.inquiry__copy p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.hero__support p {
		font-size: clamp(1.05rem, 1.4vw, 1.22rem);
		line-height: 1.58;
	}

	.methods {
		padding-block: clamp(6rem, 10vw, 9rem);
		background: var(--paper);
	}

	.methods__inner {
		display: grid;
		grid-template-columns: minmax(12rem, 0.48fr) minmax(0, 1.52fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: start;
	}

	.methods__heading h2,
	.inquiry__heading h2 {
		max-width: 15ch;
		margin: 0;
		font-size: clamp(2.75rem, 4.7vw, 4.6rem);
		font-weight: 680;
		line-height: 0.98;
	}

	.contact-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.contact-list li {
		border-bottom: 1px solid var(--border);
	}

	.contact-list a {
		display: flex;
		align-items: center;
		min-height: 4rem;
		padding-block: 1.1rem;
		font-size: clamp(1.35rem, 2.7vw, 2.35rem);
		font-weight: 680;
		line-height: 1.05;
		text-decoration: none;
	}

	.contact-list a:hover,
	.contact-list a:focus-visible {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.2em;
	}

	.pending-state {
		max-width: var(--measure);
		margin: 0;
		padding-block: 1.5rem;
		border-block: 1px solid var(--border);
		color: var(--text-muted);
	}

	.inquiry {
		padding-block: clamp(6rem, 10vw, 9rem);
		background: var(--surface-secondary);
	}

	.inquiry__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
		gap: clamp(4rem, 10vw, 10rem);
		align-items: end;
	}

	.inquiry__copy {
		display: grid;
		align-content: end;
		padding-bottom: 0.3rem;
	}

	.inquiry__copy p {
		font-size: clamp(1rem, 1.25vw, 1.1rem);
	}

	@media (max-width: 64rem) {
		.hero__inner,
		.methods__inner,
		.inquiry__inner {
			grid-template-columns: 1fr;
		}

		.hero__inner,
		.inquiry__inner {
			gap: 2.75rem;
		}

		.hero__support,
		.inquiry__copy {
			max-width: 38rem;
		}
	}

	@media (max-width: 46rem) {
		h1 {
			font-size: clamp(3.05rem, 13vw, 4.6rem);
		}

		.methods__heading h2,
		.inquiry__heading h2 {
			font-size: clamp(2.55rem, 11vw, 3.55rem);
		}
	}
</style>
