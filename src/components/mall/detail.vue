<template>
	<div>
		 <detailhead></detailhead>
		 <detailswiper></detailswiper>
	    <div class="detail-introd">
			<!-- 价格 -->
			<p>￥<span style="font-size:0.24rem;">15</span></p>
			<!-- 药品名 -->
			<p style="font-weight:900;"><!-- 药名 -->皮肤用药 皮炎湿疹 仁和湿毒清片 </p>
			<!-- 功效 -->
			<p style="font-size:0.14rem;">功效化湿解毒皮肤瘙痒</p>
		</div>
		<div class="med-size">规格 请选择规格<img src="../../../static/mallimg/next.png"/></div>
		<div class="med-size">配送 支持物流配送</div>
		<!-- <div class="mpharmacyname">药房名<button>进入店铺</button></div> -->
		<div class="detailbig"><!-- 详情展示 --><img src="../../../static/mallimg/detailbig.png"/></div>
	    <div class="detail-foot">
	    	<div class="detail-botoom">
	    	<ul>
	    		<li><img src="../../../static/mallimg/kefu.png"/><p>客服</p></li>
	    		<li><img src="../../../static/mallimg/collection.png"/><p>收藏</p></li>
	    		<li><router-link to="/cart"><img src="../../../static/mallimg/w-cart.png"/><p>购物车</p></router-link></li>
	    	</ul>
	    	</div>
	    	<div class="addcart">加入购物车</div>
	    	<div class="gobuy">立即购买</div>
	    </div>
		
	</div>
</template>
<script>
	
	import detailhead from "./detail/detailhead"
	import detailswiper from "./detail/detailswiper"
	 export default {
	   components:{
		   detailhead,
		   detailswiper

	   }
	}
</script>

<style scoped>


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
	bottom:0;
}
.detail-foot li{
	display:inline-block;
	width:30%;
	text-align:center;
	padding-top:0.05rem;
	box-sizing:border-box;
}
.addcart{
	width:30%;
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
	width:40%;
	background-color:white;
}


</style>
