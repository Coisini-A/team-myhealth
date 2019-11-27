<template>
  <div>
    <user-header></user-header>
    <user-Content ></user-Content>
    <nav-bar></nav-bar>
<!--    <input type="text" v-model="aa"><button @click="login">aaaaaa</button>-->
  </div>
</template>
<script>
  import userHeader from "../components/user/UserHeader";
  import userContent from "../components/user/UserContent";
  import NavBar from "@/common/nav-bar";
  export default {
      name:"user-vue",
      components:{
          userHeader,
          userContent,
          NavBar
      },
      data(){
          return{
              aa:""
          }
      },
      // methods:{
      //     login(){
      //         this.$axios.post('http://122.112.231.109:5000/user/phone/',{u_tel:this.aa})
      //             .then(result=>{
      //                 console.log(result.data)
      //             })
      //             .catch(err=>{
      //                 console.log(err)
      //             })
      //     }
      // }
  }
</script>
<style lang="less" scoped>

</style>
