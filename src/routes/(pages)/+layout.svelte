<script lang="ts">
  let { children, data } = $props();
  console.log('pages data:', data);
  const { date, title } = data;
</script>

{@render children()}
