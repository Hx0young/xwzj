<template>
    <div class="tool">
        <div class="tool-item">
            +
        </div>
        <div class="tool-item">
            消息
        </div>
        <div class="tool-item">
            工具
        </div>
        <div class="tool-item">
            排行榜
        </div>
        <div class="tool-item">
            反馈
        </div>
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
.tool {
    display: flex;
    flex-direction: column;
    position: fixed;
        right: 60px;
        bottom: 100px;
    .tool-item{
        height: 60px;
        width: 60px;
        background: rgb(140, 197, 255);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        border-radius: 30px;
        margin-top: 15px;
        
    }
    
}
</style>