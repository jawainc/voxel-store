<template>
  <div class="header">
    <StoreLogo />
    <img
      class="cart-icon"
      src="~assets/images/bag.svg"
      alt="shopping cart"
      @click="showCart()"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      showCart: 'cart/openCart',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~assets/scss/mixins';

.header {
  @include center-container;
  @include p-l-r;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  .cart-icon {
    cursor: pointer;
  }

  @include xl-breakpoint {
    @include clear-p-l-r;
  }
}
</style>
