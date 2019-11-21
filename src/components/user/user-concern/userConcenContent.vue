<template>

    <van-tabs v-model="active">
  <van-tab title="关注商品">
      <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="../../../../static/user-images/Default head.jpg"
      :key="key" v-for="(q,key) in 5"
      >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">购买</van-button>
        <van-button size="mini">删除</van-button>
      </div>
</van-card>

      </van-tab>

      <van-tab title="关注用户">


        <div class="user-right" :key="i" v-for="(o,i) in 20">
          <div>
            <div class="photo"><img src="../../../../static/user-images/Default head.jpg" alt=""></div>
            <p>关注昵称</p>
          </div>
          <van-switch  v-model="checked[i]" size="25px" ref="m"/>
        </div>
      </van-tab>
</van-tabs>
</template>
<script>
import { Tab, Tabs,Card,Tag,Button,Switch } from 'vant';
export default {
    name:"userContentContent",
    data() {
    return {
      active: 2,
      checked:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    };
  },
    components:{
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        [Card.name]:Card,
        [Tag.name]:Tag,
        [Button.name]:Button,
        [Switch.name]:Switch
    },

}
</script>
<style scoped>
.van-switch{
  margin-top: 15px;
}
.user-right{
  display: flex;
  justify-content: space-around;
  line-height: 50px;
  margin-top: 10px;
}
.photo{
  width: 50px;
  height: 50px;
}
.user-right>div>div>img{
  width: 100%;
  border-radius: 50%;
}
.user-right>div{
  display: flex;
}
</style>
