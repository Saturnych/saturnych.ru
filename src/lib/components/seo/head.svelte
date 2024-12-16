<script lang="ts">
	import { page } from '$app/stores';
	import { vs } from 'svelte-highlight/styles';

	export let title: string;
	export let description: string;
	export let canonical: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={description} name="description" />
	<link href={canonical} rel="canonical" />
	{@html vs}
</svelte:head>
