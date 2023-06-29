<script lang="ts">
  export let data: {[x: string]: any};
  const { Content } = data;
</script>

<div id="content">
  <svelte:component this={Content} />
</div>
