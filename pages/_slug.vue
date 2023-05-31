<template>
  <main>
    <div class="product-catalog">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'CategoryPage',
  async asyncData({ params, $axios }) {
    try {
      const { data } = await $axios.get(
        `https://fakestoreapi.com/products/category/${params.slug}`
      )
      return { products: data }
    } catch (err) {
      return { products: [] }
    }
  },
  data: () => ({}),
}
</script>
