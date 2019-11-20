<template>
    <div class="user-box">
        <div>
            <div>
                <router-link to="/user">
                    <span><img src="../../../../static/user-images/Return.png" alt=""></span>
                </router-link>
                <p>订单信息</p>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:"userOrderHeader",
}
</script>
<style lang="less" scoped>
.user-box>div{
        width:100%;
        border-bottom: 1px solid;
        display: flex;
        justify-content: space-between;
    }
    .user-box>div span{
      width: 35px;
      height: 40px;
      margin: 5px 5px;
      display: block;
    }
    .user-box>div>div{
        display: flex;
        line-height: 60px;
    }
    .user-box img{
        width: 80%;
        margin-top: 0.1rem
    }
    .user-box{
        background: white;
    }
</style>
