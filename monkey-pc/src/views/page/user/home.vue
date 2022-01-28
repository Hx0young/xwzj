<template>
    <div class="home common-container">
        <el-row :gutter="40">
            <el-col :span="18">
                <el-card class="bransh-set">
                    <div slot="header" class="clearfix">
                        <span>智能刷题设置</span>
                        <el-button style="float: right; padding: 3px 0" type="text">隐藏设置</el-button>
                    </div>
                    <el-row>
                        <el-col :span="24">
                            <span>题目类型：</span>
                            <el-cascader
                                v-model="value"
                                :options="options"
                                :props="{ expandTrigger: 'hover' }"
                                @change="handleChange"></el-cascader>
                        </el-col>
                        <el-col :span="24">
                            题目总数量：123 | 已刷数量：120 | 正确数量：118  | 正确率：99%
                        </el-col>
                        <el-col :span="24">
                            <span>刷题方式：</span>
                            <el-radio-group v-model="branshWay">
                                <el-radio :label="3">顺序刷题</el-radio>
                                <el-radio :label="6">随机刷题</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :span="24">
                            <span>难度选择：</span>
                            <el-radio-group v-model="branshWay">
                                <el-radio :label="3">1星</el-radio>
                                <el-radio :label="6">2星</el-radio>
                                <el-radio :label="7">3星</el-radio>
                                <el-radio :label="8">4星</el-radio>
                                <el-radio :label="9">5星</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :span="24">
                            <span>是否跳过已正确题目：</span>
                            <el-radio-group v-model="branshWay">
                                <el-radio :label="3">跳过</el-radio>
                                <el-radio :label="6">不跳过</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :span="24">
                            <span>知识点标签选择：</span>
                            <el-tag size="small" type="success" effect="dark">标签二</el-tag>
                            <el-tag size="small" type="info" effect="plain">标签二</el-tag>

                        </el-col>
                    </el-row>
                    <el-button type="primary" size="small">开始刷题</el-button>
                </el-card>
                <el-tabs class="mg-t-20 bransh-tabs" type="border-card" :value="tabIndex">
                    <el-tab-pane name="1" label="题目详情">
                        <el-row class="topic-info">
                            <el-col :span="22">
                                序号：1234567890 | 类型：单选题 | 难度：三星 | 识别号：TM1234567890 | 提供人：张三
                            </el-col>
                            <el-col :span="2">
                                <i class="el-icon-star-on"></i>
                            </el-col>
                            <el-col :span="22">
                                答题：123456 | 正确率：56.00% | 
                            </el-col>
                            <el-col :span="2">
                                <el-button type="success" size="mini">上一题</el-button>
                            </el-col>
                            <el-col :span="22">
                                知识点标签： <el-tag size="small" type="primary" effect="dark">标签二</el-tag>
                            </el-col>
                            <el-col :span="2">
                                <el-button type="success" size="mini">下一题</el-button>
                            </el-col>
                        </el-row>
                        <!-- 题目题干 -->
                        <div class="topic-title">
                            <!-- 题干信息 -->
                            <p class="message">题干信息</p>
                            <!-- 附件，音频或图片 -->
                            <div class="accessory">
                                附件，音频或图片
                                <!-- <img src="" alt=""> -->
                            </div>

                        </div>
                        <!-- 选项列表或者答案输入框 -->
                        <div class="topic-option">
                            选项列表或者答案输入框
                        </div>
                        <el-button type="primary" size="small">提交答案</el-button>
                        <div class="answer">
                            参考答案:
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="2" label="答案及解析">
                        参考答案：C
                        <p>解题思路1</p>
                        <p>的结果交的好搞会计师的感受到</p>
                        <p>解题思路2</p>
                        <p>对方水电费水电费身份身份鼎折覆餗</p>
                    </el-tab-pane>
                    <el-tab-pane name="3" label="讨论(99+)">
                        <el-card shadow="hover" class="discuss-card mg-b-20" v-for="i in 6" :key="i">
                            <el-row>
                                <el-col :span="24">
                                    <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                    <span class="name">接口很多个</span>
                                    <span class="level">学者一阶</span>
                                    <span class="time" style="float: right; padding: 3px 0">2021-03-14</span>
                                </el-col>
                                <el-col :span="24">
                                    <h5>炬华科技副科级是否可见还是局方</h5>
                                    <p>加分后卡好伐啦和附近看哈会计法好久啊和附近 显示4行，多余的用...隐藏;点击时打开评论详情</p>
                                </el-col>
                                <el-col :span="24" align="right">
                                    <i class="el-icon-thumb"></i>123
                                    <i class="el-icon-chat-dot-round"></i>1234
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane name="4" label="相似题">
                        <el-card shadow="hover" class="similarity-card mg-b-20" v-for="i in 6" :key="i">
                            <el-row>
                                <el-col :span="24">
                                    序号：1234567890 | 类型：单选题 | 难度：三星 | 答题：123456 | 正确率：56.00%
                                </el-col>
                                <el-col :span="24">
                                    <p>加分后卡好伐啦和附近看哈会计法好久啊和附近 显示4行，多余的用...隐藏;点击时打开评论详情</p>
                                </el-col>
                                <el-col :span="24">
                                    <el-tag size="small" type="primary" effect="dark">标签二</el-tag>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane name="5" label="相关试卷">
                        <el-card shadow="hover" class="similarity-card  mg-b-20" v-for="i in 6" :key="i">
                            <el-row>
                                <el-col :span="24">
                                      难度：三星 | 完成次数：123456 | 
                                </el-col>
                                <el-col :span="24">
                                    <p>加分后卡好伐啦和附近看哈会计法好久啊和附近 显示4行，多余的用...隐藏;点击时打开评论详情</p>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane name="6" label="题目纠错">
                        纠错类型：<el-select v-model="value" placeholder="请选择">
                                    <el-option label="题目错误" value="1"></el-option>
                                    <el-option label="解析错误" value="2"></el-option>
                                    <el-option label="其他问题" value="3"></el-option>
                                </el-select>
                        <el-divider></el-divider>
                        详细问题：<el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入内容"
                                v-model="textarea2">
                                </el-input>
                        
                    </el-tab-pane>
                         <!-- 智能刷题：选择一种类型的题目刷题，使用级联选择；
                    PC端：序号、难度、回答次数、正确率，赞踩次数、知识点标签、题目提供人（PC端布局可参考力扣，题目、解析、讨论、相似题、相关试卷、纠错）
                    答案：
                    解析：
                    讨论：
                    其他设置：顺序刷题，难度刷题，随机刷题，是否忽略正确题目；知识点标签
                    刷题数据：历史刷题、正确率（天、月、年）
    题库【公共题库，私人题库】：搜索框（知识点搜索、题目搜索；今日新增，总题目数量。可使用题目的编号搜索编号格式TM+10位数字。下滑固定在顶部）
                    分类条件（可收起）：已选择分类（可搜索分类，下滑固定在顶部搜索框的下面）
                              所有条件，类似级联的选择，点击后添加到已选择分类，
                              将分类分为三级，（例如：外语/英语等级考试/英语四级、外语/大学英语/大一上），从左到右显示，
                              一级的一列一个，二级一列两个，三级的随便放，每一级的可搜索，总的也可以大搜索；每一个分类显示题目数量
                    知识点条件（可收起）：已选择知识点；已选分类的知识点
                    题目列表：简略信息，点击后打开刷题的那个页面（以弹窗显示）

                    右侧的小栏目：上传题目、题目悬赏、反馈（没有我的分类，或者其他问题），今日热门分类、
                        上传题目：弹窗
                        题目悬赏：跳转到论坛发布悬赏，【悬赏细节见论坛】

                试卷【公共试卷，私人试卷】【[精品收费试卷]】：搜索（今日新增，总题目数量。可使用题目的编号搜索编号格式SJ+10位数字。下滑固定在顶部）
                    分类条件：同上
                    试卷列表，简略信息，点开后显示试卷预览（以弹窗显示），点击进行考试，按照顺序显示题目（同刷题页面，但是只显示题目，查看最终分数时显示其他信息）
                    右侧的小栏目：上传试卷、试卷悬赏、反馈（没有我的分类，或者其他问题），今日热门试卷、
                        上传试卷：弹窗
                        试卷悬赏：跳转到论坛发布悬赏，【悬赏细节见论坛】

                知识论坛：官方贴，精华帖，帖子分类，发布帖子，我的发帖，悬赏帖【题目、试卷，我发布的，我回复的】

                服务器：非盈利的刷题交流网站，希望大家募捐来维护服务器的性能。


                学分系统：每人每天可以免费查看100道题、10套卷子的答案；超出的查看题目一题1学分，试卷题目数量的一半学分
                        学分来源：签到（一天5分），上传题目或试卷（审核通过一题5学分，试卷题目数量*5+100学分）；论坛发帖：0-200
                        学分无充值途径 -->
                
                </el-tabs>
            </el-col>
            <el-col :span="6">
                <el-button class="right-op-btn" type="primary">上传题目</el-button>
                <el-button class="right-op-btn" type="primary">答题数据统计</el-button>
                <el-button class="right-op-btn" type="primary">发布题目悬赏</el-button>
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>上传榜</span>
                    </div>
                    <div v-for="o in 10" :key="o" class="text item">
                        {{ "张三  数量：" + o }}
                    </div>
                </el-card>
                <el-card class="mg-t-20">
                    <div slot="header" class="clearfix">
                        <span>刷题榜</span>
                    </div>
                    <div v-for="o in 10" :key="o" class="text item">
                        {{ "李四  数量： " + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            value:'',
            textarea2:'',
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
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleChange(){

        }
    },
};
</script>
<style scoped lang="less">
.home {
    margin: 30px auto;
    .bransh-set{

    }
    .bransh-tabs{
        .discuss-card{
            cursor: pointer;
        }
    }
    
}
</style>
