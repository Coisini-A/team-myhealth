<template>
  <div>
    <div class="user-box" :key="key" v-for="(i,key) in 6">
      <div class="haha">
        <div class="photo">
          <img src="../../../../static/user-images/Default head.jpg" alt="">
        </div>

        <div class="lala">
          <div>12:23</div>
          <h3>就是脚手架Jakarta看</h3>
          <p>萨达撒多所阿达萨达萨达萨达萨达阿萨德阿斯顿撒阿达阿达萨达萨达撒多阿萨德萨达撒的的撒大萨达撒大萨达萨达萨达阿萨德萨达萨达阿萨德萨达撒大</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name:"userNewsContent",
        data(){
            return{
                list:[
                    {

                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .user-box{
    border: 1px solid gray;
    width: 90%;
    margin: 20px auto;
    height: 100px;
    background: white;
    border-radius: 10px;
  }
  .photo{
    width: 100px;
    height: 100px;
  }
  .photo>img{
    width: 100%;
    border-radius: 50%;
  }
  /* .user-box>div{
      display: flex
  } */
  .haha{
    display: flex;
  }
  .haha>div>p{
    display: block;
    width: 276px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .haha>div>h3{
    font-size: 20px;
    font-weight: 900;
  }
  .haha>div>div{
    text-align: right;
  }
  .lala{
    line-height: 30px;
  }
</style>
