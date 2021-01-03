import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import favs from "@/views/favs.vue"
import notFound from "@/views/notFound.vue"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/favs',
    component: favs
  },
  { path: '/:pathMatch(.*)*', component: notFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
