<template>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
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
                searchResult: []
            }
        },
        methods: {
            onSave() {
                Toast('已保存');
                this.$router.push("/addresslist");
            },
            onDelete() {
                Toast('已删除');
                this.$router.push("/addresslist");
            }
        }
    }
</script>

<style scoped>

</style>
