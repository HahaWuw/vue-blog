// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import loading from "./directives/loading";
Vue.directive('loading', loading)

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
