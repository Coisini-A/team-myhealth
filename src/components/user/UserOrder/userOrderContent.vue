<template>
<div >
    <div class="user-box" :key="key" v-for="(i,key) in list">
        <div>
            <div>
                <h5>{{i.goods.product_name}}</h5>
                <p class="order">订单号kkjhshgayw26dg276</p>
            </div>
            <div>
                <p>已完成</p>
            </div>
        </div>
        <div>
            <div class="photo">
                <img :src="i.goods.url" alt="">
            </div>
            <div>
                <p>{{i.goods.goods_name}}</p>
                <p>{{i.goods.standards}}</p>
            </div>
            <div>
                <h4> <span>￥</span> {{i.goods.price}} </h4>
            </div>
        </div>
        <div>
            <p>共<span>{{i.goods_num}}</span>件商品</p><h3>订单金额￥<span>{{i.goods.price*i.goods_num}}</span></h3>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name:"userOrderContent",
    data(){
        return{
            list:[]
        }
    },
    methods:{
        lalala(){
            var userid=localStorage.getItem("user_id");
            this.$axios.post('http://122.112.231.109:5000/cart/all_order/',{ u_id:userid})
                .then(result=>{
                    // console.log(result.data.data)
                    var arr=result.data.data
                    for( var index in arr){
                        // console.log(arr[index])
                        this.list=arr[index].order_detail
                        return this.list
                    }
                    // console.log(this.list)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    },
    mounted() {
        this.lalala()
    }
}
</script>

<style scoped>
.user-box{
    border: 1px solid gray;
    width: 99%;
    margin: 22px auto;
    background: white;
    border-radius: 30px;
}
.user-box>div{
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 10px;
}
.order{
    font-size: 14px;
    color: gray;
}
.photo{
        width: 57px;
    height: 40px;
    margin-left: 20px;
}
.photo>img{
    width: 100%;
}

</style>
