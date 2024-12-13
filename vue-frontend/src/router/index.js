import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Admin from '../pages/AdminDashboard.vue'
import UserDashboard from '../pages/UserDashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/user', component: UserDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
