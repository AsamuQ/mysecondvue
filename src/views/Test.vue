<template>
  <div id="test">
    <h1>{{text}}</h1>
    <h3>Count: {{count}}</h3>

    <div id="bind-attribute">
      <span v-bind:title="attribute">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>

    <div id="event-handling">
      <p>{{ functionName }}</p>
      <button v-on:click="reverseMessage">反转 Message</button>
    </div>

    <div id="two-way-binding">
      <p>{{message}}</p>
      <input v-model="message" />
    </div>
  </div>
</template>



<script>
const TestVue = {
  data() {
    return {
      text: "声明式渲染：文本插值",
      count: 0,
      attribute: "属性绑定",
      functionName: "方法绑定",
      message: "双向绑定"
    }
  },
  mounted() {
    setInterval(()=>{
      this.count++
    },1000)
  },
  setup(){
    function reverseMessage() {
      console.log("reverse")
    }
    return{
      reverseMessage
    }
  }
}
export default TestVue
</script>

<style scoped>
#test{
  color: red;
}
.title{
  line-height: 36px;
  color: #20A0FF
}
</style>