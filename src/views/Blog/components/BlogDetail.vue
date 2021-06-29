<template>
  <div class="blog-detail-container">
    <h1>{{ list.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(list.createDate) }}</span>
      <span>浏览: {{ list.scanNumber }}</span>
      <a href="">评论: {{ list.commentNumber }}</a>
      <a href="">{{ list.category.name }}</a>
    </div>
    <div v-html="list.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from '@/utils'
import "@/styles/markdown.css"
import "highlight.js/styles/github.css"
export default {
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    console.log(this.list)
  },
  methods: {
    formatDate
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>