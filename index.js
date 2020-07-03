import Vue from 'vue'
import app from '@/components/App.vue'
import router from '@/router'
import store from '@/store'

new Vue({
    el:'#app',
    router,
    store,
    render: h=>h(app)
})