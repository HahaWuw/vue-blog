<template>
  <div class="carousel-item-container">
    <ImageLoader @load="showWords" :src="carous.bigImg" :placeholder="carous.midImg" /> 
    <div class="title" ref="title">{{ carous.title }}</div>
    <div class="desc" ref="desc">{{ carous.description }}</div>
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
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    console.log(this.titleWidth, this.descWidth)
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    }
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = '2s'
      this.$refs.title.style.width = this.titleWidth + 'px'

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = '2s 1s'
      this.$refs.desc.style.width = this.descWidth + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";

.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  .title, .desc {
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
}
</style>