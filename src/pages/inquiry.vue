<template>
  <div>
    <inquiry-header></inquiry-header>
    <inquiry-content></inquiry-content>
  </div>
</template>
<script>
import InquiryContent from "@/components/inquiry/inquiry-content";
import InquiryHeader from "@/components/inquiry/inquiry-header";
export default {
  name: "forum",
  components: {
    "inquiry-header": InquiryHeader,
    "inquiry-content": InquiryContent
  }
};
</script>
<style lang="less" scoped>
</style>
