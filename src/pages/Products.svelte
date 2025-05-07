<script>
  import { onMount } from 'svelte';
  import ProductCard from '../components/ProductCard.svelte';

  let products = [];
  let cart = [];
  let loading = true;

  onMount(async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    products = data;
    loading = false;
  });

  const addToCart = (product) => {
    cart = [...cart, product];
  };

  const goToHomeWithCart = () => {
    localStorage.setItem('svelte_cart', JSON.stringify(cart));
    location.hash = '#/';
  };
</script>

{#if loading}
  <p class="text-center text-gray-600 italic">Loading products...</p>
{:else}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {#each products as product}
      <ProductCard {product} onAdd={addToCart} />
    {/each}
  </div>

  <div class="text-center">
    <button
      class="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded shadow transition"
      on:click={goToHomeWithCart}>
      Go Back
    </button>
  </div>
{/if}
