<template>
  <div style="background-color:white" class="allA" >
    <div class="all">全部商品</div>
    <ul v-for="(u,i) in data" :key="i">
      <li class="hov" @click="setNewGoods(u.typenum)">{{u.medname}}</li>
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
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 0.1rem;
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
.allA{
background-color: white;
width: 25%;
margin-top: 50px;
margin-bottom: 50px;
position: fixed;
left: 0;
overflow-y: auto;
height: 555px;
}
.hov:hover{
  color: #E36B14;
  font-size: 16px;
  background-color: rgb(245, 245, 245);
}
</style>
