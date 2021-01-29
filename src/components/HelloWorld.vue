<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="goback">回首页</button>
      <button @click="gobackParams">回首页带参数</button>
    </div>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/"><i class="fa fa-circle"></i> <span>Home</span></router-link>
      <router-link to="/about"><i class="fa fa-circle"></i> <span>About</span></router-link>
      <router-link to="/test"><i class="fa fa-circle"></i> <span>Test</span></router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>


</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const router = useRouter()
    function goback() {
      router.push('/')
    }
    const gobackParams =()=>{
      router.push({
        path:'/',
        query:{
          inType:1
        }
      })
    }
    return{
      goback,
      gobackParams
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
