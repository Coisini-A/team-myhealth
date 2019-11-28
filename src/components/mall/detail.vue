<template>
	<div>
		 <detailhead></detailhead>
		<div class="detail-show">
		  <van-swipe @change="onChange" class="mall-swiper">
		  <van-swipe-item><span><img :src="info.url"></span></van-swipe-item>
		  <van-swipe-item><span><img :src="info.url"></span></van-swipe-item>
		  <van-swipe-item><span><img :src="info.url"></span></van-swipe-item>
	      <van-swipe-item><span><img :src="info.url"></span></van-swipe-item>
		  <div class="custom-indicator" slot="indicator" ><div>
		   {{ current + 1 }}/4
		  </div>
		 </div>
		</van-swipe>
		</div>
	    <div class="detail-introd">
			<p  style="font-size:0.24rem;color:red;">￥<span>{{info.price}}</span></p>
			<p style="font-weight:800;font-size:0.18rem">{{info.goods_name}}</p>
			<p style="font-size:0.14rem;">{{info.detial}}</p>
		</div>
		<div class="med-size">{{info.standards}}</div>
		<!-- <img src="../../../static/mallimg/next.png"/> -->
		<div class="med-size">配送 支持物流配送</div>
		<div class="detailbig"><img :src="info.introduce_img"></div>
		<!-- <img src="../../../static/mallimg/detailbig.png"/> -->
	    <div class="detail-foot">
	    	<div class="detail-botoom">
	    	<ul>
	    		<li>
					<router-link to="/cart">
					<img src="../../../static/mallimg/kefu.png" style="width:0.23rem;"/><p>客服</p>
					</router-link>
				</li>
	    		<li>
					<div  @click="finish" >
					<img src="../../../static/mallimg/collection.png"style="width:0.23rem;" /><p>收藏</p>
          </div>
				</li>
	    		<li>
					<router-link to="/cart">
					<img src="../../../static/mallimg/w-cart.png" style="height:0.27rem;"/><p>购物车</p>
					</router-link>
				</li>
	    	</ul>
	    	</div>
	    	<div class="addcart" @click="addCart">{{cartInfo}}</div>
<!--	    	<div class="gobuy">立即购买</div>-->
	    </div>

	</div>
</template>
<script>
import { Swipe, SwipeItem ,Notify,Overlay } from 'vant';
	import detailhead from "./detail/detailhead"
	// import detailswiper from "./detail/detailswiper"
	 export default {
	   components:{
		   detailhead,
		   // detailswiper
      [Swipe.name]:Swipe,
	    [SwipeItem.name]:SwipeItem,
         [Notify.name]:Notify,
             [Overlay.name]: Overlay
	   },
     data(){
	     return{
		 current: 0,
          info:"",
          goodsId:"",
          cartInfo:"加入购物车",
          flag:true
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
         finish(){

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

	}
.custom-indicator{
/* background-color: pink; */
padding-left: 85%;
-webkit-box-sizing: border-box;
box-sizing: border-box;
height: 2.82rem;
line-height:3;
border-bottom:0.01rem solid #F1F1F1;
}

a{
	color:black;
}
.detail-introd{
	width:100%;
	/* background-color:lightblue; */
	padding-top:0.1rem;
	padding-left:0.1rem;
	box-sizing:border-box;
	line-height:0.3rem;
}
.med-size{
	width:100%;
	height:0.4rem;
	/* background-color:lightgray; */
	line-height:0.4rem;
	padding-left:0.1rem;
	box-sizing:border-box;
	font-size:0.14rem;
	border-top:0.01rem #f1f1f1 solid;
}
.med-size img{
	margin-left:60%;
}
.mpharmacyname{
	width:100%;
	height:0.5rem;
	/* background-color:skyblue; */
}
.detailbig{
	width:100%;
	/* background-color:gray; */
}
.detailbig img{
	width:100%;
}
.detail-foot{
	width:100%;
	height:0.5rem;
	display:flex;
	font-size:0.14rem;
	/* background-color:lightblue; */
	position:fixed;
  bottom: 0.6rem;
}
.detail-foot li{
	display:inline-block;
	width:30%;
	text-align:center;
	/* padding-top:0.05rem; */
	box-sizing:border-box;
}
.addcart{
	width:45%;
	font-size:0.16rem;
	background-color:#ffc523;
	color:white;
	line-height:0.5rem;
	text-align:center;
}
.gobuy{
	width:30%;
	font-size:0.16rem;
	background-color:#ff6902;
	color:white;
	line-height:0.5rem;
	text-align:center;
}
.detail-botoom{
	width:55%;
	background-color:white;
}

</style>

