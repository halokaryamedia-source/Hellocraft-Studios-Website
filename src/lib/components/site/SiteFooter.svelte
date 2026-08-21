<script lang="ts">
	import BrandLockup from '$lib/components/brand/BrandLockup.svelte';
	import { footerCopy } from '$lib/content/pages';
	import { primaryNavigation, siteIdentity, socialLinks } from '$lib/content/site';
</script>

<footer class="site-footer">
	<div class="shell editorial-frame editorial-frame--dark footer-frame">
		<aside class="editorial-rail" aria-hidden="true">
			<span>HC</span>
			<span>Footer</span>
		</aside>

		<div class="editorial-body footer-body">
			<div class="footer-brand">
				<a class="brand" href={siteIdentity.homeHref}><BrandLockup scale="large" /></a>
				<p>{footerCopy.statement}</p>
			</div>

			<div class="footer-columns">
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
		</div>
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

	.footer-frame {
		padding-block: clamp(4rem, 8vw, 7.5rem);
	}

	.footer-body {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(14rem, 0.7fr);
		gap: clamp(3rem, 8vw, 8rem);
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
		color: rgb(255 255 255 / 56%);
		font-size: clamp(1rem, 1.5vw, 1.12rem);
	}

	.footer-columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		gap: 2.5rem;
	}

	.footer-label {
		margin: 0 0 1.25rem;
		color: var(--brand);
		font-size: 0.66rem;
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
		color: rgb(255 255 255 / 76%);
		font-size: 0.88rem;
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
		padding-block: 1.2rem;
		color: rgb(255 255 255 / 40%);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	@media (max-width: 60rem) {
		.footer-body {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 38rem) {
		.footer-bottom__inner {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
