<template>
    <div class="choose-label-dialog">
        <el-dialog
            title="知识点标签选择"
            :visible.sync="chooseLabelDialog"
            width="60%">
            <label-select></label-select>
            <span slot="footer" class="dialog-footer">
                <el-button @click="chooseLabelDialog = false">取 消</el-button>
                <el-button type="primary" @click="chooseLabelDialog = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import LabelSelect from "@/components/tool/labelSelect"
export default {
    name: "CreateTaskDialog",
    components:{
        LabelSelect,
    },
    data() {
        return {
            chooseLabelDialog:false,

        };
    },
    methods: {
        openDialog(){
            this.chooseLabelDialog = true;
        }
    },
};
</script>
<style scoped lang="less">
</style>
