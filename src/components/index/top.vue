<template>
  <div class="indexTop">
    <Search class="indexSearch"></Search>
    <Notice class="indexNotice"></Notice>
  </div>
</template>
<script>
import Search from "./search";
import Notice from "./notice";
export default {
  components: {
    Search,
    Notice
  }
};
</script>
<style scoped>
.indexTop{
  width: 100%;
  background-color: whitesmoke;
}
.indexSearch {
  width: 85%;
  float: left;
}
.indexNotice {
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  margin: 0.1rem;
  box-sizing: border-box;
}
</style>