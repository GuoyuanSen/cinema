import Vue from 'vue'
import Router from 'vue-router'

//路由组件
import Home from '../pages/home'
import Film from '../pages/film'
import Cinema from '../pages/cinema'
import Mine from '../pages/Mine'
import Login from '../pages/Login'
import Error404 from"../components/Error"

Vue.use(Router);

//钩子函数   blue   5个

//页
let router =  new Router({
  routes: [ {
    name:"Error404",
    path:"*",
    component:Error404
  },
  {path: '/', redirect: '/home' }, //重定向  / --> /home
  {path:'/a',name:"a",component:()=>import("@/pages/a")},
  {
    name: 'Home',
    path: '/home',
    component: Home,
    children: [{
      path: '/',
      redirect: '/film'
    },
      {
        name: 'Film',
        path: '/film',
        component: Film,
        children:[
            {
              path:"/nowplay",
              name:"Nowplay",
              component:()=>import('../pages/nowplay')
            },
            {
              path:"/comingplay",
              name:"Comingplay",
              component:()=>import('../pages/comingplay')
            }
          ]
          
        },
        {
          name: 'Cinema',
          path: '/cinema',
          component: Cinema
        },
        {
          name: 'Mine',
          path: '/mine',
         meta:{  //元信息
            auth:1,
            aa:"aa",
            bb:'bb'
          },
          component: Mine
        }
      ]
    },
    //{name: 'A',path: '/a/:id', component: A},
    {name:'Login',path: '/login',component: Login}
   
  ]
});


// //全局钩子函数 beforeEach  回调函数  拦截所有的路由跳转
// // forEach
// //  [] 栈 stack
// router.beforeEach((to,from,next)=>{
//   // console.log(to);
//   // console.log('router-->',router);
//   let p = from.name || 'Home';
//   //判断 isLogin
//   if(sessionStorage.getItem('isLogin') || to.name === 'Login'){
//       next()
//       return;
//   }else {
//       router.push({ name: 'Login',params: {from: p}})
//   }
// })

//路由元信息  meta

router.beforeEach((to,from,next)=>{
  // console.log(to);
  if(to.meta.auth && to.meta.auth === 1){  //当前路由需要判断是否登录
      //判断 isLogin
      if(sessionStorage.getItem('isLogin') || to.name === 'Login'){
          next();
          return;
      }else {
          router.push({ name: 'Login'})
      }
  }else {
    next()
  }
});

export default router;
