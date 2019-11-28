<template>
  <div style="background-color:white" >
    <div class="all">全部商品</div>
    <ul v-for="(u,i) in data" :key="i">
      <li @click="setNewGoods(u.typenum)">{{u.medname}}</li>
      <hr style="width: 80%;
   border: none;
    height: 2px;
    background-color: gainsboro;">
    </ul>

  </div>
</template>

<script>
    import eventBus from "../../router/Bus"
    export default {
        name: "mallLeft",
        props:["data"],
        methods:{
            setNewGoods(u){
                let a=parseInt(u)
                this.$axios.post(this.HOST+"/goods/choicetype/",{"typenum":a})
                    .then(result=>{
                        console.log(result.data)
                        eventBus.$emit("clickInfo",result.data.data.goods)
                    })
            },
        },
    }
</script>

<style scoped>
  li{
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
    width: 90px;
    height: 30px;
    line-height: 30px;
    margin-top: 0.1rem;
    border-radius: 15px;
  }
  .all{
    text-align: center;
    margin: 0 auto;
    width: 75px;
    height: 40px;
    line-height: 40px;
    margin-top: 0.1rem;
    border-bottom: 1px solid black;
  }

</style>
