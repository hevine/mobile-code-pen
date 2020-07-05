import Vue from 'vue'
import Router from 'vue-router'
import progress from 'nprogress'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import IconSvg from '@/components/Icons.vue'


Vue.use(Router);
Vue.use(Mint);
Vue.component('icon-svg', IconSvg);

const MainPage = ()=>import('@/view/MainPage.vue');
const ResultPage = ()=>import('@/view/ResultPage.vue');


const router = new Router({
    mode: 'history',
    routes:[
        {
            name:'home',
            path:'/',
            component: MainPage
        },
        {
            name:'run',
            path:'/run',
            component: ResultPage,
        }
    ]
})

export default router
