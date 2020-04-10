import Vue from "vue";
import VueRouter from "vue-router";
import SwatchList from "../views/Swatches/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/swatches"
  },
  {
    path: "/swatches",
    component: SwatchList
  },
  {
    path: "/swatches/new",
    name: "NewSwatch",
    component: () =>
      import(/* webpackChunkName: "swatches" */ "../views/Swatches/Form.vue")
  },
  {
    path: "/swatches/:id",
    name: "SwatchDetails",
    component: () =>
      import(/* webpackChunkName: "swatches" */ "../views/Swatches/Details.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
