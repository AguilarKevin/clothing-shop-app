<script>
export default {
  props: {
    id: { type: Number, required: true },
    count: { type: Number, required: true },
    title: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    img: { type: Object, required: true },
  },
  data() {
    return {
      itemCount: this.count,
    }
  },
  computed: {
    productCount() {
      return this.itemCount
    },
  },
  methods: {
    incrementCount() {
      this.itemCount++
      this.$store.dispatch('incrementCount', this.id)
    },
    decrementCount() {
      if (this.itemCount === 1) {
        return
      }
      this.itemCount--
      this.$store.dispatch('decrementCount', this.id)
    },
    removeItem() {
      this.$store.dispatch('removeFromShopcart', this.id)
    },
  },
}
</script>

<template>
  <c-flex h="120px" gap="14px" p="4px" pb="14px">
    <c-box w="30%" h="full">
      <c-image w="full" h="full" object-fit="cover" :src="img.url" />
    </c-box>
    <c-flex h="full" flex-dir="column" justify="start" gap="10px">
      <c-flex gap="14px" justify="space-between">
        <c-heading
          font-weight="regular"
          :align="['center', 'left']"
          font-size="16px"
          as="h5"
          >{{ title }}</c-heading
        >
        <c-icon-button
          size="xs"
          variant="outline"
          icon="small-close"
          @click="removeItem"
        />
      </c-flex>

      <c-flex gap="4px" justify="space-between">
        <c-flex gap="4px">
          <c-text>Subtotal: </c-text>
          <c-box rounded="md" p="4px" w="44px" h="24px" border="1px"
            ><c-box
              rounded="md"
              border="2px"
              border-color="gray.800"
              w="full"
              h="full"
              :bg="color"
            />
          </c-box>
        </c-flex>

        <c-divider border-color="white" orientation="vertical" />
        <c-flex gap="8px">
          <c-text>Size:</c-text>
          <c-text text-transform="uppercase">
            {{ size }}
          </c-text>
        </c-flex>
      </c-flex>
      <c-flex gap="8px">
        <c-text>Quantity: </c-text>
        <c-flex
          align="center"
          justify="space-between"
          gap="4px"
          rounded="full"
          overflow="hidden"
          h="24px"
          border="1px"
          flex="1"
          background="white"
        >
          <c-button h="24px" variant="ghost" @click="decrementCount">
            -
          </c-button>
          <c-text
            color="#4c4c4c"
            align="center"
            font-weight="bold"
            font-size="14px"
            >{{ productCount }}</c-text
          >
          <c-button h="24px" variant="ghost" @click="incrementCount">
            +
          </c-button>
        </c-flex>
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<style></style>
