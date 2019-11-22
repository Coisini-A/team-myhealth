
<template>
  <div class="indexInformation">
    <div class="InformationTop">
      <span class="InformationTopStyle"></span>
      <span class="InformationTopText">资讯</span>
      <span class="InformationTopChange iconfont" @click="change">&#xe60a;</span>
    </div>
    <div class="InformationMain">
      <h1>{{information.title}}</h1>
      <p>{{information.center}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:['information'],
  methods: {
    change(){
      this.$emit('refresh');
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