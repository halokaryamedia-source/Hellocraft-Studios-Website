<script lang="ts">
	import { page } from '$app/state';
	import BrandLockup from '$lib/components/brand/BrandLockup.svelte';
	import { primaryNavigation, siteIdentity } from '$lib/content/site';

	const pathname = $derived(page.url.pathname);

	function isCurrent(href: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="site-header">
	<div class="site-header__accent" aria-hidden="true"></div>
	<div class="site-header__inner">
		<a class="brand" href={siteIdentity.homeHref} aria-label="Hellocraft Studios home">
			<BrandLockup />
		</a>

		<nav aria-label="Primary navigation">
			<ul>
				{#each primaryNavigation as item (item.href)}
					<li>
						<a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: relative;
		z-index: 20;
		border-bottom: 1px solid var(--inverse-border);
		background: var(--ink);
		color: var(--surface);
	}

	.site-header__accent {
		height: 3px;
		background: linear-gradient(90deg, var(--brand) 0 11rem, transparent 11rem 100%);
	}

	.site-header__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem 2.5rem;
		width: min(100% - (var(--page-gutter) * 2), var(--content-max));
		margin-inline: auto;
		padding-block: 1.05rem;
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
		gap: clamp(1rem, 2.6vw, 2.5rem);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		position: relative;
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		color: rgb(255 255 255 / 72%);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-decoration: none;
		text-transform: uppercase;
		transition: color var(--motion-fast) ease-out;
	}

	nav a::after {
		position: absolute;
		right: 0;
		bottom: 0.28rem;
		left: 0;
		height: 2px;
		background: var(--brand);
		content: '';
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--motion-fast) ease-out;
	}

	nav a:hover,
	nav a:focus-visible,
	nav a[aria-current='page'] {
		color: var(--surface);
	}

	nav a:hover::after,
	nav a:focus-visible::after,
	nav a[aria-current='page']::after {
		transform: scaleX(1);
	}

	@media (max-width: 46rem) {
		.site-header__accent {
			background: linear-gradient(90deg, var(--brand) 0 5rem, transparent 5rem 100%);
		}

		.site-header__inner {
			align-items: flex-start;
			flex-direction: column;
			padding-block: 0.9rem 0.65rem;
		}

		nav {
			width: 100%;
			overflow-x: auto;
			scrollbar-width: none;
		}

		nav::-webkit-scrollbar {
			display: none;
		}

		ul {
			width: max-content;
			justify-content: flex-start;
			gap: 1.5rem;
		}
	}
</style>
