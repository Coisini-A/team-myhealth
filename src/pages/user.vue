<template>
  <div>
    <user-header></user-header>
    <user-Content ></user-Content>
    <nav-bar></nav-bar>
    <button @click="login">aaaaaa</button>
    <button @click="hehe">bbbbb</button>
  </div>
</template>
<script>
  import userHeader from "../components/user/UserHeader";
  import userContent from "../components/user/UserContent";
  import NavBar from "@/common/nav-bar";
  import UserApi from "../apis/userapi"
  export default {
      name:"user-vue",
      components:{
          userHeader,
          userContent,
          NavBar,
          UserApi
      },
      data(){
          return{
              data:[]
          }
      },
     beforeMount(dada) {
          this.data=dada
         console.log(dada)
     },
      methods:{
          login(){
              this.$axios.post('http://122.112.231.109:5000/user/phone/',{u_tel:13679124645})
                  .then(result=>{
                          console.log(result.data)
                      })
                          .catch(err=>{
                              console.log(err)
                  })
          },
           hehe(){
             this.$axios.get('http://122.112.231.109:5000/goods/allgoods/',{good_id:this.data})
                  .then(result=>{
                      console.log(result.data)
                  })
                  .catch(err=>{
                      console.log(err)
                  })
          }
      }
  }
</script>
<style lang="less" scoped>

</style>
