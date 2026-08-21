<script lang="ts">
	import { footerCopy } from '$lib/content/pages';
	import { primaryNavigation, siteIdentity, socialLinks } from '$lib/content/site';
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div>
			<a class="brand" href={siteIdentity.homeHref}>{siteIdentity.name}</a>
			<p>{footerCopy.statement}</p>
		</div>

		<nav aria-label="Footer navigation">
			<ul>
				{#each primaryNavigation as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>

		{#if socialLinks.length > 0}
			<nav aria-label="Social links">
				<ul>
					{#each socialLinks as item (item.href)}
						<li>
							<a href={item.href} rel={item.external ? 'noreferrer' : undefined}>{item.label}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid currentColor;
	}

	.footer-inner {
		display: grid;
		gap: 2rem;
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		padding-block: 2rem;
	}

	.brand {
		font-weight: 800;
		text-decoration: none;
	}

	p {
		max-width: var(--measure);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
