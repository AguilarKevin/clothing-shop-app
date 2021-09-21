import ky from 'ky'

export default {
  api: { url: 'https://kevs-clothing-shop.herokuapp.com/api' },
  async getProduct(id) {
    const response = await ky(`${this.api.url}/clothe/${id}`).json()

    return response.data
  },
  async getAllProducts() {
    const response = await ky(`${this.api.url}/clothes`).json()

    return response.data
  },

  async getLatestDiscounts() {
    const response = await ky(`${this.api.url}/discounts`).json()

    return response.data
  },

  getDiscountedProducts() {},
  getCollection() {},
  getAllCollections() {},
}
