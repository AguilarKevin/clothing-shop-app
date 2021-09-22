<template>
  <c-stack>
    <c-flex
      :py="['28px', '0']"
      flex-dir="column"
      align="center"
      justify="center"
      gap="14px"
    >
      <c-heading
        as="h1"
        :font-size="['24pt', '44pt']"
        text-transform="uppercase"
        :line-height="['24pt', '44pt']"
        align="center"
        >New Arrivals</c-heading
      >
      <c-text align="center"
        >Thoughtfully designed objects for the workspace, home, and
        travel.</c-text
      >
    </c-flex>

    <c-flex
      :flex-dir="['column', 'row']"
      justify="space-between"
      py="4"
      gap="8px"
      w="100%"
    >
      <c-menu :close-on-select="false">
        <c-menu-button rounded="lg" right-icon="chevron-down" color="#303030">
          <c-text font-size="11pt" font-weight="thin">Sort</c-text>
        </c-menu-button>
        <c-menu-list>
          <c-menu-option-group
            default-value="asc"
            title="Order"
            color="#303030"
            type="radio"
          >
            <c-menu-item-option value="asc" selected color="#303030">
              <c-text font-size="11pt" font-weight="thin">Asc</c-text>
            </c-menu-item-option>
            <c-menu-item-option value="desc" color="#303030">
              <c-text font-size="11pt" font-weight="thin">Desc</c-text>
            </c-menu-item-option>
          </c-menu-option-group>
        </c-menu-list>
      </c-menu>
      <c-flex gap="14px">
        <c-menu :close-on-select="false">
          <c-menu-button rounded="lg" right-icon="chevron-down" color="#303030">
            <c-text font-size="11pt" font-weight="thin">Category</c-text>
          </c-menu-button>
          <c-menu-list>
            <c-menu-option-group
              default-value="all"
              title="Option"
              color="#303030"
              type="radio"
            >
              <c-menu-item-option value="all" selected color="#303030">
                <c-text font-size="11pt" font-weight="thin">All</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Shirts" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Shirts</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Wearables" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Wearables</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Shoes" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Shoes</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Pants" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Pants</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Other" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Other</c-text>
              </c-menu-item-option>
            </c-menu-option-group>
          </c-menu-list>
        </c-menu>

        <c-menu :close-on-select="false">
          <c-menu-button rounded="lg" right-icon="chevron-down" color="#303030">
            <c-text font-size="11pt" font-weight="thin">Brand</c-text>
          </c-menu-button>
          <c-menu-list>
            <c-menu-option-group
              default-value="all"
              title="Option"
              color="#303030"
              type="radio"
            >
              <c-menu-item-option value="all" selected color="#303030">
                <c-text font-size="11pt" font-weight="thin">Addidas</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Shirts" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Nike</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Wearables" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Pull&Bear</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Shoes" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Bershka</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Pants" color="#303030">
                <c-text font-size="11pt" font-weight="thin">Forever21</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Other" color="#303030">
                <c-text font-size="11pt" font-weight="thin"
                  >Calvin Klein</c-text
                >
              </c-menu-item-option>
            </c-menu-option-group>
          </c-menu-list>
        </c-menu>

        <c-menu :close-on-select="false">
          <c-menu-button rounded="lg" right-icon="chevron-down" color="#303030">
            <c-text font-size="11pt" font-weight="thin">Size</c-text>
          </c-menu-button>
          <c-menu-list>
            <c-menu-option-group
              default-value="all"
              title="Option"
              color="#303030"
              type="radio"
            >
              <c-menu-item-option value="all" selected color="#303030">
                <c-text font-size="11pt" font-weight="thin">XS</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Shirts" color="#303030">
                <c-text font-size="11pt" font-weight="thin">S</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Wearables" color="#303030">
                <c-text font-size="11pt" font-weight="thin">M</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Shoes" color="#303030">
                <c-text font-size="11pt" font-weight="thin">L</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Pants" color="#303030">
                <c-text font-size="11pt" font-weight="thin">XL</c-text>
              </c-menu-item-option>

              <c-menu-item-option value="Other" color="#303030">
                <c-text font-size="11pt" font-weight="thin">2XL</c-text>
              </c-menu-item-option>
            </c-menu-option-group>
          </c-menu-list>
        </c-menu>
      </c-flex>
    </c-flex>
    <c-grid
      gap="24px"
      justify="center"
      :template-columns="['100%', 'repeat(2,1fr)', 'repeat(3,1fr)']"
    >
      <product-card
        v-for="item in products"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :discount="item.discount || 0"
        :media-src="item.media[0].url"
      />
    </c-grid>
  </c-stack>
</template>

<script>
import ky from 'ky'

export default {
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    const response = await ky(
      `https://kevs-clothing-shop.herokuapp.com/api/products`
    ).json()

    this.products = response.data
  },
}
</script>

<style></style>
