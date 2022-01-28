<template>
    <div class="user-header">
        <div class="header-layout">
            <el-row type="flex" justify="space-between">
                <el-col :span="4">
                    <div class="logo" @click="toIndex()">LOGO</div>
                </el-col>
                <el-col :span="20" class="grid-right">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-vertical-demo"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <el-menu-item index="userPublicQuestionBank">题库</el-menu-item>
                        <el-menu-item index="userPublicPaperBank">试卷库</el-menu-item>
                        <el-menu-item index="userQuestionBrush">刷题</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">私人空间</template>
                            <el-menu-item index="2-1">私人题库</el-menu-item>
                            <el-menu-item index="2-2">私人试卷库</el-menu-item>
                        </el-submenu>
                        <!-- <el-menu-item index="3">试卷库</el-menu-item> -->
                        <!-- <el-submenu index="3">
                            <template slot="title">试卷库</template>
                            <el-menu-item index="3-1">公共试卷库</el-menu-item>
                            <el-menu-item index="4-2">私人试卷库</el-menu-item>
                        </el-submenu> -->
                        <el-menu-item index="3">论坛</el-menu-item>
                        <el-menu-item index="4">班级空间</el-menu-item>
                        <el-menu-item index="5">服务器</el-menu-item>
                    </el-menu>
                    <el-popover placement="bottom" width="60" trigger="hover">
                        <!-- <div class="tip-user-text">个人中心</div> -->
                        <!-- <div class="tip-user-text">通知消息</div> -->
                        <!-- <div class="tip-user-text">收藏夹</div> -->
                        <div class="tip-user-text">帮助</div>
                        <div class="tip-user-text">退出登录</div>
                        <div class="user" slot="reference">
                            <!-- <img src="" alt=""> -->
                        </div>
                    </el-popover>
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
            activeIndex: "userQuestionBrush",
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
        },
    },
};
</script>

<style lang="less" scoped>
.user-header {
    height: 60px;
    background: #fff;
    // border-bottom: solid 1px #e6e6e6;
    box-shadow: 1px -1px 2px #e6e6e6;
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
                .user {
                    cursor: pointer;
                    margin-left: 20px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background: #409eff;
                    overflow: hidden;
                }
                .el-menu--horizontal {
                    border: none;
                }
                .el-menu {
                    .el-menu-item {
                        &:hover {
                            color: #409eff;
                            .el-submenu {
                                color: #409eff;
                            }
                        }
                    }
                    .el-submenu {
                        &:hover {
                            // color: #409eff;
                            .el-submenu__title {
                                color: #409eff !important;
                            }
                        }
                    }
                    .is-active {
                        color: #409eff;
                        .el-submenu__title {
                            color: #409eff;
                        }
                    }
                }
            }
        }
    }
}
</style>