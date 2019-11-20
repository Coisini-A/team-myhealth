<template>
  <div>
    <user-card-package-header></user-card-package-header>
    <user-card-package-content></user-card-package-content>
  </div>
</template>

<script>
  import UserCardPackageHeader from "../components/user/usercardpackage/UserCardPackageHeader"
  import UserCardPackageContent from "../components/user/usercardpackage/UserCardPackageContent"
    export default {
        name: "usercardpackage",
        components:{
            UserCardPackageHeader,
            UserCardPackageContent
        }
    }
</script>

<style scoped>

</style>
