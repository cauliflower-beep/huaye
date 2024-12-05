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
  // vue3规定，路由器的工作模式是必要的
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | BI团队 - 文档沉淀汇总`;
//   next();
// });

// 默认导出router，起码模块引用的时候可以取别名，而不必使用模块名router
export default router;
