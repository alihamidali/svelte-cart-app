<h1 class="text-3xl font-bold mb-6 text-center">Welcome to Svelte Shop 🛍️</h1>

<div class="flex justify-center gap-6">
  <button
    class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded shadow transition cursor-pointer"
    on:click={() => location.hash = '#/products'}>
    Search Products
  </button>

  <button
    class="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded shadow transition cursor-pointer"
    on:click={() => location.hash = '#/checkout'}>
    Checkout
  </button>
</div>

