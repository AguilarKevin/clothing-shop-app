<template>
  <c-flex d="flex" flex-dir="column" justify-content="center" gap="14px">
    <c-flex class="banner-container" flex-wrap="wrap" mt="4">
      <c-heading
        as="h1"
        size="2xl"
        font-size="44pt"
        line-height="48pt"
        font-weight="light"
        text-transform="uppercase"
        >new</c-heading
      >
      <c-heading
        as="h1"
        line-height="48pt"
        d="inline-flex"
        flex="wrap"
        justify="center"
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
          mb="2"
          text-transform="uppercase"
          border-radius="full"
          color="#181818"
        >
          view more
        </c-button>
        sport collection
      </c-heading>

      <c-flex
        w="100%"
        justify="space-between"
        align-items="end"
        gap="16px"
        mt="8"
      >
        <c-box flex="1">
          <c-image
            h="220px"
            w="full"
            object-fit="cover"
            src="https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="image"
          />
        </c-box>

        <c-box flex="1">
          <c-image
            h="180px"
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

    <c-stack position="relative" h="220px">
      <video
        v-chakra
        position="relative"
        w="full"
        h="full"
        br="md"
        mt="8"
        autoplay
      >
        <source
          src="https://media.istockphoto.com/videos/man-dressing-up-video-id181842863"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <c-button
        position="absolute"
        bottom="2"
        left="10"
        size="sm"
        rounded="full"
        bg="#1c1f22"
        color="#FFFFFF"
      >
        <c-text font-size="10px" text-transform="uppercase">play video</c-text>
      </c-button>
    </c-stack>

    <c-box class="sales-container" py="8">
      <c-heading
        as="h3"
        size="2xl"
        font-weight="light"
        text-transform="uppercase"
        font-size="44pt"
        mb="4"
      >
        sales
      </c-heading>
      <c-flex overflow="auto" gap="14px">
        <c-stack>
          <c-box h="320px" w="260px">
            <c-image
              h="full"
              w="full"
              object-fit="cover"
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
              alt="product"
            />
          </c-box>
          <c-heading
            as="h4"
            font-size="10pt"
            font-weight="regular"
            m="0"
            color="#eeeeee"
            text-transform="uppercase"
            >faloni's t-shirt</c-heading
          >
          <c-flex gap="4px">
            <c-text color="#aaaaaa" text-decoration="line-through"
              >$60.00</c-text
            >
            -
            <c-text>$44.00</c-text>
          </c-flex>
        </c-stack>

        <c-stack>
          <c-box h="320px" w="260px">
            <c-image
              object-fit="cover"
              h="full"
              w="full"
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
              alt="product"
            />
          </c-box>
          <c-heading
            as="h4"
            font-size="10pt"
            font-weight="regular"
            m="0"
            color="#eeeeee"
            text-transform="uppercase"
            >faloni's t-shirt</c-heading
          >
          <c-flex gap="4px">
            <c-text color="#aaaaaa" text-decoration="line-through"
              >$60.00</c-text
            >
            -
            <c-text>$44.00</c-text>
          </c-flex>
        </c-stack>

        <c-stack>
          <c-box h="320px" w="260px">
            <c-image
              h="full"
              w="full"
              object-fit="cover"
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
              alt="product"
            />
          </c-box>
          <c-heading
            as="h4"
            font-size="10pt"
            font-weight="regular"
            m="0"
            color="#eeeeee"
            text-transform="uppercase"
            >faloni's t-shirt</c-heading
          >
          <c-flex gap="4px">
            <c-text color="#aaaaaa" text-decoration="line-through"
              >$60.00</c-text
            >
            -
            <c-text>$44.00</c-text>
          </c-flex>
        </c-stack>
      </c-flex>
    </c-box>
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
