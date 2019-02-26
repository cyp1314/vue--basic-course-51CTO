<template>
    <div class="ratings">
        <ul>
            <li v-for="item in ratings" >
                {{ item.username }}：{{item.text}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        created () {
            this.$store.dispatch('getRatings')
        },
        computed: {
            ...mapGetters([
                'ratings'
            ])
        }
    }
</script>

<style less="less" scoped>

</style>