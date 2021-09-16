<template>
  <c-flex d="flex" flex-dir="column" justify-content="center" gap="14px">
    <c-flex class="banner-container" flex-wrap="wrap">
      <c-heading
        as="h1"
        size="2xl"
        font-size="44pt"
        font-weight="light"
        text-transform="uppercase"
        >new</c-heading
      >
      <c-heading
        as="h1"
        size="2xl"
        display="inline"
        font-weight="light"
        font-size="44pt"
        text-transform="uppercase"
        word-break="break-word"
      >
        <c-button
          font-size="12px"
          py="8px"
          px="14px"
          text-transform="uppercase"
          border-radius="full"
          color="#181818"
        >
          view more
        </c-button>
        sport collection
      </c-heading>

      <c-flex w="100%" justify="space-between" align-items="end" gap="16px">
        <c-box flex="1">
          <c-image
            h="240px"
            w="full"
            object-fit="cover"
            src="https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="image"
          />
        </c-box>

        <c-box flex="1">
          <c-image
            h="200px"
            w="full"
            object-fit="cover"
            src="https://images.unsplash.com/photo-1546102597-4ac3be10560e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80"
            alt="image"
        /></c-box>
      </c-flex>

      <c-flex flex-wrap="wrap" justify="center">
        <c-text font-weight="regular" mt="4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          minus quasi quibusdam neque illo optio atque rem dolores sed quos?
          Error maxime rerum hic facilis, magnam voluptate fugiat modi
          molestiae?</c-text
        >
        <c-box border-width="1px" mt="6" rounded="full" p="6">
          <down-arrow-icon w="10" h="10"
        /></c-box>
      </c-flex>
    </c-flex>

    <c-stack>
      <video v-chakra w="full" br="md" h="220px" mt="8" autoplay>
        <source
          src="https://media.istockphoto.com/videos/man-dressing-up-video-id181842863"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <c-button font-weight="light">play video</c-button>
    </c-stack>

    <c-flex class="sales-container">
      <c-heading
        as="h3"
        size="2xl"
        font-weight="light"
        text-transform="uppercase"
        font-size="44pt"
        >sales</c-heading
      >
    </c-flex>
  </c-flex>
</template>

<script lang="js">

export default {
  name: 'App',

  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {

      }
    }
  },
  computed: {},
  methods: {}
}
</script>
