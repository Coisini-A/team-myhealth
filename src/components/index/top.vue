<template>
  <div class="indexTop" >
    <Search class="indexSearch" :search='search' @get="get" @clear="clear" ></Search>
    <Notice class="indexNotice" :notice="notice"  ></Notice>
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
  background-color: #00ba73;
  border-bottom: 0.01rem solid gainsboro;
  height: 55px;
}
.indexSearch {
  width: 90%;
  float: left;

}
.indexNotice {
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  box-sizing: border-box;
  margin: 0.17rem auto;
}
</style>
