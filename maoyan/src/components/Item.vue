<template>
    <div class="item">
        <div class="nowplay-main .clearfix">
            <div class="sex">
                <img :src="movieList.img | im">
            </div>
            <div class="content">
                <div class="colum">
                    <div class="title">{{movieList.nm}}</div>
                    <div class="score">
                      <div 
                      v-if="movieList.globalReleased">
                          <strong>观众评</strong>
                        <span>{{movieList.sc}}</span>
                        </div>
                        <div v-else>
                          <strong>点映评</strong>
                        <span>{{movieList.sc}}</span>
                        </div>
                        
                     
                    </div>
                    <div class="actor">
                        主演:{{movieList.star}}
                    </div>
                    <div class="show-info">
                        {{movieList.showInfo}}
                    </div>
                </div>
                <div class="button">
                    <span class="buy"
                    v-if="movieList.globalReleased">购票</span>
                    <span class="buyle"
                    v-else>
                            预售
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Item",
    props:['movieList'],
    filters:{
        'im':function(value){
            value = value.replace(/w\.h/,'128.180').replace(/http/,'https')
            return value
        }
    },
}
</script>

<style scoped>
.item{ height: 130px;
        padding-left: 15px;
        background-color: #fff;
        font-size: 13px;
        color: #666;
    }
    .nowplay-main{
        position: relative;
        width: 100%;
    }
    .sex{
        width: 64px;
        height: 118px;
        position: relative;
        margin-top: 12px;
        float: left;
    }
    .content{
        padding: 12px 14px 12px 0;
        margin-left: 10px;
        height: 90px;
        width: 221px;
        max-height: 90px;
        position: relative;
        float: left;
    }
    .colum{
        padding-right: 5px;
        /* margin-right: 48px; */
        overflow: hidden;
    }
    .title{
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
    }
    .score{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        
    }
    
    .score span{
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
    }
    .actor,.show-info{
        width: 202px;
        margin-top: 6px;
        line-height: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .show-info{
        margin-top: 6px;
        line-height: 15px;
    }
    .button{
        font-size: 12px;
        position: absolute;
        right: -35px;
        top: 0;
        bottom: 0;
        height: 27px;
        margin: auto;
    }
    .button span{
        display: block;
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        box-sizing: border-box;
        /* background-color: #f03d37; */
        color: #fff;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
    }
    .buy{
         background-color: #f03d37;
    }
  .buyle{
           background-color: #3c9fe6
   }
</style>
