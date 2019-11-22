<template>
    <div class="inquiry-content">
        <div class="inquiry-content_title">
            <img src="" alt="">
        </div>
        <div class="inquiry-content_context">
            <ul>
              <li><span class="iconfont">&#xe607;</span>当前地址:</li>
              <li class="addressItem">{{selectProvince}}</li>
              <li class="addressItem">{{selectCity}}</li>
            </ul>
          <van-button type="primary" @click="isShow" icon="star-o">选择</van-button>
        </div>
        <div class="select_h">
          <span style="margin-right: 0.1rem">选择医院  : </span>
          <select name="" id="" style="display: block; width: 1.2rem">
            <option value="" selected>请选择</option>
            <option value="" selected>1</option>
            <option value="" selected>2</option>
          </select>
        </div>
        <div class="inquiry-content_list">
            <ul>
              <li>
                <div class="list_item_left">
                    <div>医生照片<img src="" alt=""></div>
                     <p>医生名字</p>
                </div>
                <div class="list_item_right">
                   <div class="list_item_right_title">
                     <span>医生所属医院</span>
                     <span>医生所属科室</span>
                   </div>
                    <div class="list_item_right_desc">
                        医生的一点详细信息
                      <span>次数</span>
                    </div>
                  <div class="list_item_right_desc_button">
                    <button type="button" @click="showToast">收藏</button>
                    <button type="button" @click="goAppointment(1)">咨询预约</button>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <!--        地址选择隐藏栏-->
        <van-popup v-model="show" position="bottom" :overlay="false">
          <van-area
            :area-list="areaList"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            :columns-num="2"
            title="请选择地址"
            @cancel="selectCancel"
            @confirm="selectConfirm"
          />
        </van-popup>
    </div>
</template>

<script>
  import {Area,Popup,Button,Toast} from "vant"
  import AreaList from "../../../static/inquiry/address"
    export default {
        name: "inquiry-content.vue",
        components:{
            [Area.name]:Area,
            [Popup.name]:Popup,
            [Button.name]:Button,
            [Toast.name]:Toast,
        },
        data(){
            return{
                areaList:AreaList,
                show:false,
                selectProvince:"北京市",
                selectCity:"北京市",
            }
        },
        methods:{
            isShow(){
                this.show=!this.show
            },
            //点击取消时
            selectCancel(){
               this.show=false;
               // window.console.log( this.selectProvince,this.selectCity)
            },
            //点击确定时
            selectConfirm(a){
                if(a[0]!=undefined&&a[1]!=undefined){
                   if(a[0].name!=""&&a[1].name!=""){
                       this.show=false
                       this.selectProvince = a[0].name
                       this.selectCity = a[1].name
                       // window.console.log( this.selectProvince,this.selectCity)
                   }
                }

            },
            //收藏成功
            showToast(){
                this.$toast({
                    message: '收藏成功',
                    icon: 'like'
                })
            },
            goAppointment(i){
                this.$router.push("./appointment?id="+i)
            }

        }
    }
</script>

<style scoped>
    .inquiry-content{
      width: 100%;
      margin-top: 0.5rem;
    }
    .inquiry-content_title{
      width: 100%;
      height:1.5rem;
      background-color: salmon;
    }
    .inquiry-content_context{
      width: 100%;
      padding: 0.1rem 0;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid gainsboro;
    }
  .inquiry-content_context>ul{
    display: flex;
    width: 75%;
  }
  .inquiry-content_context>ul>li{
    display: block;
    height: 0.44rem;
    text-align: center;
    line-height: 0.45rem;
  }
    .inquiry-content_context>ul>li:nth-child(1){
        width: 35%;
      margin-right: 0.05rem;
    }
    .inquiry-content_context>ul>li:nth-child(1)>span{
      display: inline-block;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #5FFFBA;
    }
  .addressItem{
    box-sizing: border-box;
    width: 31%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .select_h{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .inquiry-content_list{
    width: 100%;
    padding-top: 0.1rem;
    border-top: 1px solid gainsboro;
  }
    .inquiry-content_list>ul{
      width: 95%;
      margin: 0 auto;
    }
    .inquiry-content_list>ul>li{
      display: flex;
      width: 100%;
      margin: 0.05rem 0;
      justify-content: space-between;
    }
  .list_item_left{
      width: 25%;
    height: 100%;
    background-color: #5FFFBA;
  }
    .list_item_left>div{
      width: 100%;
      background-color: yellowgreen;
      height: 1rem;
    }
    .list_item_left>p{
      width: 100%;
      text-align: center;
      line-height: 0.3rem;
    }
  .list_item_right{
    width: 73%;
    background-color: salmon;
  }
  .list_item_right_title{
    width: 100%;
    line-height: 0.3rem;
  }
  .list_item_right_desc{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
  }
    .list_item_right_desc>span{
      position: absolute;
      display: block;
      right: 0;
      top: 0;
    }
  .list_item_right_desc_button{
    width: 100%;
    display: flex;
    height: 0.5rem;
  }
</style>
