<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:38:40
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-12 08:46:06
 * @Description: 返回上一页组件
 -->
<template>
    <div class="back">
        <div class="out">
            <p>注册MyHealth账户</p>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Back',
    data (){
        return {
            title: "注册账号"
        }
    },
    methods: {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.back{
    width: 100%;
    position: fixed;
}
.out{
    width: 100%;
    height: 0.5rem;
    box-sizing: border-box;
    padding: 0 .125rem;
}
.back img{
    width: 100%;
    position: absolute;
    left: 0.1rem;
    top: .15rem;
    display: block;
}
.back p{
    margin: 0.15rem auto;
    font-size:0.2rem;
    color: #262626;
    text-align: center;
}

</style>