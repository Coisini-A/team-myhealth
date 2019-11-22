<template>
  <div class="indexNav">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(item,index) in navList" :key="index" v-text="item.text"></div>
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
      slidesPerView: 6,
      spaceBetween: 0,
      freeMode: true,
    });
  }
};
</script>
<style  scoped>
.indexNav {
  width: 100%;
  touch-action: none;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.swiper-slide {
  overflow: hidden;
  line-height: 0.3rem;
  text-align: center;
  background-color: white;
  border-radius: 0.05rem;
  margin: 0 0.01rem;
  font-size: 0.14rem;
}
</style>