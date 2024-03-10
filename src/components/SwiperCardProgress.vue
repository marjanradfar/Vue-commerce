<template>
  <swiper
      :freeMode="true"
      :pagination="{
      type: 'progressbar',
    }"
      :slides-per-view="dataItems.slidesPerView"
      :space-between="dataItems.spaceBetween"
      :breakpoints="dataItems.breakpoints"
      :modules="modules"
      class="mySwiper swiperCard"
  >
    <swiper-slide v-for="(card , index) in dataItems.swiperItems" :key="index">
      <card :data="card" :name="dataItems.name"/>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import card from "../components/common/Card.vue"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import {FreeMode, Pagination} from 'swiper/modules';

const modules = [FreeMode, Pagination];

const props = defineProps(["dataItems", "breakpoints"]);

</script>
