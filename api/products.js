import ky from 'ky'

const api = { url: 'http://localhost:8000/api' }

export default {
  getProduct() {},
  getAllProduct() {},

  async getLatestDiscounts() {
    const response = await ky(`${api.url}/discounts`).json()
    console.log(response.data)
    return response.data
  },

  getDiscountedProducts() {},
  getCollection() {},
  getAllCollections() {},
}
