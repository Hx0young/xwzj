<template>
    <div class="question-bank common-container">
        <el-row :gutter="40">
            <el-col :span="18">
                <el-carousel :interval="5000" arrow="hover">
                    <el-carousel-item v-for="item in carouselList" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
                <el-card class="mg-t-20">
                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    <p>历史搜索</p>
                    <p>热门搜索</p>
                </el-card>
                <!-- 分类选择 -->
                <el-card class="mg-t-20 type-card">
                    <div slot="header" >
                        <el-row :gutter="20">
                            <el-col :span="21">
                                <span class="choose-type-title">已选分类:</span>
                                <el-tag 
                                    size="small" 
                                    class="small-circle-tag" 
                                    v-for="(it,idx) in chooseTypes"
                                    :key="idx"
                                    effect="dark"
                                    @close="deleteType(it)"
                                    closable >{{it.name}}</el-tag>
                            </el-col>
                            <el-col :span="3">
                                <el-button style="float: right; padding: 3px 0" type="text">隐藏设置</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <el-row :gutter="20" class="t-gray type-search-row">
                        <el-col :span="5">
                            <el-input size="mini" placeholder="输入内容进行过滤" v-model="input1" clearable>
                                <template slot="prepend"><i class="el-icon-search"></i></template>
                            </el-input>
                        </el-col>
                        <el-col :span="5">
                            <el-input size="mini" placeholder="输入内容进行过滤" v-model="input1" clearable>
                                <template slot="prepend"><i class="el-icon-search"></i></template>
                            </el-input>
                        </el-col>
                        <el-col :span="14">
                            <el-input size="mini" placeholder="输入内容进行过滤" v-model="input1" clearable>
                                <template slot="prepend"><i class="el-icon-search"></i></template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="t-gray type-row">
                        <el-col :span="5">
                            <p 
                            class="p-type-btn"
                            :class="chooseFirstIdx === idx?'active':''"
                            v-for="(item,idx) in typeOptions" 
                            @click="chooseTypeFirst(idx)"
                            :key="idx">{{item.name}}</p>
                        </el-col>
                        <el-col :span="5">
                            <p 
                            class="p-type-btn"
                            :class="chooseSecondIdx === idx?'active':''"
                            v-for="(item,idx) in typeOptions[chooseFirstIdx].items" 
                            @click="chooseTypeSecond(idx)"
                            :key="idx">{{item.name}}</p>
                        </el-col>
                        <el-col :span="14">
                            <!-- <span 
                            class="span-type-btn"
                            :class="chooseTypes[item.id]?'active':''"
                            v-for="(item,idx) in typeOptions[chooseFirstIdx].items[chooseSecondIdx].items" 
                            @click="chooseTypeThird(item)"
                            :key="idx">{{item.name}}</span> -->
                            <el-tag 
                            size="small" 
                            class="small-circle-tag" 
                            :effect="chooseTypes[item.id]?'dark':'light'"
                            v-for="(item,idx) in typeOptions[chooseFirstIdx].items[chooseSecondIdx].items"
                            :key="idx"
                            @click="chooseTypeThird(item)"
                            >{{item.name}}</el-tag>
                        </el-col>
                    </el-row>
                </el-card>
                <!-- 题目列表 -->
                <el-card class="topic-list-card mg-t-20" v-for="i in 10" :key="i">
                    <el-row>
                        <el-col :span="24"  class="topic-title">
                            <span>序号：<strong class="t-blue">1234567890</strong></span>
                            <el-divider direction="vertical"></el-divider>
                            <span>类型：<strong class="t-blue">单选题</strong></span>
                            <el-divider direction="vertical"></el-divider>
                            <span>难度：<strong class="t-orange">三星</strong></span>
                            <el-divider direction="vertical"></el-divider>
                            <span>答题次数：<strong class="t-blue">123456</strong></span>
                            <el-divider direction="vertical"></el-divider>
                            <span>正确率：<strong class="t-green">56.00%</strong></span>
                        </el-col>
                        <el-col class="mg-t-20 topic-content" :span="24">
                            <p>加分后卡好伐啦和附近看哈会计法好久啊和附近 显示4行，多余的用...隐藏;点击时打开评论详情</p>
                        </el-col>
                        <el-col class="mg-t-20 topic-tag" :span="21">
                            <el-tag size="small" class="small-circle-tag" type="primary" effect="dark">标签二</el-tag>
                        </el-col>
                        <el-col class="mg-t-20 topic-look" :span="3">
                            <el-link :underline="false">查看题目<i class="el-icon-right"></i></el-link>
                        </el-col>
                        <el-col class="mg-t-20 topic-author" :span="24">
                            <span>上传者：张三</span>
                            <span>上传时间：2021-06-28</span>
                            <span>点赞次数：123</span>
                        </el-col>
                    </el-row>
                    
                </el-card>
                <el-card class="mg-t-20" align="right">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                        </el-pagination>
                </el-card>
                
            </el-col>
            <el-col :span="6">
                <el-button class="right-op-btn" type="primary" @click="dialogVisible = true">上传题目</el-button>
                <el-button class="right-op-btn" type="primary">发布题目悬赏</el-button>
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>上传榜</span>
                    </div>
                    <div v-for="o in 10" :key="o" class="text item">
                        {{ "张三  数量：" + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog
            title="上传题目"
            :visible.sync="dialogVisible"
            width="70%"
            :before-close="handleClose">

            <topic-upload></topic-upload>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
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
            dialogVisible:false,
            input1:'',
            input3:'',
            select:'',
            value:'',
            textarea2:'',
            chooseTypes:{
                33:{
                    name:'英语四级(12)',
                    id:33
                },
                37:{
                    name:'大二上(34)',
                    id:37
                }
            },
            chooseFirstIdx:0,
            chooseSecondIdx:0,
            typeOptions:[
                {name:'医学类', id:1, items:[
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:21},{name:'医师1级2', id:22}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:23},{name:'医师1级2', id:24}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:25},{name:'医师1级2', id:26}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:27},{name:'医师1级2', id:28}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:29},{name:'医师1级2', id:30}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:31},{name:'医师1级2', id:32}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:21},{name:'医师1级2', id:22}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:23},{name:'医师1级2', id:24}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:25},{name:'医师1级2', id:26}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:27},{name:'医师1级2', id:28}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:29},{name:'医师1级2', id:30}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:31},{name:'医师1级2', id:32}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:21},{name:'医师1级2', id:22}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:23},{name:'医师1级2', id:24}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:25},{name:'医师1级2', id:26}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:27},{name:'医师1级2', id:28}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:29},{name:'医师1级2', id:30}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:31},{name:'医师1级2', id:32}]},
                ]},
                {name:'外语类', id:1, items:[
                    {name:'英语等级考试', id:2, items:[{name:'英语四级', id:33},{name:'英语六级', id:34}]},
                    {name:'大学英语', id:2, items:[{name:'大一上', id:35},{name:'大一下', id:36},{name:'大二上', id:37},{name:'大二下', id:38}]},
                ]},
                {name:'医学类1', id:1, items:[
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:39},{name:'医师1级2', id:40}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:41},{name:'医师1级2', id:42}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:43},{name:'医师1级2', id:44}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:45},{name:'医师1级2', id:46}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:47},{name:'医师1级2', id:48}]},
                    {name:'医师1级', id:2, items:[{name:'医师1级1', id:49},{name:'医师1级2', id:50}]},
                ]}
            ],
            options: [{
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
                }]
            }],
            activeNames: ["join", "create"],
            currentPage: 1,
            loading: false,
            tabIndex:'3',
            branshWay:3,
            value:"",
            carouselList:[
                require('../../../assets/images/back1.jpg'),
                require('../../../assets/images/back2.jpg'),
                require('../../../assets/images/back3.jpg'),
            ],
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        };
    },
    methods: {
        handleClose(){

        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleChange(){

        },
        deleteType(item){
            // this.chooseTypeList.splice(idx,1)
            console.log(item)
            console.log(this.chooseTypes[item.id])
            // delete this.chooseTypes[item.id];
            this.$delete(this.chooseTypes,item.id);
            // this.chooseTypes[item.id] = undefined;
        },
        chooseTypeFirst(idx){
            this.chooseFirstIdx=idx;
            this.chooseSecondIdx = 0;
        },
        chooseTypeSecond(idx){
            this.chooseSecondIdx = idx;
        },
        chooseTypeThird(item){
            if(this.chooseTypes[item.id]){
                // delete this.chooseTypes[item.idx];
                this.deleteType(item)
            }else{
                // this.chooseTypes[item.idx] = item;
                this.$set(this.chooseTypes, item.id, item);
            }
            
        }
    },
};
</script>
<style scoped lang="less">
.question-bank {
    margin: 30px auto;
    .el-carousel{
        height:300px;
        .el-carousel__container{
            img{
                width:100%;

            }
        }
    }
    .type-card{
        /deep/.el-card__header{
            padding-bottom: 7px ;
        }
        .choose-type-title{
            display: inline-block;
            height:24px;
            line-height: 24px;
            margin-bottom: 11px;
        }
        .type-search-row{
            /deep/.el-col{
                overflow-y: scroll;
               .el-input-group{
                //    height:26px;
                margin-bottom: 10px;
                   .el-input-group__prepend{
                       padding:0 8px;
                    //    height:24px !important;
                       background: #fff;;
                       i{
                           font-size: 14px;
                       }
                   }
               }
            }
            .el-col:last-child{
                 overflow-y: auto;
            }
        }
        .type-row{
            font-size: 14px;
            /deep/.el-col{
                // border-right: 1px solid #cccccc;
                height: 240px;
                overflow-y: scroll;
            }
            .el-col:last-child{
                 overflow-y: auto;
            }
            .span-type-btn{
                display: inline-block;
                margin-right: 20px;
            }
            .p-type-btn, .span-type-btn{
                line-height: 24px;
                cursor: pointer;
                &:hover{
                    color:#409EFF;
                }
                &.active{
                    color:#409EFF;
                }
            }
            .small-circle-tag{
                margin-right: 20px;
                margin-bottom: 15px;
            }
        }
        
    }

    .topic-list-card{
        cursor: pointer;
        .el-link--inner{
            color: #409eff;
        }
        .topic-content{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;//想显示多少行就给多大值
            -webkit-box-orient: vertical;
        }
        .topic-author{
            color:#888;
            font-size: 14px;
            display: flex;
            span{
                width:180px;
                display: block;
                &:first-child{
                    width:160px;
                }
            }
        }
    }
    
}
</style>
