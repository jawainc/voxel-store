<template>
  <div class="product-container">
    <div class="product-container__image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-container__contents">
      <div>
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">${{ product.price }}</p>
      </div>
      <div>
        <button
          type="button"
          class="button button-normal"
          @click="addToCart(product)"
        >
          <img src="~assets/images/add.svg" alt="add to cart" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
    }),
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables';
@import '~assets/scss/mixins';

.product-container {
  @include border;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.product-container__image {
  height: 280px;
  position: relative;
  img {
    object-fit: contain;
    width: 100%;
    height: inherit;
  }
}

.product-container__contents {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
}

.product-title {
  color: $color-primary;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding: 0;
  margin: 0;
}

.product-price {
  color: $color-secondary;
  font-size: 16px;
  font-weight: 500;
  line-height: 0;
}
</style>
