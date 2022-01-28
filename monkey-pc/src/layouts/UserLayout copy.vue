<style lang="less" scoped>
</style>
<template>
    <div id="globalLayout" class="global-layout-wrapper">
        <UserHeader />
        <div id="v-content" v-bind:style="{ minHeight: Height + 'px' }">
            <router-view />
        </div>
        <el-backtop></el-backtop>
        <UserFooter />
    </div>
</template>

<script>
import UserFooter from "@/components/layouts/UserFooter";
import UserHeader from "@/components/layouts/UserHeader";

export default {
    name: "GlobalLayout",
    components: { UserHeader, UserFooter },
    data() {
        return {
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
};
</script>

<style lang="less" scoped>
</style>