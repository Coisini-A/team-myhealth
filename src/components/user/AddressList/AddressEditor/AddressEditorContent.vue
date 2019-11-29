<template>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change-area="onChangeDetail"
        :list="list"
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
                list:[
                    {
                        name: '邓楠',
                        tel: '13679124645',
                        address: '陕西省西安市未央区 138 号东方通信大厦 7 楼 501 室'
                    },
                ]
            }
        },
        methods: {
            onChangeDetail(w){
                this.dada=parseInt(w[0].code)
                this.lala=parseInt(w[1].code)
            },
            onSave(a) {
                var userid=localStorage.getItem("user_id");
                this.$axios.post('http://122.112.231.109:5000/user/add_address/',{u_id:userid,provinceid:this.dada,cityid:this.lala,detail_address:a.addressDetail,user_name:a.name,user_tel:a.tel,is_default:a.isDefault})
                    .then(result=>{
                        console.log(result.data)
                        if(result.data.status==200){
                            this.$router.push({
                                path:"/addresslist",
                                query:{id:a}
                            })
                            Toast('已保存收获地址');
                        }else if(result.data.status==300){
                            Toast('没有此用户无法添加收获地址');
                        }else{
                            Toast('保存收货地址失败');
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
    }
</script>

<style scoped>

</style>
