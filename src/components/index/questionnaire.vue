
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
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: white;
  box-shadow: 0 0 0.01rem gray;
  background-color:pink; 
}
.indexQuestionnaire>img{
  width: 100%;
  height: 1.5rem;
}
</style>