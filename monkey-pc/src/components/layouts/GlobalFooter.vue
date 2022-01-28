<template>
    <div class="user-footer">
        <p>Copyright © 2020 monkey</p>
        <p>111</p>
    </div>
</template>

<script>
export default {
    name: "UserFooter",
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.user-footer {
    height: 100px;
    // background: rgb(140, 197, 255);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // color: #fff;
    p {
        padding: 5px;
        margin: 0;
    }
}
</style>