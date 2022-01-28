<template>
    <div id="userLayout" class="user-layout-wrapper">
        <GlobalHeader />
        <div id="el-content" v-bind:style="{ minHeight: Height + 'px' }">
            <router-view />
        </div>
        <GlobalFooter />
    </div>
</template>

<script>
import GlobalFooter from "@/components/layouts/GlobalFooter";
import GlobalHeader from "@/components/layouts/GlobalHeader";

export default {
    name: "UserLayout",
    components: { GlobalHeader, GlobalFooter },
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
