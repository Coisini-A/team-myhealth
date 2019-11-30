<!--&lt;!&ndash;-->
<!-- * @Author: CoolWind-->
<!-- * @Date: 2019-11-07 19:38:15-->
<!-- * @LastEditors: CoolWind-->
<!-- * @LastEditTime: 2019-11-12 08:41:32-->
<!-- * @Description:-->
<!-- &ndash;&gt;-->
<template>
    <div class="box">
        <Back2></Back2>
        <Login></Login>
    </div>
</template>

<script>
import Back2 from '../components/login/Back2';
import Login from '../components/login/Login';

export default {
    name: 'LoginPage',
    data(){
        return {}
    },
    components: {
        Back2,
        Login
    }
}
</script>

<style scoped>
.box {
  height: 100%;
  background-image: url(../assets/huise2.jpeg);
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
