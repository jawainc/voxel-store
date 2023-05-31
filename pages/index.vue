<template>
  <main class="product-catalog">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get('https://fakestoreapi.com/products')
      return { products: data }
    } catch (err) {
      return { products: [] }
    }
  },
  data: () => ({}),
}
</script>
