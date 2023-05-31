export default {
  filters: {
    link: (value) => {
      return value === 'All' ? '/' : `/${value}`
    },
  },
}
