<template>
  <div>
    <c-flex :flex-dir="['column', 'row']" align="center">
      <c-flex
        py="20"
        align-items="start"
        :justify="['center', 'space-between']"
        :gap="['8px', '32px']"
        font-weight="regular"
      >
        <nuxt-link to="/">
          <c-heading :font-size="['11pt', '16pt']" font-weight="regular"
            >FALONI</c-heading
          >
        </nuxt-link>
        <c-flex flex-dir="column" gap="18px">
          <c-heading :font-size="['14px', '16px']" as="h5">Products</c-heading>
          <c-flex
            :font-size="['11px', '14px']"
            flex-dir="column"
            gap="18px"
            color="#999999"
          >
            <c-text>Bags</c-text>
            <c-text>Tees</c-text>
            <c-text>Objects</c-text>
            <c-text>Home Goods</c-text>
            <c-text>Accesories</c-text>
          </c-flex>
        </c-flex>

        <c-flex flex-dir="column" gap="18px">
          <c-heading :font-size="['14px', '16px']" as="h5">Company</c-heading>
          <c-flex
            :font-size="['11px', '14px']"
            flex-dir="column"
            gap="18px"
            color="#999999"
          >
            <c-text>Who we are</c-text>
            <c-text>Sustainability</c-text>
            <c-text>Press</c-text>
            <c-text>Home Careers</c-text>
            <c-text>Terms & Conditions</c-text>
            <c-text>Privacy</c-text>
          </c-flex>
        </c-flex>

        <c-flex flex-dir="column" gap="18px">
          <c-heading :font-size="['14px', '16px']" as="h5"
            >Customer Service</c-heading
          >
          <c-flex
            flex-dir="column"
            gap="18px"
            color="#999999"
            :font-size="['11px', '14px']"
          >
            <c-text>Contact</c-text>
            <c-text>Shiping</c-text>
            <c-text>Returns</c-text>
            <c-text>Warranty</c-text>
            <c-text>Secure Payment</c-text>
            <c-text>FAQ</c-text>
            <c-text>Find a store</c-text></c-flex
          >
        </c-flex>
      </c-flex>
    </c-flex>

    <c-flex
      font-weight="regular"
      w="full"
      py="6"
      d="flex"
      justify="center"
      align="center"
    >
      <c-text>2021 Kevin Aguilar, All rights reserved.</c-text>
    </c-flex>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
