<template>
  <div class="indexNav">
    <div class="swiper-wrapper">
      <router-link tag="div" :to="{name:item.path}" class="swiper-slide" v-for="(item,index) in navList" :key="index" v-text="item.text"></router-link>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper/js/swiper";
export default {
  name: "navigation",
  components: {
  },
  data() {
    return {
      show: false,
      navList: [
        {
          name: "Forum",
          text: "感冒药",
          path:'User'
        },
        {
          name: "Forum",
          text: "常备药",
          path:''
        },
        {
          name: "Forum",
          text: "预约",
          path:''
        },
        {
          name: "Forum",
          text: "关注",
          path:''
        },
        {
          name: "Forum",
          text: "资讯",
          path:''
        },
        {
          name: "Forum",
          text: "购物车",
          path:''

        },
        {
          name: "Forum",
          text: "问诊",
          path:''
        },
        {
          name: "Forum",
          text: "活动",
          path:''
        }
      ]
    };
  },
  mounted() {
    new Swiper(".indexNav", {
      slidesPerView:5,
      spaceBetween: 0,
      freeMode: true
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