import Home from './pages/Home.svelte';
import Products from './pages/Products.svelte';
import Checkout from './pages/Checkout.svelte';

export default {
  '/': Home,
  '/products': Products,
  '/checkout': Checkout,
};
