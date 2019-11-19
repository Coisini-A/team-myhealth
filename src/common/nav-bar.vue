<template>
  <div class="nav-bar">
    <router-link
      tag="div"
      :to="{name:item.name}"
      class="nav-bar-item"
      v-for="(item,index) in navList"
      :key="index"
    >
      <p class="iconfont" v-html="item.icon"></p>
      <p class="nav-bar-item-content">{{item.text}}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      navList: [
        {
          name: "Index",
          icon: "&#xe606;",
          text: "首页"
        },
        {
          name: "Inquiry",
          icon: "&#xe683;",
          text: "快速问诊"
        },
        {
          name: "Mall",
          icon: "&#xe613;",
          text: "商城"
        },
        {
          name: "User",
          icon: "&#xe630;",
          text: "我的"
        },
        {
          name: "Forum",
          icon: "&#xe609;",
          text: "论坛"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>

.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: azure;
  justify-content: space-around;
  .focus {
    color: rgb(0, 153, 255);
  }
  .nav-bar-item{
      line-height: 30px;
    >p:nth-of-type(1){
        font-size:22px;
        text-align: center;
    }
    >p:nth-of-type(2){
        font-size:14px;
        text-align: center;
    }
  }
}
</style>