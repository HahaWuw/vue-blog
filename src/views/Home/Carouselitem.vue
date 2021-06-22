<template>
  <div class="carousel-item-container">
    <div class="title">{{ carous.title }}</div>
    <div class="desc">{{ carous.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  props: ["carous"],
  components: {
    ImageLoader
  },
  mounted() {
    console.log(this.carous)
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.carousel-item-container {
  width: 100%;
  height: 100%;
  background: lightpink;
}
</style>