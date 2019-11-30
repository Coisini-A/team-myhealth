<template>
  <div style="background-color: #F5F5F5">
    <headerr></headerr>
    <div style="display: flex">
      <mall-left  @num="num" :data="goodSort" style="width: 25%;
    margin-top: 50px;
    margin-bottom: 50px"></mall-left>
      <mall-right  :data="goodInfo" style="display: flex;
    width: 75%;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  margin-left: 0.95rem;"></mall-right>
    </div>
    <navbar></navbar>
  </div>

</template>
<script>
    import {TreeSelect} from 'vant';
    import headerr from "../components/mall/headerr";
    import mallLeft from "../components/mall/mallLeft";
    import mallRight from "../components/mall/mallRight";
    import navbar from "../common/nav-bar";
    export default {
        name: "mall",
        components: {
            headerr,
            mallLeft,
            mallRight,
            navbar,
        },
        data(){
            return{
               goodInfo:"",//所有商品
                goodSort:""//所有分类
            }
        },
        methods:{
            num(i){
                this.i=i
            },
            getGoodsSort(){
                this.$axios.get(this.HOST+"/goods/goodstype/")
                    .then(result=>{
                        this.goodInfo=result.data.data.allgoods
                        this.goodSort=result.data.data.goodstype
                        // window.console.log(result.data.data)
                        // window.console.log(this.goodInfo)
                        // window.console.log(this.goodSort)

                    })
            },


        },
        mounted(){
            this.getGoodsSort()

        },
    }
</script>
<style lang="less" scoped>

</style>
