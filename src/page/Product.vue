<template>
  <Breadcrumbs class="container"/>
  <div class="product container">
    <div class="product__details">
      <div class="product__details--infoProduct">
        <p class="extraMediumText">میز سینی</p>
        <p class="smallText">یکی بخرید یا چند تا بخرید و هر فضایی را که می نشینید راحت تر کنید. جابجایی سبک و آسان با
          رویه سینی قابل جابجایی
          که برای سرو تنقلات مفید است.</p>
        <div class="product__details--price">
          <span class="discountedPrice mediumLightText">199.000</span>
          <span class="originalPrice mediumLightText">400.00</span>
        </div>
        <hr/>
      </div>
      <div class="product__details--offer">
        <span>Offer expires in:</span>
      </div>
      <hr/>
      <div class="product__details--productSize">
        Measurements
      </div>
      <div class="product__details--productColor">
        Choose Color
        <div class="colorProduct__nameColor">black</div>
        <div class="colorProduct__thumbnails">
          <img :src="img.img" v-for="img in thumbnails"/>
        </div>
      </div>
      <div class="product__details--Wishlist">
        
      </div>
    </div>

    <div class="product__img">
<!--      <div class="product__img&#45;&#45;swiperImg">-->
<!--        <SingleSwiper :data="imgProduct"/>-->
<!--        <div class="discountNew">-->
<!--          <Button text="جدید" className="btnNew"/>-->
<!--          <Button text="-50%" className="btnDiscount"/>-->
<!--        </div>-->
<!--      </div>-->
<!--      <ul class="product__img&#45;&#45;smallImg">-->
<!--        <li class="item" v-for="item in imgProduct.smallImg">-->
<!--          <img :src="item.img"/>-->
<!--        </li>-->
<!--      </ul>-->
      <Thumbs :data="swiperThumbnails"/>

    </div>

  </div>
</template>
<script setup>
//import components
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import Button from "../components/common/Button.vue"

//import img
import TrayTable from "../assets/image/product/TrayTable.png";
import One from "../assets/image/product/one.png";
import Two from "../assets/image/product/two.png";
import Three from "../assets/image/product/three.png";

//import img thumbnails
import  thumb1 from "../assets/image/product/TrayTableBeige.png";
import  thumb2 from "../assets/image/product/TrayTableBeigeRed.png";
import  thumb3 from "../assets/image/product/TrayTableBeigeWhite.png";

//import component
import Thumbs from "../components/swiperThumbs.vue";

// const imgProduct = {
//   navigation: true,
//   pagination: true,
//   mousewheel: false,
//   items: [
//     {img: TrayTable},
//     {img: TrayTable},
//     {img: TrayTable},
//   ],
//   smallImg: [
//     {img: Three},
//     {img: Two},
//     {img: One},
//   ]
// }

const swiperThumbnails = {
  spaceBetween: 10,
  navigation: true,
  pagination:true,
  items: [
    {img: Three},
    {img: Two},
    {img: One},
  ],
  thumbs: [
    {img: Three},
    {img: Two},
    {img: One},
  ]
}

const thumbnails =[
  {img:thumb1},
  {img:thumb2},
  {img:thumb3},
]
</script>