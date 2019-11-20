<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img class="iSwiperImg" src="../../../static/indexImg/d.png" alt=""></div>
      <div class="swiper-slide"><img class="iSwiperImg" src="../../../static/indexImg/y.png" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  mounted() {
    this._swipe();
  },
  methods: {
    _swipe() {
      new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

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
.swiper-wrapper{
  text-align: center
}
.iSwiperImg{
  widows: 100%;
  height: 100%;
  display: inline-block
}
</style>