<template>
  <div class="indexHotspot">
    <!-- <p class="ad">号外：</p> -->
    <van-notice-bar :text="message" left-icon="volume-o" />
  </div>
</template>

<script>
import { NoticeBar } from "vant";
export default {
  name: "",
  components: {
    "van-notice-bar": NoticeBar
  },
  data(){
    return {
      message:'通知内容123123b12b3b123b12b31b23b123b12b32b'
    }
  }
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