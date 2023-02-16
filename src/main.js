import { createApp } from 'vue'

import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import './assets/main.css'

import router from "@/plugins/router";

createApp(App)
.use(router)
.mount('#app')
