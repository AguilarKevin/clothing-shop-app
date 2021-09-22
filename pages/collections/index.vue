<template>
  <c-stack>
    <c-flex
      :py="['28px', '42px']"
      flex-dir="column"
      align="center"
      justify="center"
      gap="14px"
    >
      <c-heading
        as="h1"
        :font-size="['24pt', '32pt']"
        text-transform="uppercase"
        :line-height="['24pt', '32pt']"
        align="center"
        >Mid Season Sale</c-heading
      >
      <c-text color="#bbbbbb" align="center"
        >Collections avaliable for this season.</c-text
      >
    </c-flex>

    <c-grid
      gap="24px"
      justify="center"
      :template-columns="['100%', 'repeat(2,1fr)', 'repeat(4,1fr)']"
    >
      <collection-card
        v-for="collection in collections"
        :id="collection.id"
        :key="collection.id"
        :title="collection.title"
        :description="collection.description"
        :image-src="collection.media[0].url"
      />
    </c-grid>
  </c-stack>
</template>

<script>
import ky from 'ky'

export default {
  data() {
    return {
      collections: [],
    }
  },
  async fetch() {
    const response = await ky(
      `https://kevs-clothing-shop.herokuapp.com/api/collections`
    ).json()

    this.collections = response.data
  },
}
</script>
import ky from 'ky'

<style></style>
