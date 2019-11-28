<template>
  <div>
    <div class="UserCardPackageHeader">
      {{msg}}
    </div>
    <img :src="msgimg" alt=""@click="headerone"class="UserCardPackageHeader-span">
  </div>
</template>

<script>
    export default {
        name: "UserCardPackageHeader",
        data(){
            return{
                msg:"Myhealth优惠券",
                msgimg:"../../../static/user-images/Return.png"
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
  .UserCardPackageHeader{
    width:100%;
    height:0.5rem;
    font-weight:900;
    text-align:center;
    line-height:0.5rem;
    background-image: url("../../../../static/user-images/back.jpg");
  }
  .UserCardPackageHeader-span{
    width:10%;
    position:absolute;
    top:0.05rem;
    left:0.1rem;
  }
</style>
