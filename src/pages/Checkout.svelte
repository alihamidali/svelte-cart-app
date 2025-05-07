<script>
  import { onMount } from 'svelte';

  let cart = [];
  let total = 0;
  let success = false;

  onMount(() => {
    const stored = localStorage.getItem('svelte_cart');
    cart = stored ? JSON.parse(stored) : [];
    updateTotal();
  });

  const removeItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateTotal();
    localStorage.setItem('svelte_cart', JSON.stringify(cart));
  };

  const updateTotal = () => {
    total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  const checkout = () => {
    success = true;
    localStorage.removeItem('svelte_cart');
  };
</script>

{#if success}
  <div class="text-center">
    <h2 class="text-2xl font-bold text-green-700 mb-4">✅ Purchase Successful!</h2>
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow"
      on:click={() => location.hash = '#/'}>
      Back to Home
    </button>
  </div>
{:else}
  <h2 class="text-2xl font-semibold mb-4">Checkout</h2>

  {#if cart.length === 0}
    <p class="text-gray-600 italic">No items in cart.</p>
  {:else}
    <ul class="space-y-4 mb-6">
      {#each cart as item}
        <li class="bg-white rounded shadow p-4 flex justify-between items-center">
          <span>{item.title} — <span class="font-semibold">${item.price}</span></span>
          <button
            class="text-red-500 hover:underline"
            on:click={() => removeItem(item.id)}>
            Remove
          </button>
        </li>
      {/each}
    </ul>

    <p class="text-right font-bold text-lg mb-4">Total: ${total}</p>
    <div class="text-center">
      <button
        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
        on:click={checkout}>
        Checkout
      </button>
    </div>
  {/if}
{/if}
