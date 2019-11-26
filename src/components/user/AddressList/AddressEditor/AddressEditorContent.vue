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
                // console.log(w)
                this.dada=w[0].code
                this.lala=w[1].code

            },
            onSave(a) {
                Toast('已保存');
                this.$axios.post('http://122.112.231.109:5000/user/add_address/',{ u_id:6,p_id:this.dada,c_id:this.lala,d_addr:a.addressDetail,u_name:a.name,u_tel:a.tel,is_default:a.isDefault})
                    .then(result=>{
                        console.log(result.data)
                        console.log(this.lala)

                        console.log(a.addressDetail)

                        console.log(a.name)

                        console.log(a.tel)
                        console.log(a.isDefault)



                    })
                    .catch(err=>{
                        console.log(err)
                    })
                this.$router.push({
                    path:"/addresslist",
                    query:{id:a}
                })
            },
            onDelete() {
                Toast('已删除');
                this.$router.push("/addresslist");
            },

        }
    }
</script>

<style scoped>

</style>
