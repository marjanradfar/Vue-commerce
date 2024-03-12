<template>
  <div class="newArrivals__wrapper--cart">
    <div class="imgCartContainer">
      <img class="imgCart" :src="data.imgProduct" />
      <div class="discountNew">
        <Button :text="data.btnNEW" className="btnNEW"/>
        <Button :text="data.btnDiscount" className="btnDiscount"/>
      </div>
      <Button :text="data.btnAddToCard" className="btnAddToCard btnBlack"/>
    </div>
    <div class="content">
      <div class="content__rating">
        <img :src="rate.imgRating" v-for="(rate , id) in data.rate " :key="id">
      </div>
      <span class="content__title">{{data.title}}</span>
      <div class="content__price">
        <span class="content__price--main smallLightText">{{data.priceMain}}</span>
        <span class="content__price--off smallLightText">{{data.priceOff}}</span>
      </div>
    </div>
  </div>

</template>

<script setup>

import Button from  "../common/Button.vue";
const props = defineProps(["data"]);

</script>
