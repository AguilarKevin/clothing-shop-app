<template>
  <c-stack>
    <c-flex
      pt="4"
      align-items="center"
      justify="space-between"
      font-weight="regular"
    >
      <nuxt-link to="/">
        <c-heading font-size="16pt" font-weight="regular">FALONI</c-heading>
      </nuxt-link>
      <c-flex font-size="11pt" gap="8px" text-transform="uppercase">
        <nuxt-link to="/shopcart">
          <c-button px="2" variant-color="transparent">
            <c-text font-weight="thin" text-transform="uppercase">cart</c-text>
          </c-button>
        </nuxt-link>

        <c-button px="2" variant-color="transparent" @click="show = !show">
          <c-text font-weight="thin" text-transform="uppercase">menu</c-text>
        </c-button>
      </c-flex>
    </c-flex>

    <c-collapse :is-open="show">
      <c-flex flex-dir="column" align="center" color="#202020">
        <nuxt-link to="/collections">
          <c-button px="2" variant-color="transparent" @click="show = !show">
            <c-text font-weight="thin" text-transform="uppercase"
              >Collections</c-text
            >
          </c-button>
        </nuxt-link>

        <nuxt-link to="/products">
          <c-button px="2" variant-color="transparent" @click="show = !show">
            <c-text font-weight="thin" text-transform="uppercase"
              >products</c-text
            >
          </c-button>
        </nuxt-link>
      </c-flex>
    </c-collapse>
  </c-stack>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
