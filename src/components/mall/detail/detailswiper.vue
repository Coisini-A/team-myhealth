<template>
<div class="detail-show">
  <van-swipe @change="onChange" class="mall-swiper">
  <van-swipe-item><span><img src="../../../../static/mallimg/QQ图片20191119155438.png"/></span></van-swipe-item>
  <van-swipe-item><span><img src="../../../../static/mallimg/QQ图片20191119155438.png"/></span></van-swipe-item>
  <van-swipe-item><span><img src="../../../../static/mallimg/QQ图片20191119155438.png"/></span></van-swipe-item>
  <van-swipe-item><span><img src="../../../../static/mallimg/QQ图片20191119155438.png"/></span></van-swipe-item>
 
	  <div class="custom-indicator" slot="indicator" >
		   <div>
	   {{ current + 1 }}/4
	  </div>
 </div>
  
</van-swipe>
</div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  data() {
    return {
      current: 0
    }
  },
  components:{
	  [Swipe.name]:Swipe,
	  [SwipeItem.name]:SwipeItem
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
</script>
<style scoped>
.detail-show img{
		width:90%;
		height:2.3rem;
		margin-left:5%;
	}
	span{
	width: 100%;
    height: 2.5rem;
    display: block;
	}
	.custom-indicator{
	/* background-color: pink; */
    padding-left: 85%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2.82rem;
    line-height:3;
	}
</style>