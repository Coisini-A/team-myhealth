<template>
  <div>
      <address-list-header></address-list-header>
      <address-list-content></address-list-content>
  </div>
</template>

<script>
  import AddressListHeader from "../components/user/AddressList/AddressListHeader";
  import AddressListContent from "../components/user/AddressList/AddressLisstContent";
    export default {
        name: "addresslist",
        components:{
            AddressListHeader,
            AddressListContent
        }
    }
</script>

<style scoped>

</style>
