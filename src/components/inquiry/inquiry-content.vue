<template>
    <div class="inquiry-content">
        <div class="inquiry-content_title">

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
          <span>选择医院  : </span>
          <select name="" v-model="select1" @change="getHID(select1)">
            <option value="" >请选择</option>
            <option :value="n.h_id" v-for="(n,i) in hospitalsInfo " :key="i">{{n.hname}}</option>
          </select>
          <span>选择科室  : </span>
          <select name=""  v-model="select2" @change="getRID(select2)">
            <option value="">请选择</option>
            <option :value="n.room_id" v-for="(n,i) in dartInfo " :key="i">{{n.roomname}}</option>
          </select>
        </div>
        <div class="inquiry-content_list">
            <ul>
              <li v-for="(n,i) in doctorInfo" :key="i">
                <div class="list_item_left">
                    <div><img :src="n.d_head" alt=""></div>
                     <p>{{n.d_name}}</p>
                </div>
                <div class="list_item_right">
                   <div class="list_item_right_title">
                     <span>姓名：</span>
                     <span>{{n.d_relname}}</span>
                   </div>
                    <div class="list_item_right_desc">
                        {{n.d_skill}}
                    </div>
                  <span>预约次数:{{n.is_order}}</span>
                  <div class="list_item_right_desc_button">
                    <button type="button" @click="showToast(n.d_id,i)">{{info}}</button>
                    <button type="button" @click="goNext(n.d_id)">咨询预约</button>
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
                select1:"",
                select2:"",
                hospitalsInfo:"",//医院信息
                hospitalsId:"",//医院id
                dartInfo:"",//科室信息
                dartId:"",//科室id
                doctorInfo:"",//医生信息,
                doctorId:"",//医生id
                flag:true,
                info:"关注",
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
                       let num =parseInt(a[1].code)
                       window.console.log(num)
                       this.$axios.post(this.HOST+"/doctor/hospitals/",{"cityid":num})
                           .then(result=>{
                               // window.console.log(result.data)
                               this.hospitalsInfo=result.data.data.hospitals
                                 // window.console.log(this.hospitalsInfo)
                           })
                       this.show=false
                       this.selectProvince = a[0].name
                       this.selectCity = a[1].name
                   }
                }

            },
            //选择医院以后获取医院id,查找科室的信息
            getHID(num){
                this.hospitalsId=parseInt(num)
                // window.console.log(this.hospitalsId);
                this.$axios.post(this.HOST+"/doctor/rooms/",{"h_id":parseInt(this.hospitalsId)})
                    .then(result=>{
                        // window.console.log(result.data)
                        this.dartInfo=result.data.data.rooms
                        // window.console.log(this.dartInfo)
                    })
            },
            //选择科室以后、获取科室id、来进行查找科室里面医生的信息
            getRID(num){
                this.dartId=parseInt(num)
               // window.console.log(this.dartId);
                this.$axios.post(this.HOST+"/doctor/doctors/",{"room_id":parseInt(this.dartId)})
                    .then(result=>{
                        // window.console.log(result.data)
                        this.doctorInfo=result.data.data.rooms
                        // window.console.log(this.doctorInfo)
                        // window.console.log(this.doctorId)
                    })
            },
            //收藏成功
            showToast(num){//num是医生id
                // window.console.log(num);
                //此处localstorage获取用户id
                let u_id = localStorage.getItem("user_id");
                //收藏
                if(this.flag==true){
                    window.console.log(u_id,num)
                    this.$axios.post(this.HOST+"/user/follow_doctor/",{"u_id":u_id,"d_id":num})
                        .then(result=>{
                            window.console.log(result.data)
                            if(result.data.status==200){
                                this.$toast({
                                    message: '关注成功',
                                    icon: 'like',
                                })
                            }
                        })
                    this.info="已关注"
                }else{
                    this.$axios.post(this.HOST+"/user/disfollow_doctor/",{"u_id":u_id,"d_id":num})
                        .then(result=>{
                            // window.console.log(result.data)
                            if(result.data.status){
                                this.$toast({
                                    message: '取消关注成功',
                                    icon: 'success'
                                })
                            }
                        })
                    this.info="关注"
                }
                this.flag=!this.flag


            },
            goNext(i){//跳转至预约页
                // window.console.log(1)
                this.$router.push("/appointment?id="+i)
            },
            //初始获取北京的医院信息
            getBJHinfo(){
                    // window.console.log(1)
                    this.$axios.get(this.HOST+"/doctor/default/")
                        .then(result=>{
                            // window.console.log(result.data)
                            this.doctorInfo=result.data.data.doctors
                        })



            },

        },
        mounted() {
          this.getBJHinfo()
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
      height:1.8rem;
      background-image: url("../../../static/inquiry/bg.png");
      background-size: 100% 100%;
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
  .select_h>span{
    font-size: 0.14rem;
    margin: 0;
  }
  .select_h>select{
    display: block;
    width: 1rem
  }
  .inquiry-content_list{
    width: 100%;
    padding-top: 0.1rem;
    border-top: 1px solid gainsboro;
    margin-bottom: 1rem;
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
  }
    .list_item_left>div{
      width: 100%;
      height: 1rem;
    }
    .list_item_left>div>img{
      width: 100%;
      height: 100%;
    }
    .list_item_left>p{
      width: 100%;
      text-align: center;
      line-height: 0.3rem;
    }
  .list_item_right{
    width: 73%;
    position: relative;
  }
  .list_item_right>span{
    position: absolute;
    top: 0.5rem;
    right: 0.05rem;
    font-size: 0.14rem;
  }
  .list_item_right_title{
    width: 100%;
    line-height: 0.3rem;
  }
  .list_item_right_desc{
    width:70%;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
    font-size: 0.14rem;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
    .list_item_right_desc>span{
      position: absolute;
      display: block;
      right: -0.85rem;
      font-size: 0.14rem;
      top: 0;
    }
  .list_item_right_desc_button{
    width: 100%;
    display: flex;
    height: 0.5rem;
  }
</style>
