<template>
    <div class="user-center">
        <el-form ref="userinfoForm" :model="userinfoForm" :rules="userinfoRules" label-width="180px">          
            <el-row class="info-row">
                <el-col :span="10">
                    <el-form-item label="手机号" prop="nickname">
                        <el-input readonly v-model="userinfoForm.nickname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-button class="mg-l-20" type="primary" @click="save">修改</el-button>
                </el-col>
            </el-row>
            <el-row class="info-row">
                <el-col :span="10">
                    <el-form-item label="密码" prop="nickname">
                        <el-input readonly v-model="userinfoForm.nickname" type="password"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-button class="mg-l-20" type="primary" @click="save">修改</el-button>
                </el-col>
            </el-row>
            <el-row class="info-row">
                <el-col :span="10">
                    <el-form-item label="邮箱" prop="nickname">
                        <el-input readonly v-model="userinfoForm.nickname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-button class="mg-l-20" type="primary" @click="save">修改</el-button>
                </el-col>
                
            </el-row>
        </el-form>
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
            userinfoForm:{
                imageUrl:'',
            },
            userinfoRules:{
                imageUrl: [
                    { required: true, message: '请选择头像', trigger: 'change' }
                ],
                nickname: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                ],
            },
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
