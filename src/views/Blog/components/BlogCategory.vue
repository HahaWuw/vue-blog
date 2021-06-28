<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="data" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from '@/mixins/fetchData.js'
import { getBlogTypes } from "@/api/blog.js";

export default {
  mixins: [fetchData([])],
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogTypes()
    },
    handleSelect() {}
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
