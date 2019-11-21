<template>
    <div id="UserSettingsHeader">
      <div class="UserSettingsHeader-top">
      </div>
      <div  class="UserSettingsHeader-portrait">
        <img :src="headportrait" alt="" @click="userfour">
      </div>
      <span class="name">
      {{msgone}}
    </span>
      <span class="UserSettingsHeader-accountnumber">
      用户ID:
      {{msgtwo}}
    </span>
      <div class="setup" @click="update">
        <img :src="sup" width="60%" alt="">
      </div>
    </div>
</template>

<script>
    import { Popup, Uploader, ImagePreview} from 'vant';
    export default {
        name: "userHeader",
        components:{
            [Popup.name]:Popup,
            [Uploader.name]:Uploader,
            [ImagePreview.name]:ImagePreview
        },
        data(){
            return{
                msgone:"用户名",
                msgtwo:"007",
                sup:"../../../static/user-images/Set up.png",
                headportrait:"../../../static/user-images/Default head.jpg",
            }
        },
        methods:{
            update(){
                this.$router.push("/usersettings")
            },
            userfour(){
                this.$router.push("/userinformation")
            }
        }
    }
</script>

<style scoped>
  #UserSettingsHeader{
    width:100%;
    height:1.9rem;
    font-size:14px;
  }
  .UserSettingsHeader-top{
    width:100%;
    height:1.9rem;
    background-image: url("../../../static/user-images/userheader.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.5;
    position:relative;
  }
  .UserSettingsHeader-portrait{
    width:0.8rem;
    height:0.8rem;
    position:absolute;
    top: 0.5rem;
    left:0.4rem;
  }
  .UserSettingsHeader-portrait img{
    width:100%;
  }
  .name{
    position:absolute;
    top: 0.65rem;
    left:1.6rem;
    font-weight:900;
  }
  .setup{
    width:0.5rem;
    position: absolute;
    top:0.15rem;
    right:0.01rem;
  }
  .UserSettingsHeader-accountnumber{
    position:absolute;
    top: 1.05rem;
    left:1.6rem;
    font-weight:900;
  }
</style>
