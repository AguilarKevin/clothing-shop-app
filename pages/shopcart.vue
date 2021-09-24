<template>
  <div v-chakra h="82vh">
    <c-flex v-if="shopcart.length > 0" flex-dir="column" gap="14px">
      <c-flex
        v-for="entry in shopcart"
        :key="entry.id"
        h="120px"
        gap="14px"
        p="4px"
      >
        <c-box w="30%" h="full">
          <c-image
            w="full"
            h="full"
            object-fit="cover"
            :src="entry.imgSrc.url"
          />
        </c-box>
        <c-stack>
          <c-flex gap="14px"
            ><c-stack>
              <c-heading
                font-weight="regular"
                :align="['center', 'left']"
                font-size="16px"
                as="h5"
                >{{ entry.item }}</c-heading
              >
            </c-stack>
            <c-icon-button size="xs" variant="outline" icon="small-close" />
          </c-flex>

          <c-flex gap="4px">
            <c-box rounded="md" p="4px" w="44px" h="24px" border="1px"
              ><c-box
                rounded="md"
                border="2px"
                border-color="gray.800"
                w="full"
                h="full"
                :bg="entry.color"
              />
            </c-box>

            <c-flex
              align="center"
              justify="center"
              rounded="md"
              w="44px"
              h="24px"
              border="1px"
            >
              <c-text font-size="11px" text-transform="uppercase">
                {{ entry.size }}
              </c-text>
            </c-flex>
          </c-flex>
          <c-flex
            align="center"
            justify="space-between"
            gap="4px"
            rounded="md"
            h="24px"
            border="1px"
            flex="1"
          >
            <c-flex>
              <c-button h="44" variant="ghost">-</c-button>
              <c-text font-size="11px">{{ entry.count }}</c-text>
              <c-button h="44" variant="ghost">+</c-button>
            </c-flex>
          </c-flex>
        </c-stack>
      </c-flex>
    </c-flex>
    <c-flex v-else h="100%" flex-dir="column" justify="center" align="center">
      <iframe src="https://embed.lottiefiles.com/animation/9091"></iframe>
      <c-text>No items in the shopcart</c-text>
    </c-flex>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    shopcart: (state) => Object.values(state.shopcart),
  }),
}
</script>

<style></style>
