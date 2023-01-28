import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserInfoVue from '../views/UserInfo.vue'
import Quiz from '../views/Quiz.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfoVue
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
