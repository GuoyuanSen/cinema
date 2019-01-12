<template>
    <div class="hs_top" @click="goTop">
        top
    </div>

</template>

<script>
export default {
    name:"top",
    methods:{
        goTop(){
            window.scrollTo(0,0)
        }
    }
}
</script>

<style scoped>
    .hs_top{
        position: fixed;
        right: 15px;
        bottom: 70px;
        width: 80px;
        height: 80px;
        background-color: rgba(0,0,0,0.7);
        color: #ffffff;
    }
</style>
