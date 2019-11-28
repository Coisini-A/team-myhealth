<template>
    <div class="inquiry_header">
       <h1>问诊</h1>
    </div>
</template>

<script>
    export default {
        name: "inquiry.vue"
    }
</script>

<style scoped>
  .inquiry_header{
    width: 100%;
    height: 0.5rem;
    padding: 0.1rem 0.15rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.3rem;
    border-bottom: 1px solid gainsboro;
    background-image: url("../../../static/inquiry/bpic13733.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: 900;
    font-size: 0.18rem;
    position: fixed;
    top: 0;
    z-index: 10;
  }
</style>
