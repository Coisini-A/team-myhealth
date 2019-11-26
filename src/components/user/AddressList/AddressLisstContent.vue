<template>

  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      columns-num
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
    import { AddressList, Toast} from 'vant';
    export default {
        name: "AddressLisstContent",
        components:{
            [AddressList.name]:AddressList,
            [Toast.name]:Toast,
        },
        data() {
            return {
                query:null,
                chosenAddressId: '1',
                message:"",
                list: [
                    {
                        name: '邓楠',
                        tel: '13679124645',
                        address: '陕西省西安市未央区 138 号东方通信大厦 7 楼 501 室'
                    },

                ]
            }
        },
        methods: {
            updateAddress(){
              this.list.push({
                  name:this.query.id.name,
                  tel:this.query.id.tel,
                  address:this.query.id.province+this.query.id.addressDetail,
              })
            },
            onAdd() {
                Toast('新增地址');
                this.$router.push("/addresseditor")
            },
            onEdit(item, index) {
                Toast('编辑地址:' + index);
                this.$route.push("/addresseditor")
                this.list.push("/addresseditor")
            }

        },
        created() {
            var query=this.$route.query
            console.log(query)
            this.query=query
            // this.updateAddress()
        },
        mounted() {
            if (this.$route.query.id) {
                this.updateAddress()

            }
        }
    }
</script>

<style scoped>

</style>
