<template>
    <div class="login">
        <div class="login-box">
            <div class="title">账号密码登录</div>
            <el-form ref="loginForm" :model="loginForm" label-width="80px">
                <el-form-item
                    label=""
                    prop="account"
                    label-width="0"
                    :rules="[{ required: true, message: '账号不能为空' }]"
                    :error="errors.phone"
                >
                    <el-input
                        placeholder="手机号"
                        prefix-icon="el-icon-user-solid"
                        v-model="loginForm.account"
                        autocomplete="off"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item
                    label=""
                    prop="password"
                    label-width="0"
                    :rules="[{ required: true, message: '密码不能为空' }]"
                    :error="errors.password"
                >
                    <el-input
                        placeholder="密码"
                        prefix-icon="el-icon-lock"
                        show-password
                        v-model="loginForm.password"
                        autocomplete="off"
                    >
                    </el-input>
                </el-form-item>
                <div class="forget"><span>忘记密码</span></div>
                <el-button
                    type="primary"
                    :loading="loading"
                    @click.stop="submitLogin"
                    >登 录</el-button
                >
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Login",
    data() {
        return {
            activeName: "first",
            loginForm: {
                account: "",
                password: "",
            },
            errors: {
                phone: "",
                password: "",
            },
            loading: false,
        };
    },
    methods: {
        ...mapActions(["Login"]),
        submitLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    const sendData = Object.assign(this.loginForm, {
                        way: "phone",
                    });
                    console.log(sendData);
                    this.Login(sendData)
                        .then((res) => {
                            this.loading = false;
                            this.$message.success("登录成功!");
                            const redirect = this.$route.query.redirect;
                            if (redirect) {
                                this.$router.push({
                                    path: redirect,
                                });
                            } else {
                                this.$router.push({ path: "/home" });
                            }
                        })
                        .catch((err) => {
                            this.loading = false;
                            this.$message.error(
                                err.resultMessage || "登录失败，请稍后重试！"
                            );
                            if (err.resultCode === "10002") {
                                this.errors = { phone: "手机号不存在！" };
                                return;
                            }
                            if (err.resultCode === "10003") {
                                this.errors = { password: "密码不正确！" };
                                return;
                            }
                        });
                }
            });
        },
    },
};
</script>
<style scoped lang="less">
.login {
    width: 100vw;
    height: calc(100vh - 160px);
    background: url("../assets/images/back1.jpg") no-repeat;
    background-size: 100% 100%;
    .login-box {
        width: 360px;
        height: 340px;
        background: #fff;
        border-radius: 2px;
        overflow: hidden;
        position: fixed;
        top: calc(50vh - 180px);
        right: 200px;
        .title {
            text-align: center;
            line-height: 55px;
            font-size: 16px;
            background: rgb(248, 248, 248);
        }
        .el-form {
            padding: 0 20px;
            margin-top: 20px;
            .el-input {
                margin-top: 10px;
                border-radius: 0;
                .el-input__inner {
                    border-radius: 0;
                }
            }
            .forget {
                // margin-top: 10px;
                color: #409eff;
                font-size: 14px;
                text-align: right;
                span {
                    cursor: pointer;
                }
            }
            .el-button {
                width: 320px;
                font-size: 14px;
                margin-top: 20px;
            }
        }
    }
}
</style>
