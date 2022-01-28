<template>
    <div class="user-favorite common-container">
        <el-card class="box-card">
            <el-tabs v-model="activeName" type="card" >
                <el-tab-pane name="first">
                    <span slot="label"><i class="el-icon-date"></i> 我的题目</span>
                    <el-button>创建题目</el-button>
                        我添加的题目列表
                    </el-tab-pane>
                <el-tab-pane label="我的试卷" name="second">
                    <el-button>创建试卷</el-button>
                        我创建的试卷列表
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
