import products from '~/api/products'

const state = () => ({
  currentProduct: {},
  discounts: [],
})

const getters = {}

const actions = {
  getProduct({ commit }, id) {
    products.getProduct(id).then((product) => {
      commit('setCurrentProduct', product)
    })
  },

  getLatestDiscounts({ commit }) {
    products.getLatestDiscounts().then((discounts) => {
      commit('setDiscounts', discounts)
    })
  },
}

const mutations = {
  setCurrentProduct(state, product) {
    state.currentProduct = product
  },

  setDiscounts(state, discounts) {
    state.discounts = discounts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
