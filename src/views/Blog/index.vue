<template>
  <div v-loading="isLoading">
    <h1>文章</h1>
    <RightList :list="listContent" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList.vue';
import fetchData from '@/mixins/fetchData.js';
import { getBlogTypes } from '@/api/blog.js'

export default {
  mixins: [fetchData([])],
  components: {
    RightList
  },
  data() {
    return {
      listContent: []
    }
  },
  methods: {
    async fetchData() {
      
      this.listContent = await getBlogTypes()
    },
    handleSelect(item) {
      console.log(item)
    }
  }
};
</script>

<style></style>
