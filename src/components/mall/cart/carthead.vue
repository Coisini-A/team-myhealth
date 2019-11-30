<template>
  <div>
    <div class="detail-head" style="display: flex;background-color: #00ba73" >
      <span class="iconfont"   @click="gobeforepage">&#xe612;</span>
      <h3>购物车</h3>
    </div>
  </div>

<!--  <div class="header">-->
<!--    <router-link to="/index">-->
<!--      <span class="iconfont"   @click="gobeforepage">&#xe612;</span>-->
<!--    </router-link>-->
<!--    <p style="color: white">商品详情</p>-->
<!--  </div>-->
</template>

<script>
    export default{

        methods:{
            //返回上一页
            gobeforepage(){
                this.$router.go(-1)
            }
        }
    }
</script>


<style scoped>
	/*.detail-head{*/
  /*  width: 100%;*/
  /*  !* background-color: lightblue; *!*/
  /*  display: -webkit-box;*/
  /*  display: -ms-flexbox;*/
  /*  display: flex;*/
  /*  !*background-image: url("../../../../static/mallimg/tou.jpg");*!*/
  /*  !* padding-top: 0.1rem; *!*/
  /*  !* padding-bottom: 0.1rem; *!*/
  /*  -webkit-box-sizing: border-box;*/
  /*  box-sizing: border-box;*/
  /*  height: 50px;*/
  /*  text-align: center;*/
  /*  line-height: 50px;*/
	/*}*/
	/*.detail-head h3{*/
  /*   margin-left:35%;*/
  /* }*/
	/*.detail-head img{*/

	/*	margin-left:0.1rem;*/
	/*	margin-top:0.1rem;*/
	/*	margin-bottom:0.1rem;*/
	/*	width:0.2rem;*/
	/*	height:0.2rem;*/
	/*}*/
.iconfont{
  width: 15%;
  height: 0.5rem;
  display: block;
  line-height: 0.5rem;
  /* padding-left: 20px; */
  text-align: center;
  color: white;
  font-size: 0.24rem;
}
  h3{
    text-align: center;
    width: 75%;
    line-height: 0.5rem;
    font-size: 0.22rem;
    color: white;
  }
</style>
