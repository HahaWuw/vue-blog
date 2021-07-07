<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :list="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container">
        <BlogRight :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail.vue'
import BlogRight from './components/BlogRight.vue'
import fetchData from '@/mixins/fetchData.js'
import mainScroll from '@/mixins/mainScroll.js'
import { getBlog } from '@/api/blog.js'
import BlogComment from "./components/BlogComment";

export default {
  mixins: [fetchData(null), mainScroll('mainContainer')],
  components: {
    Layout,
    BlogDetail,
    BlogRight,
    BlogComment
  },
  data() {
    return {
      isLoading: true
    }
  },
  
  updated() {
    const hash = location.hash
    location.hash = ""
    setTimeout(() => {
      location.hash = hash
    }, 50)
  },
  methods: {
    async fetchData() {
       return await getBlog(this.$route.params.id);
    }
  }
}
</script>

<style>
.main-container {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 20px;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>