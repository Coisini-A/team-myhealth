<template>
  <div class="indexQuestionnairePage">
    <p>
      <span>姓名：</span>
      <input type="text" v-model="name" />
    </p>
    <p>
      <span>性别：</span>
      <input type="radio" v-model="sex" name="sex" value=1 /> 男
      <input type="radio" v-model="sex" name="sex" value=0 />女
    </p>
    <p>
      <span>身高：</span>
      <input type="text" v-model="height" />
    </p>
    <p>
      <span>体重：</span>
      <input type="text" v-model="weight" />
    </p>
    <p class="tips">{{tips}}</p>
    <p class="button">
      <button @click="_post">确认提交</button>
    </p>
    <p class="Qback"><button  @click="back">返回首页</button></p>
  </div>
</template>

<script>
import Bus from '../../router/Bus';
export default {
  data() {
    return {
      height: "",
      weight: "",
      id: "",
      name: "",
      sex: "",
      tips: ""
    };
  },
  methods: {
    back(){
      Bus.$emit('flageChange');
      this.$router.push({path:'/index'})
    },
    _post() {
      this.tips =''
      this.id =
        sessionStorage.getItem("user_id") || localStorage.getItem("user_id");
      if(this.id ==null){
        this.tips ='请登录'
      }
      else if (
        this.height != "" &&
        this.weight != "" &&
        this.id != "" &&
        this.name != "" &&
        this.sex != ""
      ) {
        let data = {
          u_id: this.id,
          u_name: this.name,
          u_sex: this.sex,
          u_height: this.height,
          u_weight: this.weight
        };
        // window.console.log(data);
        Bus.$emit('post',data)
      } else {
        this.tips = "请输入正确信息";
      }
    }
  }
};
</script>
<style  scoped>
.indexQuestionnairePage {
  height: 4.5rem;
  padding: 1rem 0 1rem;
  width: 100%;
}
.indexQuestionnairePage > p {
  margin: 0.05rem 0;
}
.indexQuestionnairePage > p > span {
  display: inline-block;
  width: 1.2rem;
  text-align: right;
}
.indexQuestionnairePage > p > input {
  border: none;
}
.tips{
  color: red;
  font-size: 0.12rem;
  text-align: center;
  height: 0.2rem;
  line-height:0.2rem;
}
.button {
  text-align: center;
}
.button > button {
  background: white;
}
.Qback{
  text-align: center;
}
.Qback>button{
   background: white;
}
</style>