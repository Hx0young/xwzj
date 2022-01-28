<template>
    <div class="user-center common-container">
        <el-card class="box-card">
            <el-tabs v-model="activeName" type="card" >
                <el-tab-pane label="基本信息" name="second">
                    <!-- 基本信息，职业信息等，某些信息需要在注册的时候填写
                    职业信息（方便推荐对应的分类相关试题），学生：选择学历，学校
                              社会人士：职业的类型选择 -->
                    <base-info></base-info>
                </el-tab-pane>
                <el-tab-pane label="安全设置" name="third">
                    <!-- 安全信息（绑定的手机号，密码，邮箱）  --是否同步qq或者微信（微信小程序） -->
                  <security-info></security-info>
                </el-tab-pane>
                <el-tab-pane name="first">
                    <span slot="label"><i class="el-icon-date"></i> 学习报告</span>
                    <learning-report></learning-report>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import TopicUpload from "@/views/page/topic/topicUpload";
import BaseInfo from "./module/baseInfo";
import SecurityInfo from "./module/securityInfo";
import LearningReport from "./module/learningReport";
export default {
    name: "Home",
    components:{
        TopicUpload,
        BaseInfo,
        SecurityInfo,
        LearningReport,
    },
    data() {
        return {
            activeName:'second',
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            console.log(res, file)
            this.userinfoForm.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        save(){
            this.$refs.userinfoForm.validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>
<style scoped lang="less">
.user-center {
    .info-row{
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
        margin-top: 50px;
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
