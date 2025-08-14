import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import UserManagerView from "@/views/UserManagerView.vue";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/user/login',
            name: 'login',
            component: LoginView

        },
        {
            path: '/user/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/user/userManager',
            name: 'userManager',
            component: UserManagerView
        }

    ],
})

export default router
