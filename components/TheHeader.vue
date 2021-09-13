<template>
  <div>
    <CFlex
      px="6"
      py="6"
      align-items="center"
      justify="space-between"
      font-weight="regular"
    >
      <CHeading font-size="16pt" font-weight="regular">FALONI</CHeading>
      <CFlex font-size="12pt" grid-gap="4" text-transform="uppercase">
        <CText>cart</CText>
        <CText>menu</CText>
      </CFlex>
    </CFlex>
  </div>
</template>

<script>
import { CFlex, CHeading, CText } from '@chakra-ui/vue'
export default {
  components: {
    CFlex,
    CHeading,
    CText,
  },
}
</script>

<style></style>
