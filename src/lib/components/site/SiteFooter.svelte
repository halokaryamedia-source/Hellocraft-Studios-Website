<script lang="ts">
	import BrandLockup from '$lib/components/brand/BrandLockup.svelte';
	import { footerCopy } from '$lib/content/pages';
	import { primaryNavigation, siteIdentity, socialLinks } from '$lib/content/site';
</script>

<footer class="site-footer">
	<div class="footer-accent" aria-hidden="true"></div>
	<div class="footer-inner">
		<div class="footer-brand">
			<a class="brand" href={siteIdentity.homeHref}><BrandLockup scale="large" /></a>
			<p>{footerCopy.statement}</p>
		</div>

		<div class="footer-nav">
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
			<div class="footer-social">
				<p class="footer-label">Social</p>
				<nav aria-label="Social links">
					<ul>
						{#each socialLinks as item (item.href)}
							<li><a href={item.href} rel={item.external ? 'noreferrer' : undefined}>{item.label}</a></li>
						{/each}
					</ul>
				</nav>
			</div>
		{/if}
	</div>

	<div class="footer-bottom">
		<div class="shell footer-bottom__inner">
			<span>Hellocraft Studios</span>
			<span>Game studio focused on Minecraft</span>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background: var(--ink);
		color: var(--surface);
	}

	.footer-accent {
		height: 4px;
		background: var(--brand);
	}

	.footer-inner {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(12rem, 0.45fr) minmax(0, 0.45fr);
		gap: clamp(2.5rem, 8vw, 8rem);
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		padding-block: clamp(4rem, 8vw, 7rem);
	}

	.footer-brand {
		display: grid;
		align-content: start;
		gap: 1.5rem;
	}

	.brand {
		width: fit-content;
		text-decoration: none;
	}

	.footer-brand p {
		max-width: 28rem;
		margin: 0;
		color: rgb(255 255 255 / 60%);
		font-size: clamp(1rem, 1.5vw, 1.15rem);
	}

	.footer-label {
		margin: 0 0 1.25rem;
		color: var(--brand);
		font-size: 0.68rem;
		font-weight: 850;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	ul {
		display: grid;
		gap: 0.7rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 2rem;
		color: rgb(255 255 255 / 78%);
		font-size: 0.9rem;
		font-weight: 700;
		text-decoration: none;
	}

	nav a:hover,
	nav a:focus-visible {
		color: var(--surface);
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.footer-bottom {
		border-top: 1px solid var(--inverse-border);
	}

	.footer-bottom__inner {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 1.25rem;
		color: rgb(255 255 255 / 42%);
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	@media (max-width: 60rem) {
		.footer-inner {
			grid-template-columns: 1fr 1fr;
		}

		.footer-brand {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 38rem) {
		.footer-inner {
			grid-template-columns: 1fr;
		}

		.footer-brand {
			grid-column: auto;
		}

		.footer-bottom__inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
