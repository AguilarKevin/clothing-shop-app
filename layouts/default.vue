<template>
  <div>
    <CThemeProvider>
      <CColorModeProvider>
        <c-box
          font-family="HelveticaNeueCyr"
          w="100%"
          h="100%"
          color="white"
          as="main"
          :px="['6', '16']"
        >
          <c-reset />
          <c-flex h="100vh" flex-dir="column" justify-content="space-between">
            <the-header />
            <Nuxt />
            <the-footer />
          </c-flex>
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
