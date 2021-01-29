/**
 * 项目入口文件：main.js
 * 1、new Vue() 就是创建跟组件，用 render 读取一个 .vue 文件，$mount 渲染替换 index.html中的占位
 * 2、项目所依赖的环境，比如： Vue 环境，路由环境，仓库环境，第三方环境，自定义环境都是在 main.js 中完成
 */

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import { createRouter, createWebHistory } from 'vue-router'     //版本需要在4.0以上才支持vue3

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Test = () => import('../views/Test.vue')
const HelloWorld = () => import('../components/HelloWorld')

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/helloworld',
        name: 'Hello World',
        component: HelloWorld
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})


export default router

