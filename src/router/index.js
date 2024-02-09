import { createRouter, createWebHistory } from 'vue-router'
import AOS from "aos";
import 'aos/dist/aos.css';
import HomeView from '../views/HomeView.vue'
import About from "../views/AboutView.vue"
import Bazaviy from "../views/bazaviy/Main.vue"
import Loyiha from "../views/loyiha/Main.vue"

import AppLayoutVue from '@/layout/AppLayout.vue'
import LoginLayout from '@/layout/LoginLayout.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '',
    //   component: AppLayoutVue,
    //   chilren: [
    //     {
    //       path: '/test',
    //       name: 'home',
    //       component: HomeView,
    //     },
    //   ]
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: AppLayoutVue
      }
    },
    {
      path: '/bazaviy',
      name: 'bazaviy',
      component: Bazaviy,
      meta: {
        layout: AppLayoutVue
      }
    },
    {
      path: '/loyiha',
      name: 'loyiha',
      component: Loyiha,
      meta: {
        layout: AppLayoutVue
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        layout: AppLayoutVue
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: LoginLayout
      }
    },


  ]
})
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
