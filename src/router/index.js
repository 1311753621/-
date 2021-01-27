import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'Home',
    
    component: ()=> {  // 路由懒加载
      return import('../views/Home.vue')
    },
    beforeEnter(to,from,next){
      if(sessionStorage.getItem("sg_token")){
        next()
      }else{
        alert("请登录！")
        next("/login")
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    
    component: ()=> {  // 路由懒加载
      return import('../views/Login.vue')
    }
  },
  {
    path:'/',
    redirect:"/login"
  },
]

const router = new VueRouter({
  routes
})

export default router
