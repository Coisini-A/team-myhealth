<template>
  <div>
    <user-new-password-header></user-new-password-header>
    <user-new-poss-word-content></user-new-poss-word-content>
  </div>
</template>

<script>
    import UserNewPasswordHeader from "../components/user/userinformation/NewPassword/NewPasswordHeader";
    import UserNewPossWordContent from "../components/user/userinformation/NewPassword/NewPasswordContent";
    export default {
        name: "UserNewPassword",
        components:{
            UserNewPasswordHeader,
            UserNewPossWordContent
        }
    }
</script>

<style scoped>

</style>
