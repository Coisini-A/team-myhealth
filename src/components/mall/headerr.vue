<template>
    <div class="header">
      <router-link to="/index">
        <span class="img"></span>
      </router-link>
      <p>商品分类</p>
    </div>
</template>

<script>
    export default {
        name: "headerr"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    display: flex;
    /*background-color: aquamarine;*/
    background-color: #00ba73;
    position: fixed;
  }
  a{
    width: 15%;
    height: 0.5rem;
    display: block;
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
</style>
