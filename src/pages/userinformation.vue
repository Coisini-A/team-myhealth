<template>
  <div>
    <user-in-formation-header></user-in-formation-header>
    <user-in-formation-content></user-in-formation-content>
  </div>
</template>

<script>
    import UserInFormationHeader from "../components/user/userinformation/userinformationheader";
    import UserInFormationContent from "../components/user/userinformation/userinformationcontent"
    export default {
        name: "userFour",
        components:{
            UserInFormationHeader,
            UserInFormationContent
        }
    }
</script>

<style lang="less" scoped>

</style>
