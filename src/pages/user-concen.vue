<template>
<div class="user-box">
    <user-concen-header></user-concen-header>
    <user-concen-content></user-concen-content>
</div>
</template>
<script>
import userConcenHeader from "../components/user/user-concern/userConcenHeader"
import userConcenContent from "../components/user/user-concern/userConcenContent"
export default {
  name: "userConcen",
  components: {
    "user-concen-header":userConcenHeader,
    "user-concen-content":userConcenContent
  }
};
</script>
<style scoped>

</style>
