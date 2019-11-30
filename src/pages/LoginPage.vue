<template>
  <div class="loginBox">
    <Back2></Back2>
    <Login></Login>
  </div>
</template>

<script>
    import Back2 from '../components/login/Back2';
    import Login from '../components/login/Login';

    export default {
        name: 'LoginPage',
        data(){
            return {}
        },
        components: {
            Back2,Login
        }
    }
</script>

<style scoped>
  .loginBox{
    width:100%;
    background-color:#eee;
    height:100%;
  }
</style>
