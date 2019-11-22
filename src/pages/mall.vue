<template>
  <div>
    <headerr></headerr>
    <div style="display: flex">
      <mall-left   :items="items" @num="num" style="width: 30%;
    margin-top: 50px;
    margin-bottom: 50px;"></mall-left>
      <mall-right :items="items[i]" style="display: flex;
    width: 75%;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 25%;
    position: fixed;"></mall-right>
    </div>
    <navbar></navbar>
  </div>

</template>
<script>
    import {TreeSelect} from 'vant';
    import headerr from "../components/mall/headerr";
    import mallLeft from "../components/mall/mallLeft";
    import mallRight from "../components/mall/mallRight";
    import navbar from "../common/nav-bar";
    export default {
        name: "mall",
        components: {
            headerr,
            mallLeft,
            mallRight,
            navbar
        },
        methods:{
            num(i){
                this.i=i
            }
        },
        data() {
            return {
                i:0,
                items: [
                    {
                        msg: "家庭常备",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "消化不良",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "皮肤病",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "维矿物质",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "滋补保健",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "风湿骨病",

                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "中医理疗",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "男性健康",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "女性健康",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                    {
                        msg: "医疗器械",
                        currentRight:[
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"阿莫西林胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"止咳糖浆"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"999感冒灵"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺胶囊"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"健胃消食片"
                            },
                            {
                                img:"../static/mallimg/1.jpg",
                                name:"复方氨酚烷胺片"
                            },
                        ],
                    },
                ],
                // currentRight:[
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"健胃消食片"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"阿莫西林胶囊"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"止咳糖浆"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"999感冒灵"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"复方氨酚烷胺胶囊"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"健胃消食片"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"健胃消食片"
                //     },
                //     {
                //         img:"../static/mallimg/1.jpg",
                //         name:"复方氨酚烷胺片"
                //     },
                // ],
                // created() {
                //     this.currentRight = this.right[0];
                // },
                // methods: {
                //     classifyChange(index) {
                //         this.currentRight = this.right[index];
                //         console.log(this.currentRight);
                //     }
                // }
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
