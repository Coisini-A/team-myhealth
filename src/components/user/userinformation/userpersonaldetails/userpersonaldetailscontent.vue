<template>
  <div>
    <van-field
      v-model="name"
      type="string"
      label="姓名"
      placeholder="请输入密码"
      required
    />
    <van-field
      v-model="top"
      type="string"
      label="身高"
      placeholder="请输入密码"
      required
    />
    <van-field
      v-model="kg"
      type="number"
      label="体重"
      placeholder="请输入密码"
      required
    />
    <van-radio-group v-model="radio" class="radioo">
      <van-radio name="1">男</van-radio>
      <van-radio name="2" class="left">女</van-radio>
    </van-radio-group>
  </div>
</template>
<script>
import { Field , RadioGroup, Radio } from 'vant';
export default {
    name:"userpersonaldetailscontent",
    components:{
        [Field.name]:Field,
        [RadioGroup.name]:RadioGroup,
        [Radio.name]:Radio
    },
    data(){
        return{
            name:"",
            top:"",
            kg:"",
            radio:""
        }
    }
}
</script>
<style>
  .radioo{
    display: flex;
    height:0.5rem;
    margin-left:0.15rem;
  }
  .left{
    margin-left:0.5rem;
  }
</style>
