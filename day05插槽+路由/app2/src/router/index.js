import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 引入组件
// import About from '../views/About.vue' // 引入组件

Vue.use(VueRouter)


// routes就是路由的配置 也就是规则  数组里边的一个个的对象就是一个一个的规则
const routes = [
    {
        path: '/',
        redirect: '/home' // 重定向
    },
    {
        path: '/home',  // URL的路径
        name: 'Home',   // 当前规则的一个名字 可以没有
        component: Home // 组件 当前URL要展示的组件（页面内容）
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')  // 路由懒加载 提高首页加载的性能
        // component: About 
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail.vue')  // 路由懒加载 提高首页加载的性能
    },
]

const router = new VueRouter({
    mode: 'history', // 路由两种模式：history  hash
    // hash 兼容性好
    // history 兼容性不好  后台小伙伴还要对服务器做一些调整
    base: process.env.BASE_URL,
    routes: routes
})

export default router
