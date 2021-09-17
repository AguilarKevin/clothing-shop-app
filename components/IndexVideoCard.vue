<template>
  <div v-chakra position="relative" :h="['220px', '640px']">
    <video v-chakra position="relative" w="full" h="full" autoplay>
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
  </div>
</template>

<script>
export default {}
</script>

<style></style>
