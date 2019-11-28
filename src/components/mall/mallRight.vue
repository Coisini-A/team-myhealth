<template>
  <div style="display: flex;">
    <div v-for="(n,i) in (flag?data:info)" class="right" :key="i" >
      <div class="yaopin" @click="goDetail(n)">
        <div >
          <img :src="n.url" alt="">
          <p class="YName">{{n.goods_name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import eventBus from "../../router/Bus"
    export default {
        name: "mallRight",
        props:["data"],
        data(){
            return{
                info:"",
                flag:true
            }
        },
        methods:{
            getClickInfo(){
                eventBus.$on("clickInfo",(msg)=>{
                    console.log("1.0")
                    this.info=msg
                    if(this.info!=""){
                        this.flag=false
                    }
                    console.log(this.info)
                })
            },
            goDetail(n){
                this.$router.push("/detail?id="+n.goods_id)

            }
        },
        mounted() {
            this.getClickInfo()
        }
    }
</script>

<style scoped>
  .right{
    width: 30%;
    margin-top: 0.2rem;
    text-align: center;
    margin-left: 0.07rem;
  }
  .right p{
    width: 100%;
    height: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* display: flex; */
    white-space: nowrap;
    font-size: 0.14rem;
    color: black;
    line-height: 0.3rem;
  }
  .right img{
    width: 75%;
    height: 0.7rem;
  }
  .yaopin{
    width: 100%;
    height: 1.10rem;
    display: block;
    text-decoration: none;
    background-color: white;
  }
</style>
