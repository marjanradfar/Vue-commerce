<template>
  <div class="wrapperCard">
    <div class="wrapperCard__imgContainer">
      <img class="wrapperCard__imgContainer--imgCard" :src="data.imgProduct" />
      <div class="discountNew">
        <Button :text="data.btnNew" className="btnNew"/>
        <Button :text="data.btnDiscount" className="btnDiscount"/>
      </div>
      <Button :text="data.btnAddToCard" className="btnAddToCard btnBlack"/>
    </div>
    <div class="wrapperCard__content">
      <div class="wrapperCard__content--rating">
        <img :src="rate.imgRating" v-for="(rate , id) in data.rate " :key="id">
      </div>
      <span class="wrapperCard__content--title">{{data.title}}</span>
      <div class="wrapperCard__content--price">
        <span class="priceMain smallLightText">{{data.priceMain}}</span>
        <span class="priceOff smallLightText">{{data.priceOff}}</span>
      </div>
    </div>
  </div>

</template>

<script setup>

import Button from  "../common/Button.vue";
const props = defineProps(["data"]);

</script>
