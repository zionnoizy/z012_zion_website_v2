import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
// import ZionProject from '@/views/ZionProject.vue'
import ZionProfile from '@/views/ZionProfile.vue'
// import News from '@/views/News.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[

        {path: "/", component: Home },
        // {path: "/zion_project", name: "ZionProject", component: ZionProject },
        {path: "/zion_profile", name: "ZionProfile", component: ZionProfile },
        // {path: "/news", name: "News", component: News },


    
    ]

})

export default router