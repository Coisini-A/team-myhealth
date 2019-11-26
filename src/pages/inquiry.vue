<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <inquiry-header></inquiry-header>
    <inquiry-content></inquiry-content>
  </div>
</template>
<script>
    // import NavBar from "../common/nav-bar"
    import inquiryContent from "../components/inquiry/inquiry-content";
    import inquiryHeader from "../components/inquiry/inquiry-header";
    export default {
        name:"inquiry.vue",
        components:{
            // NavBar
           inquiryHeader,
            inquiryContent,
        }
    }
</script>
<style lang="less" scoped>

</style>
