<template>
  <div class="banner-container">
    <c-heading
      class="header-new"
      as="h1"
      size="2xl"
      :font-size="['44pt', '72pt']"
      line-height="48pt"
      font-weight="light"
      text-transform="uppercase"
      >new</c-heading
    >
    <c-heading
      class="header-sport"
      as="h1"
      line-height="48pt"
      justify="center"
      size="2xl"
      :ml="['0', 'auto']"
      display="inline"
      font-weight="light"
      :font-size="['44pt', '72pt']"
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
      sport
    </c-heading>

    <c-box class="image-big">
      <c-image
        :h="['220px', '440px']"
        w="full"
        object-fit="cover"
        src="https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="image"
      />
    </c-box>

    <c-heading
      class="header-collection"
      as="h1"
      size="2xl"
      :font-size="['44pt', '72pt']"
      line-height="48pt"
      font-weight="light"
      text-transform="uppercase"
      word-break="break-word"
      >collection</c-heading
    >

    <c-box class="image-small">
      <c-image
        :h="['170px', '320px']"
        w="full"
        object-fit="cover"
        src="https://images.unsplash.com/photo-1546102597-4ac3be10560e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80"
        alt="image"
      />
    </c-box>

    <c-text class="banner-p" font-weight="regular" mt="4"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, minus
      quasi quibusdam neque illo optio atque rem dolores sed quos? Error maxime
      rerum hic facilis, magnam voluptate fugiat modi molestiae?
    </c-text>

    <c-flex
      class="banner-arrow"
      border-width="1px"
      rounded="full"
      align="center"
      justify="center"
    >
      <down-arrow-icon w="10" h="10" />
    </c-flex>
  </div>
</template>

<style>
.banner-container {
  display: grid;
  width: 100%;
  grid-template-areas:
    'header-new .'
    'header-sport header-sport'
    'header-collection header-collection'
    'image-big .'
    'image-big image-small'
    'banner-p banner-p'
    'banner-arrow banner-arrow';
  grid-template-columns: repeat(2, 1fr);
  column-gap: 14px;
}

.header-new {
  grid-area: header-new;
}

.header-sport {
  grid-area: header-sport;
}

.header-collection {
  grid-area: header-collection;
}

.image-big {
  grid-area: image-big;
  height: 100%;
}

.image-small {
  grid-area: image-small;
  align-self: end;
}

.banner-p {
  grid-area: banner-p;
}

.banner-arrow {
  grid-area: banner-arrow;
  justify-self: center;
  margin-top: 24px;
  width: 72px;
  height: 72px;
}

@media screen and (min-width: 678px) {
  .banner-container {
    column-gap: 18px;
    row-gap: 34px;
    grid-template-columns: 28% 25% 1fr 1fr;
    grid-template-areas:
      'header-new . header-sport header-sport'
      'image-big header-collection header-collection header-collection'
      'image-big image-small banner-p banner-p'
      'image-big image-small . .'
      'image-big image-small banner-arrow .';
  }

  .header-collection {
    justify-self: end;
  }

  .banner-arrow {
    grid-area: banner-arrow;
    justify-self: start;
    margin-top: 0px;
    width: 82px;
    height: 82px;
  }
}
</style>
