<template>
    <div>
      <user-personal-details-header></user-personal-details-header>
      <user-personal-details-content></user-personal-details-content>
      <user-personal-details-footer></user-personal-details-footer>
    </div>
</template>

<script>
  import UserPersonalDetailsHeader from "../components/user/userinformation/userpersonaldetails/userpersonaldetailsheader"
import UserPersonalDetailsContent from '../components/user/userinformation/userpersonaldetails/userpersonaldetailscontent'
import UserPersonalDetailsFooter from '../components/user/userinformation/userpersonaldetails/userpersonaldetailsfooter'
    export default {
        name: "userpersonaldetails",
        components:{
            UserPersonalDetailsHeader,
            UserPersonalDetailsContent,
            UserPersonalDetailsFooter
        }
    }
</script>

<style scoped>

</style>
