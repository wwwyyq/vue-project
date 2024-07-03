import { createRouter, createWebHistory } from "vue-router";
// 11111111
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-pre",
      component: () => import("../views/导入页/home-pre.vue"),
    },
    {
      path: "/wangwei1",
      name: "wangwei1",
      component: () => import("../views/唐-王维/wangwei1.vue"),
    },
    {
      path: "/wangwei2",
      name: "wangwei2",
      component: () => import("../views/唐-王维/wangwei2.vue"),
    },
    {
      path: "/libai1",
      name: "libai1",
      component: () => import("../views/唐-李白/libai1.vue"),
    },
    {
      path: "/libai2",
      name: "libai2",
      component: () => import("../views/唐-李白/libai2.vue"),
    },
    {
      path: "/sushi1",
      name: "sushi1",
      component: () => import("../views/宋-苏轼/sushi1.vue"),
    },
    {
      path: "/sushi2",
      name: "sushi2",
      component: () => import("../views/宋-苏轼/sushi2.vue"),
    },
    {
      path: "/liqingzhao1",
      name: "liqingzhao1",
      component: () => import("../views/宋-李清照/liqingzhao1.vue"),
    },
    {
      path: "/liqingzhao2",
      name: "liqingzhao2",
      component: () => import("../views/宋-李清照/liqingzhao2.vue"),
    },
    {
      path: "/menghaoran1",
      name: "menghaoran1",
      component: () => import("../views/唐-孟浩然/menghaoran1.vue"),
    },
    {
      path: "/menghaoran2",
      name: "menghaoran2",
      component: () => import("../views/唐-孟浩然/menghaoran2.vue"),
    },
    {
      path: "/xinqiji1",
      name: "xinqiji1",
      component: () => import("../views/宋-辛弃疾/xinqiji1.vue"),
    },
    {
      path: "/xinqiji2",
      name: "xinqiji2",
      component: () => import("../views/宋-辛弃疾/xinqiji2.vue"),
    },
    {
      path: "/changan",
      name: "changan",
      component: () => import("../views/唐朝都会/changan.vue"),
    },
    {
      path: "/luoyang",
      name: "luoyang",
      component: () => import("../views/唐朝都会/luoyang.vue"),
    },
    {
      path: "/jiangnan",
      name: "jiangnan",
      component: () => import("../views/唐朝都会/jiangnan.vue"),
    },
    {
      path: "/gucheng",
      name: "gucheng",
      component: () => import("../views/首页/gucheng.vue"),
    },
    {
      path: "/linan",
      name: "linan",
      component: () => import("../views/宋代都会/linan.vue"),
    },
    {
      path: "/chengdu",
      name: "chengdu",
      component: () => import("../views/宋代都会/chengdu.vue"),
    },
    {
      path: "/kaifeng",
      name: "kaifeng",
      component: () => import("../views/宋代都会/kaifeng.vue"),
    },
    
  ],
});

export default router;
