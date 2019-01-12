<template>
  <div class="will" ref="will">
    <div class="will_wrap">
      <p class="title">近期最受期待</p>
      <div>
        <div ref="comingPlay" id="comingPlay">
          <div class="xh">
            <Item2 v-for="(item,index) in movieList" :movie-list="item" :key="index"></Item2>
          </div>
        </div>
        <div class="nbsp">
            <NB
            v-for="(item,index) in willingList"
            :key="index"
            :willingList = "item"
            ></NB>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Item2 from "../components/Item2";
import NB from "../components/NB";
import BScroll from "better-scroll";
export default {
  name: "comingPlay",
  components: { Item2, NB },
  created() {          //created数据渲染完成$el没有       $el渲染完成的dom  
    this.getList();
    this.willList();
  },
  mounted() {
    let self = this;
    this.rolling = new BScroll("#comingPlay", {
      scrollX: true,
      scrollY: false,
      click: true
    });
    this.rolling.on("scrollEnd", function(params) {
      let dis = Math.abs(params.x);
      let viewWidth = self.$refs.comingPlay.offsetWidth;
      let wx = self.$refs.comingPlay.children[0].offsetWidth;
      if (dis + viewWidth >= wx) {
        self.getList();
      }
    });

    this.scrollNB = new BScroll(".will", {
      scrollX: false,
      scrollY: true,
      click: true,
     
    });
    this.scrollNB.on("scrollEnd", function(params) {
      let diss = Math.abs(params.y);
      let viewHeight = self.$refs.will.offsetHeight;
      let hx = self.$refs.will.children[0].offsetHeight;
      console.log(diss,viewHeight,hx)
      if (diss + viewHeight >= hx) {
        self.willList();
        // console.log(111)

        // console.log(self)
      }
    });
  },
  updated() {
    this.rolling.refresh();
    this.scrollNB.refresh()
  },
  data() {
    return {
      page: 0,
      movieList: [],
      willingList:[]
    };
  },
  methods: {
    async getList() {
      this.page++;
      let url = "/sexLady/ajax/mostExpected?ci=1&limit=10&offset=0&token=";
      let params = {};
      if (this.page > 1) {
        let limit = (this.page - 1) * 10;
        let offset = limit + 10;
        //   let arr = this.movieIds.slice(start,end);
        url = "/sexLady/ajax/mostExpected?ci=1";
        params = {
          params: {
            limit: limit,
            offset: offset,
            token: ""
          }
        };
      }
      let data = await axios.get(url, params);
      console.log(data);

      this.movieList = this.movieList.concat(data.data.coming);
    },
    async willList() {
      this.page++;
      let url = "/sexLady/ajax/mostExpected?ci=1&limit=10&offset=0&token=";
      let params = {};
      if (this.page > 1) {
        let limit = (this.page - 1) * 10;
        let offset = limit + 10;
        //   let arr = this.movieIds.slice(start,end);
        url = "/sexLady/ajax/mostExpected?ci=1";
        params = {
          params: {
            limit: limit,
            offset: offset,
            token: ""
          }
        };
      }
      let data = await axios.get(url, params);
    //   console.log(data);

      this.willingList = this.willingList.concat(data.data.coming);
      console.log(this.willingList)
    }
  }
};
</script>
<style scoped>
#comingPlay {
  height: 158px;
  margin-top: 25px;
}

.title {
  margin: 10px 13px -15px;
  font-size: 14px;
  color: #333;
}
.xh {
  position: absolute;
  white-space: nowrap;
}
.will{
    height: 100%;
}
.will_wrap{
    position: absolute;
    width: 100%;
    /* height: 100%; */
}
</style>

