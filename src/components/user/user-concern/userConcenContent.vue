<template>

    <van-tabs v-model="active">
  <van-tab title="关注商品">
      <van-card
      :key="key" v-for="(q,key) in list"
      num="1"
      :price="q.goods.price"
      :desc="q.goods.standards"
      :title="q.goods.goods_name"
      :thumb="q.goods.url"
      >

      <div slot="tags">
        <van-tag plain type="danger">{{q.goods.goods_name}}</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">购买</van-button>
        <van-button size="mini" @click="remove(key,q.goods.goods_id)">删除</van-button>
      </div>

</van-card>
  </van-tab>

      <van-tab title="关注医生">
        <div class="user-right" :key="i" v-for="(o,i) in last">
          <div>
            <div class="photo"><img :src="o.d.d_head" alt=""></div>
            <p>{{o.d.d_name}}</p>
          </div>
          <van-button round type="info" size="small" class="haha" @click="dadadada(i,o.d.d_id)">取消关注</van-button>
        </div>
      </van-tab>
</van-tabs>
</template>
<script>
import { Tab, Tabs,Card,Tag,Button,Switch,Notify} from 'vant';
export default {
    name:"userContentContent",
    data() {
    return {
        active: 0,
        list:"",

        last:""
    };
  },
    components:{
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        [Card.name]:Card,
        [Tag.name]:Tag,
        [Button.name]:Button,
        [Switch.name]:Switch,
        [Notify.name]:Notify
    },
    methods:{
        //所有商品
        concen(){
            this.$axios.post('http://122.112.231.109:5000/user/follow_allgoods/',{ u_id:6})
                .then(result=>{
                    this.list=result.data.data.followed_goods
                    console.log(this.list)
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        //所有医生
        user(){
            this.$axios.post('http://122.112.231.109:5000/user/follow_alldoctors/',{ u_id:6})
                .then(result=>{
                    this.last=result.data.data.followed_doctors
                    console.log(result.data)
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        //删除商品
        remove(key,id){
            this.$axios.post('http://122.112.231.109:5000/user/disfollow_goods/',{ u_id:6,goods_id:id})
                .then(result=>{
                    console.log(result.data.status)
                    if(result.data.status==200){
                        this.list.splice(key,1);
                        Notify({ type: 'success', message:'删除成功'});
                    }else{
                        Notify({ type: 'success', message:'删除失败'});
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        //取消关注医生
        dadadada(i,z){
            this.$axios.post('http://122.112.231.109:5000/user/disfollow_doctor/',{ u_id:6,d_id:z})
                // console.log(z)
                .then(result=>{
                    console.log(result.data.status)
                    if(result.data.status==200){
                        this.last.splice(i,1);
                        Notify({ type: 'success', message:'取消关注成功'});
                    }else{
                        Notify({ type: 'success', message:'取消关注失败'});
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }

        // removeone(i){
        //     this.last.splice(i,1);
        //     Notify({ type: 'success', message:'取消关注成功'});
        // }
    },
    mounted() {
        this.concen()
        this.user()
    }
}
</script>
<style scoped>
.van-switch{
  margin-top: 15px;
}
.user-right{
  display: flex;
  justify-content: space-around;
  line-height: 50px;
  margin-top: 10px;
}
.haha{
  margin-top:10px;
}
.photo{
  width: 50px;
  height: 50px;
}
.user-right>div>div>img{
  width: 100%;
  border-radius: 50%;
}
.user-right>div{
  display: flex;
}
</style>
