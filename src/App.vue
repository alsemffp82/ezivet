<template>
  <div id="app" class="container my-5">
    <Cart /> 
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    Cart
  }
}
</script>

<style>
:root {
  --primary-color: #1396c4;
  --secondary-color: #50baae;
}
</style>