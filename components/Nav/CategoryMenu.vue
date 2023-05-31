<template>
  <div>
    <NavMenuList :categories="categories" />
    <NavMenuDropdown :categories="categories" />
  </div>
</template>
<script>
export default {
  data: () => ({
    categories: [],
  }),
  async fetch() {
    try {
      const values = await this.$axios.$get(
        'https://fakestoreapi.com/products/categories'
      )
      values.unshift('All')
      this.categories = values
    } catch (err) {
      this.categories = []
    }
  },
}
</script>
