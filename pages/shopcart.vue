<template>
  <div>{{ shopcart }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    shopcart: (state) => state.shopcart,
  }),
}
</script>

<style></style>
