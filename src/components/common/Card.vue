<template>
  <div class="wrapperCard">
    <div class="wrapperCard__imgContainer">
      <img class="wrapperCard__imgContainer--imgCard" :src="data.imgProduct" />
      <div class="discountNew" v-if="!!data.btnNew && !!data.btnDiscount">
        <Button :text="data.btnNew" className="btnNew" />
        <Button :text="data.btnDiscount" className="btnDiscount" />
      </div>
      <Button :text="data.btnAddToCard" className="btnAddToCard btnBlack" v-if="!!data.btnAddToCard"/>
    </div>
    <div class="wrapperCard__content ">
      <div class="wrapperCard__content--rating" v-if="!!data.rate">
        <img :src="rate.imgRating" v-for="(rate , id) in data.rate " :key="id" >
      </div>

      <p class="wrapperCard__content--title">{{data.title}}</p>
      <div class="wrapperCard__content--price">
        <span class="priceMain smallLightText" v-if="!!data.priceMain">{{data.priceMain}}</span>
        <span class="priceOff smallLightText" v-if="!!data.priceOff">{{data.priceOff}}</span>
        <span class="date" v-if="!!data.date">{{data.date}}</span>
      </div>
    </div>
  </div>

</template>

<script setup>

import Button from  "../common/Button.vue";
const props = defineProps(["data"]);

</script>
