/** 
 * 使用ES6语法引入模板
*/
import Vue from 'vue'   //引入内置模块
import App from './App.vue' //引入自定义模块

new Vue ({
    el: '#app',
    render: function(h) {  //使用render函数渲染组件
        return h(App)
    }
})

