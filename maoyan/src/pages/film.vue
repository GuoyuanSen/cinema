<template>
    <div class="film">
        <div class="topbar">
            <div class="city">
                <span>北京</span>
                <i class="fa fa-caret-down"></i>
            </div>
            <div class="topbar-nav">
                <div class="top-nav-list">
                    <span
                    v-for="(item,index) in arr"
                    :key="index"
                    :class="[{active:index === showIndex}]"
                    @click="change(index)"
                    >{{item.title}}</span>
                </div>
            </div>
            <div class="search">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
    name:"Film",
    data(){
        return{
            arr:[
                {title:"正在上映",path:"/nowPlay"},
                {title:"即将上映",path:"/comingPlay"}
            ],
            showIndex:0,
           movieList:""
        }
    },
    methods: {
        change(index){
            this.showIndex = index;
            let newPath = this.arr[index].path;
            this.$router.push({path:newPath})
        }
    },
}

</script>
<style scoped>
    .film{
        background: #fff;
        font-size: 15px;
        color: #666;
        padding-top: 44px;
        position: relative;
        width: 100%;
        overflow: hidden;
        height: calc(100vh - 100px);
    }
    .topbar{
        display: flex;
        height: 44px;
        width: 100%;
        align-items: center;
        height: 44px;
        justify-content: space-between;
        position: fixed;
        z-index: 5;
        top: 48px;
        left: 0;
        background: #fff
    }
    .city{
        padding-left: 15px;
    }
    .top-nav-list span{
        text-align: center;
        padding: 0 12px;
        font-weight: 700;
        display:inline-block;
        height: 44px;
        line-height: 44px
    }
    .top-nav-list span.active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238
    }
   
    .search{
        color: #ef4238;
        font-size: 20px;
        padding: 8px 15px 10px 10px;
    }
</style>


