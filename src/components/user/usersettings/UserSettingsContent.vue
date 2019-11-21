<template>
    <div class="usertwocontent">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="页面切换效果" name="1">
            <p class="usertwocontent-p1">左右切换<van-switch v-model="checked1" active-color="#07c160" inactive-color="#ee0a24" class="usertwocontent-v"/></p>
            <p class="usertwocontent-p1">上下切换<van-switch v-model="checked2" active-color="#07c160" inactive-color="#ee0a24" class="usertwocontent-m"/></p>
        </van-collapse-item>
        <van-collapse-item title="轮播图切换效果" name="2">
            <p class="usertwocontent-p1">横切换<van-switch v-model="checked3" active-color="#07c160" inactive-color="#ee0a24" class="usertwocontent-z"/></p>
            <p class="usertwocontent-p1">竖切换<van-switch v-model="checked4" active-color="#07c160" inactive-color="#ee0a24" class="usertwocontent-k"/></p>
            <p class="usertwocontent-p1">立体切换<van-switch v-model="checked5" active-color="#07c160" inactive-color="#ee0a24" class="usertwocontent-t"/></p>
        </van-collapse-item>
      </van-collapse>
    </div>
</template>

<script>
    import { Collapse, CollapseItem,Switch } from 'vant';
    export default {
        name: "UserSettingsContent",
        components:{
            [Collapse.name]:Collapse,
            [CollapseItem.name]:CollapseItem,
            [Switch.name]:Switch
        },
        data(){
            return{
                activeName: '1',
                checked1: false,
                checked2:false,
                checked3:false,
                checked4:false,
                checked5:false
            }
        },
        methods: {
            onInput(checked) {
                Dialog.confirm({
                    title: '提醒',
                    message: '是否切换开关？'
                }).then(() => {
                    this.checked = checked;
                });
            }
        }
    }
</script>

<style scoped>
  .usertwocontent-p1{
    width:100%;
    height:0.5rem;
    border-bottom:1px solid silver;
    line-height:0.5rem;
  }
  .usertwocontent-v{
    left:2.2rem;
    top:0.1rem;
  }
  .usertwocontent-m{
    left:2.2rem;
    top:0.1rem;
  }
  .usertwocontent-z{
    left:2.3rem;
    top:0.1rem;
  }
  .usertwocontent-k{
    left:2.3rem;
    top:0.1rem;
  }
  .usertwocontent-t{
    left:2.175rem;
    top:0.1rem;
  }
</style>
