<template>
    <div class="workspace">
        <el-card class="info-card">
            <el-row :gutter="20">
                <el-col :span="4" class="col-img"
                    ><img src="/" alt=""
                /></el-col>
                <el-col :span="17" class="col-message">
                    <p class="title">这是标题</p>
                    <p class="intro">这是简介</p>
                    <p class="creater">创建者：<span>xxx教授</span></p>
                    <p class="intro">状态：<span>进行中</span></p>
                    <div class="other">
                        <p>教师人数：<span>10人</span></p>
                        <p>学生人数：<span>76人</span></p>
                    </div>
                </el-col>
                <el-col :span="3" class="col-operation">
                    <el-button type="primary">编辑信息</el-button>
                    <el-button type="danger">删除空间</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="notice-card">
            <el-collapse class="notice-collapse" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title"> 公告 </template>
                    <div>
                        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    </div>
                    <div>
                        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "WorkSpace",
    data() {
        return {};
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
    },
};
</script>
<style scoped lang="less">
.workspace {
    width: 1200px;
    margin: 30px auto;
    .info-card {
        .col-img {
            img {
                width: 150px;
                height: 150px;
                background: #ccc;
            }
        }
        .col-message {
            p {
                line-height: 24px;
                span {
                    color: #409eff;
                    cursor: pointer;
                }
            }
            .title {
                line-height: 30px;
                font-size: 20px;
            }
            .intro {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .other {
                display: flex;
                p {
                    margin-right: 20px;
                }
            }
        }
        .col-operation {
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .el-button {
                margin-left: 0px;
                margin-bottom: 12px;
                padding: 8px 14px;
            }
        }
    }
    .notice-card {
        margin: 20px 0;
        /deep/.el-card__body {
            padding-bottom: 0px;
            padding-top: 0px;
        }
        .notice-collapse {
            border: none;
            .el-collapse-item {
                /deep/.el-collapse-item__wrap,
                /deep/.el-collapse-item__header {
                    border: none !important;
                }
            }
        }
    }
}
</style>
