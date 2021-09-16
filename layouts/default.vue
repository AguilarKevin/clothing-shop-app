<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox
          font-family="HelveticaNeueCyr"
          w="100vw"
          color="white"
          as="main"
          px="6"
        >
          <CReset />
          <the-header />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
  },
}
</script>
