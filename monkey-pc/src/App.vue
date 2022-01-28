<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
body,
p,
ul {
    margin: 0px;
    padding: 0px;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
.el-popover {
    min-width: 40px;
}
.tip-user-text {
    text-align: center;
    cursor: pointer;
    line-height: 24px;
    font-size: 14px;
}
.tip-user-text:hover {
    color: #409eff;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;
    margin: 0px;
    padding: 0px;
}
</style>
