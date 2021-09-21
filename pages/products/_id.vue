<template>
  <c-flex :flex-dir="['column', 'row']" :gap="['14px', '52px']" h="100%">
    <c-stack flex="1">
      <c-box v-if="product.media" :h="['80vw', '480px']">
        <c-image
          h="full"
          w="full"
          object-fit="cover"
          :src="product.media[0].url"
        />
      </c-box>

      <c-flex gap="8px" overflow-x="auto" w="full">
        <c-box
          v-for="item in product.media"
          :key="item.id"
          flex="1"
          :h="['60px', '80px']"
        >
          <c-image h="full" w="full" object-fit="cover" :src="item.url" />
        </c-box>
      </c-flex>
    </c-stack>
    <c-grid template-rows="1fr 54px" gap="18px" flex="1">
      <c-flex flex-dir="column" gap="8px" h="['36vh', '100%']" overflow="auto">
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
      </c-flex>

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
    </c-grid>
  </c-flex>
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
