<template>
    <div class="user-center">
        <ve-line :data="chartData" width="1158px" height="500px"></ve-line>
    </div>
</template>

<script>
export default {
    name: "Home",
    components:{
    },
    data() {
        return {
            chartData: {
                columns: ["日期", "销售额"],
                rows: [
                { 日期: "1月1日", 销售额: 123 },
                { 日期: "1月2日", 销售额: 1223 },
                { 日期: "1月3日", 销售额: 2123 },
                { 日期: "1月4日", 销售额: 4123 },
                { 日期: "1月5日", 销售额: 3123 },
                { 日期: "1月6日", 销售额: 7123 },
                ],
            },
        };
    },
    created(){
        
    },
    methods: {
    },
};
</script>
<style scoped lang="less">
.user-center {
    .info-row{
        margin-top: 50px;
        h3{
            color:#666;
            border-bottom: 2px solid #B3D8FF;
            padding-bottom: 8px;
            text-indent: 10px;
        }
        .remark{
            color:#999;
        }
        
    }
    .info-row:not(:first-child){
        margin-top: 30px;
    }
    .student-info{
        .el-radio{
            margin-left: 0px;
            margin-bottom: 15px;
        }
        .el-cascader{
            width:100%;
        }
    }
}
</style>
