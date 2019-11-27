<template>
  <div style="display: flex;height: 2rem">
    <div v-for="(n,i) in items.currentRight" class="right" :key="i">
      <router-link to="/detail" class="yaopin">  <img :src="n.img" alt="">
        <p class="YName">{{n.name}}</p> </router-link>
    </div>

  </div>
</template>

<script>
    export default {
        name: "mallRight",
        props:["items"],
        methods:{

        }
    }
</script>

<style scoped>
  .right{
    width: 40%;
    margin-top: 0.2rem;
    text-align: center;
    margin-left: 18px;
  }
  .right p{
    width: 100%;
    height: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* display: flex; */
    white-space: nowrap;
    font-size: 14px;
    color: black;
    line-height: 0.3rem;
  }
  .right img{
    width: 100%;
  }
  .yaopin{
    width: 100%;
    height: 100%;
    display: block;
    text-decoration: none;
  }
</style>
