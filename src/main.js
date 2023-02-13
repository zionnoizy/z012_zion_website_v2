import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import './assets/main.css'

const router = createRouter({
    history: createWebHistory(),
    routers: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About}
    ]
})

createApp(App)
.use(router)
.mount('#app')
