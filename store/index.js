// import cart from './modules/cart'
// import products from './modules/products'
import products from '~/api/products'

const state = () => ({
  discounts: [],
})

const getters = {}

const actions = {
  getLatestDiscounts({ commit }) {
    products.getLatestDiscounts().then((discounts) => {
      commit('setDiscounts', discounts)
    })
  },
}

const mutations = {
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
