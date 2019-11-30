<template>
  <div class="forget-box">
    <div class="forget-back">
      <img src="../../assets/back.png" alt="" class="back" @click="skip()">
    </div>
    <div class="forget-title">忘记密码</div>
    <div class=" forget-logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="forget-infobox">
      <div class=" forget-info">
        手机号 : <input type="text" placeholder="请输入手机号" id="phoneId" @blur="fontCheck01()">

      </div>
      <br><span class="warnning">{{warn1}}</span>
      <div class="  forget-info">
        新密码 : <input type="password" placeholder="请输入6~8位密码" id="pwdId" @blur="fontCheck02()">

      </div>
      <br><span class="warnning">{{warn2}}</span>
      <div class="forget-info">
        验证码 : <input type="text" placeholder="请输入验证码" id="codeId" >
        <button @click="sendCode">获取验证码</button>

      </div>
      <br><span class="warnning">{{warn3}}</span>
    </div>
    <div class="forget-bottom">
      <input type="button" value="确认修改" @click="dbCheck()">
    </div>

  </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                notemsg: "",
                codeId: "",
                warn1:"",
                warn2:"",
                warn3:"",
            }
        },
        methods: {
            fontCheck01() {
                let phoneId = document.getElementById("phoneId");
                let phoneVal = phoneId.value;
                this.warn1 = "";
                if(phoneVal==""){
                    this.warn1 = "手机号不能为空";
                }else{
                    let reg=/^1[3,5,7,8]\d{9}$/
                    if(reg.test(phoneVal)){
                        this.warn1 = "";
                    }else{
                        this.warn1 = "手机号格式错误 ";
                    }
                }
            },
            fontCheck02() {
                let pwdId = document.getElementById("pwdId");
                let pwdVal = pwdId.value;
                if(pwdVal==""){
                    this.warn2 = "密码不能为空";
                }else{
                    let reg=/^\w{6,8}$/
                    if(reg.test(pwdVal)){
                        this.warn2 = "";
                    }else{
                        this.warn2 = "密码格式错误 ";
                    }
                }
            },
            dbCheck() {
                let tel =document.querySelector("#phoneId").value
                let pwd =document.querySelector("#pwdId").value
                let code=document.querySelector("#codeId").value
                let info={
                    'u_tel':tel,
                    'u_password':pwd,
                    'u_code':code,
                }
                //console.log(info)
                this.$axios.post(this.HOST+"/user/forget_pwd/",info)
                    .then(result=>{
                        //console.log(result.data)
                        if(result.data.status==200){//登录成功
                            this.$router.push("/LoginPage")
                        }else if(result.data.status==400){//用户名或密码错误
                            this.warn3="验证码错误或请求参数错误"
                        }else if(result.data.status==300){//此用户不存在0
                            this.warn3="验证码已过期或手机号未注册"
                        }else{//请求参数错误。请重试
                            this.warn3="请重试"
                        }
                    })
            },
            //获取验证码
            sendCode(){
                let tel =document.querySelector("#phoneId").value
                this.$axios.post(this.HOST+"/user/phone/",{"u_tel":tel})
                    .then(res=>{
                        //console.log(res.data)
                    })
            },
            skip(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
  .forget-box{
    width:100%;
    height: 100%;
    background-color:#eee;
  }
  .forget-back{
    width:100%;
    padding-top:0.1rem;
    padding-bottom:0.1rem;
    box-sizing: border-box;
  }
  .forget-back img{
    width:0.3rem;
    height:0.3rem;
  }
  .forget-title{
    width:100%;
    text-align: center;
    font-size: 0.20rem;
  }
  .forget-logo{
    width:100%;
    padding-left:36%;
    padding-top:0.3rem;
    box-sizing: border-box;
  }
  .forget-infobox{
    width:100%;
    padding-left: 8%;
    padding-right: 8%;
    box-sizing: border-box;
    padding-top:0.3rem;
  }
  .forget-info{
    width:100%;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #cfcfcf;
    padding-left: 0.1rem;
  }
  .forget-info input{
    outline: none;
    height:0.3rem;
    width:1.3rem;
    border: none;
    background-color:#eee;
  }
  .forget-infobox span{
    font-size: 0.13rem;
    margin-left: 22%;
    height: 0.2rem;
  }
  .forget-info button{
    height:0.3rem;
    border-radius: 0.13rem;
    border: none;
    background-color:#00a2ff;
    color:white;
    width:1rem;
  }
  .forget-bottom{
    width:100%;
    padding-left:8%;
    padding-top:0.2rem;
    box-sizing: border-box;
  }
  .forget-bottom input{
    height: 0.4rem;
    width: 92%;
    border: none;
    outline: none;
    border-radius: 0.17rem;
    background-color:#00a2ff;
    color:white;
  }
</style>
