<template>
  <div
    v-chakra
    class="sales-container"
    :py="['0', '20']"
    :h="['380px', '98vh']"
  >
    <c-heading
      as="h3"
      size="2xl"
      font-weight="light"
      text-transform="uppercase"
      font-size="44pt"
      mb="4"
    >
      sales
    </c-heading>
    <c-flex gap="24px" overflow-x="auto" w="full">
      <index-sales-card
        v-for="item in lastestDiscounts"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :discount="item.discount"
        :media-src="item.media[0].url"
      />
    </c-flex>
  </div>
</template>

<script>
import ky from 'ky'

export default {
  data() {
    return {
      lastestDiscounts: [],
    }
  },
  async fetch() {
    const response = await ky(
      `https://kevs-clothing-shop.herokuapp.com/api/discounts`
    ).json()

    this.lastestDiscounts = response.data
  },
}
</script>
