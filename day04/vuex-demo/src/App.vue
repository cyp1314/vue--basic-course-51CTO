<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrement">减小</button>
    <button @click="incrementAsync">增加</button>
    <p>当前数字为：{{count}}</p>
    <p>{{isEvenOrOdd}}</p>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  //方式1：通过this.$store访问
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed:mapState([
  //   'count'
  // ]),
  computed:mapGetters([
    'count',
    'isEvenOrOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'incrementAsync'
  ])
}
</script>

<style>
.demo {
  /* color: rgba( c254, 219, 145, alpha), */
  color: rgb(137, 26, 180)
}
</style>
