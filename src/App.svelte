<script>
  import Router  from 'svelte-spa-router';
  import routes from './routes.js';
</script>

<main class="min-h-screen bg-gray-100 p-6">
  <Router {routes} />
</main>
