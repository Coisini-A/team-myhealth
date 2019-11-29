<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      :address-info="list"
      @change-area="onChangeDetail"
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
                    isDefault:false,
                    // index:[],
                    id:[]
                }
            }
        },
        methods: {
            onChangeDetail(w){
                this.dada=parseInt(w[0].code)
                this.lala=parseInt(w[1].code)
            },
            onSave(a) {
                var userid=localStorage.getItem("user_id");
                var useridd=parseInt(userid)
                this.$axios.post('http://122.112.231.109:5000/user/alter_address/',{u_id:useridd,provinceid:this.dada,cityid:this.lala,detail_address:a.addressDetail,user_name:a.name,user_tel:a.tel,is_default:a.isDefault,a_id:a.id})
                    .then(result=>{
                        console.log(result.data)
                        if(result.data.status==200){
                            this.$router.push({
                                path:"/addresslist",
                                query:{id:a}
                            })
                            this.$router.push("/addresslist")
                            Toast('已保存');
                        }else{
                            Toast('保存失败');
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
                // this.list.index=query.index
                this.list.id=query.id
                // console.log(query)
            },
        },
        mounted() {
            this._newitem()
        }
    }
</script>
<style scoped>

</style>

