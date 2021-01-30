<template>
    <div>
        <el-card>
            <p>基本表格（包含自定义模板，filter，分页组件）</p>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Data: [],
            pagesize: 10,
            pagenum: 1,
            total: 0
        };
    },
    created() {
        this.getData()
    },
    mounted() {

    },
    methods: {
        async getData(){
           
        }
    }
};
</script>

<style scoped>

</style>
