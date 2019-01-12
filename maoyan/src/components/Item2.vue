<template>
  <div class="sex">
    <img class="zi" :src="movieList.img | im">
    <div class="title">{{movieList.nm}}</div>
    <div class="wish">{{movieList.wish}}"人想看"</div>
    <div class="zz">{{movieList.comingTitle | month}}</div>
  </div>
 
</template>
<script>
export default {
  name: "Item2",
  props: ["movieList"],
  filters: {
    im: function(value) {
      value = value.replace(/w\.h/, "128.180").replace(/http/, "https");
      return value;
    },
    month: function(value) {
      value = value.split(" ")[0];
      return value;
    }
  }
};
</script>

<style scoped>
.zi {
  height: 115px;
}
.wish {
  position: absolute;
  top: 105px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}

.sex {
  width: 85px;
  height: 115px;
  display: inline-block;
  margin: 5px 2px 5px 21px;
}
.title {
  margin: 0 0 3px;
  font-size: 13px;
  color: #222;
}
.zz {
  margin: 0;
  font-size: 12px;
  color: #999;
}
</style>
