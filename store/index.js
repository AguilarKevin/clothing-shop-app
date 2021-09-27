const state = () => ({
  shopcart: {},
})

const getters = {}

const actions = {}

const mutations = {
  addtoShopCart(state, product) {
    if (state.shopcart[product.id]) {
      state.shopcart[product.id].count = state.shopcart[product.id].count + 1
      return
    }
    state.shopcart[product.id] = {
      count: 1,
      ...product,
    }
  },
  incrementCount(state, id) {
    state.shopcart[id].count = state.shopcart[id].count + 1
  },
  decrementCount(state, id) {
    state.shopcart[id].count = state.shopcart[id].count - 1
  },

  removeFromShopcart(state, productId) {
    delete state.shopcart[productId]
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
