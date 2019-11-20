
<template>
  <div class="indexActivities">
    <div>
      <p>活动 /秒杀</p>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>:
          <span class="item">{{ timeData.minutes }}</span>:
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <ActivitiesGoods></ActivitiesGoods>
    </div>
    <div>
      <ActivitiesGoods></ActivitiesGoods>
    </div>
  </div>
</template>

<script>
import { CountDown } from "vant";
import ActivitiesGoods from "./activitiesGoods";

export default {
  components: {
    [CountDown.name]: CountDown,
    ActivitiesGoods
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  methods: {}
};
</script>
<style  scoped>
.indexActivities {
  border-radius: 0.1rem;
  padding: 0.1rem;
  width: 100%;
  background: white;
  display: flex;
  border: 0.01rem solid ;
  box-sizing: border-box;
}
.indexActivities > div:nth-child(1) {
  width: 40%;
}
.indexActivities > div:nth-child(1) {
  width: 60%;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>