<template>
    <div>
        <el-card>
            <p>基本表格（包含自定义模板，filter，分页组件）</p>
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="username"
                label="用户名"
                width="80"
                >
                </el-table-column>
                <el-table-column
               width="80"
                label="头像"
               >
                 <template slot-scope="scope">
                  <img :src="scope.row.userimg" alt="用户头像" width="42" height="42" style="border-radius: 50%;">
                </template>
                </el-table-column>
                <el-table-column
                prop="pingfen"
                label="评分">
                </el-table-column>
                 <el-table-column
                prop="leixing"
                label="评分类型"
                width="80">
                </el-table-column>
                 <el-table-column
                prop="songtime"
                label="送达时间"
                width="80">
                </el-table-column>
                 <el-table-column
                prop="content"
                label="内容"
                width="240">
                </el-table-column>
                 <el-table-column
                prop="tuijian"
                label="推荐">
                </el-table-column>
                 <el-table-column
                prop="time"
                label="评价时间">
                </el-table-column>
            </el-table>
             <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="info.pagenum"
                :page-sizes="[2,3,4,5]"
                :page-size="info.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
                    </el-card>
                </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [],
            info:{
                 pagesize: 2,
                pagenum: 1,
            },
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
            
            let res =await this.$http.get("/tableData.json",{params:this.info})
               
           
            //console.log(res)
            this.tableData=res.data.userList
            //console.log(this.tableData)
            this.total=res.data.total
        },
         //监听pagesize改变的事件
        handleSizeChange(newsize){
            console.log(newsize)
            this.info.pagesize=newsize   
            this.getData()//刷新用户列表
        },
        //监听页码值改变的事件
        handleCurrentChange(newpage){
            console.log(newpage)
            this.info.pagenum=newpage
            this.getData() //刷新用户列表
        },
        
    }
};
</script>

<style scoped>

</style>
