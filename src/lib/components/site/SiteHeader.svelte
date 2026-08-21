<script lang="ts">
	import { primaryNavigation, siteIdentity } from '$lib/content/site';
</script>

<header class="site-header">
	<div class="site-header__inner">
		<a class="brand" href={siteIdentity.homeHref} aria-label="Hellocraft Studios home">
			<span class="brand-mark" aria-hidden="true"></span>
			<span>{siteIdentity.name}</span>
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
		gap: 0.7rem;
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(1rem, 1.7vw, 1.25rem);
		font-weight: 900;
		letter-spacing: -0.05em;
		line-height: 1;
		text-decoration: none;
	}

	.brand-mark {
		width: 1.65rem;
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
		transition: transform var(--motion-fast) ease-out;
	}

	.brand:hover .brand-mark,
	.brand:focus-visible .brand-mark {
		transform: rotate(12deg) scale(1.06);
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
