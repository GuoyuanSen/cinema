import axios from 'axios'
import router from '../router/index'


//请求拦截
axios.interceptors.request.use(
    config => {  //成功的回调
        console.log(config);
        return config
    },
    error => { //失败的回调处理

    }
)
// 回响拦截
axios.interceptors.response.use(
    res => {
        //登录判断  204  203  登录超时
        // router.push()
      return res;
    },
    error => {

    }
)

export default {
    install(Vue){
        Vue.prototype.$http = axios;
    }
}