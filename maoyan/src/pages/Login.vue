<template>
    <div>
      Login ---{{$route.params.from}} <button @click="doLogin">登录</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
      methods:{
        doLogin(){
          sessionStorage.setItem('isLogin', 1);
          // this.$router.go(-1);
          let p = this.$route.params.from || 'Home';
          this.$router.push(p)
        }
      }
    }
</script>

<style scoped>

</style>
