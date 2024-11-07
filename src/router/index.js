import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入每一个可能要呈现的组件
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import Publish from '../views/Publish.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Content',
    component: Content
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish,
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    name:"Login",
    component: Login
  },
  {
    path: '/signup',
    name:"SignUp",
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history', // 路由工作模式
  base: process.env.BASE_URL,
  routes
})

export default router
