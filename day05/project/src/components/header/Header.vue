<template>
    <div class="header">
        <img :src="seller.avatar" alt="altText"/>
        <br>
        {{seller.name}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        created () {
            this.$store.dispatch('getSeller');  //执行变化，发送actions
        },
        computed: {
            //对象展开运算符，获取seller数据
            ...mapGetters(['seller'])
        }
    }
</script>

<style lang="less" scoped>
.header {
    img {
        width: 64px;
        height: 64px;
    }
}
</style>