import axios from 'axios'
import {Message} from "element-ui";
import router from "../router";
// import {showFullScreenLoading,tryHideFullScreenLoading} from "./loading"
import store from '../store'
export function request(config) {
  // let needLoadingRequestCount = 0
  const instance = axios.create({
    baseURL: 'http://192.168.8.131:3000',
    timeout: 10000,
  })
  //axios的拦截器
  //interceptors -->拦截器
  instance.interceptors.request.use(config => {
    // showFullScreenLoading()
    const token = store.state.token
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = token;
    }
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截
  instance.interceptors.response.use(res => {
    // tryHideFullScreenLoading()
    if(res.data.err_code == 500){
      Message.error('服务器繁忙')
    } else{
      return res.data
    }
  },err => {
    router.replace({path: '/login'})
    window.localStorage.clear()
    Message.error('请重新登录')
  })
  return instance(config)
}