<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      background="#00ba73"
      shape="round"
      @search="onSearch"
      @input="get()"

    >
      <div slot="action" @click="onSearch" style="font-size: 16px;">搜索</div>
    </van-search>
    <ul class="tips" v-if="search">
      <li v-if="search.doctor">
        <ul>
          <ol
            v-for="(item, index) in search.doctor"
            :key="index"
            @click="getVaue('doctor',item.d_id,item.d_name)"
          >{{item.d_name}}</ol>
        </ul>
      </li>
      <li v-if="search.goods">
        <ul>
          <ol
            v-for="(item, index) in search.goods"
            :key="index"
            @click="getVaue('goods',item.goods_id,item.goods_name)"
          >{{item.goods_name}}</ol>
        </ul>
      </li>
      <li v-if="search.hospital">
        <ul>
          <ol
            v-for="(item, index) in search.hospital"
            :key="index"
            @click="getVaue('hospital',item.h_id,item.hname)"
          >{{item.hname}}</ol>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { Search } from "vant";
export default {
  props: ["search"],
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      value: "",
      searchType: "",
      searchId: ""
    };
  },
  methods: {
    onSearch() {
      if (this.value != "") {
        switch (this.searchType) {
          case "doctor":
            this.$router.push({path: "/inquiry?d_id=" + this.searchId });
            // window.console.log(this.searchType, this.searchId);
            break;
          case "goods":
            this.$router.push({path: "/detail?id=" + this.searchId });
            // window.console.log(this.searchType, this.searchId);
            break;
          case "hospital":
            this.$router.push({ path: "/inquiry?h_id=" + this.searchId });
            // window.console.log(this.searchType, this.searchId);
            break;
          case "":
            // window.console.log('2',this.value,(this.search.doctor[0]?this.search.doctor[0].d_id:'none'))
            if (this.search.doctor[0] ? true : false) {
              this.searchType = "doctor";
              this.searchId = this.search.doctor[0].d_id;
              this.$router.push({ path: "/inquiry?d_id=" + this.searchId });
              // window.console.log(this.searchType, this.searchId);
            } else if (this.search.goods[0] ? true : false) {
              this.searchType = "goods";
              this.searchId = this.search.goods[0].goods_id;
              this.$router.push({path: "/detail?id=" + this.searchId });
              // window.console.log(this.searchType, this.searchId);
            } else if (this.search.hospital[0] ? true : false) {
              this.searchType = "hospital";
              this.searchId = this.search.hospital[0].h_id;
              this.$router.push({ path: "/inquiry?h_id=" + this.searchId });
              // window.console.log(this.searchType, this.searchId);
            } else {
              alert("该关键字不存在");
            }
            this.$emit("clear");
            break;
        }
        this.searchType = "";
        this.searchId = "";
        this.value = "";
      }
    },
    getVaue(type, id, name) {
      this.value = name;
      this.searchType = type;
      this.searchId = id;
      this.$emit("clear");
    },
    get() {
      this.$emit("get", this.value);
      if (this.value == "") {
        this.$emit("clear");
      }
    }
  }
};
</script>
<style scoped>
.tips {
  position: absolute;
  border-bottom: none;
  top: 80%;
  left: 8%;
  background-color: white;
}
.tips ol {
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.02rem 0.1rem;
  font-size: 0.12rem;
  /* border-radius: 0.1rem; */
  background-color: rgb(247, 248, 250);
  margin: 0.01rem 0;
  height: 30px;
  border-bottom: 0.5px solid gray;
  line-height: 30px;
  color: gray;
}
</style>
