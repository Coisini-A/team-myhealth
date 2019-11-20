<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
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
        direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
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
.swiper-wrapper > :nth-child(1) {
  background: red;
}
.swiper-wrapper > :nth-child(2) {
  background: yellow;
}
.swiper-wrapper > :nth-child(3) {
  background: blue;
}
</style>