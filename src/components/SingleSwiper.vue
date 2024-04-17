<template>
  <swiper
      :scssMode="true"
      :pagination="data.pagination"
      :navigation="data.navigation"
      :mousewheel="false"
      :keyboard="true"
      :modules="modules"
      class="mySwiper swiperSingleImg"
  >
    <swiper-slide v-for="(slide, index) in data.items" key="index" class="swiperSingleImg__slide">
      <img :src="slide.img"/>
    </swiper-slide>
    <!--Add navigation buttons-->
    <div class="swiper-button-prev" @click="prevSlide">
      <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
    </div>
    <div class="swiper-button-next" @click="nextSlide">
      <img src="../assets/image/icon/swiper arrow/arrow-right.svg"/>

    </div>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';

//import img
// import btnNext from "../assets/image/icon/left-arrow.svg"
const props = defineProps(["data"]);
const modules = [Navigation, Pagination, Mousewheel, Keyboard];


const prevSlide = () => {
  const swiper = document.querySelector('.swiperSingleImg').swiper;
  swiper.slidePrev();
};

const nextSlide = () => {
  const swiper = document.querySelector('.swiperSingleImg').swiper;
  swiper.slideNext();
};
</script>