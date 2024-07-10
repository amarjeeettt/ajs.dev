import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import ProjectView from '../views/Projects.vue'
import ContactView from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    }
  ]
})

export default router
