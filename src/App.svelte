<script>
	import { pageWidth, pageHeight, pageDimension } from "./store";
	import { setContext } from "svelte";
	import Desktop from "./desktop/index.svelte";
	import { title, createUrlStore } from "./utils";
	export let ssrUrl = "";
	setContext("APP", { url: createUrlStore(ssrUrl) });
	let height;
	let width;
	$: $pageWidth = width;
	$: $pageHeight = height;
	let loadMobileVersion = false;
	$: if ($pageWidth != undefined && $pageHeight != undefined) {
		$pageDimension = $pageHeight / $pageWidth;
		loadMobileVersion = true;
	}
</script>

<svelte:head>
	<title>Kunhar | {$title}</title>
</svelte:head>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<main>
	{#if width > 1024}
		<div class="desktop">
			<Desktop />
		</div>
	{:else if loadMobileVersion}
		<div class="mobile">
			<!-- <Mobile /> -->
		</div>
	{/if}
</main>

<style>
	.mobile {
		display: none;
	}
	.desktop {
		display: block;
		/* padding-top: 5vw; */
	}
	@media screen and (max-width: 1024px) {
		.desktop {
			display: none;
		}
		.mobile {
			display: block;
		}
	}
</style>
