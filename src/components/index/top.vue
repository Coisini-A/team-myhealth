<template>
  <div class="indexTop">
    <Search class="indexSearch"></Search>
    <Notice class="indexNotice" :notice="notice"></Notice>
  </div>
</template>
<script>
import Search from "./search";
import Notice from "./notice";
export default {
  components: {
    Search,
    Notice
  },
  props:['notice'],
};
</script>
<style scoped>
.indexTop {
  width: 100%;
  background-color: #2fbaef;
  border-bottom: 0.01rem solid gainsboro;
}
.indexSearch {
  width: 86%;
  float: left;
}
.indexNotice {
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  margin: 0.1rem;
  box-sizing: border-box;
  margin: 0.17rem auto;
}
</style>
