import {createApp} from 'vue'
import App from "./App.vue";
import BootstrapVue3 from 'bootstrap-vue-3'
import { routes } from "./router/index";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
