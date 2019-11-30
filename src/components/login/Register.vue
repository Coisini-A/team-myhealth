<template>
  <div class="reg-box">
    <div class="regInfo">
      <div class="regInfoTwo">
        手机号：<input type="text" placeholder="请输入手机号" id="phoneId" @blur="fontCheck01()">
      </div>
      <div class="reginfo-warn"><span class="warnning">{{warn1}}</span></div>
      <div class="regInfoTwo">
        密    码 : <input type="password" placeholder="请输入6~8位密码" id="pwdId" @blur="fontCheck02()">

      </div>
      <div class="reginfo-warn"><span class="warnning">{{warn2}}</span></div>
      <div class="regInfoTwo">
        确认密码：<input type="password" placeholder="请再次输入密码" id="pwdId02" @blur="fontCheck03()">

      </div>
      <div class="reginfo-warn"><span class="warnning">{{warn3}}</span></div>
      <div class="regInfoTwo">
        验证码：
        <input type="text" placeholder="请输入验证码" id="codeId"> <button @click="getNum">获取验证码</button>

      </div>
      <div class="reginfo-warn"><span class="warnning">{{warn4}}</span></div>
    </div>
    <div class="regBot">
      <input type="button" value="注册" @click="dbCheck()">
      <br/>
      <br/>
      <router-link to="/LoginPage">已有账号，立即登录</router-link>
    </div>
    <div class="agree">
      <span>注册代表阅读并同意<a href="#">《MyHealth用户协议》</a></span>
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
                warn4:"",
                num:""
            }
        },
        methods: {
            getNum(){
                let a =document.querySelector("#phoneId").value;
                window.console.log(a);
                window.console.log(typeof a);
                this.$axios.post(this.HOST+"/user/phone/",{"u_tel":a})
                    .then(result=>{
                        window.console.log(result.data)
                    })
            },
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
            fontCheck03() {
                let pwdId = document.getElementById("pwdId");
                let pwdVal = pwdId.value;
                let pwdId02 = document.getElementById("pwdId02");
                let pwdVal02 = pwdId02.value;
                if(pwdVal==pwdVal02){
                    this.warn3 = "";
                }else{
                    this.warn3 = "两次输入的密码不一致";
                }
            },
            dbCheck() {
                window.console.log(this.warn1);
                window.console.log(this.warn2);
                window.console.log(this.warn3);

                if(this.warn1==""&&this.warn2==""&&this.warn3==""){
                    let a =document.querySelector("#phoneId").value;
                    let b =document.querySelector("#pwdId").value;
                    let c =document.querySelector("#codeId").value;
                    let info={
                        "u_tel":a,
                        "u_password":b,
                        "u_code":c
                    }
                    this.$axios.post(this.HOST+"/user/register/",info)
                        .then(result=>{
                            window.console.log(result.data)
                        })
                }else {
                    window.console.log(0)
                }
            },
        }
    }
</script>
<style scoped>
  .reg-box{
    width:100%;
  }
  .regInfo{
    width:100%;
    padding-top:0.2rem;
    box-sizing: border-box;
  }
  .regInfoTwo{
    width:3.15rem;
    margin-left: 8%;
    margin-right: 8%;
    padding-left:0.1rem;
    box-sizing:border-box;
    border-bottom:0.01rem solid #cfcfcf;
  }
  .reginfo-warn{
    width:100%;
    margin-left:20%;
    margin-top:0.1rem;
  }
  .regInfoTwo input{
    height: 0.4rem;
    width: 43%;
    border-radius: 0.12rem;
    border: none;
    background-color: #eee;
  }
  .regInfoTwo button{
    height: 0.3rem;
    border-radius: 0.13rem;
    border: none;
    background-color: #ff6600;
    color: white;
    width: 1rem;
  }
  .regBot{
    width:100%;
    padding-left:8%;
    box-sizing:border-box;
  }
  .regBot input{
    height: 0.4rem;
    width: 90%;
    border: none;
    outline: none;
    border-radius: 0.17rem;
    background-color: #ff6600;
    color: white;
  }
  .regBot a{
    margin-left: 24%;
    font-size: 0.17rem;
    color: black;
  }
  .agree{
    width: 100%;
    margin-top: 0.2rem;
    font-size: 0.15rem;
    padding-left: 9%;
    box-sizing: border-box;
  }
  .agree a{
    color: black;
  }
</style>
