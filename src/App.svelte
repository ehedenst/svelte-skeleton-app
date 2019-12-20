<script>
  import Tailwindcss from './Tailwindcss.svelte';
  import { onMount } from 'svelte';
  export let name;

  let data = [];

  onMount(async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    data = await response.json();
  });
</script>

<style>
  h1 {
    @apply text-2xl;
  }
</style>

<Tailwindcss />

<h1>Hello {name}!</h1>
<div class="font-sans text-purple-600">Sans</div>
<div class="font-serif text-purple-600">Serif</div>
<div class="font-mono text-purple-600">Mono</div>
<div class="font-condensed text-purple-600">Condensed</div>
<i class="text-purple-500 material-icons md-48">face</i>

{#each data as item}
  <div>
    <p>{item.title}</p>
  </div>
{/each}
