const state = () => ({
  shopcart: {},
})

const getters = {}

const actions = {
  addToShopCart({ commit }, product) {
    commit('addToShopCart', product)
  },
  removeFromShopCart({ commit }, id) {
    commit('removeFromShopCart', id)
  },
  incrementCount({ commit }, id) {
    commit('incrementCount', id)
  },
  decrementCount({ commit }, id) {
    commit('decrementCount', id)
  },
}

const mutations = {
  addToShopCart(state, product) {
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
