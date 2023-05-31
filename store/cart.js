export const state = () => ({
  products: [],
  open: false,
})

export const mutations = {
  initializeStore(state) {
    if (localStorage.getItem('cart')) {
      state.products = JSON.parse(localStorage.getItem('cart'))
    }
  },
  add(state, product) {
    state.products.push(product)
    localStorage.setItem('cart', JSON.stringify(state.products))
    state.open = true
  },
  remove(state, product) {
    const updatedProducts = state.products.filter(
      (item) => item.id !== product.id
    )
    localStorage.setItem('cart', JSON.stringify(updatedProducts))
    state.products = updatedProducts
  },
  openCart(state) {
    state.open = true
  },
  closeCart(state) {
    state.open = false
  },
}

export const actions = {
  nuxtClientInit({ commit }) {
    commit('initializeStore')
  },
}
