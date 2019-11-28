<template>
<div >
    <div class="user-box" :key="key" v-for="(i,key) in 6">
        <div>
            <div>
                <h5>欧诺个话</h5>
                <p class="order">订单号kkjhshgayw26dg276</p>
            </div>
            <div>
                <p>已完成</p>
            </div>
        </div>
        <div>
            <div class="photo">
                <img src="../../../../static/user-images/Default head.jpg" alt="">
            </div>
            <div>
                <p>五千多群多气温气温</p>
                <p>嗯嗯嗯</p>
            </div>
            <div>
                <h4>价格</h4>
            </div>
        </div>
        <div>
            <p>共<span>1</span>件商品</p><h3>订单金额￥<span>234.56</span></h3>
        </div>
        <div>
            评价
        </div>
    </div>
</div>

</template>

<script>
export default {
    name:"userOrderContent",
    data(){
        return{
            list:[
                {

                }
            ]
        }
    }
}
</script>

<style scoped>
.user-box{
    border: 1px solid gray;
    width: 90%;
    margin: 20px auto;
    background: white;
    border-radius: 10px;
  background-image: url("../../../../static/user-images/back.jpg");
}
.user-box>div{
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    padding: 10px;
}
.order{
    font-size: 14px;
    color: gray;
}
.photo{
    width: 50px;
    height: 50px;
}
.photo>img{
    width: 100%;
}
.user-box>:nth-child(4){
    border: 1px solid;
    width: 90%;
    height: 30px;
    line-height: 35px;
    justify-content: center;
    border-radius: 15px;
    margin: 10px auto;
}
</style>
