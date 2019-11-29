<template>
  <div class="UserPersonalDetailsHeader">
    <img :src="headerimg" alt=""@click="headerone">
    <div class="UserPersonalDetailsHeaderText">{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "UserPersonalDetailsHeader",
        data() {
            return {
                msg: "编辑信息",
                headerimg: "../../../static/user-images/Return.png"
            }
        },
        methods: {
            headerone() {
                this.$router.push("user/UserInFormation")
            }
        }
    }
</script>

<style scoped>
  .UserPersonalDetailsHeader{
    width:100%;
    height:0.6rem;
    background: darkgray;
  }
  .UserPersonalDetailsHeader img{
    width:7.5%;
    margin-top:0.15rem;
    margin-left:0.09rem;
  }
  .UserPersonalDetailsHeaderText{
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
