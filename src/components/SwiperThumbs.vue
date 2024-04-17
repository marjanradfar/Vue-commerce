<template>
  <div class="swiperThumbs">
    <swiper
        :pagination="data.pagination"
        :spaceBetween="data.spaceBetween"
        :navigation="data.navigation"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2 swiperThumbs__Thumbs"
    >
      <swiper-slide v-for="(slide, index) in data.items" key="index" class="swiperThumbs__Thumbs--slide">
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
    <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper swiperThumbs__thumbnails"
    >
      <swiper-slide v-for="(slide, index) in data.thumbs" key="index" class="swiperThumbs__thumbnails--slide">
        <img :src="slide.img" class="item"/>
      </swiper-slide>


    </swiper>
  </div>
</template>
<script setup>
import {ref} from 'vue';
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

// import required modules
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs];
const props = defineProps(["data"]);


const prevSlide = () => {
  const swiper = document.querySelector('.swiperThumbs__Thumbs').swiper;
  swiper.slidePrev();
};

const nextSlide = () => {
  const swiper = document.querySelector('.swiperThumbs__Thumbs').swiper;
  swiper.slideNext();
};

</script>
