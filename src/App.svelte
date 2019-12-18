<script>
  import Tailwindcss from './Tailwindcss.svelte';
  export let name;
</script>

<style>
  h1 {
    @apply text-2xl;
  }
</style>

<Tailwindcss />

<h1>Hello {name}!</h1>
<div class="text-purple-500">Testing</div>
<i class="text-purple-500 material-icons md-48">face</i>
