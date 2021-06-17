<template>
  <div id="app">
    <h1>App组件</h1>
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="150"
    />
    <Avatar
      url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg"
      :size="50"
    />\
    <Icon type="info" />
    <br/>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Avatar from "./components/Avator";
import Icon from "./components/Icon";
import Pager from "./components/Pager";

export default {
  name: "App",
  components: {
    Avatar,
    Icon,
    Pager,
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
};
</script>


<style scoped>
.iconfont {
  font-size: 26px;
  color: red;
}
</style>
