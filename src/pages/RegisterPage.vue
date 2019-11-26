<!--
 * @Author: CoolWind
 * @Date: 2019-11-07 19:38:15
 * @LastEditors：
 * @LastEditTime: 2019-11-19 22:21:48
 * @Description:
 -->
<template>
    <div class="box">
        <Back></Back>
        <Register></Register>
    </div>
</template>

<script>
import Back from '../components/login/Back';
import Register from '../components/login/Register';

export default {
    name: 'RegisterPage',
    data(){
        return {}
    },
    components: {
        Back,Register
    }
}
</script>

<style scoped>

</style>
