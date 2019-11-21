<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in swiperImg" :key="index">
        <img class="iSwiperImg" :src="item.url" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  props: ["swiperImg", "swiperEffect"],
  mounted() {
    this._swipe();
  },
  methods: {
    _swipe() {
      new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        effect: this.swiperEffect,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          //自动切换
          delay: 2500,
          disableOnInteraction: false
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 1.5rem;
}
.swiper-wrapper {
  text-align: center;
}
.iSwiperImg {
  widows: 100%;
  height: 100%;
  display: inline-block;
}
</style>