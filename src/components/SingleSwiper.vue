<template>
  <swiper
      :scssMode="true"
      :navigation="{clickable: true}"
      :pagination="data"
      :mousewheel="data"
      :keyboard="true"
      :modules="modules"
      class="mySwiper singleImg"
  >
    <swiper-slide v-for="(slide, index) in data" key="index" class="singleImg__slide">
      <img :src="slide.img"/>
    </swiper-slide>
    <!--    Add navigation buttons-->
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

const props = defineProps(["data"]);
const modules = [Navigation, Pagination, Mousewheel, Keyboard];

</script>