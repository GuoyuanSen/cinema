<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//这个文件 就相当于是我们的index。html  根组件
// import axios from 'axios'
export default {
  name: 'App',
}
</script>

<style scopde>
#app {
  width: 100%;
  min-height: 100%;
}
</style>
