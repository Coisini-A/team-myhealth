<template>
    <div style="display: flex;height: 2rem">
     <div v-for="a in currentRight" class="right">
       <router-link to="/detail">  <img :src="a.img" alt="">
        <p>{{a.name}}</p> </router-link>
      </div>
	 
    </div>
</template>

<script>
    export default {
        name: "mallRight",
        props:["currentRight"]
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
    /* height: 17px; */
    overflow: hidden;
    text-overflow: ellipsis;
    /* display: flex; */
    white-space: nowrap;
    font-size: 14px;
  }
  .right img{
    width: 100%;
  }
</style>
