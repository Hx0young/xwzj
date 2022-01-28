<template>
    <div class="user-center">
        <el-form ref="userinfoForm" :model="userinfoForm" :rules="userinfoRules" label-width="180px">          
            <el-row class="info-row">
                <el-col :span="24">
                    <h3><i class="el-icon-document"></i> 基本信息</h3>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="用户头像" prop="imageUrl">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="userinfoForm.imageUrl" :src="userinfoForm.imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="userinfoForm.nickname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="userinfoForm.sex">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="出生日期">
                        <el-date-picker type="date" placeholder="请选择出生日期" v-model="userinfoForm.birthdate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="个性签名" prop="signature">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 6}"
                            placeholder="请输入个性签名"
                            v-model="userinfoForm.signature">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="info-row">
                <el-col :span="24">
                    <h3><i class="el-icon-suitcase"></i> 职业信息</h3>
                </el-col>
                <el-col :span="20" :offset="4">
                    <p class="remark mg-b-20">请准备确填写您的职业信息，以获得更好的体验!</p>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="职业" prop="profession">
                        <el-radio v-model="userinfoForm.profession" label="1" border >学生</el-radio>
                        <el-radio v-model="userinfoForm.profession" label="2" border >教师</el-radio>
                        <el-radio v-model="userinfoForm.profession" label="3" border >上班族</el-radio>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="student-info" v-if="userinfoForm.profession === '1'">
                <el-col :span="24">
                    <el-form-item label="年级" prop="grade">
                        <el-radio v-model="userinfoForm.grade" label="1" border >小学一年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="2" border >小学二年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="3" border >小学三年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="4" border >小学四年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="5" border >小学五年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="6" border >小学六年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="7" border >初中一年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="8" border >初中二年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="9" border >初中三年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="10" border >高中一年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="11" border >高中二年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="12" border >高中三年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="13" border >大学一年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="14" border >大学二年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="15" border >大学三年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="16" border >大学四年级</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="17" border >大学五年级</el-radio>
                    </el-form-item>
                </el-col>
                <el-col :span="14" v-if="userinfoForm.grade >=13">
                    <el-form-item label="专业" prop="major">
                        <!-- 级联选择，选择专业信息 -->
                        <el-cascader
                            v-model="userinfoForm.major"
                            :options="majorOptions"
                            width="100%"
                            placeholder="请选择专业"
                            filterable
                            :props="{ expandTrigger: 'hover' }"
                            @change="handleChange"></el-cascader>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="student-info" v-if="userinfoForm.profession === '2'">
                <el-col :span="24">
                    <el-form-item label="教学年级" prop="grade">
                        <el-radio v-model="userinfoForm.grade" label="1" border >小学</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="7" border >初中</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="10" border >高中</el-radio>
                        <el-radio v-model="userinfoForm.grade" label="13" border >大学</el-radio>
                    </el-form-item>
                </el-col>
                <el-col :span="24"  v-if="userinfoForm.grade <13">
                    <el-form-item label="教学科目" prop="subject">
                        <el-radio v-model="userinfoForm.subject" label="1" border >语文</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="2" border >数学</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="3" border >英语</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="4" border >物理</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="5" border >化学</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="6" border >生物</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="7" border >地理</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="8" border >历史</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="9" border >音乐</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="10" border >体育</el-radio>
                        <el-radio v-model="userinfoForm.subject" label="11" border >计算机</el-radio>
                    </el-form-item>
                </el-col>
                <el-col :span="14" v-if="userinfoForm.grade >=13">
                    <el-form-item label="专业" prop="major">
                        <!-- 级联选择，选择专业信息 -->
                        <el-cascader
                            v-model="userinfoForm.major"
                            :options="majorOptions"
                            width="100%"
                            placeholder="请选择专业"
                            filterable
                            :props="{ expandTrigger: 'hover' }"
                            @change="handleChange"></el-cascader>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14" :offset="4">
                    <el-button type="primary" @click="save">保存修改</el-button>
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
            activeName:'second',
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
            majorOptions:[{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
            }],
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
