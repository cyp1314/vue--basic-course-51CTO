<template>
  <div>
    <div class="header">
    <img :src="seller.avatar" alt="" @click="showDetail">
    <br>
    {{seller.name}}
    </div>

    <!-- 弹出层 -->
    <Detail></Detail>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Detail from "../detail/Detail.vue"

export default {
  created() {
    this.$store.dispatch("getSeller");  //NOTE:发送一个action
  },
  computed: {
    //NOTE: 对象展开运算符
    ...mapGetters(["seller"]),
  },
  components: {
    Detail
  },
  methods: {
    showDetail() {
      this.$store.dispatch('showDetail');
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 134px;
  background-color: rgba(7, 17, 27, 0.1);
  font-size: 14px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 10px;
  }
}
</style>