<template>
  <div class="notice" @click="goNotice">
    <span :class="(notice==0)?'noticeNum1':'noticeNum'">{{notice}}</span>
    <img class="noticeImg" src="../../../static/indexImg/notice.png">
  </div>
</template>
<script>
export default {
  props:['notice'],
  methods: {
    goNotice(){
      this.$router.push({ path: '/user/usernews' });
    }
  }
};
</script>
<style scoped>
.notice{
  position: relative;
}
.noticeImg{
  width: 100%;
  height: 100%;
}
.noticeNum{
  background-color: red;
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  font-size: 0.12rem;
  position: absolute;
  line-height: 0.15rem;
  text-align: center;
  right: -0.05rem;
  top: 0.02rem;
}
.noticeNum1{
  display: none;
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  font-size: 0.12rem;
  position: absolute;
  line-height: 0.15rem;
  text-align: center;
  right: -0.05rem;
  top: 0.02rem;
}
</style>