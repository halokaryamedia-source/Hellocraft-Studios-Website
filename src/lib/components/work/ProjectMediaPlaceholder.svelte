<script lang="ts">
	let {
		variant = 'card',
		label = 'Project media',
		index = '01'
	}: {
		variant?: 'card' | 'hero';
		label?: string;
		index?: string;
	} = $props();
</script>

<div class="media" class:media--hero={variant === 'hero'} aria-hidden="true">
	<div class="media__topline">
		<span>{label}</span>
		<span>{index}</span>
	</div>
	<div class="media__field">
		<span>HC</span>
	</div>
	<div class="media__footer">
		<span>Hellocraft Studios</span>
		<span>Development preview</span>
	</div>
</div>

<style>
	.media {
		position: relative;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		padding: clamp(1rem, 2.4vw, 1.5rem);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		background: var(--ink-soft);
		color: var(--surface);
		transition: transform var(--motion-medium) cubic-bezier(0.2, 0.75, 0.2, 1);
	}

	.media::before {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 24%;
		background: var(--brand);
		content: '';
		transform: skewX(-7deg) translateX(18%);
		transform-origin: top right;
		transition: width var(--motion-medium) cubic-bezier(0.2, 0.75, 0.2, 1);
	}

	.media::after {
		position: absolute;
		inset: 20% 10%;
		border: 1px solid rgb(255 255 255 / 10%);
		content: '';
	}

	.media--hero {
		min-height: clamp(26rem, 54vw, 50rem);
		aspect-ratio: auto;
		padding: clamp(1.25rem, 3vw, 2rem);
		border-color: var(--inverse-border);
	}

	.media__topline,
	.media__footer {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.media__footer {
		color: rgb(255 255 255 / 58%);
	}

	.media__field {
		position: relative;
		z-index: 1;
		display: grid;
		place-items: center;
	}

	.media__field span {
		font-family: Arial, 'Helvetica Neue', sans-serif;
		font-size: clamp(5rem, 16vw, 15rem);
		font-weight: 900;
		letter-spacing: -0.1em;
		line-height: 0.75;
		color: rgb(255 255 255 / 8%);
	}

	:global(.project-card a:hover) .media,
	:global(.project-card a:focus-visible) .media {
		transform: translateY(-0.2rem);
	}

	:global(.project-card a:hover) .media::before,
	:global(.project-card a:focus-visible) .media::before {
		width: 30%;
	}
</style>
