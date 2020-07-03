import Vue from 'vue'
import Router from 'vue-router'
import progress from 'nprogress'
// import Mint from 'mint-ui'

Vue.use(Router);

const MainPage = ()=>import('@/view/MainPage.vue');


const router = new Router({
    mode: 'history',
    routes:[
        {
            name:'home',
            path:'/',
            component: MainPage
        }
    ]
})

export default router
