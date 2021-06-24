<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="img-carousel" ref="inner" :style="movePosition">
      <ImageLoader @load="showWords" :src="carous.bigImg" :placeholder="carous.midImg" /> 
    </div>
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
  computed: {
    movePosition() {
      if(!this.innerSize || !this.containerSize) {
        return
      }
      const extraWidth = this.innerSize.width - this.containerSize.width
      const extraHeight = this.innerSize.height - this.containerSize.height
      const left = -extraWidth/this.containerSize.width * this.mouseX
      const top = -extraHeight/this.containerSize.height * this.mouseY
      return `transform: translate(${left}px, ${top}px)`
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    this.setSize()
    this.mouseX = this.center.x
    this.mouseY = this.center.y
    window.addEventListener('resize', this.setSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.setSize)
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0  // 鼠标的纵坐标
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
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      }
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight
      };
    },
    handleMouseMove(e) {
      const rest = this.$refs.container.getBoundingClientRect()
      this.mouseX = e.clientX - rest.left
      this.mouseY = e.clientY - rest.top
    },
    handleMouseLeave() {
      this.mouseX = this.center.x
      this.mouseY = this.center.y
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
  overflow: hidden;
  .img-carousel {
    width: 110%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
  }
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