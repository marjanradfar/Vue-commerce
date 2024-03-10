<template>
  <div class="newsletter">
    <img :src="data.img" class="back">
    <div class="newsletter__content">
      <div class="newsletter__content--title">
        <h1 class="extraMediumText">{{ data.title }}</h1>
        <p class="extraSmallText">{{data.subTitle}}</p>
      </div>
      <div class="newsletter__content--input">
        <div class="email">
          <img id="logo" class="svg" src="../../assets/image/icon/email.svg" alt="Some awesome company"/>
          <input type="email" placeholder="آدرس ایمیل">
        </div>
        <span class="singUp">ثبت نام</span>
      </div>
    </div>
  </div>

</template>
<script setup>
const props = defineProps(["data"]);

</script>