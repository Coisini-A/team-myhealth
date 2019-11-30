<template>
  <div class="regBox">
    <Back></Back>
    <Register></Register>
  </div>
</template>

<script>
    import Back from '../components/login/Back';
    import Register from '../components/login/Register';

    export default {
        name: 'RegisterPage',
        data(){
            return {}
        },
        components: {
            Back,Register
        }
    }
</script>

<style scoped>
  .regBox{
    width:100%;
    height:100%;
    background-color:#eee;
  }
</style>
