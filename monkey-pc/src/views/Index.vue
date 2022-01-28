<template>
    <div class="index-page">
        <el-carousel height="420px" :interval="5000" arrow="never" indicator-position="none">
            <el-carousel-item v-for="item in 1" :key="item" style="background-size:100%;background-repeat: no-repeat;background-position: center center;background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3732193368,212223825&fm=26&gp=0.jpg'); back">
                <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <el-card class="search common-style">
            <!-- 搜索框 -->
            <el-input :placeholder="searchType==='1'?'请输入题目名称搜素':'请输入试卷名称搜素'" v-model="searchValue" class="input-with-select">
                <el-select v-model="searchType" slot="prepend" placeholder="请选择">
                <el-option label="搜题目" value="1"></el-option>
                <el-option label="搜试卷" value="2"></el-option>
                </el-select>
                <el-button slot="append" type="primary" plain>搜索</el-button>
            </el-input>
            <el-divider></el-divider>
            <!-- 试卷库数据 -->
            <el-row :gutter="20" class="number-data">
                <el-col :span="8">
                    <p @click="change()">今日新增试题数</p>
                    <countTo separator="" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="true"></countTo>
                    <p>题库题目总数量</p>
                    <countTo separator="" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="true"></countTo>
                </el-col>
                <el-col :span="8" class="paper">
                    <p @click="change()">今日新增试卷数</p>
                    <countTo separator="" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="true"></countTo>
                    <p>试卷库试卷总数量</p>
                    <countTo separator="" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="true"></countTo>
                </el-col>
                <el-col :span="8" class="paid-paper">
                    <p @click="change()">今日新增精品试卷</p>
                    <countTo separator="" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="true"></countTo>
                    <p>精品试卷库试卷总数量</p>
                    <countTo separator="" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="true"></countTo>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="common-style">
            
        </el-card>
    </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    name: "Index",
    components: { countTo },
    data() {
        return {
            searchType:'1',
            searchValue:'',
            // 需要滚动的时间
            duration: 3000,
            // 初始值
            startVal: 0,
            // 最终值
            endVal: 201800000
        };
    },
    methods: {
        change(){
            this.endVal+=2000
        }
    },
};
</script>
<style scoped lang="less">
.index-page{
    .common-style{
        max-width:1200px;
        margin:0 auto;
    }
    /deep/.el-carousel{
        .el-carousel__indicators,.el-carousel__indicators--horizonta{
            bottom: 100px !important;
        }
    }
    .search{
        margin-top: -96px;
        position: relative;
        z-index: 10;
        max-width:800px;
        /deep/.el-input-group{
            font-size: 16px;
            height: 50px;
            .el-input-group__prepend{
                width:60px;
                border-color: rgb(124, 246, 63);
                color: rgb(124, 246, 63);
                .el-input__inner{
                    border-color: rgba(0, 0, 0, 0);
                }
            }
            .el-input__inner{
                height: 50px;
                border-color: rgb(124, 246, 63);
            }
            .el-input-group__append{
                border-color: rgb(124, 246, 63);
                width:70px;
                .el-button{
                    width:110px;
                    height: 50px;
                    border-radius: 0px;
                }
            }
        }
    }
    .number-data{
        p{
            text-align: center;
            color:rgb(160, 207, 255);
        }
        span{
            display: inline-block;
            width:100%;
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            color:#409cef;
            padding: 10px 0;
        }
        .paper{
            p{
                color:rgb(190, 241, 165);
            }
            span{
                color:rgb(124, 246, 63);
            }
        }
        .paid-paper{
            p{
                color:rgb(246, 199, 133);
            }
            span{
                color:rgb(240, 157, 40);
            }
        }
    }
    
}
</style>
