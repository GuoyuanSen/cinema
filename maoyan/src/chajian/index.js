import Top from "./component/top"
const go = {
  topFlag: false, //第一进入 页面中没有这个 dom
  vm: null,
  install(Vue) {
    let self = this;
    Vue.mixin({
      mounted() {
        // console.log(Vue);
        //这就意味着 所有之后的上拉加载都不能 scroll = ''
        // window.onscroll == null

        window.addEventListener('scroll', function (ev) {
          //抓取 文档超出的高度
          let height = document.documentElement.scrollTop;
          console.log(height);
          if (height >= 100) {
            if (self.topFlag) { //页面中已经有这个dom
              self.vm.$el.style.display = 'block';
              return;
            }
            //给页面中添加一个 dom
            let dom = document.createElement('div');
            //如何将一个。vue文件变成一个dom extend
            1
            let top = Vue.extend(Top);
            self.vm = new top().$mount(dom);
            // console.log(top.$el);}
            document.body.appendChild(self.vm.$el); //$el就是我们的top --dom

            self.topFlag = true;
          } else {
            if (!self.topFlag) return;
            self.vm.$el.style.display = 'none';
          }
        })
      }
    })
   
  }
}

export default go
