<!--楼梯效果-->
<template>
     <div id="cinema">
            <div class="a" ref="left">
               <div>
                   <span v-for="(item,index) in arr"
                          :key="index"
                          @click="lg(index)"
                          :class="{current: showIndex === index}"
                   >{{item.title}}</span>
               </div>
            </div>

        <div style="flex: 1" ref="right">
           <div>
                <span v-for="(item,index) in arr"
                      :key="index"
                      class="b"
                      :style="{height: item.height,backgroundColor: item.color }">
                </span>
           </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "cinema",
        mounted(){
            let self = this;
            let obj = {
                scrollX: false,
                scrollY: true,
                click: true,
                // tap: true
            }
            Array.from(this.$refs.right.children[0].children).forEach((item,index)=>{
                console.log(item);
                // console.log(item.offsetTop);
                self.topArr.push(item.offsetTop)
            })
            // console.log(self.topArr); 间距
            this.s1 = new BScroll(self.$refs.left,obj)
            this.s2 = new BScroll(self.$refs.right,obj);
            this.s2.on('scrollEnd',function (params) {
                let dis = Math.abs(params.y);
                self.topArr.forEach((item,index,array)=>{
                    if(dis<item-50 && dis>=array[index-1]-50 ){
                       self.showIndex = index-1;
                    }
                })
            })
        },
        data(){
            return {
                showIndex: 0,
                topArr: [],
                arr: [
                    {
                        title: '新品',height: '500px',color: 'red'
                    },
                    {
                        title: '手机',height: '80px',color: 'blue'
                    },
                    {
                        title: '电视',height: '40px',color: 'yellow'
                    },
                    {
                        title: '电脑',height: '150px',color: 'green'
                    },
                    {
                        title: '新品',height: '50px',color: 'red'
                    },
                    {
                        title: '手机',height: '80px',color: 'blue'
                    },
                    {
                        title: '电视',height: '40px',color: 'yellow'
                    },
                    {
                        title: '电脑',height: '150px',color: 'green'
                    },
                    {
                        title: '手机',height: '80px',color: 'blue'
                    },
                    {
                        title: '电视',height: '40px',color: 'yellow'
                    },
                    {
                        title: '电脑',height: '150px',color: 'green'
                    },
                ]
            }
        },
        methods:{
            lg(index){
                this.showIndex = index;
                // window.scrollTo(x,y)
                let dis = this.topArr[index]-50;
                //ms
                this.s2.scrollTo(0,-dis,500,'easing')
            }
        }
    }
</script>

<style scoped>
 #cinema{
        display: flex;
        width: 100%;
        height: calc(100vh - 50px);
        overflow: hidden;
    }
    #cinema .a{
        width: 80px;
        border-right: 1px solid #333333;
    }
    #cinema .a span{
       display: block;
        text-align: center;
        line-height: 42px;
        border-bottom: 1px solid #333333;
    }
    #cinema .a span.current{
        color: yellow;
    }
    #cinema .b{
        display: block;
    }
</style>
