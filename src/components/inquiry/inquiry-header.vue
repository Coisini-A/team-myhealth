<template>
  <div class="header">
    <router-link to="/index">
      <span class="iconfont">&#xe612;</span>
    </router-link>
    <p style="color: white">问诊</p>
  </div>
</template>

<script>
    export default {
        name: "inquiry.vue"
    }
</script>

<style scoped>
  .header{
    top: 0;
    width: 100%;
    background-color: #00ba73;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /* padding-top: 0.1rem; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    z-index: 2;
    height: 0.5rem;
    color: white;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }
  a{
    width: 15%;
    height: 0.5rem;
    display: block;
    line-height: 0.5rem;
    /* padding-left: 20px; */
    text-align: center;
    color: white;
  }
  .img{
    width: 15%;
    margin-top: 0.1rem;
    display: block;
    margin-left: 0.1rem;
  }
  p{
    text-align: center;
    width: 75%;
    line-height: 0.5rem;
    font-size: 0.22rem;
  }
  .iconfont{
    font-size: 0.24rem;
  }
</style>
