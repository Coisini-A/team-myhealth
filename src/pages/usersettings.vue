<template>
  <div>
    <user-settings-header></user-settings-header>
    <user-settings-content></user-settings-content>
  </div>
</template>

<script>
  import UserSettingsContent from "../components/user/usersettings/UserSettingsContent";
  import UserSettingsHeader from "../components/user/usersettings/UserSettingsHeader";
  export default {
        name: "userSettings",
        components:{
            UserSettingsContent,
            UserSettingsHeader
        }
    }
</script>

<style lang="less" scoped>

</style>
