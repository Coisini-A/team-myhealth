<template>
    <div class="appointment_box">
        <div class="appointment_box_title" style="background-color: #00ba73;">
            <div class="appointment_box_title_return" @click="onClickLeft" style="height: 0.5rem">
<!--              <van-icon name="arrow-left" size="0.28rem"/>-->
              <span class="iconfont" style="color: white">&#xe612;</span>
            </div>
            <div class="appointment_box_title_title" style="color: white">咨询预约</div>
            <div class="appointment_box_title_msg" style="line-height: 0.65rem;">
              <van-icon name="chat-o" size="0.28rem" info="0" color="gainsboro"/>
            </div>
        </div>
        <div class="appointment_box_content">
          <div class="appointment_box_content_desc">
            <img src="../../../static/inquiry/tu.jpg" alt="" style="width: 100%;
    height: 100%;">
          </div>
          <div class="appointment_box_content_list">
            <van-tabs>
              <van-tab title="咨询问诊">
                <div class="content_01 content_item">
                    <p class="onMsg msg">欢迎咨询</p>
                    <div class="content_01_box content_item_box">
                      <ul class="input_text" ref="textBox" style="line-height: 0.3rem;">
<!--                        <li style="height:0.2rem"></li>-->
                      </ul>


                        <div class="input_box">
                          <div class="input_box_header">
                            <i class="iconfont">&#xe75a;</i>
                            <i class="iconfont">&#xe61d;</i>
                            <i class="iconfont">&#xe601;</i>
                          </div>
                          <textarea v-model="inputInfo"></textarea>
                          <div class="input_box_click" @click="getInputInfo">发送</div>
                        </div>
                    </div>
                </div>
              </van-tab>
              <van-tab title="预约挂号">
                <div class="content_02 content_item">
                  <h2 class="quistion">问题描述</h2>
                  <div class="content_02_box content_item_box">
                    <div class="desc_info">

                      <textarea name="" id="descInfo" cols="30" rows="10"></textarea>
                    </div>
                    <div class="choose_time">
                      <span>请选择预约时间：</span>
                      <select name="select" id="choose_options">
                        <option value="null" selected id="option_item">请选择</option>
                        <option value="上午" class="option_item">预约上午就诊</option>
                        <option value="下午" class="option_item">预约下午就诊</option>
                      </select>
                    </div>
                    <div class="choose_submit">
                          <div @click="showResult">点击预约</div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
    </div>
</template>

<script>
  import {NavBar,Icon,Tabs,Tab,Toast} from "vant"
    export default {
        name: "appointment.vue",
        data(){
            return{
                inputInfo:"",
                sendList:[],
                messageList:[{title:"欢迎咨询"}]
            }
        },
        components:{
          [NavBar.name]:NavBar,
            [Icon.name]:Icon,
            [Tabs.name]:Tabs,
            [Tab.name]:Tab,
            [Toast.name]:Toast,
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            getInputInfo() {

                if (this.inputInfo != "") {
                    var a = {title: this.inputInfo}
                    window.console.log("这是我发送的消息" + this.inputInfo)
                    this.sendMsg(this.inputInfo)
                    //this.sendList.push(a)//插入至发送列表
                    var msg=`<li class='sendMsg msg'><p style='text-align: right;'>${this.inputInfo}</p></li>`
                    window.console.log(this.$refs.textBox)
                    this.$refs.textBox.innerHTML+=msg
                    // window.console.log(this.sendList);

                }
                this.inputInfo = ""
            },
            showResult() {
                let a = document.querySelector("#descInfo")
                let b = document.querySelector("#choose_options")
                if (a.value == "" || b.value == null) {
                    Toast.fail('预约失败、请填写完整信息');
                } else {
                    setTimeout(function () {
                        Toast.success('预约成功')
                        a.value = ""
                        b.value = null
                    }, 1000)
                }
            },
            //获取医生id
            getDoctorId() {
                let d_id = this.$route.query["id"]
                // window.console.log(d_id)
                return d_id
            },


            //-------聊天部分
            conectWebSocket() {
                // let websocket = new WebSocket("ws://122.112.231.109:8000/chat/")
                this.websocket.onopen = () => {
                    window.console.log("连接成功")

                }
            },

            sendMsg(e) {
                this.websocket.send(e)
                this.onMsg()
            },
            onMsg() {
                this.websocket.onmessage = (b) => {
                    // this.messageList=[{title:"欢迎咨询"}]
                    // window.console.log(JSON.parse(b.data))
                    window.console.log("这是我收到的消息", b)
                    window.console.log("这是我收到转换过了的消息", JSON.parse(b.data))
                    var msg1 = JSON.parse(b.data).msg
                    var msg2=`<li class='onMsg msg'><p style='text-align: left;'>${msg1}</p></li>`
                    this.$refs.textBox.innerHTML+=msg2

                }


            },
        },
        mounted() {
            this.getDoctorId()
             this.conectWebSocket()
            //根据医生id请求医生的详细信息
            // this.getConfigResult()
            // this.websocketToLogin()

        },

    }

</script>

<style scoped>
  .quistion{
    width: 100px;
    height: 40px;
    /* background-color: red; */
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    font-family: cursive;
    font-weight: bold;
  }
   .appointment_box{
        width: 100%;
    }
  .appointment_box_title{
    width: 100%;
    height: 0.5rem;
    /* background-image: url(/static/img/bpic13733.c1b62c5.jpg); */
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* padding: 0.1rem; */
    background-color: white;
  }
  .appointment_box_title_return{
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    /* display: flex; */
    width: 15%;
    text-align: center;
    line-height: 0.5rem;
  }
  .appointment_box_title_title{
    text-align: center;
    width: 75%;
    line-height: 0.5rem;
    font-size: 0.22rem;
  }
  .appointment_box_title_return>span{
    width: 100%;
    text-align: center;
    display: block;
  }
  .appointment_box_content{
    width: 100%;
    margin-top: 0.5rem;
  }
  .appointment_box_content_desc{
    width: 100%;
    height: 180px;
  }
  .content_item{
    width: 100%;
    box-sizing: border-box;
    padding: 0.1rem  0rem;
  }
   .content_item_box{
     position: relative;
     width: 95%;
     margin: 0 auto;
     height: 4.3rem;
      border: 1px solid gainsboro;
     border-radius: 0.05rem;
   }
  .content_01{
    background-color: #F5F5F5;
  }
  .input_text{
    width: 100%;
    box-sizing: border-box;
  }
  .input_text_item01{
    width: 2rem;
    display: flex;
    float: left;
  }
  .input_text_item01>div{
    width: 1.5rem;
    background-color: #e5e5e5;
    position: relative;
    border-radius: 0.1rem;
    padding: 0.05rem;
    box-sizing: border-box;
  }
   .input_text_item01>div:after{
     content: '';
     display: inline-block;
     width: 0;
     height: 0;
     border-top: 0.05rem solid transparent;
     border-right: 0.1rem solid #e5e5e5;
     border-bottom: 0.05rem solid transparent;
     position: absolute;
     top: 0.1rem;
     left: -0.1rem;
   }
   .input_text_item02{
     width: 2rem;
     display: flex;
     float: right;
     margin-top: 0.05rem;
   }
   .input_text_item02>div{
     width: 1.7rem;
     background-color: #e5e5e5;
     position: relative;
     border-radius: 0.1rem;
     padding: 0.05rem;
     box-sizing: border-box;
     padding: 0 0.05rem;
     line-height: 0.3rem;
   }
   .input_text>li>p{
     width: 100%;
     height: 100%;
   }
   .input_box{
     width: 100%;
     position: absolute;
     bottom: 0;
     left: 0;
     height: 1.3rem;
     border-top: 1px solid #ECECEC;
     background-color: #fff;
   }
   .input_box_header{
     width: 100%;
     height: 0.3rem;
     padding-left:0.1rem ;
     padding-top: 0.1rem;
     box-sizing: border-box;
     display: flex;
   }
   .input_box_header>i{
     display: block;
     height: 0.2rem;
     width: 0.3rem;
     margin-right: 0.1rem;
     font-size: 0.2rem;
   }
   .input_box>textarea{
     display: block;
      width: 99%;
     margin: 0 auto;
     height: 0.93rem;
     border: none;
     box-sizing: border-box;
     padding: 0.1rem 0 0 0.1rem;
   }
   .input_box_click{
     position: absolute;
     bottom: 0.1rem;
     right: 0.1rem;
     padding: 0 0.15rem;
     line-height: 0.3rem;
     border: 1px solid #e5e5e5 ;
     background-color: #f5f5f5;
     border-radius: 0.05rem;
   }
  .content_02{
    background-color: #F5F5F5;
  }
   .desc_info{
     width: 100%;
     /*padding: 0.1rem 0;*/
     box-sizing: border-box;
   }
  .desc_info>h2{
    width: 100%;
    line-height: 0.3rem;
    /* background-color: #fff; */
    text-align: center;
    /* border: 1px solid gainsboro; */
    /* border-radius: 0.1rem; */
    font-family: cursive;
    font-size: 0.2rem;
    font-weight: bold;
    color: green;
  }
   .desc_info>textarea{
     width: 98%;
     border: none;
     /* background-color: red; */
     border-radius: 10px;
     display: block;
     margin: 0 auto;
   }
  .choose_time{
    width: 100%;
    display: flex;
    padding: 0.1rem 0;
    border-bottom: 1px solid gainsboro;
  }
   .choose_time>span{
     display: inline-block;
     line-height: 0.3rem;
   }
   #choose_options{
     display: inline-block;
     width: 1.8rem;
     height: 0.3rem;
     line-height: 0.3rem;
     border: none;
     outline: none;
   }
   #option_item{
     width: 0.2rem;
     border: none;
     display: block;
     font-size: 0.14rem;
    text-align: center;
   }
  .choose_submit{
    width: 100%;
    padding: 0.1rem 0;
  }
  .choose_submit>div{
    width: 35%;
    line-height: 0.35rem;
    text-align: center;
    margin: 0 auto;
    background-color: #00ba73;
    border-radius: 0.1rem;
    height: 35px;
  }
  .onMsg{
    width: 100px;
    height: 40px;
    /* background-color: red; */
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    font-family: cursive;
    font-weight: bold;
  }
  .iconfont{
    font-size: 0.24rem;
  }
</style>
