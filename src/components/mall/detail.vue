<template>
  <div>
    <a name="goTop"></a>
    <detailhead></detailhead>
    <div class="detail-show">
      <van-swipe @change="onChange" >
        <van-swipe-item  v-for="(i,n) in info.imgs" :key="n" ><span><img :src='i'/></span></van-swipe-item>
        <div style="position: absolute;top:82%;height:0.4rem;z-index:10;" class="custom-indicator" slot="indicator">
          {{ current+1 }}/4
        </div>
      </van-swipe>
    </div>
    <div class="detail-introd">
      <p  style="font-size:0.24rem;color:red;">￥<span>{{info.price}}</span></p>
      <p style="font-weight:800;font-size:0.18rem">{{info.goods_name}}</p>
    </div>
    <div class="med-size">规格:{{info.standards}}</div>
    <div class="med-size">
      <p>{{info.allow_num}}</p>
    </div>
    <div class="denav"><span style="position:absolute;top:28%;left:35%;width: 0.6rem;background-color: white;">详情</span></div>
    <div class="productmsg"><p>品牌:{{info.product_name}}</p>
      <p>批准文号:{{info.product_num}}</p></div>
    <div class="med-detail">功效及不良反应:{{info.detail}}</div>
    <div class="detailbig"><img :src="info.introduce_img"><img :src="info.url"></div>
    <div style="position:fixed;z-index:999;
		top:6rem;"><a href="#goTop"><span class="iconfont">&#xe620;</span></a></div>

    <div class="detail-foot">
      <div class="collect" @click="showToast">
        <img src="../../../static/mallimg/collection.png"style="height:0.25rem;margin-top:0.06rem;" />
        <p>收藏</p>
      </div>
      <div class="car"><router-link to="/cart">
        <img src="../../../static/mallimg/w-cart.png" /><p>购物车</p>
      </router-link>
      </div>
      <div class="addcart" @click="addCart">{{cartInfo}}</div>
    </div>

  </div>
</template>
<script>
    import { Swipe, SwipeItem ,Notify,Overlay,Popup } from 'vant';
    import detailhead from "./detail/detailhead"
    export default {
        components:{
            detailhead,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Notify.name]:Notify,
            [Popup.name]:Popup,
        },
        data(){
            return{
                current: 0,
                info:"",
                goodsId:"",
                cartInfo:"加入购物车",
                flag:true,
            }
        },
        methods: {
            onChange(index) {
                this.current = index;
            },

            getGoodsId() {//获取药品id
                let a = this.$route.query["id"]
                this.goodsId = a
                console.log(a)
                return a
            },
            getGoodsInfo(n) {
                this.$axios.post(this.HOST + "/goods/goods_detail/", {"goods_id": n})
                    .then(result => {
                        this.info = result.data.data.goods
                        console.log(this.info)
                        console.log(this.info.imgs)
                        console.log(this.info.imgs[0])
                    })
            },
            addCart() {
                let num = localStorage.getItem("u_id")
                if (this.flag) {
                    this.$axios.post(this.HOST + "/cart/addcart/", {"u_id": 10, "goods_id": parseInt(this.goodsId)})
                        .then(result => {
                            console.log(result.data)
                            if (result.data.status == 200) {
                                Notify({
                                    message: '加入购物车成功',
                                    duration: 1000
                                });
                            }
                        })
                    this.cartInfo = "取消购物车"
                } else {
                    this.$axios.post(this.HOST + "/cart/subcart/", {"u_id": 10, "goods_id": parseInt(this.goodsId)})
                        .then(result => {
                            console.log(result.data)
                            if (result.data.status == 200) {
                                Notify({
                                    message: '取消购物车成功',
                                    duration: 1000
                                });
                            }
                        })
                    this.cartInfo = "加入购物车"
                }
                this.flag = !this.flag
            },
            showToast(){
                this.$toast({
                    message: '收藏成功',
                    icon: 'like'
                })
            }
        },
        mounted() {
            let b = this.getGoodsId();
            this.getGoodsInfo(b);
        }

    }
</script>

<style scoped>
  .detail-show img{
    width:90%;
    height:2.3rem;
    margin-left:5%;
  }
  .detail-show span{
    width: 100%;
    display: block;
    margin-top: 0.6rem;
  }
  .custom-indicator{
    padding-left: 85%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2.82rem;
    line-height:3;
  }
  a{
    color:black;
  }



  .detail-introd{
    width:90%;
    padding-top:0.1rem;
    box-sizing:border-box;
    line-height:0.3rem;
    border-top:0.01rem solid #F1F1F1;
    margin:0 auto;
  }
  .med-size{
    width:90%;
    height:0.4rem;
    line-height:0.4rem;
    box-sizing:border-box;
    font-size:0.14rem;
    border-top:0.01rem #f1f1f1 solid;
    margin:0 auto;
  }
  .med-size img{
    margin-left:60%;
  }
  .denav{
    width:50%;
    text-align:center;
    height:0.3rem;
    line-height:0.4rem;
    border-bottom:0.01rem solid #f1f1f1;
    position: relative;
    margin:0 auto;
  }
  .productmsg{
    width:100%;
    padding-left:0.2rem;
    box-sizing:border-box;
    font-size:0.14rem;
    line-height:0.3rem;
    margin-top:0.2rem;
  }
  .med-detail{
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    width: 100%;
    height: 0.4rem;
    overflow: hidden;
    line-height: 0.2rem;
    font-size: 0.12rem;
    box-sizing: border-box;
  }
  .detailbig{
    width:100%;
  }
  .detailbig img{
    width:100%;
    margin-top:0.2rem;
  }
  .detail-foot{
    width:100%;
    height:0.5rem;
    display:flex;
    font-size:0.14rem;
    position:fixed;
    bottom: 0rem;
  }
  .collect,.car{
    width:23%;
    padding-left: 6%;
    box-sizing: border-box;
    background-color: white;
    border-right: 0.01rem solid #F1F1F1;
  }
  .addcart{
    width:55%;
    font-size:0.18rem;
    background-color:#ffc523;
    color:white;
    line-height:0.5rem;
    text-align:center;
    position: absolute;
    right: 0;
  }
  .iconfont{
    font-size: 40px;
    color: lightseagreen;
    position: absolute;
    display: block;
    bottom: -8px;
    left: 3.33rem;
    font-weight: bold;
  }
</style>
