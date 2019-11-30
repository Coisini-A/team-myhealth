<template>
  <div class="indexFollow">
    <h1 class="indexFollowTitle">
      <i class="iconfont My"></i>My
      <i class="iconfont My"></i>
      <span class="floMuch iconfont" @click="goMy">更多<span class="small">&#xe63f;</span></span>
    </h1>
    <div class="indexFollowTop">
      <div class="indexFollowTopLeft" @click="go('D',followD?followD.d.d_id:'null')">
        <img :src="followD?followD.d.d_head:'../../../static/indexImg/d.png'"/>
      </div>
      <div class="indexFollowRight">
        <div @click="go('G',followG[0]?followG[0].goods.goods_id:'null')">
          <img :src="followG[0]?followG[0].goods.url:'../../../static/indexImg/y.png'" />
        </div>
        <div @click="go('G',followG[1]?followG[1].goods.goods_id:'null')">
          <img :src="followG[1]?followG[1].goods.url:'../../../static/indexImg/y.png'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['followD','followG'],
  components: {},
  data() {
    return {};
  },
  methods: {
    goMy() {
      this.$router.push({path:'user/UserConen'})//关注页
    },
    go(type,id){
      if(type=='D'){
        if(id!="null"){
          this.$router.push({path:'/inquiry?id'+id})
        }else(
          alert("还没有关注")
        )
      }else if(type=='G'){
        if(id!="null"){
          this.$router.push({path:'/detail?id='+id})
        }else{
          alert("还没有关注")
        }
      }
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
  width: 100%;
  height: 30px;
  line-height: 30px;

}
.My {
  color: red;
}
.floMuch {
  position: absolute;
  /* display: inline-block; */
  font-size: 16px;
  top: 0;
  right: 10px;
  /* width: 84px; */
  display: flex;
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
  .small{
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
    color: green;
    /* margin-top: 23px; */
    display: block;
  }
</style>
