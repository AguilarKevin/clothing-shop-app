<template>
  <div v-chakra position="relative" w="full" :h="['220px', '480px']">
    <c-box position="relative" w="full" :h="['220px', '480px']">
      <video v-chakra w="full" h="full" autoplay object-fit="cover">
        <source
          src="https://media.istockphoto.com/videos/man-dressing-up-video-id181842863"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </c-box>
    <c-button
      position="absolute"
      :bottom="[3, 20]"
      :left="[10, 24]"
      size="md"
      rounded="full"
      bg="#1c1f22"
      color="#FFFFFF"
    >
      <c-text font-size="10px" text-transform="uppercase">play video</c-text>
    </c-button>
  </div>
</template>
