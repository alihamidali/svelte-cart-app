<script>
  export let product;
  export let onAdd;
</script>

<div class="bg-white shadow-md rounded p-4 flex flex-col justify-between h-full">
  <img src={product.image} alt={product.title} class="h-40 object-contain mx-auto mb-4" />
  <h3 class="text-lg font-semibold mb-2">{product.title}</h3>
  <p class="text-gray-700 font-medium mb-2">${product.price}</p>
  <button
    class="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition cursor-pointer"
    on:click={() => onAdd(product)}>
    Add to Cart
  </button>
</div>
