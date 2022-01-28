<template>
    <div class="topic-upload">
        <!-- 模板中心，题目和试卷的模板
            题目试卷显示五种基础模板
                    基础模板-选择题、基础模板-判断题、基础模板-填空题、基础模板-简答题、基础模板-阅读题
                    
            扩展模板
                系统添加的部分扩展字段

            自定义模板
                用户根据自己的需求创建的题目模板

            可以进行效果预览

            试卷模板
                试卷模板要根据分类来区分，每种分类的模板不一样
                -系统模板 例如语文（全国卷模板，XX地方模板）
                -自定义模板 

            可以进行效果预览
         -->
        <el-card>
             <div slot="header">
                <span>模板中心</span>
            </div>
            <el-tabs v-model="activeName" type="card" >
                <el-tab-pane label="题目模板" name="first">
                    <el-form 
                        ref="form" 
                        class="common-form"
                        :rules="uploadFormRules" 
                        :model="uploadForm" 
                        label-width="120px">
                        <el-row>
                            <el-col :span="14">
                                <el-form-item label="选择模板" prop="templateId" >
                                    <el-select v-model="uploadForm.uploadForm" placeholder="请选择题目模板">
                                        <el-option label="基础模板-判断题" value="topic-judge"></el-option>
                                        <el-option label="基础模板-选择题" value="topic-choice"></el-option>
                                        <el-option label="基础模板-填空题" value="topic-filling"></el-option>
                                        <el-option label="基础模板-简答题" value="topic-short"></el-option>
                                        <el-option label="基础模板-阅读题" value="topic-read"></el-option>
                                        <el-option label="扩展模板-连线题" value="topic-line"></el-option>
                                        <el-option label="自定义模板-画图题" value="topic-draw"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" >
                                <el-button class="mg-l-20" type="primary" plain>新建模板</el-button>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="14">
                                <el-form-item label="模板名称" prop="typeName">
                                    <el-input v-model="uploadForm.typeName" placeholder="请输入模板名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="题干" prop="typeMain">
                                    <!-- <el-input v-model="uploadForm.typeMain" placeholder="请输入题干"></el-input> -->
                                    <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 3, maxRows: 6}"
                                        placeholder="请输入题干"
                                        v-model="uploadForm.typeMain">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="题干补充内容" prop="typeMainAdd">
                                    <!-- <el-input v-model="uploadForm.typeMainAdd" placeholder="请输入题干补充内容"></el-input> -->
                                    <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 3, maxRows: 6}"
                                        placeholder="请输入题干补充内容"
                                        v-model="uploadForm.typeMainAdd">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="附件选择" prop="attachment">
                                    <!-- <el-input v-model="uploadForm.typeMainAdd" placeholder="请输入题干补充内容"></el-input> -->
                                    <!-- <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 2, maxRows: 6}"
                                        placeholder="请输入题干补充内容"
                                        v-model="uploadForm.typeMainAdd">
                                    </el-input> -->
                                    <el-upload
                                        action="#"
                                        list-type="picture-card"
                                        :auto-upload="false">
                                            <i slot="default" class="el-icon-plus"></i>
                                            <div slot="file" slot-scope="{file}">
                                            <img
                                                class="el-upload-list__item-thumbnail"
                                                :src="file.url" alt=""
                                            >
                                            <span class="el-upload-list__item-actions">
                                                <span
                                                class="el-upload-list__item-preview"
                                                @click="handlePictureCardPreview(file)"
                                                >
                                                <i class="el-icon-zoom-in"></i>
                                                </span>
                                                <span
                                                v-if="!disabled"
                                                class="el-upload-list__item-delete"
                                                @click="handleDownload(file)"
                                                >
                                                <i class="el-icon-download"></i>
                                                </span>
                                                <span
                                                v-if="!disabled"
                                                class="el-upload-list__item-delete"
                                                @click="handleRemove(file)"
                                                >
                                                <i class="el-icon-delete"></i>
                                            </span>
                                        </span>
                                        </div>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="知识点标签" prop="label">
                                    <!-- <el-select 
                                    v-model="uploadForm.label" 
                                    multiple
                                    filterable
                                    allow-create
                                    default-first-option
                                    placeholder="请选择知识标签">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select> -->
                                    暂无标签
                                    <el-tag class="small-circle-tag" size="small" type="success" effect="dark">标签二</el-tag>
                                            <el-tag class="small-circle-tag" size="small" type="info" effect="plain">标签二</el-tag>
                                    <el-button @click="chooseLabelHandle" class="mg-l-20" type="primary" size="small">选择标签</el-button>
                                </el-form-item>
                                
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24" v-if="uploadForm.uploadForm === 'topic-choice'">
                                <el-form-item label="选择题类型" prop="choiceType">
                                    <!-- <el-input v-model="uploadForm.label" placeholder="请选择知识标签"></el-input> -->
                                    <el-radio-group v-model="uploadForm.choiceType">
                                        <el-radio :label="1">单选</el-radio>
                                        <el-radio :label="2">多选</el-radio>
                                        <el-radio :label="3">不定项选择</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                
                            </el-col>
                            <el-col class="choose-list" :span="24" v-if="uploadForm.uploadForm === 'topic-choice'">
                                <el-form-item label="选项信息" prop="choiceType">
                                    <el-checkbox-group v-model="uploadForm.checkedCities" @change="handleCheckedCitiesChange">
                                        <el-checkbox v-for="city in optionsList" :label="city.serialNumber" :key="city.serialNumber">
                                            {{city.serialNumber}}、<el-input size="small" v-model="city.text"></el-input> <el-button type="danger" size="small" plain>删除</el-button>
                                        </el-checkbox>
                                    </el-checkbox-group>
                                    <el-button type="primary" size="small">添加选项</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col class="choose-list" :span="24" v-if="uploadForm.uploadForm === 'topic-choice'">
                                <el-form-item label="选项信息" prop="choiceType">
                                    <el-radio-group v-model="uploadForm.checkedCitiesRadio" @change="handleCheckedCitiesChange">
                                        <el-radio v-for="city in optionsList" :label="city.serialNumber" :key="city.serialNumber">
                                            {{city.serialNumber}}、<el-input size="small" v-model="city.text"></el-input> <el-button type="danger" size="small" plain>删除</el-button>
                                        </el-radio>
                                    </el-radio-group>
                                    <el-button type="primary" size="small">添加选项</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="24" v-if="uploadForm.uploadForm === 'topic-choice'">
                                <el-form-item label="参考答案" prop="choiceType">
                                    <el-radio-group v-model="uploadForm.checkedCitiesRadio" @change="handleCheckedCitiesChange">
                                        <el-radio v-for="city in optionsList" :label="city.serialNumber" :key="city.serialNumber">
                                            {{city.serialNumber}}
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col  :span="24" v-if="uploadForm.uploadForm === 'topic-choice'">
                                <el-form-item label="参考答案" prop="choiceType">
                                    <el-input placeholder="请输入参考答案"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="14">
                                <el-form-item label="解析" prop="typeMain">
                                    <!-- <el-input v-model="uploadForm.typeMain" placeholder="请输入题干"></el-input> -->
                                    <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 3, maxRows: 8}"
                                        placeholder="请输入题目解析"
                                        v-model="uploadForm.typeMain">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="14" :offset="2">
                                <el-button type="primary" >确认创建</el-button>
                                <el-button type="primary" plain>效果预览</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>

                <el-tab-pane label="试卷模板" name="second">试卷模板</el-tab-pane>
            </el-tabs>
        </el-card>
        
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
            activeName:'first',
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
