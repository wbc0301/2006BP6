import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/reset.css' // css文件的引入不需要from


// 全部引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios';
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


/* 
    路由小总结：
    项目集成路由之后：
    有了两个全局的标签（组件）
    <router-link>  // 实现路由跳转
    <router-view>  // 路由规则匹配到的组件要展示的位置

    任何一个组件的this上边多了两个对象：
    1：$route  // 获取当前页面路由的相关数据 如：path query params name ...
    2: $router // 上边有很多方法，可以进行路由跳转 如：push  back  go ...

*/
