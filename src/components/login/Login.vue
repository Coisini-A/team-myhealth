<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:57:53
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-15 19:48:20
 * @Description:
 --><template>
    <div class="box1" style="text-align: center">
        <div class="regBan">
            <p class="all"><span class="Mh">MyHealth</span>&nbsp;&nbsp;账号登录</p>
        </div>
        <div class="regInfo" style="margin-top: 30px;">
            电话:<input type="text" placeholder="请输入手机号码" id="nameId" @blur="fontCheck01()" class="input">
            <p>{{warn1}}</p>
            密码:<input type="password" placeholder="请输入密码" id="pwdId" @blur="fontCheck02()" class="input">
            <p>{{warn2}}</p>
        </div>
        <div class="regBot">
            <input type="button" value="登录" @click="dbCheck()" ><br>
<!--          style="width: 100px;-->
<!--          height: 40px;-->
<!--          border: 1px solid grey;-->
<!--          background-color: gray;"-->
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
            let nameId = document.getElementById("nameId");
            let nameVal = nameId.value;
            let a = document.querySelector("#nameId").value;
            let b = document.querySelector("#pwdId").value;
            let info={
                "u_tel":a,
                "u_password":b
            }
            // console.log(info)
            if(this.warn1==""&&this.warn2==""&&this.msg==true){
                this.$axios.post(this.HOST+"/user/login/",info)
                    .then(result=>{
                        // window.console.log(result.data)
                        if(result.data.status==200){//登录成功
                            let x = result.data.data.user.id
                            let token = result.data.token
                            localStorage.setItem("user_id",JSON.stringify(x))//将登录数据存至本地
                            localStorage.setItem("token",JSON.stringify(token))
                            localStorage.setItem("phone",nameVal)
                            this.$router.push("/")
                        }else if(result.data.status==500){//用户名或密码错误
                            this.warn2="用户名或密码错误"
                        }else if(result.data.status==300){//此用户不存在0
                            this.warn2="此用户不存在"
                        }else{//请求参数错误。请重试
                            this.warn2="请重试"
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
  .all{
    font-family: cursive;
    font-size: 22px;
    font-weight: bold;
  }
  .Mh{
    font-family: none;
    font-size: 24px;
    color: forestgreen;
  }
  .input{
    margin-bottom: 30px;
    border: 1px solid gainsboro;
    height: 35px;
  }
</style>
