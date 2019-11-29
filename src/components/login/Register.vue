<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:57:53
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-13 18:14:10
 * @Description:
 -->
<template>
    <div class="box">
        <div class="regTop">
        <img src="../../assets/logo.png" alt="">
        </div>
        <div class="regInfo">
            <div class="regInfoTwo">
                <h3>手机号：</h3><input type="text" placeholder="请输入手机号" id="phoneId" @blur="fontCheck01()">
                <span class="warnning">{{warn1}}</span>
            </div>
            <div class="regInfoTwo">
                <h3>密码:</h3><input type="password" placeholder="请输入6~8位密码" id="pwdId" @blur="fontCheck02()">
                <span class="warnning">{{warn2}}</span>
            </div>
            <div class="regInfoTwo">
                <h3>确认密码：</h3><input type="password" placeholder="请再次输入密码" id="pwdId02" @blur="fontCheck03()">
                <span class="warnning">{{warn3}}</span>
            </div>
            <div class="regInfoTwo">
                <h3>验证码：</h3>
                <input type="text" placeholder="请输入验证码" id="codeId">
                <button @click="getNum">获取验证码</button>
              <span class="warnning">{{warn4}}</span>
            </div>
        </div>
        <div class="regBot">
            <input type="button" value="注册" @click="dbCheck()">
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
            //window.console.log(a);
            //window.console.log(typeof a);
            this.$axios.post(this.HOST+"/user/phone/",{"u_tel":a})
                .then(result=>{
                    //window.console.log(result.data)
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
                        // window.console.log(result.data)
                        if(result.data.status==200){//登录成功
                            let x = result.data.data.user.id
                            let token = result.data.token
                            localStorage.setItem("user_id",JSON.stringify(x))//将登录数据存至本地
                            localStorage.setItem("token",JSON.stringify(token))
                            this.$router.push("/")
                        }else if(result.data.status==400){//用户名或密码错误
                            this.warn4="验证码错误或请求参数错误"
                        }else if(result.data.status==300){//此用户不存在0
                            this.warn4="验证码已过期或手机号已存在"
                        }else{//请求参数错误。请重试
                            this.warn4="请重试"
                        }
                    })
            }else {
                window.console.log(0)
            }
        },
    }
}
</script>
<style scoped>
    /*.box{*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    !*display: flex;*!*/
    /*    !*flex-direction: column;*!*/
    /*    background-image: url("../../assets/true.jpg");*/
    /*    background-size: 100% 100%;*/
    /*}*/
    /*.regTop{*/
    /*    width: 100%;*/
    /*    height: 2.5rem;*/
    /*    position: relative;*/
    /*}*/
    /*.regTop img{*/
    /*    width: .7rem;*/
    /*    height:.7rem;*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    left: 50%;*/
    /*    transform: translate(-50%,-50%);*/
    /*}*/
    /*.regTop p{*/
    /*    width: 100%;*/
    /*    font-size: .14rem;*/
    /*    color: #4d4d4d;*/
    /*    text-align: center;*/
    /*}*/
    /*.regInfo{*/
    /*    width: 100%;*/
    /*    display: block;*/
    /*    justify-content: center;*/
    /*}*/

    /*.regInfoTwo input{*/
    /*    display: block;*/
    /*    background-color: #f7f8e3;*/
    /*    border-radius: 0.1rem;*/
    /*    height: .3rem;*/
    /*    border: 0;*/
    /*    border-bottom: 1px solid #f6f6f6;*/
    /*    padding-left: .3rem;*/
    /*    !* font-size: 14px; *!*/
    /*    margin: -.25rem 1rem .1rem;*/
    /*}*/
    /*.regInfo input::-webkit-input-placeholder{*/
    /*    color: #afafaf;*/
    /*}*/
    /*.regInfoTwo h3{*/
    /*    line-height: .3rem;*/
    /*    font-size: .13rem;*/
    /*    padding-left: .25rem;*/
    /*    !* width: 0.6rem; *!*/
    /*}*/
    /*.regInfoTwo .warnning{*/
    /*    color: red;*/
    /*    text-align: center*/
    /*}*/
    /*.regInfoTwo button{*/
    /*    height: .3rem;*/
    /*    display: block;*/
    /*    margin-left: 2.7rem;*/
    /*    position: relative;*/
    /*    top: -.41rem;*/
    /*    right:-.1rem;*/
    /*    font-size:0.12rem;*/
    /*}*/
    /*.regBot{*/
    /*    flex: 1;*/
    /*}*/
    /*.regBot input{*/
    /*    width: 3.15rem;*/
    /*    height: .45rem;*/
    /*    border-radius: .5rem;*/
    /*    background:#fe5656;*/
    /*    font-size: .15rem;*/
    /*    color: white;*/
    /*    display: block;*/
    /*    margin-left: .3rem;*/
    /*    border: 0;*/
    /*    margin-top: .2rem;*/
    /*    outline: none;*/
    /*    margin-bottom: .1rem;*/
    /*}*/
    /*.regBot input:hover{*/
    /*    background: #bdbbbb;*/
    /*}*/
    /*.regBot a{*/
    /*    font-size: .12rem;*/
    /*    color: #afafaf;*/
    /*    display: block;*/
    /*    width: 100%;*/
    /*    text-align: center;*/
    /*    padding-top: .1rem;*/
    /*    margin-bottom: .1rem;*/
    /*}*/
    /*.warnning{*/
    /*    display: block;*/
    /*    font-size: 0.12rem*/
    /*}*/

    /*.agree span{*/
    /*    font-size: .12rem;*/
    /*    padding-left: .4rem;*/
    /*}*/
    /*.agree a{*/
    /*    text-decoration: none;*/
    /*    color: green;*/
    /*}*/
</style>
