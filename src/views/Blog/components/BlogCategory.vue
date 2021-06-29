<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
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
      isLoading: false,
      // list: []
    }
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.params.limit || 10
    },
    list() {
      const totalArticleCount = this.data.reduce((a,b) => a+b.articleCount,0)
      const result = [{
        articleCount: totalArticleCount,
        id: -1,
        name: "全部",
        order: 0,
      },...this.data]
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}`
      }))
    }
  },
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogTypes()
    },
    handleSelect(v) {
      console.log(v)
      const query = {
        page: 1,
        limit: this.limit
      };
      if(v.id === -1) {
        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
           categoryId: v.id
          }
        })
      }
    }
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
