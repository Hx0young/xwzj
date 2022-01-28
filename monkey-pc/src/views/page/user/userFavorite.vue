<template>
    <div class="user-favorite common-container">
        <el-card class="box-card">
            <el-tabs v-model="activeName" type="card" >
                <el-tab-pane name="first">
                    <span slot="label"><i class="el-icon-date"></i> 题目</span>
                    我收藏的题目（倒叙，可搜索题目名称，可过滤时间）
                    </el-tab-pane>
                <el-tab-pane label="试卷" name="second">
                    我收藏的试卷（倒叙，可搜索试卷名称，可过滤时间）
                    </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import TopicUpload from "@/views/page/topic/topicUpload";
export default {
    name: "Home",
    components:{
        TopicUpload,
    },
    data() {
        return {
            activeName:'first',
        };
    },
    methods: {
    },
};
</script>
<style scoped lang="less">
.user-favorite {
    
}
</style>
