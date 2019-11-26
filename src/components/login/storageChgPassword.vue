<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:57:53
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-13 18:14:10
 * @Description:
 -->
<template>
    <div class="box">
        <div class="boxA">
            <img src="../../assets/back.png" alt="" class="back" @click="skip()">
            <p>忘记密码</p>
        </div>
        <div class="regTop">
            <img src="../../assets/logo.png" alt="">
        </div>
        <div class="regInfo">
            <div class="regInfoTwo">
                <h3>手机号：</h3><input type="text" placeholder="请输入手机号" id="phoneId" @blur="fontCheck01()">
                <span class="warnning">{{warn1}}</span>
            </div>
            <div class="regInfoTwo">
                <h3>新密码:</h3><input type="password" placeholder="请输入6~8位密码" id="pwdId" @blur="fontCheck02()">
                <span class="warnning">{{warn2}}</span>
            </div>
            <div class="regInfoTwo">
                <h3>确认新密码：</h3><input type="password" placeholder="请再次输入密码" id="pwdId02" @blur="fontCheck03()">
                <span class="warnning">{{warn3}}</span>
            </div>
            <div class="regInfoTwo">
                <h3>验证码：</h3>
                <input type="text" placeholder="请输入验证码" id="codeId"  @blur="fontCheck04()">
                <span class="warnning">{{warn4}}</span>
                <button>获取验证码</button>
            </div>
        </div>
        <div class="regBot">
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
            warn4:"",
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
        fontCheck03() {
            let pwdId = document.getElementById("pwdId");
            let pwdVal = pwdId.value;
            let pwdId02 = document.getElementById("pwdId02");
            let pwdVal02 = pwdId02.value;
            if(pwdVal==pwdVal02){
                this.warn3 = "✔";
                return true;
            }else{
                this.warn3 = "两次输入的密码不一致";
                return;
            }
        },
        dbCheck() {

        },
        skip(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .box{
        display: flex;
        flex-direction: column;
        background-image: url("../../assets/true.jpg");
        background-size: 100% 100%;
    }
    .boxA .back{
        width: .2rem;
        height: .25rem;
        margin-left: .05rem;
        margin-top: .05rem;
        float: left;
    }
    .boxA p{
        float: left;
        margin-left: 1.3rem;
    }
    .regTop{
        width: 100%;
        height: 2.3rem;
        position: relative;
    }
    .regTop img{
        width: .7rem;
        height:.7rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .regTop .back{
        color: green;
    }
    .regTop p{
        width: 100%;
        font-size: .14rem;
        color: #4d4d4d;
        text-align: center;
    }
    .regInfo{
        width: 100%;
        display: block;
        justify-content: center;
    }

    .regInfoTwo input{
        display: block;
        background-color: #f7f8e3;
        border-radius: 0.1rem;
        height: .4rem;
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        padding-left: .15rem;
        /* font-size: 14px; */
        margin: -.45rem 1.3rem .1rem;
    }
    .regInfo input::-webkit-input-placeholder{
        color: #afafaf;
    }
    .regInfoTwo h3{
        line-height: .3rem;
        font-size: .13rem;
        padding-left: .4rem;
        /* width: 0.6rem; */
    }
    .regInfoTwo .warnning{
        color: red;
        text-align: center
    }
    .regInfoTwo button{
        height: .4rem;
        display: block;
        margin-left: 2.11rem;
        position: relative;
        top: -.51rem;
        right: -.15rem;
    }
    .regBot{
        flex: 1;
    }
    .regBot input{
        width: 2.2rem;
        height: .45rem;
        border-radius: .5rem;
        background:#fe5656;
        font-size: .15rem;
        color: white;
        display: block;
        margin-left: .8rem;
        border: 0;
        outline: none;
        margin-bottom: .57rem;
    }
    .regBot input:hover{
        background: #fb2626;
    }
    .regBot a{
        font-size: .12rem;
        color: #afafaf;
        display: block;
        width: 100%;
        text-align: center;
        padding-top: .1rem;
    }
    .warnning{
        display: block;
        font-size: 0.12rem
    }

</style>
