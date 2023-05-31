<template>
  <div class="dropdown">
    <div class="dropdown__container">
      <div class="dropdown__container__menu" @click="isOpen = !isOpen">
        <span class="label">{{ selected }}</span>
        <img src="~assets/images/chevron.svg" alt="dropdown" />
      </div>
      <div v-show="isOpen" class="dropdown__container__links">
        <NuxtLink
          v-for="category in categories"
          ref="menuItem"
          :key="category"
          :to="category | link"
          class="item"
          exact
          @click.native="handleClick(category)"
        >
          {{ category }}
        </NuxtLink>
      </div>
    </div>
  </div>
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
  mounted() {
    // attach observer on links to watch for class changes
    // to update the selected item
    this.observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const newValue = m.target.getAttribute(m.attributeName)
        this.$nextTick(() => {
          this.onClassChange(newValue, m.target)
        })
      }
    })

    this.$refs.menuItem.forEach((item) => {
      this.observer.observe(item.$el, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class'],
      })

      // set selected category on initial load
      if (item.$el.getAttribute('class').includes('nuxt-link-exact-active')) {
        this.selected = item.$el.text
      }
    })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    onClassChange(classAttrValue, element) {
      const classList = classAttrValue.split(' ')
      if (classList.includes('nuxt-link-exact-active')) {
        this.selected = element.text
      }
    },
    handleClick(category) {
      this.selected = category
      this.isOpen = false
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables';
@import '~assets/scss/mixins';

.dropdown {
  @include p-l-r;
  margin-top: 20px;
  width: 100%;
  display: block;
  @include xs-breakpoint {
    display: none;
  }
}

.dropdown__container {
  @include border;
  border-radius: 8px;
  width: 100%;
  max-width: 360px;
  height: 64px;
  margin: 0 auto;
  position: relative;
}

.dropdown__container__menu {
  @include p-l-r;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .label {
    color: $color-primary;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
  }
}

.dropdown__container__links {
  @include drop-shadow;
  @include border;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  position: absolute;
  z-index: 100;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  .item {
    @include menu-link;
    &.nuxt-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
