<template>
  <div class="shop container">
    <Banner :data="dataBannerShop"/>
    <div class="shop__containerSingleSelect">
      <SingleSelect :data="dataCategories"/>
      <SingleSelect :data="dataPrice"/>
    </div>
    <div class="shop__products">
      <Card :data="data" v-for="(data , index) in dataShopProducts " :key="index"/>
    </div>
  </div>
</template>


<script setup>

//import components
import Banner from "@/components/Banner.vue";
import Card from "@/components/common/Card.vue";
import SingleSelect from "@/components/common/SingleSelect.vue";

//import img
import BannerShop from "../assets/image/banner/bannerShop.png"
import SingleSofa from "../assets/image/products/singleSofa.png"

//import icon
import star from "../assets/image/icon/starFill.svg"
import Star from "@/assets/image/icon/starFill.svg";

//import data
const dataBannerShop = {
  img: BannerShop,
  title:"فروشگاه",
  subTitle:"بیایید مکانی را که همیشه تصور می کردید طراحی کنیم."
};

const dataCategories = {
  title:"دسته بندی ها",
  SingleSelect:[
    {option:"دسته بندی ها"},
    {option:"همه اتاق ها"},
    {option:"هال"},
    {option:"اتاق خواب"},
    {option:"آشپزخانه"},
    {option:"حمام"},
    {option:"ناهار خوری"},
    {option:"فضای باز"},
  ]
};

const dataPrice ={
  title:"قیمت ها",
  SingleSelect:[
    {option:"همه قیمت ها"},
    {option:"2000"},
    {option:"3000"},
    {option:"4000"},
    {option:"50000"},
    {option:"6000"},
    {option:"7000 "},
    {option:"8000 "},
  ]
}

const dataShopProducts =[
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },
  {
    imgProduct:SingleSofa,
    btnNew:"جدید",
    btnDiscount:"-50%",
    btnAddToCard:"افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title:"مبل صندلی عشق",
    priceMain:"$400.00",
    priceOff:"$199.00",
  },

]
</script>