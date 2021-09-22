<template>
  <c-flex flex-dir="column" rounded="lg" overflow="hidden">
    <c-box h="190px">
      <c-image object-fit="cover" w="full" h="full" :src="imageSrc" />
    </c-box>
    <c-flex
      w="full"
      h="full"
      justify="space-between"
      gap="24px"
      flex-dir="column"
      px="4"
      py="5"
      bg="#16191b"
    >
      <c-stack>
        <c-heading
          text-transform="uppercase"
          font-size="12pt"
          font-weight="regular"
          >{{ title }}</c-heading
        >
        <c-text
          color="#bbbbbb"
          font-size="10pt"
          line-height="1.2"
          font-weight="thin"
          class="text-truncated"
          >{{ description }}</c-text
        >
      </c-stack>
      <nuxt-link :to="`/collections/${id}`" w="full">
        <c-button
          w="full"
          rounded="full"
          right-icon="chevron-right"
          color="#16191b"
        >
          <c-text color="#16191b" text-transform="uppercase" font-size="10px"
            >View the collection</c-text
          >
        </c-button>
      </nuxt-link>
    </c-flex>
  </c-flex>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageSrc: { type: String, required: true },
  },
}
</script>

<style>
.text-truncated {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
