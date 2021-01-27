<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
           <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
       
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
       
      </el-submenu>
      
    </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-header {
  
  color: #333;
  
}

.el-aside {
 
  color: #333;
  
  
}

.el-main {
 color: #333;
 
}
</style>
