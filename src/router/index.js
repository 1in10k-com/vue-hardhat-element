import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  {
    path: "/",
    component: () => import("../components/home.vue"),
  },
  { path: "/page1", component: () => import("../components/page1.vue") },
  { path: "/page2", component: () => import("../components/page2.vue") },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new Router({
  routes,
  mode: "hash",
});

export default router;
