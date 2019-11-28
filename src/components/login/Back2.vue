<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:38:40
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-12 09:08:06
 * @Description: 返回上一页组件
 -->
<template>
    <div class="back">
         <div class="out">
            <img src="../../assets/logo.png">
            <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Back2',
    data (){
        return {
            title: "登录"
        }
    },
}
</script>

<style scoped>
 .back{
    width: 100%;
    position: fixed;
}
.out{
    width: 100%;
    height: 2.7rem;
    position: relative;
}
 .out img{
    width:.7rem;
    height:.7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.back p{
    height: .5rem;
    margin: 0.15rem auto;
    font-size: .17rem;
    color: #262626;
    text-align: center;
}
</style>
