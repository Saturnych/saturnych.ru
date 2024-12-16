<script lang="ts">
  let { children, data } = $props();
  console.log('pages data:', data);
  const { date, title } = data;
</script>
<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	{@render children()}
  after children
</article>
