<template>
  <div>
    <van-field
      v-model="pasphone"
      type="number"
      label="手机号"
      placeholder="请输入手机号"
      required
      maxlength="11"
    />
      <van-field
        v-model="text"
        type="password"
        label="旧密码"
        placeholder="请输入旧密码"
        required
        maxlength="8"
      />
      <van-field
        v-model="test"
        type="password"
        label="新密码"
        placeholder="请输入新密码"
        required
        maxlength="8"
      />

    <van-button color="linear-gradient(to right,#34B436,#6149f6,#FF976A,#F7F717)" @click="apassword" class="aaa">提交</van-button>
  </div>
</template>

<script>
    import { Notify,Button,Field  } from 'vant';
    export default {
        name: "UserNewPossWordContent",
        components:{
            [Notify.name]:Notify,
            [Button.name]:Button,
            [Field.name]:Field
        },
        data(){
            return{
                test:"",
                text:"",
                pasphone:""
            }
        },
        methods:{
            // input(){
            //     if(this.test==""||this.text==""){
            //         this.$notify({ type: 'danger', message: '提交失败' });
            //     }else{
            //         this.$notify({ type: 'success', message: '提交成功' });
            //     }
            // }
            apassword(){
              this.$axios.post('http://122.112.231.109:5000/user/new_pwd/',{u_password:this.text,new_password:this.test,u_tel:this.pasphone})
                  .then(result=>{
                          console.log(result.data)
                      if(result.data.status==200){
                          this.$router.push("/user")
                      }else if (result.data.status==300){
                          Notify({ type: 'warning', message: '手机号错误' });
                      }else{
                          Notify({ type: 'danger', message: '密码错误或格式不正确' });
                      }
                  })
                  .catch(err=>{
                      console.log(err)
                  });


          }
        },

    }
</script>

<style scoped>
  .aaa{
    width:100%;
  }
</style>
