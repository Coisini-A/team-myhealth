<template>
  <div class="UserInFormationHeader">
    <img :src="headerimg" alt=""@click="headerone">
    <div class="UserInFormationHeaderText">{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "userFourHeader",
        data(){
            return{
              msg:"用户详细信息",
              headerimg:"../../../static/user-images/Return.png"
            }
        },
        methods:{
            headerone(){
                this.$router.push("/user")
            }
        }
    }
</script>

<style scoped>
  .UserInFormationHeader{
    width:100%;
    height:0.5rem;
    background: darkgray;
  }
  .UserInFormationHeader img{
    width:7.5%;
    margin-top:0.09rem;
    margin-left:0.09rem;
  }
  .UserInFormationHeaderText{
    font-weight: 900;
    margin-left:0.5rem;
    margin-top:0.5rem;
    height:0.5rem;
    line-height:0.5rem;
    position:absolute;
    top:-0.5rem;
    left:0.9rem;
  }
</style>
