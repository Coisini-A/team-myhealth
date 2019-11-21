<template>
	<div>
		<carthead></carthead>
		<div class="cart-shop">
			<div class="cart-shopname"><input type="checkbox" style="margin-left:0.15rem;margin-top:0.1rem"><h4 style="margin-left:0.15rem;margin-top:0.1rem">药房名</h4></div>
			<div class="cart-shopitem">
				<div class="cart-check"><input type="checkbox" style="margin-top:0.4rem"></div>
				<div class="cartimg">图片</div>
				<div class="cartother"><br/><p>商品名</p><br/><P>规格：XXXXXXX</p><br/><p>￥价格<span class="cartnumbox">-<span class="cartnum">1</span>+</span></p></div>
			</div>
		</div>
		<div class="cart-foot">
			<div class="amount"><input type="checkbox"style="margin-left:0.15rem;margin-top:0.15rem">合计：￥<span>0</span></div>
		    <div class="gomath">去结算</div>
		</div>
	</div>
</template>

<script>
	import carthead from "./cart/carthead"
	export default {
	   components:{
		   carthead,
	   
	   }
	}
</script>

<style scoped>
	input{
	width:0.2rem;
	height:0.2rem;
	display:inline-block;
	border-radius:50%;      
	}
	.cartnumbox{
		margin-left:40%;
	}
	.cartnum{
		
	}
	.cart-head{
		width:100%;
		background-color: lightgray;
		text-align: center;
		height:0.3rem;
	}
	.cart-shop{
		width:100%;
		/* background-color: gray; */
	}
	.cart-shopname{
		width:100%;
		height:0.4rem;
		background-color: lightblue;
		display: flex;
	}
	.cart-shopitem{
		width:100%;
		height:1.3rem;
		background-color: lightgray;
		display: flex;
		padding:0.1rem;
		box-sizing:border-box;
	}
	.cart-check{
		width:8%;
		background-color:skyblue;
	}
	.cartimg{
		width:26%;
		background-color:skyblue;
		margin-left:0.1rem;
		margin-right:0.1rem;
	}
	.cartimg img{
		width:100%;
		height:100%;
	}
	.cartother{
		width:60%;
		background-color:skyblue;
		padding-left:0.1rem;
		box-sizing:border-box;
	}
	.cart-foot{
		width:100%;
		height:0.5rem;
		display:flex;
		background-color:pink;
		position:fixed;
		bottom:0;
	}
	.amount{
		width:40%;
		background-color:lightblue;
	}
	.gomath{
		width:30%;
		margin-left:30%;
		text-align:center;
		line-height:0.5rem;
		background-color:lightblue;
	}
</style>

