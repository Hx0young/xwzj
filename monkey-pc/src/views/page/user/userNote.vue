<template>
    <div class="user-favorite common-container">
        <el-card class="box-card">
            学习笔记列表（倒叙，可搜索笔记标题，可过滤时间）
            笔记信息包含，笔记标题，【笔记描述，笔记图片】多个，关联题目或试卷，时间信息
            新建笔记时，一张图片，一个描述，可添加多个，写一个标题，关联一张试卷或题目
            (新建笔记的时候可以上传本地照片，笔记可以编辑除图片外的信息)
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
