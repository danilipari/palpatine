import Home from "@/views/Home.vue"
import Test from "@/views/Test.vue"

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "Home" },
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    meta: { title: "Test" },
    component: Test,
  },
];
