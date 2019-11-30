<template>
  <div class="nav-bar">
    <div
      :class="['nav-bar-item ',currentIndex === index? 'focus':'']"
      v-for="(item,index) in navList"
      :key="index"
      @click="skip(index,item.name)"
    >
      <p class="iconfont" v-html="item.icon"></p>
      <p class="nav-bar-item-content">{{item.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      currentIndex: 0,
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
  },
  created() {
    this.currentIndex =
      window.localStorage.getItem("index") === null
        ? 0
        : Number(window.localStorage.getItem("index"));
  },
  methods: {
    skip(index, name) {
      this.currentIndex = index;
      window.localStorage.setItem("index", index);
      if (index !== this.navList.length - 1) {
        this.$router.push({ name });
      } else {
        window.location.href = "http://106.13.229.29";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.nav-bar {
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: whitesmoke;
  justify-content: space-around;
  .focus {
    color: rgb(0, 186, 115);
  }
  .nav-bar-item {
    line-height: 30px;
    > p:nth-of-type(1) {
      font-size: 22px;
      text-align: center;
    }
    > p:nth-of-type(2) {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
