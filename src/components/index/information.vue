
<template>
  <div class="indexInformation">
    <div class="InformationTop">
      <span class="InformationTopStyle"></span>
      <span class="InformationTopText">资讯</span>
      <span class="InformationTopChange iconfont" @click="change">&#xe60a;</span>
    </div>
    <div class="InformationMain" @click="changeDiv" ref="text">
      <h1>{{information.titile}}</h1>
      <p class="InformationMainText">{{information.content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["information"],
  data() {
    return {
      flage: false
    };
  },
  methods: {
    change() {
      this.$emit("refresh");
    },
    changeDiv() {
      let div = document.getElementsByClassName("InformationMainText")[0];
      if (this.flage) {
        div.style.height = "0.7rem";
        div.style.overflow = "hidden";
        div.style.textOverflow = "ellipsis";
        div.style.display = "-webkit-box";
        div.style.WebkitLineClamp = "3";
        div.style.WebkitBoxOrient = "vertical";
      } else {
        div.style.height = "auto";
        div.style.overflow = "visible";
        div.style.textOverflow = "";
        div.style.display = "block";
        div.style.WebkitLineClamp = "3";
        div.style.WebkitBoxOrient = "vertical";
      }
      this.flage = !this.flage;
    }
  }
};
</script>
<style  scoped>
.indexInformation {
  margin: 0.05rem 0;
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: white;
  box-shadow: 0 0 0.01rem gray;
}
.InformationTop {
  text-align: center;
  line-height: 0.3rem;
  position: relative;
}
.InformationTopText {
  background-color: white;
  display: inline-block;
  padding: 0 0.1rem;
  color: orange;
  position: relative;
  z-index: 2;
}
.InformationTopStyle {
  display: inline-block;
  border: 0.01rem solid orange;
  width: 50%;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}
.InformationTopChange {
  position: absolute;
  right: 0.1rem;
  color: red;
}
.InformationMain > h1 {
  font-size: 0.16rem;
  font-weight: 600;
  padding: 0 0 0.05rem;
}
.InformationMain > p {
  font-size: 0.14rem;
  font-weight: 100;
  padding: 0 0 0.05rem;
  line-height: 0.25rem;
  height: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 0.3rem;
}
</style>