import Vue from 'vue'

// @vue/component
export default {
  name: 'NuxtLink',
  extends: Vue.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true,
    },
    noPrefetch: {
      type: Boolean,
      default: false,
    },
  },
}
