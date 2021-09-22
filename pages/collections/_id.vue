<template>
  <c-stack>
    <c-grid
      w="full"
      template-columns="repeat(2,1fr)"
      template-rows="repeat(2,50vw)"
    >
      <template v-for="(mediaItem, index) in collection.media">
        <c-box v-if="index > 0" :key="index" w="full" h="full">
          <c-image w="full" h="full" object-fit="cover" :src="mediaItem.url" />
        </c-box>
      </template>
    </c-grid>
    <c-heading>{{ collection.title }}</c-heading>

    <c-text>{{ collection.description }}</c-text>
  </c-stack>
</template>

<script>
import ky from 'ky'

export default {
  data() {
    return {
      collection: {},
    }
  },
  async fetch() {
    const response = await ky(
      `https://kevs-clothing-shop.herokuapp.com/api/collections/${this.$route.params.id}`
    ).json()

    this.collection = response.data
  },
}
</script>

<style></style>
