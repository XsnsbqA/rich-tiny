import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import RichTiny from "./lib/richTiny/lib";
Vue.use(RichTiny);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
