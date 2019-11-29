<template>
  <div class="indexHotspot">
    <!-- <p class="ad">号外：</p> -->
    <van-notice-bar :text="message" left-icon="volume-o" />
  </div>
</template>

<script>
import { NoticeBar } from "vant";
export default {
  props:['message'],
  name: "",
  components: {
    "van-notice-bar": NoticeBar
  },
};
</script>
<style lang="less" scoped>
.indexHotspot {
  margin: 0.05rem 0;
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: white;
  box-shadow: 0 0 0.01rem gray;
  
}
</style>