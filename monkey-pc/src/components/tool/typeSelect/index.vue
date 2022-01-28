<template>
    <div class="type-select">
        <div class="search">
            <el-input placeholder="请输入关键字进行搜索"></el-input>
            <el-button type="primary" class="mg-l-20">搜索</el-button>
            <el-button type="success">确认选择</el-button>
        </div>
        <div class="choose-list">
            <span>已选分类：</span>
            <el-tag 
                size="normal" 
                class="normal-circle-tag" 
                v-for="i in 10"
                :key="i"
                closable
                :effect="'dark'"
                >大学英语</el-tag>
        </div>
        <el-row class="type-level">
            <el-col :span="24">
                    <h4 class="level-first"><i class="el-icon-menu"></i> 计算机类</h4>
                     <el-row class="type-level-sub">
                        <el-col :span="24">
                            <h5 class="level-second"><i class="el-icon-orange"></i> 软考</h5>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            v-for="i in 10"
                            :key="i"
                            :effect="'plain'"
                            >大学英语</el-tag>
                        </el-col>
                        <el-col :span="24">
                            <h5 class="level-second"><i class="el-icon-orange"></i> 面试题</h5>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >初级前端工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >中级前端工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >高级前端工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >初级JAVA工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >中级JAVA工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >高级JAVA工程师</el-tag>
                            
                        </el-col>
                    </el-row>
            </el-col>
            <el-col :span="24">
                    <h4 class="level-first"><i class="el-icon-menu"></i> 外语类</h4>
                     <el-row class="type-level-sub">
                        <el-col :span="24">
                            <h5 class="level-second"><i class="el-icon-orange"></i> 英语</h5>
                            <el-tag
                            size="normal"
                            class="normal-circle-tag"
                            v-for="i in 10"
                            :key="i"
                            :effect="'plain'"
                            >英语四级</el-tag>
                        </el-col>
                        <el-col :span="24">
                            <h5 class="level-second"><i class="el-icon-orange"></i> 面试题</h5>
                            <el-tag 
                            size="normal"
                            class="normal-circle-tag"
                            :effect="'plain'"
                            >初级前端工程师</el-tag>
                            <el-tag 
                            size="normal"
                            class="normal-circle-tag"
                            :effect="'plain'"
                            >中级前端工程师</el-tag>
                            <el-tag 
                            size="normal"
                            class="normal-circle-tag"
                            :effect="'plain'"
                            >高级前端工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >初级JAVA工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >中级JAVA工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >高级JAVA工程师</el-tag>
                            
                        </el-col>
                    </el-row>
            </el-col>
            <el-col :span="24">
                    <h4 class="level-first"><i class="el-icon-menu"></i> 教师考试</h4>
                     <el-row class="type-level-sub">
                        <el-col :span="24">
                            <h5 class="level-second"><i class="el-icon-orange"></i> 英语</h5>
                            <el-tag
                            size="normal"
                            class="normal-circle-tag"
                            v-for="i in 10"
                            :key="i"
                            :effect="'plain'"
                            >英语四级</el-tag>
                        </el-col>
                        <el-col :span="24">
                            <h5 class="level-second"><i class="el-icon-orange"></i> 面试题</h5>
                            <el-tag 
                            size="normal"
                            class="normal-circle-tag"
                            :effect="'plain'"
                            >初级前端工程师</el-tag>
                            <el-tag 
                            size="normal"
                            class="normal-circle-tag"
                            :effect="'plain'"
                            >中级前端工程师</el-tag>
                            <el-tag 
                            size="normal"
                            class="normal-circle-tag"
                            :effect="'plain'"
                            >高级前端工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >初级JAVA工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >中级JAVA工程师</el-tag>
                            <el-tag 
                            size="normal" 
                            class="normal-circle-tag" 
                            :effect="'plain'"
                            >高级JAVA工程师</el-tag>
                            
                        </el-col>
                    </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
/**
 * 
 */
export default {
    data() {
        return {
            
        };
    },
    methods: {
        
    },
};
</script>
<style lang="less" scoped>
.type-select {
    .normal-circle-tag{
        padding:0 20px !important;
        margin-right: 15px;
    }
    .search{
        // text-align: right;
        .el-input{
            width:350px;
        }
    }
    .choose-list{
        margin-top:40px;
        margin-bottom: 20px;
    }
    .type-level{
        h4{
            font-size: 20px;
            margin-bottom: 10px;
            margin-top: 30px;
        }
        .type-level-sub{
            padding-left: 55px;
            h5{
                font-size: 16px;
                margin: 10px 0;
                margin-left: -10px;
            }
            
        }
    }
}
</style>