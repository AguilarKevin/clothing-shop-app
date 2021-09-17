<template>
  <div>
    <CThemeProvider>
      <CColorModeProvider>
        <c-box
          font-family="HelveticaNeueCyr"
          w="100vw"
          color="white"
          as="main"
          :px="['6', '16']"
        >
          <the-header />
          <Nuxt />
        </c-box>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import { CThemeProvider, CColorModeProvider } from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
  },
}
</script>
