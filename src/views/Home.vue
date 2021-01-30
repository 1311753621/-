<template>
  <div class="home">
    <el-container>
      <el-aside :width="iscollapse ? '64px' : '200px'">
        <div class="logo">
          logo
        </div>
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#424f63"
          active-text-color="#65cea7"
          text-color="#fff"
          router
          :collapse-transition="false" 
          unique-opened :collapse="iscollapse" 
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/home/index">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-share"></i>
              <span>表格管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/table/table1">基本表格</el-menu-item>
              <el-menu-item index="/table/table2">排序表格</el-menu-item>
              <el-menu-item index="/table/table3">筛选表格</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>图表管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">柱状图</el-menu-item>
              <el-menu-item index="1-2">折线图</el-menu-item>
              <el-menu-item index="1-3">饼图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>表单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">渲染表单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="5">
            <i class="el-icon-s-grid"></i>
            <span slot="title">系统管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title"> 权限管理</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-document-copy"></i>
            <span slot="title">操作日志</span>
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-film"></i>
            <span slot="title">测试</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
            <div class="header_left">
              <div class="sg_kai" @click="sg_kai">
                        |||
              </div>
              <p>VUE-ADMIN 后台管理系统</p>
              </div>
            <div class="header_right">
              <el-dropdown style="margin-right:10px">
                <el-button >
                  <i class="el-icon-user">luichooy</i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>luichooy</el-dropdown-item>
                  <el-dropdown-item>admin</el-dropdown-item>
                  <el-dropdown-item>超级管理员</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-button>
                <i class="el-icon-question"></i>
              </el-button>
              <el-button  @click="goout">
                <i class="el-icon-switch-button"></i>
              </el-button>
            </div>
        </el-header>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
       //默认不展开
        iscollapse:false,
        //激活的路由地址
        activePath:''
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击按钮展开菜单
    sg_kai(){
        this.iscollapse=!this.iscollapse
    },
    //保存路由的激活状态
    saveNav(activePath){
        sessionStorage.setItem('activePath',activePath)
        this.activePath=activePath
    },
         //退出登录
    goout() {
      this.$confirm('确定退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          sessionStorage.removeItem("sg_token")
          this.$router.push("/login");
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
.el-header {
  color: #333;
  display: flex;
  width: 100%;
  height: 50px;
  
  line-height: 50px;
  justify-content: space-between;
  .header_left{
    width: 300px;
    line-height: 50px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    
  }
}

.el-aside {
  background: #424f63;
  color: #65cea7;
  font-size: 24px;
}

.el-main {
  color: #333;
}
.logo {
  width: 100%;
  height: 40px;
  background: #424f63;
  color: #65cea7;
  line-height: 40px;
  padding: 16px 0;
  text-align: center;
  font-size: 24px;
}
</style>
