<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-area="onChangeDetail"
      :address-info="list"
    />
  </div>
</template>

<script>
    import { AddressEdit,Area,Toast } from 'vant';
    import areaList from '../../../../../static/Area.json'
    export default {
        name: "AddressEditorContent",
        components:{
            [AddressEdit.name]:AddressEdit,
            [Area.name]:Area,
            [Toast.name]:Toast,
            [areaList.name]:areaList
        },
        data() {
            return {
                areaList,
                dada:[],
                lala:[],
                list:{
                    name:"",
                    tel:"",
                    province:[],
                    city:[],
                    addressDetail:"",
                    areaCode:"",
                    areaCode:"",
                    isDefault:true,
                    index:[]
                }
            }
        },
        methods: {
            onChangeDetail(w){
                this.dada=parseInt(w[0].code)
                this.lala=parseInt(w[1].code)
            },
            onSave(a) {
                this.$axios.post('http://122.112.231.109:5000/user/alter_address/',{u_id:14,a_Id:this.index,provinceid:this.dada,cityid:this.lala,detail_address:this.addressDetail,user_name:this.name,user_tel:this.tel,is_default:this.isDefault})
                    .then(result=>{
                        console.log(result.data)
                        if(result.data.status==200){
                            this.$router.push({
                                path:"/addresslist",
                                query:{id:a}
                            })
                            Toast('已修改收货地址');
                        }else if(result.data.status==300){
                            Toast('收货地址不存在');
                        }else{
                            Toast("修改收货地址失败");
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            _newitem(){
                var query=this.$route.query.newitem
                this.list.name=query.name
                this.list.tel=query.tel
                this.list.addressDetail=query.address
                this.index=query.index
            },
        },
        mounted() {
            this._newitem()
        }
    }
</script>

<style scoped>

</style>

