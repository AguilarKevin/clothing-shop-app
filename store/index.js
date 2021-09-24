import products from '~/api/products'

const state = () => ({
  shopcart: {},
})

const getters = {}

const actions = {
  addtoShopcart({ commit }, product) {
    commit('setDiscounts', product)
  },

  getLatestDiscounts({ commit }) {
    products.getLatestDiscounts().then((discounts) => {
      commit('setDiscounts', discounts)
    })
  },
}

const mutations = {
  addtoShopCart(state, product) {
    if (state.shopcart[product.id]) {
      state.shopcart[product.id].count = state.shopcart[product.id].count + 1
    } else {
      state.shopcart[product.id] = {
        count: 1,
        ...product,
      }
    }
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
