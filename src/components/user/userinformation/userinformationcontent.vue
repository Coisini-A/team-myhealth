<template>
  <div class="UserInFormationContent">
    <div>
      <van-cell is-link @click="showPopup" class="UserInFormationContent-div">
          <p class="UserInFormationContent-P1">{{HeadSetting}}</p>
      </van-cell>
      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '20%' }"
      />
    </div>
    <div>
      <van-cell is-link @click="showPopup" class="UserInFormationContent-P2">
        <span>{{name}}</span>
      </van-cell>
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '30%' }"
      />
    </div>

      <p class="UserInFormationContent-P3"></p>
    <div>
      <van-cell is-link @click="showPopup" class="UserInFormationContent-P4">
        <span>{{p4name}}</span>
      </van-cell>
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '20%' }"
      />
    </div>

      <div>
        <van-cell is-link @click="showPopup" class="UserInFormationContent-P5">
          <span>{{p5name}}</span>
        </van-cell>
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '20%' }"
        />
      </div>

      <p class="UserInFormationContent-P6">
        <span>{{p6name}}</span>
      </p>
      <p class="UserInFormationContent-P7"></p>
      <p class="UserInFormationContent-P8">
        <span>{{p8name}}</span>
      </p>

      <div>
        <van-cell is-link @click="showPopup" class="UserInFormationContent-P9">
          <span>{{p9name}}</span>
        </van-cell>
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '20%' }"
        />
      </div>

      <p class="UserInFormationContent-P10"></p>
      <p class="UserInFormationContent-P11">
        <span>{{p11name}}</span>
      </p>
    <p class="UserInFormationContent-P12"></p>
    <p class="UserInFormationContent-P13">
      <span>{{p13name}}</span>
    </p>
  </div>
</template>

<script>
    import { Popup,cell,Rate,Uploader  } from 'vant';
    export default {
        name: "UserInFormationContent",
        components:{
            [Popup.name]:Popup,
            [cell.name]:cell,
            [Rate.name]:Rate,
            [Uploader.name]:Uploader
        },
        data(){
            return{
                HeadSetting:"头像设置",
                name:"姓名",
                p4name:"账户与安全",
                p5name:"隐私",
                p6name:"我的收获地址",
                p8name:"问题反馈",
                p9name:"关于Myhealth",
                p11name:"切换账号",
                p13name:"退出登录",
                show: false,
                value: 3,
                fileList: []

            }
        },
        methods: {
            showPopup() {
                this.show = true;
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
  .img{
    position:absolute;
    right:0.2rem;
  }
  .UserInFormationContent-div img{
    margin-left:1.5rem;
    width:10%;
  }
  .UserInFormationContent-P3{
    height:0.15rem;
    background: darkkhaki;
  }
  .UserInFormationContent-P4{
    height:0.5rem;
    font-weight:900;
    border-bottom: 2px solid seashell;
  }
  .UserInFormationContent-P4 span{
    margin-left:0.1rem;
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
  }
  .UserInFormationContent-P5 span{
    margin-left:0.1rem;
  }
  .UserInFormationContent-P5 img{
    width:10%;
    position:absolute;
    right:0.2rem;
  }
  .UserInFormationContent-P6{
    height:0.4rem;
    font-size:14px;
    font-weight:900;
    line-height:0.4rem;
  }
  .UserInFormationContent-P6 span{
    margin-left:0.3rem;
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
    height:0.4rem;
    font-size:14px;
    font-weight:900;
    line-height:0.4rem;
    border-bottom: 2px solid seashell;
  }
  .UserInFormationContent-P8 span{
    margin-left:0.3rem;
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
  }
  .UserInFormationContent-P9 span{
    margin-left:0.1rem;
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
</style>
