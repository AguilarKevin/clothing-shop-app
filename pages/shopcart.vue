<template>
  <div v-chakra h="82vh">
    <c-flex v-if="shopcart.length > 0" flex-dir="column" gap="14px">
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
