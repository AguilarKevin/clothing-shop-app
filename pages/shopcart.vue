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
      <div>
        <shopcart-item
          v-for="item in shopcart"
          :id="item.id"
          :key="item.id"
          :img="item.imgSrc"
          :count="item.count"
          :title="item.title"
          :color="item.color"
          :size="item.size"
        />
        <c-divider border-color="white" />
      </div>
      <c-flex>
        <c-text>Subtotal</c-text>
        <c-divider border-color="white" orientation="vertical" />
        <c-text>{{ shopcart.length }} items</c-text>
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
  }),
}
</script>

<style></style>
