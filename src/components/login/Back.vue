<template>
  <div class="back reg-back">
    <div class="reg-out2">
      <img src="../../assets/logo.png">
    </div>
    <p>注册MyHealth账户</p>
  </div>
</template>
<script>
    export default {
        name: 'Back',
        data (){
            return {
                title: "注册账号"
            }
        },
        methods: {
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  .reg-back{
    width: 100%;
    padding-top: 10%;
    box-sizing:border-Box;
  }
  .reg-out2{
    width: 30%;
    margin-left: 36%;
    margin-bottom: 0.2rem;
    padding-top:5%;
    box-sizing:border-Box;
  }
  .reg-back p{
    width:100%;
    font-size:0.24rem;
    text-align:center;
  }
</style>
