<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:57:53
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-15 19:48:20
 * @Description:
 --><template>
    <div class="box1">
        <div class="regTop">
            <img src="logo.png" alt="">
        </div>
        <div class="regBan">
            <p>账号密码登录</p>
        </div>
        <div class="regInfo">
            <h4>电话：</h4><input type="text" placeholder="请输入手机号码" id="nameId" @blur="fontCheck01()">
            <p>{{warn1}}</p>
            <h4>密码：</h4><input type="password" placeholder="请输入密码" id="pwdId" @blur="fontCheck02()">
            <p>{{warn2}}</p>
        </div>
        <div class="regBot">
            <input type="button" value="登录" @click="dbCheck()">
            <span><a @click="aaa">新用户注册</a><a @click="bbb">忘记密码</a></span>
        </div>
        <div class="regMeg">
            <input type="checkbox" ref="agreeBox" @click="checked"/><span>《已阅读并同意以下协议》</span>
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
                            // localStorage.setItem("phone",phone)
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
        width: 100%;
        height: 100%;
        font-size: 14px;
        background-image: url("../../assets/true.jpg");
        background-size: 100% 100%;
    }
    .regTop{
        width: 100%;
        height: 2.65rem;
        padding-top: .1rem;
        /* background-image: url("../../assets/logo.png"); */
      background-repeat: no-repeat;
    }
    .regTop img{
        display: block;
        width: .7rem;
        height: .7rem;
        margin: .17rem auto;
        color: red;
    }
    .regBan{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: .1rem;
    }
    .regBan p{
        font-size: .16rem;
    }
    .regInfo{
        width: 100%;
        height: 1rem;
        margin-top: .3rem;
    }
    .regInfo input{
        display: block;
        background-color: #f7f8e3;
        border-radius: 0.1rem;
        /* width: 1rem; */
        height: .4rem;
        height: .3rem;
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        padding-left: .15rem;
        font-size: .12rem;
        outline: none;
        margin: -.25rem 1.1rem .1rem;
    }
    .regInfo p{
        margin-bottom: -.02rem;
        padding-left: 1.4rem;
        color: red;
        margin-top: -.05rem;
    }
    .regInfo button{
        width: .7rem;
        height: .3rem;
        background:#fe5566;
        color: white;
        font-size: 10px;
        border: none;
        border-radius: .2rem;

    }
    .regInfo h4{
        margin-top: .1rem;
        display:inline-block;
        margin-left: .5rem;
    }
    ::-webkit-input-placeholder{
        font-size: .5rem;
    }
    .aa{
        color: red;
        position: absolute;
        bottom: 1.75rem;
        left: 1.45rem;
    }
    .regIn{
        width: 100%;
        color:red;
        margin-top: .2rem;
    }
    .regBot{
        width: 100%;
        flex: 1;
    }
    ::-webkit-input-placeholder{
        font-size: .1rem;
    }
    .regBot input{
        width: 1.3rem;
        height: .43rem;
        border-radius: .5rem;
        background:#fe5656;
        font-size: .15rem;
        color: white;
        border: 0;
        outline: none;
        margin-left: 1.2rem;
        margin-top: 1rem;
    }
    .regBot span{
        display:block;
        display: flex;
        justify-content:space-around;
        margin-top:0.2rem;
    }
    .regBot a{
        text-decoration: none;
        display: inline-block;
        color: green;
    }
    .regBot input:hover{
        background: #fb2626;
    }
    .regMeg{
        width: 100%;
        position: relative;
        margin-top: -.5rem;
    }
    .regMeg input{
        position: absolute;
        top:-.85rem;
        left: .65rem;
    }
    .regMeg span{
        position: absolute;
        top: -.85rem;
        left:.85rem;
        color: gray;
    }
</style>
