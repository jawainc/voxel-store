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
      return {
        products: data,
        slug: params.slug,
      }
    } catch (err) {
      return {
        products: [],
        slug: 'products',
      }
    }
  },
  data: () => ({}),
  head() {
    return {
      title: this.slug.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Find the perfect ${this.slug} for any occasion at our online store. We have a wide selection of ${this.slug} to choose from.`,
        },
      ],
    }
  },
}
</script>
