<script lang="ts">
	import '../app.css';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import { demoCopyNote } from '$lib/content/demo-copy';
	import { contentIsDemo } from '$lib/content/demo';

	let { children } = $props();
</script>

<a class="skip-link" href="#main-content">Skip to content</a>

{#if contentIsDemo}
	<aside class="demo-notice" aria-label="Development content status">
		<span class="demo-notice__mark" aria-hidden="true"></span>
		<span>{demoCopyNote}</span>
	</aside>
{/if}

<SiteHeader />
{@render children()}
<SiteFooter />

<style>
	.demo-notice {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.55rem;
		padding: 0.55rem var(--page-gutter);
		border-bottom: 1px solid rgb(255 255 255 / 15%);
		background: var(--ink);
		color: rgb(255 255 255 / 78%);
		font-size: 0.7rem;
		font-weight: 700;
		line-height: 1.35;
		text-align: center;
	}

	.demo-notice__mark {
		flex: 0 0 auto;
		width: 0.75rem;
		aspect-ratio: 1;
		background: var(--brand);
		clip-path: polygon(50% 0%, 61% 34%, 98% 25%, 70% 50%, 98% 76%, 62% 66%, 50% 100%, 39% 66%, 2% 76%, 30% 50%, 2% 25%, 39% 34%);
	}
</style>
