<template>
<div class="user-box">
    <user-news-header></user-news-header>
    <user-news-content></user-news-content>
</div>
</template>
<script>
import userNewsHeader from "../components/user/UserMessage/userNewsHeader"
import userNewsContent from "../components/user/UserMessage/userNewsContent"

export default {
  name: "userNews",
  components: {
    "user-news-header": userNewsHeader,
    "user-news-content": userNewsContent
  }
};
</script>
<style scoped>
  .user-box{
    background: #F3F3F3;
  }
</style>
