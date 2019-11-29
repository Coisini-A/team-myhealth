<template>
    <div class="UserAccountHeader">
      <img :src="headerimg" alt=""@click="headerone">
      <div class="UserAccountHeaderText">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "UserAccountHeader",
        data(){
            return{
                msg:"用户账单",
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
  .UserAccountHeader{
    width:100%;
    height:0.6rem;
    background-image: url("../../../../static/user-images/back.jpg");
  }
  .UserAccountHeader img{
    width:7.5%;
    margin-top:0.15rem;
    margin-left:0.09rem;
  }
  .UserAccountHeaderText{
    font-weight: 900;
    margin-left:0.5rem;
    margin-top:0.55rem;
    height:0.5rem;
    line-height:0.5rem;
    position:absolute;
    top:-0.5rem;
    left:0.9rem;
  }
</style>
