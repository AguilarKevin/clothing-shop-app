<template>
  <div v-chakra h="82vh">
    <c-flex v-if="shopcart.length > 0" flex-dir="column" gap="14px">
      <c-heading
        as="h1"
        :font-size="['24pt', '44pt']"
        text-transform="uppercase"
        :line-height="['24pt', '44pt']"
        align="center"
        py="24px"
        >Item List</c-heading
      >
      <div v-for="item in shopcart" :key="item.id">
        <shopcart-item
          :id="item.id"
          :img="item.imgSrc"
          :count="item.count"
          :title="item.title"
          :color="item.color"
          :size="item.size"
        />
        <c-divider border-color="white" />
      </div>

      <c-flex justify="space-between">
        <c-flex>
          <c-text>Subtotal</c-text>
          <c-divider border-color="white" orientation="vertical" />
          <c-text>{{ shopcart.length }} items</c-text>
        </c-flex>
        <c-text>${{ subtotal }}</c-text>
      </c-flex>
    </c-flex>
    <c-flex v-else h="100%" flex-dir="column" justify="center" align="center">
      <iframe src="https://embed.lottiefiles.com/animation/9091"></iframe>
      <c-text>No items in the shopcart</c-text>
    </c-flex>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    shopcart: (state) => Object.values(state.shopcart),
    subtotal: (state) =>
      Object.values(state.shopcart).reduce(
        (previousValue, currentItem) => previousValue + currentItem.price,
        0
      ),
  }),
}
</script>

<style></style>
