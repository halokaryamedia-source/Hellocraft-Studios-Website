<script lang="ts">
	import ProjectCard from '$lib/components/work/ProjectCard.svelte';
	import { homeCopy, proofItems } from '$lib/content/pages';
	import { featuredProjects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Hellocraft Studios</title>
	<meta name="description" content={homeCopy.hero.body} />
</svelte:head>

<main id="main-content">
	<section class="hero" aria-labelledby="home-title">
		<div class="shell hero__inner">
			<div class="hero__copy">
				<p class="eyebrow">{homeCopy.hero.eyebrow}</p>
				<h1 id="home-title">{homeCopy.hero.title}</h1>
				<p class="lead">{homeCopy.hero.body}</p>
				<a class="primary-action" href="/work">{homeCopy.hero.primaryActionLabel}<span aria-hidden="true">↗</span></a>
			</div>

			<div class="hero__art" aria-hidden="true">
				<div class="hero__star"></div>
				<span class="hero__spark hero__spark--one"></span>
				<span class="hero__spark hero__spark--two"></span>
				<span class="hero__stamp">HELLO<br />CRAFT</span>
			</div>
		</div>
	</section>

	<section class="work-section" aria-labelledby="home-work-title">
		<div class="shell">
			<div class="section-heading section-heading--wide">
				<div>
					<p class="eyebrow">01 / Work</p>
					<h2 id="home-work-title">{homeCopy.work.title}</h2>
				</div>
				<p>{homeCopy.work.body}</p>
			</div>

			{#if featuredProjects.length > 0}
				<div class="project-grid">
					{#each featuredProjects as project (project.slug)}
						<ProjectCard {project} />
					{/each}
				</div>
			{:else}
				<p class="pending-state">{homeCopy.work.emptyState}</p>
			{/if}

			<a class="text-action" href="/work">{homeCopy.work.viewAllLabel}<span aria-hidden="true">→</span></a>
		</div>
	</section>

	<section class="studio-section" aria-labelledby="home-studio-title">
		<div class="shell editorial-split">
			<div class="editorial-split__title">
				<p class="eyebrow">02 / {homeCopy.studio.eyebrow}</p>
				<h2 id="home-studio-title">{homeCopy.studio.title}</h2>
			</div>
			<div class="editorial-split__body">
				<p>{homeCopy.studio.body}</p>
				<a class="text-action" href="/studio">{homeCopy.studio.actionLabel}<span aria-hidden="true">→</span></a>
			</div>
		</div>
	</section>

	<section class="capabilities-section" aria-labelledby="home-capabilities-title">
		<div class="shell capabilities-grid">
			<div class="capabilities-mark" aria-hidden="true"></div>
			<div>
				<p class="eyebrow">03 / {homeCopy.capabilities.eyebrow}</p>
				<h2 id="home-capabilities-title">{homeCopy.capabilities.title}</h2>
			</div>
			<p>{homeCopy.capabilities.body}</p>
		</div>
	</section>

	{#if proofItems.length > 0}
		<section class="proof-section" aria-labelledby="home-proof-title">
			<div class="shell">
				<div class="section-heading">
					<p class="eyebrow">04 / Proof</p>
					<h2 id="home-proof-title">{homeCopy.proof.title}</h2>
				</div>
				<ol class="proof-list">
					{#each proofItems as item, index (item)}
						<li><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
					{/each}
				</ol>
			</div>
		</section>
	{/if}

	<section class="contact-section" aria-labelledby="home-contact-title">
		<div class="shell contact-section__inner">
			<p class="eyebrow">05 / {homeCopy.contact.eyebrow}</p>
			<h2 id="home-contact-title">{homeCopy.contact.title}</h2>
			<div class="contact-section__bottom">
				<p>{homeCopy.contact.body}</p>
				<a class="contact-action" href="/contact">{homeCopy.contact.actionLabel}<span aria-hidden="true">↗</span></a>
			</div>
		</div>
	</section>
</main>

<style>
	.shell {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
	}

	.hero {
		border-bottom: 1px solid var(--border);
		background: var(--paper);
	}

	.hero__inner {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: center;
		min-height: min(78rem, calc(100svh - 5rem));
		padding-block: clamp(4rem, 9vw, 9rem);
	}

	.hero__copy {
		display: grid;
		gap: 1.35rem;
		align-content: center;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.hero h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(3.5rem, 8.7vw, 8.8rem);
		line-height: 0.88;
	}

	.lead {
		max-width: 38rem;
		margin: 0;
		color: var(--text-muted);
		font-size: clamp(1rem, 1.7vw, 1.2rem);
	}

	.primary-action,
	.contact-action {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		width: fit-content;
		min-width: 12rem;
		padding: 0.9rem 1.1rem;
		border-radius: 999px;
		background: var(--ink);
		color: var(--surface);
		font-weight: 800;
		text-decoration: none;
		transition:
			background var(--motion-fast) ease-out,
			transform var(--motion-fast) ease-out;
	}

	.primary-action:hover,
	.primary-action:focus-visible {
		background: var(--brand);
		color: var(--ink);
		transform: translateY(-2px);
	}

	.hero__art {
		position: relative;
		min-height: clamp(24rem, 47vw, 42rem);
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background:
			linear-gradient(90deg, rgb(12 13 14 / 8%) 1px, transparent 1px) 0 0 / 2.6rem 2.6rem,
			linear-gradient(rgb(12 13 14 / 8%) 1px, transparent 1px) 0 0 / 2.6rem 2.6rem,
			var(--brand);
	}

	.hero__star {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(68%, 25rem);
		aspect-ratio: 1;
		background: var(--surface);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
		transform: translate(-50%, -50%) rotate(-9deg);
	}

	.hero__spark {
		position: absolute;
		width: 3.25rem;
		aspect-ratio: 1;
		background: var(--ink);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}

	.hero__spark--one {
		top: 8%;
		right: 10%;
		transform: rotate(15deg);
	}

	.hero__spark--two {
		bottom: 11%;
		left: 8%;
		width: 1.8rem;
		transform: rotate(-15deg);
	}

	.hero__stamp {
		position: absolute;
		right: 1.2rem;
		bottom: 1.2rem;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(2rem, 4vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.08em;
		line-height: 0.78;
		text-align: right;
	}

	.work-section,
	.studio-section,
	.proof-section {
		padding-block: var(--space-section);
	}

	.section-heading {
		display: grid;
		gap: 0.75rem;
		margin-bottom: clamp(2rem, 5vw, 4rem);
	}

	.section-heading--wide {
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.65fr);
		gap: 2rem;
		align-items: end;
	}

	.section-heading h2,
	.editorial-split h2,
	.capabilities-grid h2,
	.contact-section h2 {
		margin: 0;
		font-size: clamp(2.5rem, 6vw, 6rem);
		line-height: 0.9;
	}

	.section-heading p:last-child,
	.editorial-split__body p,
	.capabilities-grid > p,
	.contact-section__bottom > p {
		max-width: var(--measure);
		margin: 0;
		color: var(--text-muted);
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3.5rem);
		margin-bottom: 3rem;
	}

	.text-action {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		width: fit-content;
		font-weight: 850;
		text-decoration-thickness: 2px;
		text-underline-offset: 0.3em;
	}

	.text-action span {
		transition: transform var(--motion-fast) ease-out;
	}

	.text-action:hover span,
	.text-action:focus-visible span {
		transform: translateX(0.3rem);
	}

	.pending-state {
		padding: 2rem;
		border: 1px dashed var(--border);
		border-radius: var(--radius-sm);
	}

	.studio-section {
		border-block: 1px solid var(--border);
		background: var(--surface);
	}

	.editorial-split {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: start;
	}

	.editorial-split__title,
	.editorial-split__body {
		display: grid;
		gap: 1.25rem;
	}

	.capabilities-section {
		padding-block: var(--space-section);
		background: var(--ink);
		color: var(--surface);
	}

	.capabilities-grid {
		display: grid;
		grid-template-columns: auto minmax(0, 1.2fr) minmax(18rem, 0.7fr);
		gap: clamp(1.5rem, 5vw, 5rem);
		align-items: start;
	}

	.capabilities-grid > p {
		color: rgb(255 255 255 / 68%);
	}

	.capabilities-mark {
		width: clamp(3rem, 6vw, 5.5rem);
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}

	.proof-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--border);
		list-style: none;
	}

	.proof-list li {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr);
		gap: 1rem;
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--border);
	}

	.proof-list span {
		color: var(--brand-strong);
		font-weight: 900;
	}

	.proof-list p {
		margin: 0;
		font-size: clamp(1.1rem, 2vw, 1.5rem);
	}

	.contact-section {
		padding-block: var(--space-section);
		background: var(--brand);
	}

	.contact-section__inner {
		display: grid;
		gap: 1.5rem;
	}

	.contact-section h2 {
		max-width: 12ch;
		font-size: clamp(3.5rem, 9vw, 9rem);
	}

	.contact-section__bottom {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
	}

	.contact-section__bottom > p {
		color: rgb(12 13 14 / 72%);
	}

	.contact-action:hover,
	.contact-action:focus-visible {
		background: var(--surface);
		color: var(--ink);
		transform: translateY(-2px);
	}

	@media (max-width: 60rem) {
		.hero__inner,
		.section-heading--wide,
		.editorial-split,
		.capabilities-grid {
			grid-template-columns: 1fr;
		}

		.hero__inner {
			min-height: auto;
		}

		.hero__art {
			min-height: 28rem;
		}

		.capabilities-mark {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 42rem) {
		.project-grid {
			grid-template-columns: 1fr;
		}

		.contact-section__bottom {
			align-items: flex-start;
			flex-direction: column;
		}

		.proof-list li {
			grid-template-columns: 2.5rem minmax(0, 1fr);
		}
	}
</style>
