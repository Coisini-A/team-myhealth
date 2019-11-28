<template>
	<div>
    <div class="detail-head"><router-link to="/mall">
    <img src="../../../../static/mallimg/back.png"/></router-link><h3>购物车</h3></div></div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	.detail-head{
    width: 100%;
    /* background-color: lightblue; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*background-image: url("../../../../static/mallimg/tou.jpg");*/
    /* padding-top: 0.1rem; */
    /* padding-bottom: 0.1rem; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 50px;
    text-align: center;
    line-height: 50px;
	}
	.detail-head h3{
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
