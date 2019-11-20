<template>
  <div class="index">
    <Top class="indexTop"></Top>
    <div class="indexMain">
      <Nav></Nav>
      <Swiper></Swiper>
      <Hotspot></Hotspot>
      <Questionnaire></Questionnaire>
      <Follow></Follow>
      <Information></Information>
      <Activities></Activities>
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
  methods: {}
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
}
.indexTop {
  position: fixed;
  top: 0;
  z-index: 3;
}
.indexMain {
  padding: 0.55rem 0 0.6rem;
  background-color: ghostwhite;
}
</style>