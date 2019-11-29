<template>
  <div class="index animated bounceInDown">
    <Top class="indexTop" :notice="notice" :search="search" @get="get" @clear="clear"></Top>
    <router-view class="indexMain" v-if="flage"></router-view>
    <div class="indexMain" v-else>
      <Hotspot :message="message"></Hotspot>
      <Swiper :swiperImg="swiperImg" :swiperEffect="swiperEffect"></Swiper>
      <Activities :ActivitiesGoods="ActivitiesGoods" :time="time"></Activities>
      <Questionnaire @show="show"></Questionnaire>
      <Information :information="information" @refresh="refresh"></Information>
      <Follow :followD='followD' :followG='followG'></Follow>
    </div>
  </div>
</template>
<script>
import Swiper from "../components/index/swipe";
import Top from "../components/index/top";
import Follow from "../components/index/follow";
import Hotspot from "../components/index/hotspot";
import Questionnaire from "../components/index/questionnaire";
import Information from "../components/index/information";
import Activities from "../components/index/activities";
import Bus from '../router/Bus';
import {
  SWIPERIMGURL,
  ACTITIVE,
  INFORMATION,
  SEARCH,
  INDEX,
  FOLLOWD,
  FOLLOWG,
  HEALTHY
} from "../apis/indexApi";

export default {
  components: {
    Top,
    Swiper,
    Hotspot,
    Follow,
    Questionnaire,
    Information,
    Activities
  },
  data() {
    return {
      flage: false,
      search: "",
      searchData: "",
      message: "通知内容123123b12b3b123b12b31b23b123b12b32b", //热推
      notice: 0, //消息数量
      swiperImg: "",
      swiperEffect: "", //轮播特效
      followD:'',
      followDdata:'',
      followG:'',
      followGdata:'',
      ActivitiesGoods: "",
      ActivitiesGoodsData: "",
      time: 30 * 60 * 60 * 1000, //倒计时时间
      stastTime: "",
      information: "", //资讯
      informationData: ""
    };
  },
  watch: {
    followDdata: function(newVal) {
      this.followD = newVal;
      // window.console.log('d',this.followD.d.d_head)
    },
    followGdata: function(newVal) {
      this.followG = newVal;
      // window.console.log('g',this.followG[0].goods.url)
      //  window.console.log('g',this.followG[1].goods.url)
    },
    informationData: function(newVal) {
      this.information = newVal;
    },
    ActivitiesGoodsData: function(newVal) {
      this.ActivitiesGoods = newVal;
    },
    searchData: function(newVal) {
      this.search = newVal;
    }
  },
  methods: {
    clear() {
      this.search = "";
    },
    get(val) {
      // window.console.log(val);
      this._getSearch(val);
    },
    refresh() {
      this._getInformation();
    },
    show() {
      this.flage = true;
    },
    _getSearch(val) {
      if (val != "") {
        this.$axios
          .post(SEARCH, { search: val })
          .then(res => {
            this.searchData = res.data.data;
          })
          .catch(function(error) {});
      }
    },
    _getSwiperImg() {
      let that = this;
      this.$axios
        .get(SWIPERIMGURL)
        .then(function(res) {
          that.swiperImg = res.data.data.urls;
          that.swiperEffect = res.data.data.state;
        })
        .catch(function(error) {});
    },
    _getFollowD() {
      let token =
        sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
      if (token) {
        this.$axios
          .post(FOLLOWD,{'u_id':token})
          .then((res)=>{
            this.followDdata = res.data.data.followed_doctors[0]
          })
          .catch(function(error) {});
      }
    },
    _getFollowG() {
      let token =
        sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
      if (token) {
        this.$axios
          .post(FOLLOWG,{'u_id':token})
          .then((res)=>{
            this.followGdata = res.data.data.followed_goods
          })
          .catch(function(error) {});
      }
    },
    _getActitive() {
      this.$axios
        .get(ACTITIVE)
        .then(res => {
          this.ActivitiesGoodsData = res.data.data.goods;
        })
        .catch(function(error) {});
    },
    _getInformation() {
      this.$axios
        .get(INFORMATION)
        .then(res => {
          this.informationData = res.data.data.info;
        })
        .catch(function(error) {});
    },
    _post(data){
      // window.console.log(111,data)
      this.$axios.post(HEALTHY,data).then((res)=>{
          window.console.log(res);
        })
    }
  },
  mounted() {
    this._getSwiperImg();
    this._getInformation();
    this._getActitive();
    this._getFollowD();
    this._getFollowG();
    let that = this;
    Bus.$on("post",(data)=>{
      that._post(data)
      // window.console.log(222,data)
    })
  },
  updated() {}
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  background-color: whitesmoke;
}
.indexTop {
  position: fixed;
  top: 0;
  z-index: 3;
}
.indexMain {
  padding: 0.60rem 0 0.6rem;
  background-color: ghostwhite;
}
</style>