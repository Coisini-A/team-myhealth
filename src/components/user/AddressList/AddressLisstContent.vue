<template>

  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :last="last"
      columns-num
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
    import { AddressList, Toast,Notify} from 'vant';
    export default {
        name: "AddressLisstContent",
        components:{
            [AddressList.name]:AddressList,
            [Toast.name]:Toast,
            [Notify.name]:Notify
        },
        data() {
            return {
                query:null,
                chosenAddressId: '1',
                message:"",
                last:[

                ],
                list: [
                    // {
                    //     name: '邓楠',
                    //     tel: '13679124645',
                    //     address: '未央区 138 号东方通信大厦 7 楼 501 室',
                    //     id:''
                    // },
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
                        query:{ newitem:item,index:index}
                    })
                console.log(item)
            },
            //查询地址
            _queryaddress(){
                var userid=localStorage.getItem("user_id");
                this.$axios.post('http://122.112.231.109:5000/user/all_address/',{u_id:userid})
                    .then(result=>{
                        console.log(result.data.data)
                        if(result.data.status==200){
                            var arr=result.data.data.alladdr
                            for ( var index in arr){
                                this.list.push({
                                    name:arr[index].user_name,
                                    tel:arr[index].user_tel,
                                    address:arr[index].detail_address,
                                    id:arr[index].a_id
                                })
                            }
                            Notify({ type: 'success', message:'查询收获成功'});
                        }else if(result.data.status==300){
                            Notify({ type: 'success', message:'暂无收货地址'});
                        }else {
                            Notify({ type: 'warning', message: '请登录' });
                        }

                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
        },
        created() {
            var query=this.$route.query
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
