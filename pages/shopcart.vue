<template>
  <div>
    <c-flex flex-dir="column">
      <c-box v-for="entry in shopcart" :key="entry.id"> {{ entry.item }}</c-box>
    </c-flex>
    {{ shopcart }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    shopcart: (state) => Object.values(state.shopcart),
  }),
}
</script>

<style></style>
