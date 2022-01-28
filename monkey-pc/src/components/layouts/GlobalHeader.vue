<template>
    <div class="user-header">
        <div class="header-layout">
            <el-row type="flex" justify="space-between">
                <el-col :span="4">
                    <div class="logo" @click="toIndex()">LOGO</div>
                </el-col>

                <el-col :span="12">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-vertical-demo"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <el-menu-item index="index">首页</el-menu-item>
                        <el-menu-item index="questionBank">公共题库</el-menu-item>
                        <el-menu-item index="paperBank">试卷库</el-menu-item>
                        <el-menu-item index="paidPaperBank">付费精品试卷</el-menu-item>
                    </el-menu>
                    <el-popover placement="bottom" width="60" trigger="hover">
                        <div class="tip-user-text">信息设置</div>
                        <div class="tip-user-text">退出</div>
                        <div class="user" slot="reference">
                            <!-- <img src="" alt=""> -->
                        </div>
                    </el-popover>
                </el-col>
                <el-col :span="6" class="grid-right">
                    <el-button type="primary" @click="toLogin()"
                        >登录</el-button
                    >
                    <el-button type="primary" plain @click="toRegister()"
                        >注册</el-button
                    >
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserHeader",
    data() {
        return {
            activeIndex: "index",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.$router.push({ name: key });
        },
        toLogin() {
            this.$router.push({ name: "login" });
        },
        toRegister() {
            this.$router.push({ name: "register" });
        },
        toIndex() {
            this.$router.push({ name: "index" });
            this.activeIndex = "index"
        },
    },
};
</script>

<style lang="less" scoped>
.user-header {
    height: 60px;
    border-bottom: solid 1px #e6e6e6;
    .header-layout {
        max-width: 1200px;
        margin: 0 auto;
        .logo {
            width: 150px;
            height: 60px;
            background: #409eff;
        }
        .el-row {
            .grid-right {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                
            }
        }
    }
}
</style>