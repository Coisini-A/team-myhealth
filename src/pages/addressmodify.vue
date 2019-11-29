<template>
  <div>
    <address-modify-header></address-modify-header>
    <address-modify-content></address-modify-content>
  </div>
</template>

<script>
  import AddressModifyHeader from "../components/user/AddressList/AddressModify/AddressModifyHeader"
  import AddressModifyContent from "../components/user/AddressList/AddressModify/AddressModifyContent"
    export default {
        name: "addressmodify",
        components:{
            AddressModifyHeader,
            AddressModifyContent
        }
    }
</script>

<style scoped>

</style>
