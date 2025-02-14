<template>
  <div class="sort">
    <div class="sort__title">
      <h2>همه اتاق ها</h2>
      <!--      <SingleSelect :data="dataSort" className="selectSort"/>-->
    </div>
    <div class="sort__container">

      <div class="sort__container--selectInput">
        <SingleSelect :data="dataSort" className="selectSort"/>
        <!--        <Button text="فیلتر" :imgSrc=filterIcon className="btnFilter" @click="toggleFilter"/>-->
      </div>

      <div class="sort__container--display">
        <div class="displayIcons" v-for="(icon , index)  in sortDisplay" :key="index">
          <img :src="icon.img"/>
        </div>

      </div>

    </div>

  </div>
  <Filter v-if="isOpen" class="filterOpen"/>
</template>
<script setup>
import filterIcon from "@/assets/image/icon/filter.svg";
import SingleSelect from "@/components/common/SingleSelect.vue";
import Button from "@/components/common/Button.vue";
import Tollbar1 from "@/assets/image/icon/Toolbar1.svg";
import Tollbar2 from "@/assets/image/icon/Toolbar2.svg";
import Tollbar3 from "@/assets/image/icon/Toolbar3.svg";
import Tollbar4 from "@/assets/image/icon/Toolbar4.svg";
import Filter from "@/components/Filter.vue";

// open component filter
import {ref} from 'vue';
import Reviews from "@/components/section/Reviews.vue";

const isOpen = ref(false);
const toggleFilter = () => {
  isOpen.value = !isOpen.value;
};


const dataSort = {
  SingleSelect: [
    {option: "مرتب سازی"},
    {option: "همه اتاق ها"},
    {option: "هال"},

  ]
}


const sortDisplay = [
  {img: Tollbar1},
  {img: Tollbar2},
  {img: Tollbar3},
  {img: Tollbar4},
]
</script>