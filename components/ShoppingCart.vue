<template>
  <transition name="slide-fade">
    <div v-show="showCart" class="cart">
      <div class="cart__head">
        <span class="cart-title">Your Cart ({{ products.length }})</span>
        <img src="~assets/images/close.svg" alt="close" @click="closeCart()" />
      </div>
      <div v-show="products.length" class="cart__contents">
        <div
          v-for="product in products"
          :key="product.id"
          class="cart-products"
        >
          <div class="cart-products__image">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="cart-products__contents">
            <div class="cart-products__contents__title">
              {{ product.title }}
            </div>
            <div class="cart-products__contents__actions">
              <span>${{ product.price }}</span>
              <span class="remove" @click="removeProduct(product)">Remove</span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="products.length" class="cart__foot">
        <div class="cart-totals">
          <span>Total</span>
          <span>${{ products | calculateTotal }}</span>
        </div>
        <button type="button" class="button button-blue">
          Continue to Checkout
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  filters: {
    calculateTotal: (products) => {
      let total = 0
      products.forEach((product) => {
        total = total + parseFloat(product.price)
      })
      return total
    },
  },
  computed: {
    showCart() {
      return this.$store.state.cart.open
    },
    products() {
      return this.$store.state.cart.products
    },
  },
  methods: {
    ...mapMutations({
      closeCart: 'cart/closeCart',
      removeProduct: 'cart/remove',
    }),
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables';
@import '~assets/scss/mixins';

.cart {
  height: 100%;
  width: 100%;
  max-width: 460px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: auto;
  background-color: white;
  overflow-x: hidden;
  transition: 1s;
  padding: 32px 32px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.2);
}

.cart__head {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;

  .cart-title {
    color: $color-primary;
    font-weight: 600;
    font-size: 22px;
  }

  img {
    cursor: pointer;
  }
}

.cart__contents {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-products {
  display: flex;
  gap: 16px;
}

.cart-products__image {
  @include border;
  border-radius: 8px;
  width: 102px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;

  img {
    object-fit: scale-down;
    width: 50px;
  }
}

.cart-products__contents {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.cart-products__contents__title {
  color: $color-primary;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.cart-products__contents__actions {
  color: $color-secondary;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: space-between;

  .remove {
    cursor: pointer;
  }
}

.cart__foot {
  @include border-top;
  padding-top: 25px;

  .cart-totals {
    color: $color-primary;
    font-weight: 600;
    font-size: 22px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
