<template>

  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :last="last"
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
                last:[

                ],
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
                    this.$router.push("/addressmodify")
                    // this.list.push("/addresseditor")
                    this.$router.push({
                        path:"/addressmodify",
                        query:{ newitem:item}
                    })
            },

            //查询地址
            _queryaddress(){
                var that=this
                this.$axios.post('http://122.112.231.109:5000/user/all_address/',{ u_id:14})
                    .then(result=>{
                        var that=this
                        // console.log(result.data.data.alladdr)
                        var arr=result.data.data.alladdr
                        console.log(arr)
                        for ( var index in arr){
                            console.log(arr[index])
                            this.list.push({
                                name:arr[index].user_name,
                                tel:arr[index].user_tel,
                                address:arr[index].detail_address,

                            })
                            console.log(name)
                        }


                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
        },
        created() {
            var query=this.$route.query
            console.log(query)
            this.query=query

        },
        mounted() {
            if (this.$route.query.id) {
                this.updateAddress()
            }
            this._queryaddress()
        }
    }
</script>

<style scoped>

</style>
