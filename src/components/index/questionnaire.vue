
<template>
  <div class="indexQuestionnaire">
    <img src="../../../static/indexImg/question.png" alt="" @click="goQuestionnaire">
  </div>
</template>

<script>
export default {
  methods: {
    goQuestionnaire(){
      this.$router.push({ path: '/index/questionnaire' });
      this.$emit('show')
    }
  },
}
</script>
<style  scoped>
.indexQuestionnaire{
  margin: 0.05rem 0;
  width: 100%;
  padding: 0.05rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.05rem;
  -webkit-box-shadow: 0 0 0.01rem grey;
  box-shadow: 0 0 0.01rem grey;
  background-color: #f1e7e9;
}
.indexQuestionnaire>img{
  width: 100%;
  /* height: 45%; */
  height: 1.9rem;
}
</style>
