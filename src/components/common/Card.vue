<template>
  <div class="newArrivals__wrapper--cart">
    <div class="imgCartContainer">
      <img class="imgCart" :src="data.img" />
      <div class="discountNew">
        <Button :text="data.btnNEW" className="btnNEW"/>
        <Button :text="data.btnDiscount" className="btnDiscount"/>
      </div>
      <Button :text="data.btnAddToCard" className="btnAddToCard"/>
    </div>
    <div class="content">
      <div class="content__rating">
        <img src="../../assets/image/icon/starFill.svg">
        <img src="../../assets/image/icon/starFill.svg">
        <img src="../../assets/image/icon/starFill.svg">
        <img src="../../assets/image/icon/starFill.svg">
      </div>
      <span class="content__title">مبل صندلی دوست داشتنی</span>
      <div class="content__price">
        <span class="content__price--main smallLightText">$199.00</span>
        <span class="content__price--off smallLightText">$400.00</span>
      </div>
    </div>
  </div>

</template>

<script setup>
import Button from  "../common/Button.vue";
const props = defineProps(["data"]);

</script>
