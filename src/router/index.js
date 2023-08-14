import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      children: [
        {
          path: '/',
          component: ProjectsView
        },
        {
          path: '/projects/:id',
          component: () => import('../components/Blog/blogPost/IndividualProject.vue'),
          props: true
        },
        {
          path: '/contacts/:id',
          component: () => import('../components/Blog/blogPost/IndividualProject.vue')
        },
        {
          path: '/about/:id',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/experience/:id',
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
