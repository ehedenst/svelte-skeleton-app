import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

console.log('hello');

export default app;
