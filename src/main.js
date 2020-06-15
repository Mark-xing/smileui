import Vue from "vue";
import App from "./App.vue";
import smileui from "./packages/index";
// import smileui from "smile-ui-xxg";
// import "smile-ui-xxg/dist/smile-ui.css";
Vue.use(smileui); //install
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
