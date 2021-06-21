<template>
  <div class="pager-container" v-if="pageNumber > 1">

    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">
      |&lt;&lt;
    </a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">
      &lt;&lt;
    </a>
    <a v-if="current - visibleNumber > 1">...</a>

    <a v-for="i in numbers" :key="i" :class="{active: i === current}" @click="handleClick(i)">
      {{ i }}
    </a>
    <a v-if="pageNumber > current">...</a>
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
    >
      &gt;&gt;
    </a>
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
    >
      &gt;&gt;|
    </a>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - this.visibleNumber;
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(nums) {
      // this.current = nums
      if(nums < 1) {
        nums = 1
      }
      if(nums>this.pageNumber) {
        nums = this.pageNumber
      }
      if(nums === this.current) {
        return
      }
      this.$emit('pageChange', nums)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>