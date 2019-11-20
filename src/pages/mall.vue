<template>
    <div>
      <headerr></headerr>
      <div style="display: flex">
        <mall-left   :items="items" style="width: 30%;margin-top: 50px;margin-bottom: 60px;"></mall-left>
        <mall-right :currentRight="currentRight" style="width: 75%;flex-wrap: wrap;margin-top: 50px;margin-bottom: 60px;"></mall-right>
      </div>
	  <navbar></navbar>
    </div>

</template>
<script>
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
      data() {
          return {
              items: [
                  {
                      msg: "一类",

                  },
                  {
                      msg: "二类",

                  },
                  {
                      msg: "三类",

                  },
                  {
                      msg: "四类",

                  },
                  {
                      msg: "五类",

                  },
                  {
                      msg: "六类",

                  },
                  {
                      msg: "七类",
                  },
                  {
                      msg: "八类",
                  },
                  {
                      msg: "九类",
                  },
                  {
                      msg: "十类",
                  },
              ],
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
