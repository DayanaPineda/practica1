import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

defineProps(['cart'])

const total = computed(() => 
  cart.reduce((sum, item) => sum + item.price, 0)
)