<template>
  <c-stack w="full">
    <nuxt-link :to="`/products/${id}`">
      <c-stack>
        <c-box :w="['260px', '100%']" :h="['320px', '70vh']">
          <c-image
            h="full"
            w="full"
            object-fit="cover"
            :src="mediaSrc"
            alt="product"
          />
        </c-box>
        <c-flex justify="space-between" align="center">
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
              <c-text color="#aaaaaa" text-decoration="line-through"
                >${{ price }}</c-text
              >
              -
              <c-text>${{ discount }}</c-text>
            </c-flex>
          </c-stack>

          <c-button size="sm" color="gray.800" rounded="full"> + </c-button>
        </c-flex>
      </c-stack>
    </nuxt-link>
  </c-stack>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    mediaSrc: { type: String, required: true },
  },
}
</script>

<style></style>
