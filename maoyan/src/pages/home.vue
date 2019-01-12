<template>
    <div id="home">
     <h1 class="home-header">猫眼电影</h1>
        <router-view></router-view>
        <div class="nav">
            <div class="nav-list"
            v-for="(item,index) in arr"
            :key="index"
            :class="{current:index === showIndex}"
            @click="change(index)"
            >
                <p><i :class="item.icon"></i></p>
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:"Home",
    mounted(){
    },
    methods:{
        
    },
    data(){
        return{
            arr:[
                {
                    icon: "fa fa-film",
                    title: "电影",
                    path: "/film"
                },
                {
                    icon: "fa fa-envelope-o",
                    title: "影院",
                    path: "/cinema"
                },
                {
                    icon: "fa fa-user-o",
                    title: "我的",
                    path: "/mine"
                },
                
            ],
            id: 1,
            showIndex: 0
        }
    },
    methods: {
        change(index){
            this.showIndex = index
            let newPath = this.arr[index].path
            this.$router.push({path:newPath})
        }
    },
}
</script>
<style scoped>
    #home{
        height: 50px;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        position: fixed;
        width: 100%;
    }
    
  .home-header{
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
    }
    .nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        border-top: .5px solid #d8d8d8;
        display: flex;
        justify-content: space-around;

    }
    .nav-list{
        float: left;
        width: 25px;
        height: 48px;
        line-height: 48px;
        box-sizing: border-box;
        position: relative;
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #696969;
    }
    .nav-list.current{
         color: #f03d37;
    }
    .nav-list p{
        line-height: 12px;
        font-size: 10px;
        
        
    }
    .nav-list p i{
        font-size: 20px;
    }
    router-view{
        padding: 50px
    }
</style>
