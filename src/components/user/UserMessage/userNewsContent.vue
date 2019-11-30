<template>
  
  <div>
    <div :key="i" v-for="(q,i) in list" class="news">
        <van-panel :title="q.un_titile" :status="q.un_time" class="newsone">
          <div class="haha">{{q.un_text}}</div>
        </van-panel>  
      </div>
  </div>

  

</template>

<script>
import { Panel } from 'vant';
    export default {
        name:"userNewsContent",
        data(){
            return{
                list:""
            }
        },
        components:{
            [Panel.name]:Panel
        },
        methods:{
          news(){
            var userid=localStorage.getItem("user_id");
              this.$axios.post('http://122.112.231.109:5000/user/all_notice/',{u_id:userid})
                  .then(result=>{
                          // console.log(result.data.data.messages)
                          this.list=result.data.data.messages
                          console.log(this.list)
                  })
                  .catch(err=>{
                      console.log(err)
                  });
          }
        },
        mounted(){
          this.news()
        }
    }
</script>

<style scoped>
  .news{
    padding: 10px;
  }
  .newsone{
    border-radius: 40px;
    padding: 20px;
  }
  .van-cell{
    font-size: 17px;
    font-weight: bold;
  }
</style>
