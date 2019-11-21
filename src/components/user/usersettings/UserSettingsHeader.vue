<template>
    <div id="usertwoheader">
        <img :src="headerimg" alt=""@click="headerone">
        <div class="usertwoheaderspan">用户设置</div>
    </div>
</template>

<script>
    export default {
        name: "UserSettingsHeader",
        data(){
            return{
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
  #usertwoheader{
      width:100%;
      height:0.5rem;
      background: darkgray;
  }
  #usertwoheader img{
    width:7.5%;
    margin-top:0.09rem;
    margin-left:0.09rem;
  }
  .usertwoheaderspan{
    font-weight: 900;
    margin-left:0.5rem;
    margin-top:0.5rem;
    height:0.5rem;
    line-height:0.5rem;
    position:absolute;
    top:-0.5rem;
    left:1.1rem;
  }
</style>
