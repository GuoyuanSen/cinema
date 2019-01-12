// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import go from '../'

Vue.config.productionTip = false;

//入口js  new 配置

import '../static/css/base.css'
import '../static/libs/font-awesome-4.7.0/css/font-awesome.css'
/* eslint-disable no-new */

import http from './api/http'
import go from "./chajian/index"
Vue.use( http)
Vue.use(go)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})