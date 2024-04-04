<template>
  <Breadcrumbs class="container"/>
  <div class="product container">
    <div class="product__details">
      <p class="extraMediumText">میز سینی</p>
      <p class="smallText">یکی بخرید یا چند تا بخرید و هر فضایی را که می نشینید راحت تر کنید. جابجایی سبک و آسان با رویه سینی قابل جابجایی
        که برای سرو تنقلات مفید است.</p>
    </div>
    <div class="product__img">
      <div class="product__img--swiperImg">
        <SingleSwiper :data="imgProduct"/>
        <div class="discountNew">
          <Button text="جدید" className="btnNEW"/>
          <Button text="-50%" className="btnDiscount"/>
        </div>
      </div>
      <ul class="product__img--smallImg">
        <li class="item" v-for="item in imgProduct.smallImg">
          <img :src="item.img"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
//import components
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import SingleSwiper from "../components/SingleSwiper.vue";
import Button from "../components/common/Button.vue"

//import img
import TrayTable from "../assets/image/product/TrayTable.png";
import One from "../assets/image/product/one.png"
import Two from "../assets/image/product/two.png"
import Three from "../assets/image/product/three.png"

const imgProduct = {
  navigation:false,
  pagination: true,
  mousewheel: false,
  items: [
    {img: TrayTable},
    {img: TrayTable},
    {img: TrayTable},
  ],
  smallImg: [
    {img: Three},
    {img: Two},
    {img: One},
  ]
}
</script>