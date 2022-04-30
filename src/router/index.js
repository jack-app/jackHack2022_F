import Vue from "vue";
import VueRouter from "vue-router";
import TopView from "@/components/TopView.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Top",
      component: TopView,
    },
  ],
});

export default router;
