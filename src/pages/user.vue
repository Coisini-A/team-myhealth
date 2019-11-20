<template>
  <div>
    <user-header></user-header>
    <user-Content></user-Content>
    <nav-bar></nav-bar>
  </div>
</template>
<script>
  import userHeader from "../components/user/UserHeader";
  import userContent from "../components/user/UserContent";
  import NavBar from "@/common/nav-bar";
  export default {
      name:"user-vue",
      components:{
          userHeader,
          userContent,
          NavBar
      }
  }
</script>
<style lang="less" scoped>

</style>
