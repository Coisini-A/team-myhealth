<template>
  <div>
    <ul v-for="(u,i) in items" @click="changePages(i)" :key="i">
      <li v-for="">{{u.msg}}</li>
      <hr style="width: 80%;
   border: none;
    height: 2px;
    background-color: gainsboro;">
    </ul>

  </div>
</template>

<script>
    export default {
        name: "mallLeft",

        props:["items"],

        methods:{
            changePages(i){
                this.$emit("num",i)
            }
        }
    }
</script>

<style scoped>
  li{
    text-align: center;

    height: 50px;
    line-height: 50px;
    margin-top: 0.1rem;
  }

</style>
