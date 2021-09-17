<template>
  <nuxt-link :to="`/products/${id}`">
    <c-stack>
      <c-box h="320px" w="260px">
        <c-image
          h="full"
          w="full"
          object-fit="cover"
          :src="mediaSrc"
          alt="product"
        />
      </c-box>
      <c-heading
        as="h4"
        font-size="10pt"
        font-weight="regular"
        m="0"
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
  </nuxt-link>
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
