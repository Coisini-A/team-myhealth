<template>

  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    @add="onAdd"
    @edit="onEdit"
  />
</template>

<script>
    import { AddressList, Toast} from 'vant';
    export default {
        name: "AddressLisstContent",
        components:{
            [AddressList.name]:AddressList,
            [Toast.name]:Toast
        },
        data() {
            return {
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '邓楠',
                        tel: '13679124645',
                        address: '陕西省西安市未央区 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '刘攀龙',
                        tel: '18129743023',
                        address: '陕西省西安市高新区 南窑头 50 号'
                    }
                ],
                disabledList: [
                    {
                        id: '3',
                        name: '王五',
                        tel: '1320000000',
                        address: '浙江省杭州市滨江区江南大道 15 号'
                    }
                ]
            }
        },

        methods: {
            onAdd() {
                Toast('新增地址');
                this.$router.push("/addresseditor")
            },
            onEdit(item, index) {
                Toast('编辑地址:' + index);
                this.$router.push("/addresseditor")
            }
        }
    }
</script>

<style scoped>

</style>
