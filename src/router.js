import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/Empty.vue'


const router = createRouter({
    history: createWebHistory(),
  routes:[

      {path: "/", component: Home },


  
  ]

})

export default router