import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IDEnlightView from '../views/IDEnlightView.vue'
import WebXplorerEDUView from '../views/WebXplorerEDUView.vue'
import BibDeskView from '@/views/BibDeskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/idenlight',
      name: 'idenlight',
      component: IDEnlightView
    },
    {
      path: '/projects/webxploreredu',
      name: 'webxploreredu',
      component: WebXplorerEDUView
    },
    {
      path: '/projects/bibdesk',
      name: 'bibdesk',
      component: BibDeskView
    }
  ]
})

export default router
