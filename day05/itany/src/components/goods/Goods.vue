<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="item in goods" >
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul>
                <li v-for="item in goods" >
                   <h1> {{ item.name }}</h1>
                   <ul>
                       <li v-for="food in item.foods" >
                           <img :src="food.icon" alt="">
                           {{food.name}}
                       </li>
                   </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        created() {
            this.$store.dispatch("getGoods");
        },
        computed: {
            ...mapGetters([
                "goods"
            ])
        }
    }
</script>

<style lang="less" scoped>
.goods {
    display: flex;
    position:absolute;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    padding-top: 5px;
    .menu-wrapper {
        flex: 0 0 100px;
        width: 80px;
        background: #f3f5f7;
        li {
            padding: 4px;
            text-align: center;
            margin: 5px 6px;
            background: #cd3;
        }
    }
    .foods-wrapper {
        flex: 1;
        overflow:auto;
    }
}
</style>