<template>
  <div v-chakra font>
    <c-flex flex-dir="column" gap="14px">
      <c-box v-if="product.media" h="80vw">
        <c-image
          h="full"
          w="full"
          object-fit="cover"
          :src="product.media[0].url"
        />
      </c-box>

      <c-flex gap="8px" overflow-x="auto" w="full">
        <c-box v-for="item in product.media" :key="item.id" flex="1" h="60px">
          <c-image h="full" w="full" object-fit="cover" :src="item.url" />
        </c-box>
      </c-flex>
      <c-stack>
        <c-text
          font-size="28px"
          line-height="1.2"
          font-weight="light"
          text-transform="uppercase"
          >{{ product.title }}</c-text
        >
        <c-flex gap="2px">
          <c-icon
            v-for="n in 5"
            :key="n"
            name="star"
            color="yellow.300"
          ></c-icon>
        </c-flex>
        <c-flex>
          <c-text :class="{ striked: hasDiscount }">
            ${{ product.price }}
          </c-text>
          <c-text v-if="hasDiscount"> - ${{ discount }}</c-text>
        </c-flex>
        <c-text>{{ product.description }}</c-text>
        <c-text>Colors:</c-text>
        <c-flex gap="8px">
          <c-box
            v-for="color in product.colors"
            :key="color"
            rounded="full"
            border="2px"
            border-color="gray.800"
            w="44px"
            h="44px"
            :bg="color"
          />
        </c-flex>
      </c-stack>

      <c-button
        font-size="12px"
        py="8px"
        px="14px"
        text-transform="uppercase"
        border-radius="full"
        color="#181818"
      >
        <c-text font-weight="regular">Add to bag</c-text>
      </c-button>
    </c-flex>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    hasDiscount() {
      return !!this.product.discount
    },
    discount() {
      return (
        this.product.price -
        this.product.price * this.product.discount
      ).toFixed(2)
    },
    ...mapState({
      product: (state) => state.currentProduct,
    }),
  },

  created() {
    this.$store.dispatch('getProduct', this.$route.params.id)
  },
  methods: mapActions({ getProduct: 'getProduct' }),
}
</script>

<style>
.striked {
  color: #999999;
  text-decoration: line-through;
}
</style>
