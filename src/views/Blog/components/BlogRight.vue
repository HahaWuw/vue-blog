<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toWithSelected" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList.vue'
import { debounce } from '@/utils'
export default {
  components: {
    RightList
  },
  props: {
    toc: {
      type: Array,
    }
  },
  data() {
    return {
      activeAnchor: "article-md-title-2",
    };
  },
  computed: {
    toWithSelected() {
      const getTOC = (toc = []) => {
        return toc.map( item => ({
          ...item,
          isSelect: item.anchor === this.activeAnchor,
          children: getTOC(item.children)
        }))
      }
      return getTOC(this.toc)
    },
    // 根据toc得到它们对应的元素数组
    doms() {
      const doms = []
      const addToDoms = (toc = []) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor)) 
          if(t.children && t.children.length) {
            addToDoms(t.children)
          }
        }
      }
      addToDoms(this.toc)
      return doms
    }
  },
  created() {
    debounce(this.test, 50)()
  },
  methods: {
    test(){},
    handleSelect(v) {
      location.hash = v.anchor
    },
  }
}
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>