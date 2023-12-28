import { createRouter, createWebHistory } from 'vue-router'
import Task1View from '../views/Task1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Task 1',
      component: Task1View
    },
    {
      path: '/task2',
      name: 'Task 2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Task2View.vue')
    },
    {
      path: '/setting',
      name: 'Setiing',
      component: () => import('../views/SettingView.vue')
    }
  ]
})

export default router
