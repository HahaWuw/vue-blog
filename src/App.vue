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
    />
  </div>
</template>

<script>
import Avatar from "./components/Avator";

export default {
  name: 'App',
  components: {
    Avatar
  }
}
</script>

<style>
</style>
