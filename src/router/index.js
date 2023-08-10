import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //Projects
      path: '/',
      name: 'projects',
      component: IndexView,
      children: [
        {
          path: '/',
          component: ProjectsView
        },
        {
          path: '/about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/experience',
          component: () => import('../views/ExperienceView.vue')
        } 
      ]
    },
    // ADMIN
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/HomeView.vue')
    }
  ]
})

export default router
