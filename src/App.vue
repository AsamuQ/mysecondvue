<!--
1）App.vue是项目的根组件，是唯一由main.js加载渲染的组件，就是替换index.html页面中的<div id="app"></div>的占位标签
2）实际开发中App.vue文件中，只需要书写下方五行代码即可（可以额外增加其他代码）
3）router-view是一个占位标签，由router插件控制，可以在router的配置文件中进行配置
4）router-view就是根据router在index.js中配置的路由关系被 指定路径 匹配 指定页面组件 渲染
    router-view或被不同的页面组件替换，就形成了页面跳转
-->

<!--组件都是由三部分组成： html 结构，js 逻辑，css 样式
html 结构都是在 template 标签中，页面结构有且只有一个根标签（template 一级结构下）
js 逻辑都是在script标签中，必须设置导出，export default {...}
css样式都是在style标签中，必须设置scoped属性，是样式组件化-->

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// .vue文件类似于模块，可以直接相互导入，所以在组件内部要设置导出
// 逻辑代码区域
// 该语法和 script 绑定出现
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/*scoped可以使样式组件化，只在自己内部起作用，scoped 与 style 绑定出现*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

