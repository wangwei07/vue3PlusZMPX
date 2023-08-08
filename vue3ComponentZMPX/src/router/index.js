import { createWebHistory, createRouter } from 'vue-router'
import Layout from '@/layout'
// 公共路由
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/peiXun/index'),
    name: 'peiXun'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
