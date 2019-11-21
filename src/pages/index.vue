<template>
  <div class="index animated bounceInDown">
    <Top class="indexTop" :notice="notice"></Top>
    <div class="indexMain">
      <Nav></Nav>
      <Swiper :swiperImg="swiperImg" :swiperEffect="swiperEffect"></Swiper>
      <Hotspot></Hotspot>
      <Questionnaire></Questionnaire>
      <Follow></Follow>
      <Information :information='information' @refresh='refresh'></Information>
      <Activities :ActivitiesGoods="ActivitiesGoods" :time="time"></Activities>
    </div>
  </div>
</template>
<script>
import Swiper from "../components/index/swipe";
import Top from "../components/index/top";
import Follow from "../components/index/follow";
import Hotspot from "../components/index/hotspot";
import Nav from "../components/index/navigation";
import Questionnaire from "../components/index/questionnaire";
import Information from "../components/index/information";
import Activities from "../components/index/activities";

export default {
  components: {
    Top,
    Swiper,
    Hotspot,
    Follow,
    Nav,
    Questionnaire,
    Information,
    Activities
  },
  data() {
    return {
      notice: 1, //消息数量
      swiperImg: [
        //轮播图
        { id: 1, url: "../../../static/indexImg/d.png" },
        { id: 2, url: "../../../static/indexImg/y.png" },
        { id: 3, url: "../../../static/indexImg/y.png" }
      ],
      swiperEffect: "coverflow", //轮播特效
      //默认为"slide"（位移切换），
      // 可设置为'slide'（普通切换、默认）,
      // "fade"（淡入）
      //"cube"（方块）
      // "coverflow"（3d流）
      // "flip"（3d翻转）
      // 如果需要分页器
      follow: [
        //关注
        { img: "", id: 1 },
        { img: "", id: 2 },
        { img: "", id: 3 },
        {
          type: "",
          name: 3,
          doctorImg: "",
          doctername: "",
          yiyuan: "",
          reader: 0,
          good: 0
        }
      ],
      ActivitiesGoods: [
        //活动商品
        {
          id: 1,
          name: "商品名字",
          oPrice: 500,
          nPrice: 200,
          discount: 7,
          img: "../../../static/indexImg/y.png"
        },
        {
          id: 2,
          name: "商品名字",
          oPrice: 500,
          nPrice: 200,
          discount: 7,
          img: "../../../static/indexImg/y.png"
        },
        {
          id: 3,
          name: "商品名字",
          oPrice: 500,
          nPrice: 200,
          discount: 7,
          img: "../../../static/indexImg/y.png"
        }
      ],
      time: 30 * 60 * 60 * 1000, //倒计时时间
      information: {
        title: "标题:外卖食物这样选",
        center:
          "内容:啊大大大叔的啊实打实大师阿萨达萨达是打大叔大婶打算的阿萨达阿萨达as打算打萨达是打算打算大声点阿萨阿萨打算打算打算阿萨达as多大大声道阿萨阿萨"
      } //资讯
    };
  },
  methods: {
    refresh(){
      alert("刷")
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  background-color: whitesmoke;
}
.indexTop {
  position: fixed;
  top: 0;
  z-index: 3;
}
.indexMain {
  padding: 0.65rem 0 0.6rem;
  background-color: ghostwhite;
}
</style>