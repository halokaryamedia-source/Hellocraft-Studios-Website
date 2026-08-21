<script lang="ts">
	import '../app.css';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import { demoCopyNote } from '$lib/content/demo-copy';
	import { contentIsDemo } from '$lib/content/demo';

	let { children } = $props();
</script>

<svelte:head>
	{#if contentIsDemo}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

{#if contentIsDemo}
	<aside class="demo-notice" aria-label="Development content status">{demoCopyNote}</aside>
{/if}

<SiteHeader />
{@render children()}
<SiteFooter />

<style>
	.demo-notice {
		padding: 0.5rem var(--page-gutter);
		background: var(--ink);
		color: var(--surface);
		font-size: 0.75rem;
		line-height: 1.4;
		text-align: center;
	}
</style>
