<template>
  <div id="app">
    <img src="./assets/logo.png">
       <h1>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
    </h1>
    <div>
         <router-view></router-view>
    </div>
    <button @click="send">发送ajax请求</button>
  </div>

</template>

<script>
// import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎'
    }
  },
  methods: {
    send() {
      this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        console.log(response);
      })
    }
  },
  mounted() {
    console.log(this.$route);
  },
  watch: {
    $route: function(newValue,oldValue) {
      console.log('路由发生变化，跳转到：'+newValue.path);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
