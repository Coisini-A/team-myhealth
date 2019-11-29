<template>
    <div id="UserSettingsHeader">
      <div class="UserSettingsHeader-top">
      </div>
      <div  class="UserSettingsHeader-portrait">
        <img :src="headportrait?headportrait:newimg" alt="">
      </div>
      <span class="name">用户ID:{{msgone?msgone:msgtwo}}</span>
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
                msgone:"",
                sup:"../../../static/user-images/Set up.png",
                headportrait:"",
                newimg:"../../../static/user-images/Default head.jpg",
                msgtwo:"暂无登陆"
            }
        },
        methods:{
            update(){
                this.$router.push("user/usersettings")
            },
        },
        beforeMount() {
            var a=localStorage.getItem("img");
            this.headportrait=a
            var b=localStorage.getItem("user_id");
            this.msgone=b
        }
    }
</script>

<style scoped>
  #UserSettingsHeader{
    width:100%;
    height:1.9rem;
    font-size:14px;

    background-image: url("../../../static/user-images/back.jpg");
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
    height:100%;
    border-radius:50%;
    margin-left:1.1rem;
  }
  .name{
    position:absolute;
    top:1.5rem;
    left:1.4rem;
    font-weight:900;
  }
  .setup{
    width:0.5rem;
    position: absolute;
    top:0.15rem;
    right:0.01rem;
  }
</style>
