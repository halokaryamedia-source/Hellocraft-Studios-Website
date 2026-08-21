<script lang="ts">
	import { footerCopy } from '$lib/content/pages';
	import { primaryNavigation, siteIdentity, socialLinks } from '$lib/content/site';
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<div class="footer-mark" aria-hidden="true"></div>
			<a class="brand" href={siteIdentity.homeHref}>{siteIdentity.name}</a>
			<p>{footerCopy.statement}</p>
		</div>

		<div class="footer-links">
			<div>
				<p class="footer-label">Explore</p>
				<nav aria-label="Footer navigation">
					<ul>
						{#each primaryNavigation as item (item.href)}
							<li><a href={item.href}>{item.label}</a></li>
						{/each}
					</ul>
				</nav>
			</div>

			{#if socialLinks.length > 0}
				<div>
					<p class="footer-label">Social</p>
					<nav aria-label="Social links">
						<ul>
							{#each socialLinks as item (item.href)}
								<li>
									<a href={item.href} rel={item.external ? 'noreferrer' : undefined}>{item.label}</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			{/if}
		</div>
	</div>

	<div class="footer-word" aria-hidden="true">HELLOCRAFT</div>
</footer>

<style>
	.site-footer {
		overflow: hidden;
		background: var(--ink);
		color: var(--surface);
	}

	.footer-inner {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(14rem, 0.6fr);
		gap: clamp(3rem, 8vw, 8rem);
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		padding-block: clamp(4rem, 8vw, 7rem);
	}

	.footer-brand {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.footer-mark {
		width: clamp(3rem, 6vw, 5.5rem);
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}

	.brand {
		width: fit-content;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(2rem, 5vw, 4.5rem);
		font-weight: 900;
		letter-spacing: -0.06em;
		line-height: 0.95;
		text-decoration: none;
	}

	.footer-brand p {
		max-width: 30rem;
		margin: 0;
		color: rgb(255 255 255 / 68%);
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		gap: 2rem;
	}

	.footer-label {
		margin: 0 0 1rem;
		color: var(--brand);
		font-size: 0.75rem;
		font-weight: 850;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	ul {
		display: grid;
		gap: 0.65rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		color: rgb(255 255 255 / 82%);
		font-weight: 700;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.3em;
	}

	nav a:hover,
	nav a:focus-visible {
		color: var(--brand);
	}

	.footer-word {
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(4.5rem, 17vw, 16rem);
		font-weight: 900;
		letter-spacing: -0.085em;
		line-height: 0.68;
		color: var(--brand);
		white-space: nowrap;
		transform: translateY(0.08em);
	}

	@media (max-width: 48rem) {
		.footer-inner {
			grid-template-columns: 1fr;
		}
	}
</style>
