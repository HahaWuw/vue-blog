<template>
  <img
    class="img"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
      required: true,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>