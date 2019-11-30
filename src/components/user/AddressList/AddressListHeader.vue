<template>
  <div class="AddressListHeader">
      <router-link to="user/UserInFormation">
        <img :src="headerimg" alt="">
      </router-link>
      <div class="AddressListHeaderText">{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "UserAccountHeader",
        data(){
            return{
                msg:"地址列表",
                headerimg:"../../../static/user-images/Return.png"
            }
        }
    }
</script>

<style scoped>
  .AddressListHeader{
    width:100%;
    height:0.6rem;
    background: darkgray;
  }
  .AddressListHeader img{
    width:7.5%;
    margin-top:0.15rem;
    margin-left:0.09rem;
  }
  .AddressListHeaderText{
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
