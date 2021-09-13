<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,

} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,

  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {},
  methods: {}
}
</script>
