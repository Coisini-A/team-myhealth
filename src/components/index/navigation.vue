<template>
  <div class="indexNav">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item,index) in navList"
        :key="index"
        v-text="item.text"
      ></div>
      <van-popup v-show="show"></van-popup>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper/js/swiper";
import { Popup } from "vant";
export default {
  name: "navigation",
  components: {
    "van-popup": Popup
  },
  data() {
    return {
      show: false,
      navList: [
        {
          name: "Forum",
          text: "问诊"
        },
        {
          name: "Forum",
          text: "问诊"
        },
        {
          name: "Forum",
          text: "问诊"
        },
        {
          name: "Forum",
          text: "问诊"
        },
        {
          name: "Forum",
          text: "问诊"
        },
        {
          name: "Forum",
          text: "问诊"
        },
        {
          name: "Forum",
          text: "问诊"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".indexNav", {
      slidesPerView: 5,
      spaceBetween: 0,
      freeMode: true
    });
  }
};
</script>
<style  scoped>
.indexNav {
  width: 100%;
  height: 0.3rem;
  background: burlywood;
}
.swiper-slide{
  overflow: hidden;
  text-align: center;
}
</style>