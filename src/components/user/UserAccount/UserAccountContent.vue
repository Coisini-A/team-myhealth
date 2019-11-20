<template>
  <van-tabs v-model="active">
    <van-tab title="余额">
        <div class="balance-one">
          余额
        </div>
    </van-tab>
    <van-tab title="充值">
      <div class="balance-one">
        充值
      </div>
    </van-tab>
    <van-tab title="银行卡">
      <div class="balance-one">
        银行卡
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
    import { Tab, Tabs } from 'vant';
    export default {
        name: "UserAccountContent",
        components:{
            [Tab.name]:Tab,
            [Tabs.name]:Tabs
        },
        data(){
            return{
                active: 0
            }
        }
    }
</script>

<style scoped>
  .balance-one{
    width:80%;
    height:1rem;
    margin:0px auto;
    background: cadetblue;
    text-align:center;
    line-height:1rem;
  }
</style>
