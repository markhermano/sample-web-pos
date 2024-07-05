import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const AuthLayout = () => import('@/layouts/authentication/index.vue')

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: AuthLayout,
    name: 'auth',
    redirect: '/index',
    children: [
      {
        path: 'login',
        component: () => import('@/views/authentication/index.vue'),
        name: 'Login',
        meta: {
          title: 'Login',
          noCache: true,
          hidden: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router