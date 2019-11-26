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
        <van-button size="mini" @click="remove(key)">删除</van-button>
      </div>
</van-card>
  </van-tab>

      <van-tab title="关注医生">


        <div class="user-right" :key="i" v-for="(o,i) in last">
          <div>
            <div class="photo"><img :src="o.d.d_head" alt=""></div>
            <p>{{o.d.d_name}}</p>
          </div>
          <van-button round type="info" size="small" class="haha" @click="removeone(i)">取消关注</van-button>
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
        price:"",
        last:"",
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
        user(){
            this.$axios.post('http://122.112.231.109:5000/user/follow_alldoctors/',{ u_id:6})
                .then(result=>{
                    this.last=result.data.data.followed_doctors
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        remove(key){
            this.list.splice(key,1);
            Notify({ type: 'success', message:'删除成功'});
        },
        removeone(i){
            this.last.splice(i,1);
            Notify({ type: 'success', message:'取消关注成功'});
        }
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
