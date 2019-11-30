<template>
  <div class="indexActivities">
    <div class="indexActivitiesTop">
      <h1 class="indexActivitiesTitle">限时快抢</h1>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>:
          <span class="item">{{ timeData.minutes }}</span>:
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div @click="goShop">
        <p class="iconfont">&#xe636;</p>
      </div>
    </div>
    <div class="indexActivitiesMain">
      <ActivitiesGoods v-for="(i, index) in ActivitiesGoods" :key="index" :data='i'></ActivitiesGoods>
    </div>
  </div>
</template>
<script>
import { CountDown } from "vant";
import ActivitiesGoods from "./indGoods";

export default {
  props: ['ActivitiesGoods','time'],
  components: {
    [CountDown.name]: CountDown,
    ActivitiesGoods
  },
  methods: {
    goShop() {
      this.$router.push({path:'/mall'})
    }
  }
};
</script>
<style  scoped>
.indexActivities {
  margin: 0.05rem 0;
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: white;
  box-shadow: 0 0 0.01rem gray;
}
.indexActivitiesTop {
  display: flex;
  padding: 0.05rem 0.1rem;
  justify-content: space-between;
}
.indexActivitiesTitle {
  font-weight: 600;
  font-size: 0.16rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
.item {
  display: inline-block;
  width: 0.3rem;
  margin-right: 0.05rem;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: gray;
  border-radius: 0.05rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
.iconfont {
  font-size: 0.24rem;
}
.indexActivitiesMain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.indexActivitiesMain > div {
  width: 32%;
  background-color: bisque;
}
</style>
