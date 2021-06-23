<template>
  <div class="home-container" ref="container">
    <ul class="ul-container" :style="{ marginTop }" @wheel="handleWheel" @transitionend="
    handleTransionEnd">
      <li v-for="items in banners" :key="items.id">
        <Carouselitem :carous="items" />
      </li>
    </ul>
    <div v-show="index > 0" class="icon iconup" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
     <div v-show="index < banners.length - 1" class="icon icondown" @click="switchTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li v-for="item,i in banners" :class="{active: index === i}" :key="item.id" @click="switchTo(i)"></li>
    </ul>  
  </div>
</template>

<script>
import { getBanners } from '@/api/banner'
import Carouselitem from './Carouselitem.vue'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
    Carouselitem
  },
  data() {
    return {
      banners: [],
      index: 0,
      offsetHight: 0, // 容器高度
      switching: false
    }
  },
  async created() {
    this.banners = await getBanners()
  },
  mounted() {
    this.offsetHight = this.$refs.container.clientHeight
    window.addEventListener("resize", this.handleResize)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize)
  },
  computed: {
    marginTop() {
      return -this.index * this.offsetHight + 'px'
    }
  },
  methods: {
    switchTo(i) {
      this.index = i
    },
    handleWheel(e) {
      if(this.switching){
        return
      }
      if(e.deltaY < -5 && this.index > 0){
        this.switching = true;
        this.index--;
      } else if(e.deltaY > 5 && this.index < this.banners.length - 1){
        this.switching = true;
        this.index++;
      }
    },
    handleTransionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.offsetHight = this.$refs.container.clientHeight
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/styles/mixins.less");
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .ul-container {
    width: 100%;
    height: 100%;
    transition: 500ms;

    li {
      width: 100%;
      height: 100%;
      // background: lightgreen;

    }
  }
  .icon {
    .self-center();
    font-size: 30px;
    color: #b4b8bc;
    cursor: pointer;
    transform: translateX(-50%);
    @gap: 25px;
    &.iconup {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icondown {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>
