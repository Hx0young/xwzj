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
                        <h3><i class="el-icon-edit"></i> 创建题目</h3>
                    </el-col>
                    <el-col :span="10" :offset="2" align="right">
                        <el-button type="primary" size="small">批量导入</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="上传题库" prop="templateId" >
                            <el-select v-model="uploadForm.uploadForm" placeholder="请选择上传题库">
                                <el-option label="公共题库" value="topic-judge"></el-option>
                                <el-option label="私人题库" value="topic-choice"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="mg-l-20">
                        <el-button type="primary" plain>题库管理</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="题目分类" prop="templateId" >
                            <el-input readonly v-model="uploadForm.typeName" placeholder="请输入题目类型名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" class="mg-l-20">
                        <el-button type="primary" plain>选择分类</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <el-form-item label="题目模板" prop="templateId" >
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
                    <el-col :span="4" class="mg-l-20">
                        <el-button type="primary" plain>模板管理</el-button>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="题目类型名" prop="typeName">
                            <el-input v-model="uploadForm.typeName" placeholder="请输入题目类型名"></el-input>
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
                    <!-- 
                        选择题类型 单选   多选   不定向
                        设置选项，默认显示四个选项，一排一个，自适应输入框输入选项的内容，
                        更具选择题类型变更选项框

                        设置参考答案，横排的单选或多选框

                        设置问题解析

                        填空题设置填空数量 

                        阅读题

                        设置答案
                    -->
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
                    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" style="height:600px;"></quill-editor>
                
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
          editorOption:{
            modules: {
              toolbar: [
                'bold',
                'italic',
                'underline',
                [
                  { 'table-body': 'TBODY' },
                  { 'table-insert-rows': 'ITR' },
                  { 'table-insert-columns': 'TIC' },
                  { 'table-delete-rows': 'IDR' },
                  { 'table-delete-columns': 'TDC' },
                  { 'table-delete-body': 'TDB' }
                ]
              ]
            },
             handlers: {
              'table-body': function (val) {
                this.quill.getModule('table').insertTable(2, 2) // this引用工具栏实例, val表示按钮是否处于活动状态active
              },
              'table-insert-rows': function () {
                this.quill.getModule('table').insertRowBelow()
              },
              'table-insert-columns': function () {
                this.quill.getModule('table').insertColumnRight()
              },
              'table-delete-rows': function () {
                this.quill.getModule('table').deleteRow()
              },
              'table-delete-columns': function () {
              this.quill.getModule('table').deleteColumn()
              },
              'table-delete-body': function () {
                this.quill.getModule('table').deleteTable()
              }
            }
          },
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
