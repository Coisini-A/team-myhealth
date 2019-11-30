<template>
  <div class="box">
    <router-link :key="key" v-for="(u,key) in list" :to="{name:u.path}" tag="div">
      <div>
        <span>
          <img :src="u.left" alt />
        </span>
        <p>{{u.name}}</p>
      </div>
      <span>
        <img :src="u.right" alt />
      </span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "userContent",
  data() {
    return {
      list: [
        {
          name: "用户信息",
          left: "../../../static/user-images/message.png",
          right: "../../../static/user-images/greater.png",
          path: "UserInFormation"
        },
        {
          name: "用户订单",
          left: "../../../static/user-images/indent.png",
          right: "../../../static/user-images/greater.png",
          path: "UserOrder"
        },
        {
          name: "用户卡包",
          left: "../../../static/user-images/card-bag.png",
          right: "../../../static/user-images/greater.png",
          path: "UserCardPackage"
        },
        {
          name: "用户关注",
          left: "../../../static/user-images/attention.png",
          right: "../../../static/user-images/greater.png",
          path: "UserConen"
        },
        {
          name: "用户账单",
          left: "../../../static/user-images/bill.png",
          right: "../../../static/user-images/greater.png",
          path: "UserAccount"
        },
        {
          name: "用户消息",
          left: "../../../static/user-images/news.png",
          right: "../../../static/user-images/greater.png",
          path: "UserNews"
        }
      ]
    };
  }
};
</script>
<style lang="less" scopde>
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
  .box{
    background-image: url("../../../static/user-images/back.jpg");

  }
</style>
