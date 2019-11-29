<template>
  <div class="indexTop">
    <Search class="indexSearch" :search='search' @get="get" @clear="clear"></Search>
    <Notice class="indexNotice" :notice="notice" ></Notice>
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
  props:['notice','search'],
  methods:{
    get(val){
      this.$emit('get',val)
    },
    clear(){
      this.$emit("clear");
    }
  }
};
</script>
<style scoped>
.indexTop {
  width: 100%;
  background-color: white;
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