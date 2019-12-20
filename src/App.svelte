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
<div class="font-sans text-purple-500">Sans</div>
<div class="font-serif text-purple-500">Serif</div>
<div class="font-mono text-purple-500">Mono</div>
<div class="font-condensed text-purple-500">Condensed</div>
<i class="text-purple-500 material-icons md-48">face</i>
