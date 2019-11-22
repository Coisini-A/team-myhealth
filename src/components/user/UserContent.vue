<template>
    <div class="box">
        <div :key="key" v-for="(u,key) in list" @click="unpate(key)">
            <div>
                <span><img :src="u.left" alt=""></span>
                <p>{{u.name}}</p>
            </div>
            <span><img :src="u.right" alt=""></span>
        </div>
    </div>
</template>
<script>
export default {
    name:"userContent",
    methods:{
        unpate(key){
            if(key==0){
                this.$router.push("/UserInFormation")
            }else if(key==1){
                this.$router.push("/userorder")
            }else if(key==2){
                this.$router.push("/UserCardPackage")
            }else if(key==3){
                this.$router.push("/UserConen")
            }else if(key==4){
                this.$router.push("/UserAccount")
            }else if(key==5){
                this.$router.push("/usernews")
            }
        }
    },
    data(){
        return{
            list:[
                {
                    name:"用户信息",
                    left:"../../../static/user-images/message.png",
                    right:"../../../static/user-images/greater.png"
                },
                {
                    name:"用户订单",
                    left:"../../../static/user-images/indent.png",
                    right:"../../../static/user-images/greater.png"
                },
                {
                    name:"用户卡包",
                    left:"../../../static/user-images/card-bag.png",
                    right:"../../../static/user-images/greater.png"
                },
                {
                    name:"用户关注",
                    left:"../../../static/user-images/attention.png",
                    right:"../../../static/user-images/greater.png"
                },
                {
                    name:"用户账单",
                    left:"../../../static/user-images/bill.png",
                    right:"../../../static/user-images/greater.png"
                },
                {
                    name:"用户消息",
                    left:"../../../static/user-images/news.png",
                    right:"../../../static/user-images/greater.png"
                }
            ]
        }
    }
}
</script>
<style lang="">
    .box>div{
        width:100%;
        border-bottom: 1px solid;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .box>div span{
      width: 35px;
      height: 40px;
      margin: 5px 5px;
    }
    .box>div>div{
        display: flex;
        line-height: 60px;
    }
    .box p{
      margin-left:0.1rem;
    }
    .box img{
        width: 80%;
        margin-top: 0.1rem
    }
</style>
