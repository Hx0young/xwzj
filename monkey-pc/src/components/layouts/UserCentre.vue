<template>
    <div class="user-centre">
        <div class="centre-content">
            <UserMenu/>
            <div id="view-content" v-bind:style="{ minHeight: Height + 'px' }">
                <router-view />
            </div>
        </div>
        <!-- <el-row>
            <el-col :span="4">
                <UserMenu/>
            </el-col>
            <el-col :span="20">
                <div id="v-content" v-bind:style="{ minHeight: Height + 'px' }">
                    <router-view />
                </div>
            </el-col>
        </el-row> -->
        
    </div>
</template>

<script>
import UserMenu from "@/components/layouts/UserMenu";
export default {
    name: "UserCentre",
    components:{
        UserMenu
    },
    data() {
        return {
            activeIndex: "userQuestionBrush",
            Height: 0,
        };
    },
    mounted() {
        //动态设置内容高度 让footer始终居底   header+footer的高度是161
        this.Height = document.documentElement.clientHeight - 161; //监听浏览器窗口变化
        window.onresize = () => {
            this.Height = document.documentElement.clientHeight - 161;
        };
    },
    methods: {
    },
};
</script>

<style lang="less" scoped>
.user-centre {
    width:100%;
    .centre-content{
        // display: flex;        
        max-width:1440px;
        min-width: 1380px;
        margin:0 auto;
        padding-top: 60px;
        position: relative;
        #view-content{
            margin-left: 240px;
        }
    }
}
</style>