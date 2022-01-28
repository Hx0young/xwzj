<template>
    <div class="user-menu">
        <div class="user-info common-menu-item">
            <div class="profile-photo">
                <img src="../../assets/logo.png" alt="">
                <span>随便你</span>
            </div>
            <ul class="common-item">
                <router-link to='/user/center'>
                    <li>个人中心</li>
                </router-link>
                <router-link to='/user/favorite'>
                    <li>收藏夹</li>
                </router-link>
                <router-link to='/user/note'>
                    <li>我的笔记</li>
                </router-link>
                <router-link to='/user/space'>
                    <li>私人空间</li>
                </router-link>
            </ul>
        </div>
        <div class="brush common-menu-item">
            <ul class="common-item">
                <router-link to='/question-brush'>
                <li>刷题</li>
                </router-link>
            </ul>
        </div>
        <div class="operation common-menu-item">
            <ul class="common-item">
                <router-link to='/public-question-bank'>
                    <li>题库</li>
                </router-link>
                <router-link to='/question-brush'>
                    <li>试卷库</li>
                </router-link>
                <router-link to='/question-brush'>
                    <li>商城</li>
                </router-link>
                <router-link to='/question-brush'>
                    <li>论坛</li>
                </router-link>
            </ul>
        </div>
        <div class="upload common-menu-item">
            <ul class="common-item">
                <router-link to='/model-center'>
                    <li>模板中心</li>
                </router-link>
                <router-link to='/topic-upload'>
                    <li>上传题目</li>
                </router-link>
                <router-link to='/paper-upload'>
                    <li>上传试卷</li>
                </router-link>
            </ul>
        </div>
        <div class="server common-menu-item">
            <ul class="common-item">
                <router-link to='/public-question-bank'>
                    <li>服务器</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Usermenu",
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
.user-menu {
    // background: #fff;
    position: absolute;
    left:0px;
    height: calc(100vh - 60px);
    width:220px !important;
    .common-menu-item{
        width:100%;
        background: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding:10px 0px;
        color:#666;
        margin-bottom: 15px;
        .profile-photo{
            width:80px;
            margin:20px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 50px;
                height: 50px;
            }
            span{
                display: block;
                text-align: center;
                margin-top:10px;
            }
        }
        .common-item{
            font-size: 18px;
            li{
                // background: red;
                color:#666;
                line-height: 46px;
                padding:0 30px;
                cursor: pointer;
                position: relative;
                &::after{
                    content: "\e6e0";
                    font-size: 20px;
                    position: absolute;
                    right:30px;
                    top:-2px;
                }
            }
            li:hover{
                background: #409def70;
                color: #fff;
                &::after{
                    color: #fff;
                }
            }
        }
    }
}
</style>