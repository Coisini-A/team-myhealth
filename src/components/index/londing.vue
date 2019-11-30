<template>
    <div class="indexlonding" ref="lond">
        <div class="num">{{time}}</div>
        <img src="../../../static/indexImg/top.jpg" alt="#">
        <img src="../../../static/indexImg/bot.jpg" alt="#">
    </div>
</template>
<script>
export default {
    data(){
        return{
            time:5
        }
    },
    methods:{
        _number(){
            let time=setInterval(()=>{
                // if(this.time<1){
                //     clearInterval(time)
                // }
                this.time=--this.time
                if(this.time<1){
                    clearInterval(time);
                    this.$emit('over')
                    this.$refs.lond.style.display = "none";
                    sessionStorage.setItem("londFlage",true);
                }
            },1000)
        }
    },
    mounted(){
        this._number()
    },
    

}
</script>
<style lang="less" scoped>
.indexlonding{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #B6E7F6;
    z-index: 10000;
    >.num{
        width:.6rem;
        height: .3rem;
        background-color: rgb(223, 217, 210);
        position: absolute;
        top:.3rem;
        right: .3rem;
        line-height: .3rem;
        border-radius: .1rem;
        text-align: center;
    }
    >img{
        width: 100%;
        border:none;
        display: block;
    }
}
</style>