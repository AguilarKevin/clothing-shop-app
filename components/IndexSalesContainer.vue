<template>
  <div v-chakra class="sales-container" py="8" h="full">
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
    <c-flex gap="14px" overflow-x="auto" w="full" :h="'80vh'">
      <index-sales-card
        v-for="item in lastetsDiscounts"
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
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    lastetsDiscounts: (state) => state.discounts,
  }),

  created() {
    this.$store.dispatch('getLatestDiscounts')
  },
  methods: mapActions({ getLatestDiscounts: 'getLatestDiscounts' }),
}
</script>

<style scoped>
.sales-container {
  height: 100vh;
}
</style>
