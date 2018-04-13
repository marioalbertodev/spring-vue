import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import vendor from '@/vendor'


Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})