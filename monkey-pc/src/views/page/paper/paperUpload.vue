<template>
    <div class="topic-upload">
        <el-card>
            <el-form 
                ref="form" 
                class="common-form"
                :rules="uploadFormRules" 
                :model="uploadForm" 
                label-width="120px">
                <el-row>
                    <el-col :span="10" :offset="2">
                        <h3><i class="el-icon-edit"></i> 创建试卷</h3>
                        <!-- 私人试卷库，可从公共题库和私人题库中选择题目
                             公共试卷库，只能从公共题库中导入（从私人题库中导出将会将题目自动添加到自动题库）
                             试卷和题目都可以查看有哪些人做了，及情况，但是部分数据要加密
                             导入题目分为快速导入和自定义导入两种
                             快速导入就是直接根据选择的模板，自动生成好试卷，只可以手动修改试题，不可删除，排序等
                             （在模板中选择的时候
                             选择模板，模板设置了题型、每个题型题目数量、
                              -->
                    </el-col>
                    <el-col :span="10" :offset="2" align="right">
                        <el-button type="primary" size="small">试卷导入</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="上传试卷库" prop="templateId" >
                            <el-select v-model="uploadForm.uploadForm" placeholder="请选择上传题库">
                                <el-option label="公共试卷库" value="topic-judge"></el-option>
                                <el-option label="私人试卷库" value="topic-choice"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="mg-l-20">
                        <el-button type="primary" plain>试卷库管理</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="试卷分类" prop="templateId" >
                            <el-input readonly v-model="uploadForm.typeName" placeholder="请输入试卷类型名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="mg-l-20">
                        <el-button type="primary" plain>选择分类</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="题目模板" prop="templateId" >
                            <el-select v-model="uploadForm.uploadForm" placeholder="请选择题目模板">
                                <el-option label="基础模板-判断题" value="topic-judge"></el-option>
                                <el-option label="基础模板-选择题" value="topic-choice"></el-option>
                                <el-option label="基础模板-填空题" value="topic-filling"></el-option>
                                <el-option label="基础模板-简答题" value="topic-short"></el-option>
                                <el-option label="基础模板-阅读题" value="topic-read"></el-option>
                                <el-option label="扩展模板-连线题" value="topic-line"></el-option>
                                <el-option label="自定义模板" value="topic-draw"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="mg-l-20">
                        <el-button type="primary" plain>模板管理</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="题型名" prop="typeName" >
                            <el-input v-model="uploadForm.typeName" placeholder="请输入题型名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3" >
                        <el-form-item label="数量" prop="typeName" label-width="60px">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入数量"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="排序" prop="typeName" label-width="60px">
                            <el-input v-model="uploadForm.typeName" placeholder="序号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="题目选择方式" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入选择题数量"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="简答题数量" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入简答题数量"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="填空题数量" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入简答题数量"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="判断题数量" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入简答题数量"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="判断题数量" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入简答题数量"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="判断题数量" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入简答题数量"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14" :offset="2">
                        <el-button type="primary" >确认创建</el-button>
                        <el-button type="primary" plain>效果预览</el-button>
                    </el-col>
                </el-row>
                    <!-- <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" style="height:600px;"></quill-editor> -->
                
            </el-form>
        </el-card>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <choose-label-dialog ref="chooseLabelDialog"></choose-label-dialog>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import ChooseLabelDialog from "@/components/dialog/chooseLabelDialog"
export default {
    name: "TopicUpload",
    components:{
        quillEditor,
        ChooseLabelDialog
    },
    data() {
        return {
            //选项列表
            optionsList:[
                {serialNumber:'A',text:'选项文本1'},
                {serialNumber:'B',text:'选项文本2'},
                {serialNumber:'C',text:'选项文本3'},
                {serialNumber:'D',text:'选项文本4'}
            ],
            content:'',
            uploadForm:{
                templateId:'',
                choiceType:1,
                checkedCities:[],
            },
            uploadFormRules:{
                templateId: [
                    { required: true, message: '请选择题目模板', trigger: 'blur' }
                ],
                typeName:[
                    { required: true, message: '请输入题目类型名', trigger: 'blur' }
                ],
            },
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            fileList: [
                {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            ],
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false

        }
    },
    methods: {
        handleCheckedCitiesChange(e){
            console.log(e)
        },
        chooseLabelHandle(){
            this.$refs.chooseLabelDialog.openDialog();
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        }
    }
};
</script>
<style scoped lang="less">
.topic-upload {
    color:#666;
    h3{
        color:#666;
    }
    .choose-list{
        .el-checkbox-group,.el-radio-group{
            display: flex;
            flex-direction: column;
            .el-radio,.el-checkbox{
                line-height: 46px;
            }
            .el-input{
                width:650px;
            }
        }
    }
}
</style>
