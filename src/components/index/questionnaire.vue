
<template>
  <div class="indexQuestionnaire" @click="goQuestionnaire">
    问卷,这是一张图片，点击跳转
  </div>
</template>

<script>
export default {
  methods: {
    goQuestionnaire(){
      this.$router.push({ path: '/index/questionnaire' });
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
</style>