<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/navigation' // 轮播图两边的左右箭头
import 'swiper/css/scrollbar'  // 轮播图的滚动条
// 引入swiper核心和所需模块
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar]
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
const pagination = { clickable: true }
const bannerList = ref([])
// 获取轮播图数据
const getBanner = async () => {
  const res = await getBannerAPI()
  console.log(res)
  bannerList.value = res.result
}
// 调用轮播图数据
onMounted(() => getBanner())
</script>



<template>
  <div class="home-banner">
    <swiper class="mySwiper" style="height: 500px;" :modules="modules"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="pagination">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>

    </swiper>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
    cursor: pointer
  }


}
</style>