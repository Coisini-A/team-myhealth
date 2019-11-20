<template>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
</template>
<script>  
import { Search } from "vant";
export default {
  components:{
    [Search.name]:Search
  },
  data() {
    return {
      value:""
    }
  },
  methods: {
    onSearch(){
      
    },
    onCancel(){

    }
  },
};
</script>