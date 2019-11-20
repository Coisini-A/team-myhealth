<template>
<div>
    <user-order-header></user-order-header>
    <user-order-content></user-order-content>
</div>

</template>
<script>
import userOrderHeader from "../components/user/UserOrder/userOrderHeader"
import userOrderContent from "../components/user/UserOrder/userOrderContent"
export default {
    name:"user-order",
    components:{
        "user-order-header":userOrderHeader,
        "user-order-content":userOrderContent
    }
}
</script>
<style scoped>

</style>
