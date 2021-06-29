// 组件递归
<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span @click="handleClick(item)" class="aside" :class="{ active: item.isSelect }">{{
        item.articleCount
      }}</span>
      <RightList @select="handleClick" :list="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList", // 组件递归的重点
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(value) {
      if (!value.isSelect) {
        this.$emit("select", value);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 2em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>