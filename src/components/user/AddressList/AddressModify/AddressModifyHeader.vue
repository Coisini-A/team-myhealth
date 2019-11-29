<template>
  <div class="AddressEditorHeader">
    <router-link to="/addresslist">
      <img :src="headerimg" alt="">
    </router-link>
    <div class="AddressEditorHeaderText">{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "AddressEditorHeader",
        data(){
            return{
                msg:"编辑地址",
                headerimg:"../../../static/user-images/Return.png"
            }
        }
    }
</script>

<style scoped>
  .AddressEditorHeader{
    width:100%;
    height:0.6rem;
    background: darkgray;
  }
  .AddressEditorHeader img{
    width:7.5%;
    margin-top:0.15rem;
    margin-left:0.09rem;
  }
  .AddressEditorHeaderText{
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
