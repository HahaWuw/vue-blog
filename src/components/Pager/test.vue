<template>
  <div>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";

export default {
  components: {
    Pager
  },
  data() {
    return {
      total: 302,
      current: 1,
    };
  },
  methods: {
    handlePageChange(e) {
      this.current = e;
      console.log(e);
    },
  },
}
</script>

<style>

</style>