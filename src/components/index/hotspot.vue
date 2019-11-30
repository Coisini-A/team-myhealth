<template>
  <div class="indexHotspot">
    <!-- <p class="ad">号外：</p> -->
    <van-notice-bar :text="message" left-icon="volume-o" />
  </div>
</template>

<script>
import { NoticeBar } from "vant";
export default {
  // props:['message'],
  name: "",
  components: {
    "van-notice-bar": NoticeBar
  },
  data(){
    return{
      message:"",
    };
  },
  mounted(){
    this.$axios.get("http://122.112.231.109:5000/home/notice/")
    .then(res=>{
      console.log(res);
      this.message=res.data.data.n_text;
    })
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