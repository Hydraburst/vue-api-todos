import { createMemoryHistory, createRouter } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import LoginPage from '../pages/LoginPage.vue'


const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/todos',
    component: MainPage,
    name: 'todos',
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})



export default router
