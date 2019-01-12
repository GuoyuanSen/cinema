<template>
      <div id="nowplay" ref="nowplay">
          <div class="movie">
              <Item v-for="(item,index) in movieList"
            :movie-list="item"
            :key="index">
              </Item>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import Item from "../components/Item"; //{}extend
import BScroll from "better-scroll"
export default {
    name:'Nowplay',
     components: {Item},
  
    created() {  //beforeRouterEnter
       this.getList();
    },
    mounted(){
        let self = this;
        this.rolling=new BScroll("#nowplay",{scrollX:false,scrollY:true,click:true})
        this.rolling.on("scrollEnd",function(params){
            let dis = Math.abs(params.y);
            let viewHeight = self.$refs.nowplay.offsetHeight;
            let h = self.$refs.nowplay.children[0].offsetHeight;
            if((dis + viewHeight) >= h){
                // console.log("di");
                //发送ajax请求获取新的数据  添加到movieList
                self.getList();
            }
        })
    },
    updated(){  //beforeUpdate() --没有真是的dom
            //data 放的是数据
        this.rolling.refresh();   //零时变量
    },
    // props:[], 书写步骤 
    data(){
        return{
            page:0,
            movieList:[],
            movieIds:[],
            total:0
        }
    },
    methods:{
        async getList(){
            this.page++;
            let url = "/sexLady/ajax/movieOnInfoList?token=";

            let params = {};
            if(this.page >1 ){
                //rows 10
                // 1- 10  0-9
                // 11-20 10-19
            let start = (this.page - 1) * 12;
            let end = start + 12;
            let arr = this.movieIds.slice(start,end);
            url="/sexLady/ajax/moreComingList?token=";
            params = {
                params:{
                    movieIds:arr.join(",")
                }
            }

            }
        let data = await this.$http.get(url,params);
        console.log(data);
        if(this.page === 1){
            this.movieList = this.movieList.concat(data.data.movieList);
            this.movieIds = [].concat(data.data.movieIds);
            this.total = data.data.total;
        }
        this.movieList = this.movieList.concat(data.data.coming)

        }
    }
   
}
</script>
<style scoped>
   
  #nowplay{
      height: calc(100vh - 142px);
    
  }
  .movie{
      position: absolute;
      width: 100%;
  }
</style>


