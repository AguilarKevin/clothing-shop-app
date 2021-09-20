import ky from 'ky'

const api = { url: 'http://localhost:8000/api' }

export default {
  async getProduct(id) {
    const response = await ky(`${api.url}/clothe/${id}`).json()

    return response.data
  },
  getAllProducts() {},

  async getLatestDiscounts() {
    const response = await ky(`${api.url}/discounts`).json()

    return response.data
  },

  getDiscountedProducts() {},
  getCollection() {},
  getAllCollections() {},
}
