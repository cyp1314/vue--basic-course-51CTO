<template>
  <transition
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <div class="detail" v-show="detailShow">详情页
      <br>
      <br>
      <h2>{{seller.name}}</h2>
      <br>
      <h2>{{seller.bulletin}}</h2>
      <br>
      <ul>
        <li v-for="item in seller.supports" :key="item.type">{{ item.description }}</li>
      </ul>
      <button @click="hideDetail" class="close">关闭</button>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import "animate.css";

export default {
  computed: {
    ...mapGetters(["detailShow", "seller"])
  },
  methods: {
    hideDetail() {
      this.$store.dispatch("hideDetail");
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.8);
  .close {
    position: absolute;
    bottom: 50px;
    left: 45%;
  }
}
</style>