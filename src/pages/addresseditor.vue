<template>
  <div>
      <address-editor-header></address-editor-header>
      <address-editor-content></address-editor-content>
  </div>

</template>

<script>
  import AddressEditorHeader from "../components/user/AddressList/AddressEditor/AddressEditorHeader"
  import AddressEditorContent from "../components/user/AddressList/AddressEditor/AddressEditorContent";

    export default {
        name: "addresseditor",
        components:{
            AddressEditorHeader,
            AddressEditorContent
        }
    }
</script>

<style scoped>

</style>
