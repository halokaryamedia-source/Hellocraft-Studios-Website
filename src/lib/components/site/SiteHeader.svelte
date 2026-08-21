<script lang="ts">
	import { primaryNavigation, siteIdentity } from '$lib/content/site';
</script>

<header class="site-header">
	<a class="brand" href={siteIdentity.homeHref}>{siteIdentity.name}</a>

	<nav aria-label="Primary navigation">
		<ul>
			{#each primaryNavigation as item (item.href)}
				<li><a href={item.href}>{item.label}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.site-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		padding-block: 1.25rem;
	}

	.brand {
		font-weight: 800;
		text-decoration: none;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		text-underline-offset: 0.2em;
	}
</style>
