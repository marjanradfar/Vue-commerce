<template>
  <div class="shop container">
    <Banner :data="dataBannerShop"/>
    <div class="containerSingleSelect">
      <SingleSelect :data="dataCategories"/>
      <SingleSelect :data="dataPrice"/>
    </div>
  </div>
</template>


<script setup>

//import components
import Banner from "@/components/Banner.vue";


//import img
import BannerShop from "../assets/image/banner/bannerShop.png"
import SingleSelect from "@/components/common/SingleSelect.vue";

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
    {option:"1000"},
    {option:"2000"},
    {option:"3000"},
    {option:"4000"},
    {option:"50000"},
    {option:"6000"},
    {option:"7000 "},
    {option:"8000 "},
  ]
}

</script>