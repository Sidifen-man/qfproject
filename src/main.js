// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-dplayer/dist/vue-dplayer.css";
// 重置样式
import "./assets/css/reset.css";
// 全局样式
import "./assets/less/global.less";
//rem
import "./assets/js/rem";

import store from "./store/index";

import VueLazyload from 'vue-lazyload'
import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1
})

Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
