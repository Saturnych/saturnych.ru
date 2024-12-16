<script lang="ts">
  import { page } from '$app/stores';
  console.log('pages page:', $page);
  
  let { data } = $props();
  const { title, date } = data;
  console.log('(pages)/[slug]/+page.svelte data:', data);
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
</article>
