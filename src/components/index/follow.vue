<template>
  <div class="indexFollow">
    <h1 class="indexFollowTitle">
      <i class="iconfont My">&#xe67b;</i>My
      <i class="iconfont My">&#xe67b;</i>
      <span class="floMuch iconfont" @click="goMy">更多&#xe63f;</span>
    </h1>
    <div class="indexFollowTop">
      <div class="indexFollowTopLeft" @click="go()">
        <img src="../../../static/indexImg/d.png"/>
      </div>
      <div class="indexFollowRight">
        <div @click="go()">
          <img src="../../../static/indexImg/y.png" />
        </div>
        <div @click="go()">
          <img src="../../../static/indexImg/y.png" />
        </div>
      </div>
    </div>
    <div class="indexFollowBottom" @click="goForum">
      <p>【{{"话题类别"}}】{{'不想敲代码怎么办'}}</p>
      <div class="indexFollowBottomMain">
        <img class="indexFollowBottomImg" src="../../../static/indexImg/d.png" alt="头像" />
        <span>{{'老王'}}</span>
        <span class="indAddress">{{'千锋教育'}}</span>
        <span class="indGood">点赞{{20}}</span>
        <span class="indReader">阅读量{{10}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    goMy() {
      alert("条转");
    },
    goForum(){
      alert("tiaozhuang");
    },
    go(){
      alert("tiao");
    }
  }
};
</script>
<style  scoped>
.indexFollow {
  margin: 0.05rem 0;
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: white;
  box-shadow: 0 0 0.01rem gray;
}
.indexFollowTitle {
  text-align: center;
  position: relative;
  padding: 0 0 0.05rem;
}
.My {
  color: red;
}
.floMuch {
  position: absolute;
  display: inline-block;
  right: 0.2rem;
  font-size: 0.12rem;
}
.indexFollowTop {
  display: flex;
}
.indexFollowTopLeft {
  width: 50%;
  height: 2rem;
  padding: 0.05rem;
  border: 0.01rem solid gainsboro;
}
.indexFollowTopLeft > img {
  height: 100%;
  width: 100%;
}
.indexFollowRight {
  width: 50%;
  border: 0.01rem solid gainsboro;
  border-left: none;
  border-bottom: none;
}
.indexFollowRight > div {
  border-bottom: 0.01rem solid gainsboro;
  padding: 0.024rem;
  height: 1rem;
}
.indexFollowRight > div > img {
  width: 100%;
  height: 100%;
}
.indexFollowBottom {
  padding: 0.05rem;
  border: 0.01rem solid gainsboro;
  border-top: none;
}
.indexFollowBottomMain {
  height: 0.3rem;
  line-height: 0.3rem;
  position: relative;
  padding-left: 0.4rem;
  margin: 0.06rem 0;
  font-size: 0.14rem;
}
.indexFollowBottomImg {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  position: absolute;
  left: 0;
}
.indGood {
  color: gray;
  float: right;
  padding-right: 0.1rem;
}
.indReader {
  color: gray;
  float: right;
  padding-right: 0.1rem;
}
.indAddress {
  color: gray;
}
</style>