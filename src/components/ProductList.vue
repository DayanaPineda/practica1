<template>
  <div>

    <div class="row">
      <div
        class="col-md-4 mb-2"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card h-100 text-center">
          <img
            :src="product.image"
            :alt="product.name"
            class="card-img-top product-image rounded"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }} USD</p>
            <button
              class="btn btn-primary"
              @click="$emit('add-to-cart', product)"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Zapatos',
    price: 50,
    image:
      'https://i.ebayimg.com/images/g/gxUAAOSw~NFoJwqC/s-l1600.webp',
  },
  {
    id: 2,
    name: 'Camisas',
    price: 70,
    image:
      'https://th.bing.com/th/id/OIP.WwBN8tTX8mLg2FntpkjOAwHaJo?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Vestidos',
    price: 80,
    image:
      'https://ae01.alicdn.com/kf/Sb1e056d3d97a46a59f8952a002e4e6316/Vestido-feminino-chique-com-estampa-floral-A-saia-com-decote-em-v-vestidos-elegantes-para-f.jpg',
  },
  
]
</script>

<style scoped>
.product-image {
  max-height: 200px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin: 0 auto;
}

.product-image:hover {
  transform: scale(1.05);
}
</style>
