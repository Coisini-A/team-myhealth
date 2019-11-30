<template>
  <div class="UserInFormationContent">
    <div>

      <van-cell is-link @click="showPopup" class="UserInFormationContent-div"><p class="UserInFormationContent-P1">{{HeadSetting}}</p></van-cell>

      <van-popup v-model="show">


        <van-uploader
          v-model="fileList"
          :max-count="1"
          captrue="camera"
          :after-read="afterRead"
          accept="image/jpg/png/gif"
          preview-size="100px"
          multiple
          class="haha"
        />





      </van-popup>
    </div>
    <div>
      <p class="UserInFormationContent-set" @click="detailedinformation">编辑信息<van-icon name="arrow"  class="color"/></p>
    </div>



    <div>
      <div class="UserInFormationContent-P4" @click="usernewpassword">
        <span>{{p4name}}<van-icon name="arrow"  class="color"/></span>
      </div>

    </div>

    <div>
      <div class="UserInFormationContent-P5">
        <span>{{p5name}}<van-icon name="arrow"  class="color-b"/></span>
      </div>

    </div>
    <p class="UserInFormationContent-P7"></p>
    <p class="UserInFormationContent-P6" @click="heer">
      <span>{{p6name}}</span>
    </p>

    <p class="UserInFormationContent-P8">
      <span>{{p8name}}</span>
    </p>

    <div>
      <div class="UserInFormationContent-P9">
        <span>{{p9name}}</span>
      </div>

    </div>

    <p class="UserInFormationContent-P10"></p>
    <p class="UserInFormationContent-P11" @click="Land">
      <span>{{p11name}}</span>
    </p>
    <p class="UserInFormationContent-P12"></p>
    <p class="UserInFormationContent-P13" @click="remove">
      <span>{{p13name}}</span>
    </p>
  </div>
</template>

<script>
    import { Popup,cell,Rate,Uploader,Icon,Notify } from 'vant';
    import user from "../../../pages/user";
    export default {
        name: "UserInFormationContent",
        components:{
            [Popup.name]:Popup,
            [cell.name]:cell,
            [Rate.name]:Rate,
            [Uploader.name]:Uploader,
            [Icon.name]:Icon,
            [Notify.name]:Notify
        },
        data(){
            return{
                HeadSetting:"头像设置",
                p4name:"修改密码",
                p5name:"隐私",
                p6name:"我的收获地址",
                p8name:"问题反馈",
                p9name:"关于Myhealth",
                p11name:"切换账号",
                p13name:"退出登录",
                show: false,
                value: 3,
                fileList: [],
                multiple:false

            }
        },
        methods: {
            Land(){
              this.$router.push("/LoginPage")
                localStorage.clear()
            },
            showPopup() {
                this.show = true;
            },
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            heer(){
                this.$router.push("/addresslist");
            },
            usernewpassword(){
                this.$router.push("/usernewpassword");
            },
            detailedinformation(){
                this.$router.push("/UserPersonalDetails");
            },
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                var userid=localStorage.getItem("user_id");
                this.$axios.post('http://122.112.231.109:5000/user/head/',{files:file.content,u_id:userid})
                    .then(result=>{
                        if(result.data.status==200){
                            console.log(result.data)
                            localStorage.setItem("img",file.content)
                            Notify({ type: 'success', message:'更换头像成功' });
                        }else{
                            Notify({ type: 'danger', message: '更换头像失败' });
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            remove(){
                var haha=localStorage.getItem("user_id")
                console.log(haha)
                this.$axios.post('http://122.112.231.109:5000/user/logout/',{ u_id:haha})
                    .then(result=>{
                      
                        if(result.data.status==200){
                            Notify({ type: 'success', message:'退出成功' });
                            console.log(result.data)
                            this.$router.push("/LoginPage");
                            localStorage.clear()
                        }else{
                            Notify({ type: 'danger', message: '退出失败' });
                        }
                    })
            }
        }
    }
</script>

<style scoped>
  .UserInFormationContent-P1{
    font-weight:900;
    position: absolute;
    left:0.1rem;
  }
  .UserInFormationContent-P2 span{
    font-weight:900;
    position: absolute;
    left:0.1rem;
  }
  .UserInFormationContent-div{
    display: flex;
    justify-content:space-around;
    border-bottom: 2px solid seashell;
    border-top: 2px solid seashell;
  }
  .UserInFormationContent-div img{
    margin-left:1.5rem;
    width:10%;
  }
  .UserInFormationContent-P4{
    height:0.5rem;
    font-weight:900;
    border-bottom: 2px solid seashell;
    line-height: 0.5rem;
    font-size:14px;
  }
  .UserInFormationContent-P4 span{
    margin-left:0.27rem;
  }
  .UserInFormationContent-P4 img{
    width:10%;
    position:absolute;
    right:0.2rem;
  }
  .UserInFormationContent-P5{
    height:0.5rem;
    font-size:14px;
    font-weight:900;
    border-bottom: 2px solid seashell;
    line-height: 0.5rem;
  }
  .UserInFormationContent-P5 span{
    margin-left:0.27rem;
  }
  .UserInFormationContent-P5 img{
    width:10%;
    position:absolute;
    right:0.2rem;
  }
  .UserInFormationContent-P6{
    height:0.5rem;
    font-size:14px;
    font-weight:900;
    line-height:0.5rem;
    border-bottom:2px solid seashell;
    text-align: center;
  }
  .UserInFormationContent-P6 img{
    width:10%;
    position:absolute;
    right:0.2rem;
  }
  .UserInFormationContent-P7{
    height:0.15rem;
    background: darkkhaki;
  }
  .UserInFormationContent-P8{
    height:0.5rem;
    font-size:14px;
    font-weight:900;
    line-height:0.5rem;
    border-bottom: 2px solid seashell;
    text-align: center;
  }

  .UserInFormationContent-P8 img{
    width:10%;
    position:absolute;
    right:0.2rem;
  }
  .UserInFormationContent-P9{
    height:0.5rem;
    font-size:14px;
    font-weight:900;
    line-height: 0.5rem;
    text-align: center;
  }
  .UserInFormationContent-P10{
    height:0.15rem;
    background: darkkhaki;
  }
  .UserInFormationContent-P11{
    height:0.4rem;
    font-size:14px;
    font-weight:900;
    line-height:0.4rem;
    background: antiquewhite;
    color: darkred;
  }
  .UserInFormationContent-P11 span{
    margin-left:1.6rem;
  }
  .UserInFormationContent-P12{
    height:0.15rem;
    background: darkkhaki;
  }
  .UserInFormationContent-P13{
    height:0.4rem;
    font-size:14px;
    font-weight:900;
    line-height:0.4rem;
    background: antiquewhite;
    color: darkred;
  }
  .UserInFormationContent-P13 span{
    margin-left:1.6rem;
  }
  .UserInFormationContent-set{
    height: 0.5rem;
    line-height:0.5rem;
    font-weight: 900;
    font-size:14px;
    border-bottom:2px solid seashell;
    padding-left:0.27rem;
  }
  .color{
    color:#9D9999;
    left:2.55rem;
    font-size:0.164rem;
  }
  .color-b{
    color:#9D9999;
    left:2.82rem;
    font-size:0.164rem;
  }
  .haha{
    margin-left: 10px;
    margin-top: 10px;
  }
</style>
