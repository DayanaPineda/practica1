<template>
  <div class="container my-4">
    <h2 class="mb-3">Carrito</h2>
    <ul class="list-group mb-3">
      <li v-for="(item, index) in props.cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ item.name }} - {{ item.price }} USD
        <button @click="$emit('remove-from-cart', index)" class="btn btn-danger btn-sm">Eliminar</button>
      </li>
    </ul>
    <p class="fw-bold">Total: {{ total }} USD</p>
  </div>
</template>

<!-- comentario de prueba -->

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cart: {
    type: Array,
    default: () => []
  }
})

const total = computed(() =>
  props.cart.reduce((sum, item) => sum + item.price, 0)
)
</script>
