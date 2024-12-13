// 现在的后端更喜欢hash模式
import { createRouter, createWebHistory } from "vue-router";

// 导入相应页面
import Home from "@/views/Home.vue";
import Archive from "@/views/Archive.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import Publish from "@/views/Publish.vue";

const routes = [
  // 首页
  // 配置上名字之后，路由就可以有两种跳转形式：
  // 1.字符串跳转： to="/"
  // 2.对象跳转。对象跳转又分为两种形式：
  // 2.1 name跳转： :to="{name:'home'}"
  // 2.2 path跳转： :to="{path:'/'}"
  // 当存在多级路由或者路由参数的时候，还是对向形式使用的更方便一些
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/archives",
    name: "archives",
    component: Archive,
  },
  {
    path: "/article",
    name:"article",
    component: ArticleDetail,
  },
  {
    path: "/publish",
    name:"publish",
    component: Publish,
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
