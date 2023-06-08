import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'',
          name:'Home',
          component:()=>import('@/views/Home/index.vue')
        },
        {
          path:'category/:id',
          name:'Category',
          component:()=>import('@/views/Category/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
