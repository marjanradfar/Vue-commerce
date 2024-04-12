<template>
  <div class="banner" :class="className">
    <img :src="data.img" class="back">
    <div class="banner__content">
      <div class="banner__content--title">
        <h1 class="extraMediumText">{{ data.title }}</h1>
        <p class="extraSmallText">{{ data.subTitle }}</p>
      </div>
      <div class="banner__content--input">
        <Input :data="data.input" className="email" v-if="data.input"/>
        <span class="singUp" v-if="!!data.click">{{ data.click }}</span>
      </div>
    </div>
  </div>

</template>
<script setup>
//import img

//import components
import Input from "@/components/common/Input.vue";

const props = defineProps(["data", "className"]);

</script>