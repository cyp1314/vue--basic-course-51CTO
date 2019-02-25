<template>
    <div class="block">
    <el-date-picker
      v-model="value"
      type="date"
      
      placeholder="选择日期"
      :picker-options="Options"
      >
    </el-date-picker>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: '',
            Options: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
                firstDayOfWeek: 1
            }
        }
    }
}
</script>