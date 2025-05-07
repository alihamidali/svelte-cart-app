<script>
  import { onMount } from 'svelte';
  import ProductCard from '../components/ProductCard.svelte';

  let products = [];
  let cart = [];
  let loading = true;
  let showAlert = false;

  onMount(async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    if (res.status !== 200) {
      alert('Something went wrong with products API. Try again later!');
    }
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    products = data;
    loading = false;
  });

  const addToCart = async (product) => {
    cart = [...cart, product];
    showAlert = true
    await new Promise((resolve) => setTimeout(resolve, 800));
    showAlert = false
  };

  const goToHomeWithCart = () => {
    localStorage.setItem('svelte_cart', JSON.stringify(cart));
    location.hash = '#/';
  };
</script>

{#if loading}
  <p class="text-center text-gray-600 italic">Loading products...</p>
{:else}
  <div class="mb-4 flex justify-between">
    <button
            class="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded shadow transition cursor-pointer"
            on:click={goToHomeWithCart}>
      Go Back
    </button>
    {#if showAlert}
      <h2 class="text-2xl font-bold text-green-700 mb-4">✅ Product Added to Cart!</h2>
    {/if}
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {#each products as product}
      <ProductCard {product} onAdd={addToCart} />
    {/each}
  </div>
{/if}
