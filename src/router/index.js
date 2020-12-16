import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import home from "../views/home";
import bookInfo from "../views/bookInfo";
import index from '../components/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录',
      showBar: false
    }
  },
  {
    path: '/',
    component: index,
    children: [
      {
        path: '',
        redirect: '/home',
        meta: {
          title: '首页',
        }
      },
      {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
          title: '首页',
        }
      },
      {
        path: '/bookInfo',
        name: 'bookInfo',
        component: bookInfo,
        meta: {
          title: '书籍信息',
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next();
  const tokenStr = window.localStorage.getItem('token')
  try {
  if(!tokenStr){
      return next('/login')
  }else{
    next()
  }}catch (e) {
    console.log(e);
  }
})

export default router
