<template>
  <div>
    <user-account-header></user-account-header>
    <user-account-content></user-account-content>
  </div>
</template>

<script>
  import UserAccountHeader from "../components/user/UserAccount/UserAccountHeader"
  import UserAccountContent from "../components/user/UserAccount/UserAccountContent";
    export default {
        name: "UserAccount",
        components:{
            UserAccountHeader,
            UserAccountContent
        }
    }
</script>
<style scoped>

</style>
