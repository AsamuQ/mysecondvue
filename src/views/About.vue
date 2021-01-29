<template>
  <div id="about">
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">反转Message</button>
    <!--表格循环绑定数据-->
    <div class="tool-box">
      <button @click="showAccountTable">显示账号表格</button>
      <button @click="hideAccountTable">隐藏账号表格</button>
    </div>
    <div class="table-account">
      <table ref="accountTable" v-if="table_seen">
        <caption class="title">账号信息</caption>
        <thead>
          <th><input type="checkbox" v-model="isCheckAll" @change="checkAll"></th>
          <th>ID</th>
          <th>账号</th>
          <th>密码</th>
        </thead>
        <tr v-for="account in accounts" :key="account.userId">
          <td><input type="checkbox" v-model="checkList" :value="account.userId"></td>
          <td>{{account.userId}}</td>
          <td>{{account.userName}}</td>
          <td>{{account.passwd}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<!--TODO 组件化应用构建-->

<script>
import axios from 'axios'
export default {
  name: "About",
  data() {
    return {
      message: '反转函数绑定示例',
      accounts: [],
      table_seen: false,
      isCheckAll: false,
      checkList: []
    }
  },
  methods: {
    reverseMessage(){
      this.message = this.message
          .split('')
          .reverse()
          .join('')
    },
    showAccountTable(){
      /*当子组件中出现有ref的引用信息时，父组件中的$refs就可以获取到该子组件的引用*/
      // this.$refs.accountTable.style.display = "inherit";
      /*使用vue的条件判断*/
      this.table_seen = true;
      axios.get('/accountApi/bootstrap/table/get_page?limit=20&offset=0')
          .then((response)=> {
            // then里面使用函数，this不能绑定到实例化的Vue，引起用ES6箭头函数；或者在axios外部定义变量存储this
            this.accounts = response.data.rows
          }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
          });
    },
    hideAccountTable(){
      // this.$refs.accountTable.style.display = "none";
      this.table_seen = false;
    },
    checkAll(){
      if (this.isCheckAll){
        let checkedArr = [];
        for(let i = 0; i < this.accounts.length; i++){
          checkedArr.push(this.accounts[i].userId)
        }
        this.checkList = checkedArr;
      }else {
        this.checkList = [];
      }
    }
  },
  watch: {
    "checkList": function () {
      if (this.checkList.length == this.accounts.length){
        this.isCheckAll = true;
      }else {
        this.isCheckAll = false;
      }
    }
  }
}
</script>

<style scoped>
#about{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  line-height: 36px;
  color: #20A0FF
}
.table-account table{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>