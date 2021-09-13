<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox
          font-family="HelveticaNeueCyr"
          bg="#1c1f22"
          color="white"
          as="main"
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
