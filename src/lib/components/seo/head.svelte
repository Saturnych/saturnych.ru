<script lang="ts">
	import { vs } from 'svelte-highlight/styles';
	import { page } from '$app/stores';
	import { config } from '$lib/config';

	const { title, description, canonical } = config;

	let { data } = $props();
</script>

<svelte:head>
	<title>{data?.title || title || ''}</title>
	<meta content={data?.description || description || ''} name="description" />
	<link href={data?.description || canonical || ''} rel="canonical" />
	{@html vs}
</svelte:head>
