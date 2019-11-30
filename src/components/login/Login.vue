<template>
  <div class="back2 login-back2">
    <div class="out2 login-out2">
      <img src="../../assets/logo.png">
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Back',
        data (){
            return {
                // title: "登录"
            }
        },
    }
</script>

<style scoped>
  .login-back2{
    width:100%;
    padding-top:15%;
    box-sizing:border-box;
  }
  .login-out2{
    width: 30%;
    margin-left: 36%;
    margin-bottom: 0.2rem;
  }
</style>
吴佳蓉 18:01:26
<template>
  <div class="box1">
    <div class="login-Ban">
      <p>MyHealth账号登录</p>
    </div>
    <div class="login-Info">
      <div class="login-info-msg">
        手机号：<input type="text" placeholder="请输入手机号码" id="nameId" @blur="fontCheck01()">
      </div>
      <p>{{warn1}}</p>
      <div class="login-info-msg">
        密码：<input type="password" placeholder="请输入密码" id="pwdId" @blur="fontCheck02()">
      </div>
      <p>{{warn2}}</p>
    </div>
    <div class="login-Meg">
      <input type="checkbox" ref="agreeBox" @click="checked"/><span>《已阅读并同意以下协议》</span>
    </div>
    <div class="login-Bot">
      <input type="button" value="登录" @click="dbCheck()"><br/><br/>
      <span><a @click="aaa">新用户注册</a>&nbsp;&nbsp;&nbsp;<a @click="bbb">忘记密码?</a></span>
    </div>

  </div>
</template>

<script>

    export default {
        name: 'Login',
        data(){
            return {
                warn1:"",
                warn2:"",
                msg:false
            }
        },
        methods: {
            checked(){
                this.msg=!this.msg
            },
            fontCheck01() {
                let nameId = document.getElementById("nameId");
                let nameVal = nameId.value;
                if(nameVal==""){
                    this.warn1 = "手机号不能为空";
                }else{
                    let reg=/^1[3,5,7,8]\d{9}$/
                    if(reg.test(nameVal)){
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
                    return;
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
                let a = document.querySelector("#nameId").value;
                let b = document.querySelector("#pwdId").value;
                let info={
                    "u_tel":a,
                    "u_password":b
                }
                console.log(info)
                if(this.warn1==""&&this.warn2==""&&this.msg==true){
                    this.$axios.post(this.HOST+"/user/login/",info)
                        .then(result=>{
                            // window.console.log(result.data)
                            if(result.data.status==200){//登录成功
                                let x = result.data.data.user.id
                                let token = result.data.token
                                localStorage.setItem("user_id",JSON.stringify(x))//将登录数据存至本地
                                localStorage.setItem("token",JSON.stringify(token))
                                this.$router.push("/")
                            }else if(result.data.status==501){//用户名或密码错误
                                this.warn2="用户名或密码错误"
                            }else if(result.data.status==300){//此用户不存在0
                                this.warn2="此用户不存在"
                            }else{//请求参数错误。请重试
                                this.warn2="请求参数错误。请重试"
                            }
                        })
                }
            },
            aaa(){
                this.$router.push("/RegisterPage")
            },
            bbb(){
                this.$router.push("/password")
            }
        }
    }

</script>

<style scoped>
  .box1{
    width:100%;
  }
  .login-Ban{
    width: 100%;
    height: 0.5rem;
    font-size: 0.22rem;
    text-align: center;
    line-height: 0.5rem;
  }
  .login-Info{
    width: 100%;
    height: 1rem;
    box-sizing: border-box;
    padding-top: 0.2rem;
    margin-bottom:0.4rem;
  }
  .login-Info p{
    height:0.2rem;
  }
  .login-info-msg{
    width:86%;
    margin:0 auto;
    border-bottom:0.01rem solid #cfcfcf;
    padding-left:2%;
    box-sizing:border-box;

  }
  .login-Info p{
    font-size:0.13rem;
    margin-left: 27%;
  }
  .login-Info input{
    width:2.5rem;
    height:0.3rem;
    margin-bottom:0.1rem;
    border-radius: 0.05rem;
    outline:none;
    border:none;
    background-color:#eee;
  }
  .login-Bot{
    width: 100%;
    height: 0.8rem;
    padding-top: 0.2rem;
    padding-left: 6%;
    box-sizing:border-box;
    margin-bottom:0.3rem;

  }
  .login-Bot span{
    margin-left:15%;
  }
  .login-Bot input{
    height: 0.4rem;
    width: 92%;
    border: none;
    outline: none;
    border-radius: 0.17rem;
    background-color: #ff6600;
    color: white;
  }
  .login-Bot a{
    margin-right:14%;
  }
  .login-Meg{
    width: 100%;
    padding-left: 21%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.15rem;
  }
</style>
