import {createRouter,createWebHistory} from "vue-router";

const routes = [
    {
        path:'/',
        component: ()=> import('../view/LoginView.vue')
    },
    {
        path: '/index',
        component: ()=> import('../view/IndexView.vue'),
        children:[
            {
                path: 'movie',
                component: ()=>import('../components/MovieCom.vue')
            },
            {
                path: 'hall',
                component: ()=>import('../components/HallCom.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;