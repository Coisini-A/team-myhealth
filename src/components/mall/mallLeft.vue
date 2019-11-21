<template>
  <div>
    <ul v-for="i in items" @click="changePages(index)">
      <li v-for="">{{i.msg}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "mallLeft",
        data(){
          return{
              m:0
          }
        },
        props:["items"],
        methods:{
            changePages(index){
                this.$eventBus.$emit("change",index);
                this.m=index;
            }
        }
    }
</script>

<style scoped>
    li{
      text-align: center;
      background-color: gainsboro;
      height: 70px;
      line-height: 70px;
    }

</style>
