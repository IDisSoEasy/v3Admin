import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/views/index/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router