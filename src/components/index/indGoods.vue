<template>
  <div class="activitiesGoods" @click="goGoods">
    <img src="../../../static/indexImg/y.png" alt="商品图" />
    <p class="activitiesGoodsName">{{name}}</p>
    <del>￥{{oPrice}}</del>
    <p class="activitiesGoodsPrice">￥{{nPrice}}</p>
    <span class="discount">{{discount}}折</span>
    <span class="activitiesGoodsLog" @click.stop="goCart">抢</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "商品名字",
      oPrice: 500,
      nPrice: 200,
      discount: 7
    };
  },
  methods: {
    goGoods() {
      alert("跳转商品")
    },
    goCart(){
      alert("购物车")
    }

  }
};
</script>
<style  scoped>
.activitiesGoods {
  position: relative;
  padding: 0.05rem;
  box-sizing: border-box;
}
.activitiesGoods > img {
  width: 100%;
  border-radius: 0.05rem;
}
.activitiesGoods > del {
  font-size: 0.12rem;
}
.activitiesGoods > span {
  font-size: 0.16rem;
  font-weight: 600;
}
.discount {
  position: absolute;
  top: 10%;
  left: 10%;
  display: inline-block;
  color: red;
  font-weight: 900;
  font-size: 0.2rem;
}
.activitiesGoodsName{
  font-size: 0.14rem;
}
.activitiesGoodsPrice{
  color: red;
}
.activitiesGoodsLog{
  display: inline-block;
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
  background-color:pink; 
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.3rem;
}
</style>