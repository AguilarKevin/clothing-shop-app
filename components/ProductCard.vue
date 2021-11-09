<template>
  <c-stack w="full">
    <nuxt-link :to="`/products/${id}`">
      <c-box>
        <c-stack gap="6px">
          <c-box position="relative" w="100%" :h="['320px', '70vh']">
            <c-box
              v-show="!isLoaded"
              position="absolute"
              z-index="10"
              inset="0"
              h="full"
              w="full"
              mt="-4px"
            >
              <skeleton loading="true" w="full" height="100%" />
            </c-box>
            <c-image
              h="full"
              w="full"
              object-fit="cover"
              position="relative"
              :src="mediaSrc"
              alt="product"
              @load="onImageLoaded"
            />
          </c-box>
          <c-flex v-if="isLoaded" justify="space-between" align="center">
            <c-stack>
              <c-heading
                as="h4"
                font-size="12px"
                font-weight="regular"
                m="0"
                p="0"
                color="#eeeeee"
                text-transform="uppercase"
                >{{ title }}</c-heading
              >
              <c-flex gap="4px">
                <c-text :class="{ striked: discount }"
                  >${{ price.toFixed(2) }}</c-text
                >

                <c-text v-if="discount"> - ${{ discount }}</c-text>
              </c-flex>
            </c-stack>
            <c-button size="sm" color="gray.800" rounded="full"> + </c-button>
          </c-flex>
          <c-stack v-else gap="8px">
            <skeleton height="24px" width="100%" />
            <skeleton height="24px" width="100%" />
          </c-stack>
        </c-stack>
      </c-box>
    </nuxt-link>
  </c-stack>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'

export default {
  components: {
    Skeleton,
  },
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    mediaSrc: { type: String, required: true },
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    onImageLoaded() {
      setTimeout(() => {
        this.isLoaded = true
      }, 800)
    },
  },
}
</script>
