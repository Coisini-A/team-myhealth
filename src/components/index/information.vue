
<template>
  <div class="indexInformation">
    <div class="InformationTop">
      <span class="InformationTopStyle"></span>
      <span class="InformationTopText">资讯</span>
      <span class="InformationTopChange iconfont" @click="change">&#xe60a;</span>
    </div>
    <div class="InformationMain">
      <h1>{{title}}</h1>
      <p>{{center}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:"标题:外卖食物这样选",
      center:"内容:啊大大大叔的啊实打实大师阿萨达萨达是打大叔大婶打算的阿萨达阿萨达as打算打萨达是打算打算大声点阿萨阿萨打算打算打算阿萨达as多大大声道阿萨阿萨"
    }
  },
  methods: {
    change(){
      alert("刷新信息")
    }
  },
}
</script>
<style  scoped>
.indexInformation{
  margin: 0.05rem 0;
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: white;
  box-shadow: 0 0 0.01rem gray;
}
.InformationTop{
  text-align: center;
  line-height: 0.3rem;
  position: relative;
}
.InformationTopText{
  background-color: white;
  display: inline-block;
  padding: 0 0.1rem;
  color: orange;
  position: relative;
  z-index: 2;
}
.InformationTopStyle{
  display: inline-block;
  border: 0.01rem solid orange;
  width: 50%;
  height: 0;
  overflow: hidden;
  position: absolute;
  top:50%;
  left: 50%;
  transform:translateX(-50%) translateY(-50%);
  z-index: 0;
}
.InformationTopChange{
  position: absolute;
  right: 0.1rem;
  color: red;
}
.InformationMain>h1{
  font-size: 0.16rem;
  font-weight: 600;
  padding: 0 0 0.05rem;
}
</style>