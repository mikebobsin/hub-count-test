import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import store from "./store";
import Toast, { PluginOptions } from "vue-toastification";
import VueTheMask from "vue-the-mask";
import "vue-toastification/dist/index.css";

createApp(App).use(store).use(router).use(Toast).use(VueTheMask).mount("#app");

//for vue dev tools only
Vue.config.devtools = true;
