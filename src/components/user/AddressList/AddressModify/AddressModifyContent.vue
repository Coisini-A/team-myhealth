<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
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
                lala:[]
            }
        },
        methods: {
            onChangeDetail(w){
                this.dada=parseInt(w[0].code)
                this.lala=parseInt(w[1].code)
            },
            onSave(a) {

                this.$axios.post('http://122.112.231.109:5000/user/add_address/',{u_id:14,provinceid:this.dada,cityid:this.lala,detail_address:a.addressDetail,user_name:a.name,user_tel:a.tel,is_default:a.isDefault})
                    .then(result=>{
                        if(status==200){
                            this.$router.push({
                                path:"/addresslist",
                                query:{id:a}
                            })
                            Toast('已保存');
                        }else{
                            Toast('保存失败');
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })

            },
            onDelete() {
                Toast('已删除');
                this.$router.push("/addresslist");
            },
            // _newitem(){
            //     var query=this.$route.query.newitem
            //     console.log(query)
            //     this.list.push({
            //         name:query.name,
            //         tel:query.tel,
            //         address:query.address,
            //     })
            //     console.log(name)
            // }
        },
        // mounted() {
        //     this._newitem()
        // }
    }
</script>

<style scoped>

</style>

