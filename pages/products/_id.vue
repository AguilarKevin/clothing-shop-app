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

        <c-flex px="1" gap="14px">
          <c-flex
            v-for="color in product.colors"
            :key="color"
            rounded="full"
            border-width="0px"
            border-color="gray.800"
            w="44px"
            h="44px"
            :bg="color"
            :value="color"
            :class="[selectedColor !== color ? '' : 'colorSelected']"
          >
            <input
              :id="color"
              v-model="selectedColor"
              v-chakra
              type="radio"
              :value="color"
              d="none"
            />
            <label v-chakra :for="color" h="full" w="full"> </label>
          </c-flex>
        </c-flex>

        {{ selectedColor }}

        <c-text>Sizes:</c-text>

        <c-flex class="size-container">
          <c-flex
            v-for="item in product.sizes"
            :key="item.id"
            h="52px"
            w="44px"
            flex="1"
            align="center"
            justify="center"
            :class="[selectedSize !== item.size ? '' : 'sizeSelected']"
          >
            <input
              :id="item.id"
              v-model="selectedSize"
              v-chakra
              type="radio"
              :value="item.size"
              d="none"
            />
            <c-text as="label" :for="item.id" font-weight="=thin">
              {{ item.size }}
            </c-text>
          </c-flex>
        </c-flex>

        {{ selectedSize }}
      </c-flex>

      <c-button
        font-size="12px"
        py="8px"
        px="14px"
        text-transform="uppercase"
        border-radius="full"
        color="#181818"
        @click="addToCart"
      >
        <c-text font-weight="regular">Add to bag</c-text>
      </c-button>
    </c-grid>
  </c-flex>
</template>

<script>
import ky from 'ky'

export default {
  data() {
    return {
      product: {},
      selectedColor: '',
      selectedSize: '',
    }
  },
  async fetch() {
    const response = await ky(
      `https://kevs-clothing-shop.herokuapp.com/api/products/${this.$route.params.id}`
    ).json()

    this.product = response.data
  },
  methods: {
    addToCart() {
      if (this.selectedColor && this.selectedSize) {
        this.$store.commit('addtoShopCart', {
          id: this.product.id,
          title: this.product.title,
          imgSrc: this.product.media[0],
          price: this.product.discount || this.product.price,
          color: this.selectedColor,
          size: this.selectedSize,
        })
      } else {
        alert('seleccione un color y tamanio')
      }
    },
  },
}
</script>

<style>
.striked {
  color: #999999;
  text-decoration: line-through;
}

.colorSelected {
  border: 4px solid #fff;
  padding: 4px;
}

.sizeSelected,
.size-container {
  border: 2px solid #fff;
  border-radius: 14px;
}
</style>
