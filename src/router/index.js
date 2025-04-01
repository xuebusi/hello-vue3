import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/products', component: () => import('../views/ProductsView.vue') },
    { path: '/services', component: () => import('../views/ServicesView.vue') },
    { path: '/news', component: () => import('../views/NewsView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router