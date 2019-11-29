<template>
  <div class="activitiesGoods" @click="goGoods">
    <img :src="data.goods.url" alt="商品图" />
    <p class="activitiesGoodsName">{{data.goods.goods_name}}</p>
    <del>￥{{data.goods.price}}</del>
    <p class="activitiesGoodsPrice">￥{{data.new_price}}</p>
    <span class="discount">{{data.discount}}折</span>
    <span class="activitiesGoodsLog" @click.stop="goCart">抢</span>
  </div>
</template>

<script>
export default {
  props:['data'],
  methods: {
    goGoods() {
      this.$router.push({path:'/mall?goods_id='+this.data.goods.goods_id})
    },
    goCart(){
      this.$router.push({path:'/mall?goods_id?='+this.data.goods.goods_id})
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
  height: 1rem;
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