<template>
  <div class="UserNewPasswordHeader">
    <router-link to="user/UserInFormation">
      <img :src="headerimg" alt="">
    </router-link>
    <div class="UserNewPasswordHeaderText">{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "UserNewPossWordHeader",
        data(){
            return{
                msg:"修改密码",
                headerimg:"../../../static/user-images/Return.png"
            }
        }
    }
</script>

<style scoped>
  .UserNewPasswordHeader{
    width:100%;
    height:0.6rem;
    background: darkgray;
  }
  .UserNewPasswordHeader img{
    width:7.5%;
    margin-top:0.15rem;
    margin-left:0.09rem;
  }
  .UserNewPasswordHeaderText{
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
