<template>
  <div class="aaaa">
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
    import { CouponCell, CouponList, Popup} from 'vant';
    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    };
    export default {
        name: "UserCardPackageContent",
        components:{
            [CouponCell.name]:CouponCell,
            [CouponList.name]:CouponList,
            [Popup.name]:Popup
        },
        data(){
            return{
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon],
                showList:false
            }
        },
        methods: {
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            }
        }
    }
</script>

<style scoped>
  .aaaa{
    background-image: url("../../../../static/user-images/back.jpg");
  }
</style>
