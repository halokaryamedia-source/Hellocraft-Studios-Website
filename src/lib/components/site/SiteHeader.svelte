<script lang="ts">
	import BrandLockup from '$lib/components/brand/BrandLockup.svelte';
	import { primaryNavigation, siteIdentity } from '$lib/content/site';
</script>

<header class="site-header">
	<div class="site-header__inner">
		<a class="brand" href={siteIdentity.homeHref}>
			<BrandLockup />
		</a>

		<nav aria-label="Primary navigation">
			<ul>
				{#each primaryNavigation as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: relative;
		z-index: 20;
		border-bottom: 1px solid var(--border);
		background: var(--paper);
	}

	.site-header__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem 2rem;
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		padding-block: 1rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		text-decoration: none;
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 0.3rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding-inline: 0.8rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 750;
		text-decoration: none;
		transition:
			background var(--motion-fast) ease-out,
			transform var(--motion-fast) ease-out;
	}

	nav a:hover,
	nav a:focus-visible {
		background: var(--surface-secondary);
	}

	li:last-child a {
		background: var(--ink);
		color: var(--surface);
	}

	li:last-child a:hover,
	li:last-child a:focus-visible {
		background: var(--brand);
		color: var(--ink);
		transform: translateY(-1px);
	}

	@media (max-width: 43rem) {
		.site-header__inner {
			align-items: flex-start;
			flex-direction: column;
		}

		nav {
			width: 100%;
		}

		ul {
			justify-content: flex-start;
		}

		nav a {
			padding-inline: 0.7rem;
		}
	}
</style>
