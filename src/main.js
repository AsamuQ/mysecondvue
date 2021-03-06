import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const Vue = createApp(App)
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
Vue.use(router)
Vue.mount('#app')
