"import { hasOwnMetadata } from 'core-js/fn/reflect';"
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';


import LogIn from './components/LogIn.vue'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'


const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/logIn',
    name: 'login',
    component: LogIn
  },
  {
    path: '/user/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/SignUp',
    name: 'SignUn',
    component: SignUp
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
