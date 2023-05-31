<template>
  <nav class="nav-container">
    <div class="menu">
      <NuxtLink
        v-for="category in categories"
        :key="category"
        :to="category | link"
        class="menu__item"
        exact
      >
        {{ category }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
import global from '~/mixins/globals'

export default {
  mixins: [global],
  props: {
    categories: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data: () => ({
    isOpen: false,
    selected: '',
  }),
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables';
@import '~assets/scss/mixins';

.nav-container {
  @include p-l-r;
  @include border-bottom;
  display: none;

  @include xs-breakpoint {
    display: block;
  }

  @include xl-breakpoint {
    @include clear-p-l-r;
  }
}
.menu {
  @include center-container;
  display: flex;
  align-items: center;
  gap: 18px;
  height: 64px;
}
.menu__item {
  @include menu-link;
  position: relative;
  &.nuxt-link-exact-active {
    color: $color-primary;
    &:after {
      background-color: $color-primary;
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      top: 37px;
      border-radius: 4px 4px 0 0;
    }
  }
  &:hover {
    color: $color-primary;
  }
}
</style>
