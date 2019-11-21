<template>
	<div><div class="detail-head"><router-link to="/mall"><img src="../../../../static/mallimg/back.png"/></router-link><h3>购物车</h3></div></div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.detail-head{
		width:100%;
		/* background-color:lightblue; */
		display:flex;
		padding-top:0.1rem;
		padding-bottom:0.1rem;
		box-sizing:border-box;
	}
	.detail-head h3{
		margin-top:0.1rem;
		margin-bottom:0.1rem;
		margin-left:35%;
	}
	.detail-head img{
		margin-left:0.1rem;
		margin-top:0.1rem;
		margin-bottom:0.1rem;
		width:0.2rem;
		height:0.2rem;
	}
</style>
