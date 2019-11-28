<template>
	<div style="background-color: rgb(245, 245, 245);height: 610px;" class="bei">
		<carthead style="background-color:#FF7204;
    margin-bottom: 10px;"></carthead>
		<div class="cart-shop"  v-for="(i,index) in goodsList" :key="index">
<!--			<div class="cart-shopname"><input type="checkbox" class="tui-checkbox" :checked="isCheckedAll" @click="changcheckedAll" style="margin-left:0.1rem;margin-top:0.1rem">-->
<!--        <h4 style="margin-left:0.15rem;margin-top:0.1rem">药房名</h4>-->
<!--      </div>-->
<!--      <hr>-->
      <div class="cart-shopitem">
				<div class="cart-check"><input class="tui-checkbox" type="checkbox" v-model="i.isChecked" style="margin-top:0.4rem"></div>
				<div class="cartimg"><img :src="i.img" alt=""></div>
				<div class="cartother"><br/>
          <div  style="display: flex">
            <p style="width: 80%">{{i.goods_name}}</p>
            <span style="width: 20%;
    height: 20px;
    color: #FF7204;
    text-align: center;
    line-height: 20px;
    border-radius: 5px;" @click="delGood(i.id)">删除</span>
          </div>

          <br/><P>{{i.standards}}</p><br/>
         <div style="width:100%;display: flex">
           <p style="width: 30%;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color: gray;   ">￥:{{i.price}}</p>
           <div class="aaa">
             <span class="cartnumbox" @click="minus(i.id)">-</span>

             <span class="cartnum">{{i.count}}</span>

             <span @click="add()">+</span></div>
         </div>
         </div>


      </div>
      <p class="xiaoji">小计:{{(i.price*i.count).toFixed(1)}}</p>
		</div>

		<div class="cart-foot" v-for="i in goodsList" style="display: flex">
			<div class="amount"  style="width: 33%;line-height: 0.6rem;">
        <input class="tui-checkbox" type="checkbox" :checked="isCheckedAll" @click="changcheckedAll" style="margin-top: 18px;margin-left: 10px;">全选</div>
<!--        <div style="width: 40%;line-height: 0.5rem;text-align: right;">合计：￥<span>{{i.price*i.count}}</span></div>-->
      <div style="width: 33%;line-height: 0.6rem;text-align: right;">合计:￥<span >{{totalPrice}}</span></div>
      <div class="gomath">去结算</div>
		</div>
	</div>
</template>

<script>
	import carthead from "./cart/carthead"
	export default {
	   components:{
		   carthead,

     },
      data(){
          return{
              goodsList:[
                  {
                      "yaofang":"药房名",
                      "img":"../../static/mallimg/1.jpg",
                      "id":Math.random(),
                      "goods_name":"牛黄解毒片",
                      "price":4.2,
                      "standards":"0.27g*10片*3板/盒",
                      "isChecked":"",
                      "count":1,
                      "total":0
                  },

              ],
              totalPrice:0
          }

      },
      computed:{
	       // sumPrice(){
	       //     var price = 0;
	       //     this.goodsList.forEach(item =>{
	       //         if (item.isChecked){
	       //             price = price + item.price * item.count
         //         }
         //     })
         //     return price
         // },
          isCheckedAll(){
	           return this.goodsList.every(item=>item.isChecked)
          }
      },
methods:{
	       add(){
            this.goodsList.forEach((item,index)=>{
                item.count++;
                item.total= (item.count*item.price).toFixed(1)
            })
             let a= 0
             this.goodsList.forEach((item,index)=>{
                 a+= item.total
             })
             this.totalPrice=parseFloat(a).toFixed(1)

         },
    minus(){
        this.goodsList.forEach((item,index)=>{
            item.count--
            item.total=(item.count*item.price).toFixed(1)
        })
        let a=0;
        this.goodsList.forEach((item,index)=>{
            a+=item.total
        })
        this.totalPrice=parseFloat(a).toFixed(1)
    },
    changcheckedAll(){
        var flag = !this.isCheckedAll;
        this.goodsList.forEach(item=>item.isChecked = flag)
    },
    delGood(id){
        this.goodsList=  this.goodsList.filter(item =>item.id == id?false:true)
    }
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
	.cartnum{

	}
	.cart-head{
		width:100%;
		background-color: lightgray;
		text-align: center;
		height:0.3rem;
	}
  .amount{
    width: 33%;
    line-height: 0.6rem;
  }
	.cart-shop{
    width: 95%;
    border-radius: 10px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid gray;
	}
	.cart-shopname{
    width: 100%;
    height: 30px;
    display: flex;
	}
	.cart-shopitem{
    width: 95%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 10px;
    border-bottom: 1px solid darkgray;
    background-color: white;
    margin: 0 auto;
	}
	.cart-check{
		width:8%;
	}
	.cartimg{
		width:26%;

		margin-left:0.1rem;
		margin-right:0.1rem;
	}
	.cartimg img{
		width:100%;
		height:100%;
	}
	.cartother{
		width:60%;

		padding-left:0.1rem;
		box-sizing:border-box;
	}
	.cart-foot{
    width: 100%;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: white;
    position: fixed;
    bottom: 0px;
    z-index: 99;
	}
	.amount{
		width:40%;

	}
	.gomath{
    width: 25%;
    height: 80%;
    background-color: #FF7204;
    border-radius: 5%;
    line-height: 50px;
    margin-top: 6px;
    margin-left: 25px;
    text-align: center;

	}
  .aaa{
    width: 40%;
    height: 30px;
    /* background-color: goldenrod; */
    line-height: 30px;
    border: 1px solid gainsboro;
    text-align: center;
    /* font-size: 16px; */
    margin-left: 25%;
    display: flex;
    color: gray;
  }
  .aaa span{
    width: 33%;

    text-align: center;
  }
  .tui-checkbox:checked {
    background: green;
  }
  .tui-checkbox {
    width:24px;
    height:24px;
    background-color:#ffffff;
    border:solid 1px #dddddd;
    -webkit-border-radius:50%;
    border-radius:50%;
    font-size:0.8rem;
    margin:0;
    padding:0;
    position:relative;
    display:inline-block;
    vertical-align:top;
    cursor:default;
    -webkit-appearance:none;
    -webkit-user-select:none;
    user-select:none;
    -webkit-transition:background-color ease 0.1s;
    transition:background-color ease 0.1s;
  }
  .tui-checkbox:checked::after {
    content:'';
    top:5px;
    left:5px;
    position:absolute;
    background:transparent;
    border:#fff solid 2px;
    border-top:none;
    border-right:none;
    height:6px;
    width:10px;
    -moz-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
    transform:rotate(-45deg);
  }
.xiaoji{
  width: 100%;
  height: 0.3rem;
  /* background-color: red; */
  line-height: 0.3rem;
  text-align: right;
  margin-left: -0.24rem;
}
  /*.bei{*/
  /*  background-image: url("../../../static/mallimg/3.jpg");*/
  /*}*/
</style>

