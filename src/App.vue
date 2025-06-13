<template>
  <div>
    <nav class="navbar navbar-dark bg-dark mb-4">
      <div class="container">
        <span class="navbar-brand mb-0 h1">🛒 Sleepy Hollow</span>
      </div>
    </nav>
    <ProductList @add-to-cart="addToCart" />
    <Cart :cart="cart" @remove-from-cart="removeFromCart" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

const cart = ref([])

function addToCart(product) {
  cart.value.push(product)
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}
</script>
