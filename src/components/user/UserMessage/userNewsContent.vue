<template>
  <div>
    <div :key="i" v-for="(q,i) in list" class="news">
      <van-panel :title="q.un_titile" :status="q.un_time" class="newsone">
        <div class="haha">{{q.un_text}}</div>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { Panel } from "vant";
export default {
  name: "userNewsContent",
  data() {
    return {
      list: ""
    };
  },
  components: {
    [Panel.name]: Panel
  },
  methods: {
    news() {
      var userid = localStorage.getItem("user_id");
      this.$axios
        .post("http://122.112.231.109:5000/user/all_notice/", { u_id: userid })
        .then(result => {
          // console.log(result.data.data.messages)
          this.list = result.data.data.messages;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.news();
  }
};
</script>

<style lang="less" scoped>
.user-box {
  border: 1px solid gray;
  width: 90%;
  margin: 20px auto;
  height: 100px;
  background: white;
  border-radius: 10px;
}
.photo {
  width: 100px;
  height: 100px;
}
.photo > img {
  width: 100%;
  border-radius: 50%;
}
/* .user-box>div{
      display: flex
  } */
.haha {
  display: flex;
  line-height: 24px;
  text-indent: 2em;
  letter-spacing: 1.5px;
}
.haha > div > p {
  display: block;
  width: 276px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.haha > div > h3 {
  font-size: 20px;
  font-weight: 900;
}
.newsone {
  border-radius: 14px;
  padding: 5px 12px 20px 20px;
  overflow: hidden;
  margin: 10px;
}
.van-cell {
  font-size: 17px;
  font-weight: bold;
  .van-cell__title {
    margin-left: -0.17rem;
  }
}
</style>
