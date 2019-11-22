<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <inquiry-header></inquiry-header>
    <inquiry-content></inquiry-content>
    <appoIntmen></appoIntmen>
  </div>
</template>
<script>
    // import NavBar from "../common/nav-bar"
    import AppoIntment from "@/components/inquiry/appointment";
    import InquiryContent from "@/components/inquiry/inquiry-content";
    import InquiryHeader from "@/components/inquiry/inquiry-header";
    export default {
        name:"forum.vue",
        components:{
            // NavBar
            "inquiry-header":InquiryHeader,
            "inquiry-content":InquiryContent,
            "appoIntment":AppoIntment
        }
    }
</script>
<style lang="less" scoped>

</style>
