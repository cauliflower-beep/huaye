import { createRouter, createWebHistory } from "vue-router";

// 导入相应页面
import Home from "@/views/Home.vue";
import Archive from "@/views/Archive.vue";

const routes = [
  // 首页
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/archive",
    name: "archive",
    component: Archive,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | BI团队 - 文档沉淀汇总`;
//   next();
// });

export default router;
