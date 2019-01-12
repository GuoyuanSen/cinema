<template>
    <div>
      mine
    </div>
</template>

<script>
  //这个地方 做出一个额判断
  //路由组件  --》多出三个局部守卫  拦截当前的组件
    export default {
        name: "Mine",
     //  beforeRouteEnter(to,from,next){  //当路由进入的时候
     //    // console.log(to);
     //    // console.log(from);
     //    // console.log(next);
     //    // // next 有一个回调函数   vm
     //    // console.log(this);
     //
     //    next((vm)=>{
     //      // console.log(vm);
     //      //判断  条件  sessionStorage  isLogin
     //      if(sessionStorage.getItem('isLogin')){
     //        next()
     //      }else {
     //        vm.$router.push('/login')
     //      }
     //    })
     //       //  ---node next
     //
     //  },
     // beforeRouteLeave(to,from,next){  //当路由 离开的时候
     //   console.log('leave',this);
     // },
     // beforeRouteUpdate(to,from,next){ //当路由跟新的时候
     //   console.log(this);
     // }
    }
</script>

<style scoped>

</style>
