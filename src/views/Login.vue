
<template>
  <div class="login">
    <div class="box">
      <div class="title">
          <h2>VUE-ADMIN 后台管理系统</h2>
      </div>
      <div class="login-form">
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" class="el-ipt" prefix-icon="iconfont el-icon-user" > 
                       
                        </el-input>    
                    </el-form-item>
                    <el-form-item  prop="password" >
                        <el-input :type="password" v-model="ruleForm.password" prefix-icon="iconfont el-icon-key" class="el-ipt">
                           <i slot="suffix" class="el-input__icon el-icon-view" style="cursor: pointer;" @click="typechange"></i>

                        </el-input>
                    </el-form-item>
                    <el-form-item  prop="yzm" >
                        <div class="yzm">
                            <el-input v-model="ruleForm.yzm" class="el-yzm"  ></el-input>
                            <div class="yzm_num">
                               <validate-code ref="validate-code" @change="yzmchange"></validate-code>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitForm('ruleForm')">登录系统</el-button>
                        
                    </el-form-item>
                </el-form>
      </div>
    </div>
  </div>
 
</template>

<script>
 import validateCode from '../components/yzm';
export default {
  data() {
     var checkYanzhengma = (rule, value, callback) => {
        value = value.toUpperCase();
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value !== this.checkCode) {
          callback(new Error('验证码错误'));
          this.$refs['validate-code'].draw();
        } else {
          callback();
        }
      };
    return {
      identifyCode:'',
      identifyCodes:'1234567890',
      ruleForm: {
        username: "admin",
        password: "12345",
        yzm: "",
      },
      sg_token:123456,
      password:"password",
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        yzm: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  created() {},
  components:{
validateCode
  },
  mounted() {
  
  },
  methods: {
    
      //点击登录
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem("sg_token",this.sg_token)
            this.$router.push("/home")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      yzmchange(value){
        this.checkCode = value;
      },
      //点击明文显示
      typechange(){
        if (this.password === 'password') {
          this.password = 'text';
        } else {
          this.password = 'password';
        }
      }
  },
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(32, 160, 255);
  position: relative;
  .box{
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-60%);
    .title{
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 25px;
        color: #fff;
    }
    .login-form{
         position: relative;
        margin: 0 auto;
        width: 520px;
        padding: 30px 50px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #ffffff;
        .el-input__inner{
            margin-left: 0px !important;
        }
        .el-button{
            width: 170px;
            color: #fff;
            background:  rgb(32, 160, 255);
            margin-left: 250px;
        }
    }
  }
  .yzm{
      width: 100%;
      
      display: flex;
      border-radius: 15%;
      .el-yzm{
         width: 50%;
         margin-right: 80px;
      }
      .yzm_num{
        width: 44%;
        height: 30px;
        background: blue;
        color: #fff;
          
      }
     
  }
 
}
</style>
