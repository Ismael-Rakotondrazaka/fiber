import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

createApp(App).use(router).mount("#app");
