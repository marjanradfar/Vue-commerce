<template>
  <Breadcrumbs class="container" :data="breadcrumbs"/>
  <div class="container">
    <div class="product">
      <div class="product__img">
        <Thumbs :data="swiperThumbnails"/>
      </div>
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
          <span class="extraSmallText">پیشنهاد در:</span>
          <CountdownTimer/>
        </div>
        <hr/>
        <div class="product__details--productSize">
          <span class="extraSmallText">اندازه گیری ها</span>
          <span class="extraSmallText">17 1/2x20 5/8 </span>
        </div>
        <hr/>
        <div class="product__details--productColor">

          <span class="extraSmallText">انتخاب رنگ</span>

          <div class="nameColor extraSmallText">{{ selectedColorName }}</div>
          <div class="thumbnails">
            <img :src="img.img" v-for="img in thumbnails" :key="img.name"
                 :style="{ border: selectedColorName === img.name ? '2px solid #141718' : 'none' }"
                 @click="selectImg(img.name)"/>
          </div>

        </div>
        <div class="product__details--WishlistContainer">
          <div class="wishlist">
            <Button text="علاقه مندی ها" :img-src="Heart"/>
            <MinusPlusInput/>
          </div>
          <Button text="افزودن به سبد خرید" className="btnAddToCard btnBlack"/>
        </div>
      </div>
    </div>
    <Tab :data="dataTab"/>

  </div>
  <BannerNewsletter :data="dataNewsletter" className="Newsletter"/>
</template>
<script setup>
import {ref} from 'vue';

//import components
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import MinusPlusInput from "../components/MinusPlusInput.vue";
import Button from "../components/common/Button.vue";
import CountdownTimer from "../components/CountdownTimer.vue";
import Tab from "../components/Tab.vue";
import BannerNewsletter from "../components/Banner.vue"
import Thumbs from "../components/SwiperThumbs.vue";

//import img
import One from "../assets/image/product/one.png";
import Two from "../assets/image/product/two.png";
import Three from "../assets/image/product/three.png";
import TrayTable from "../assets/image/product/TrayTable.png";
import Banner from "../assets/image/banner/Newsletter.png";
import people1 from "../assets/image/people/people1.png"

//import icon
import Heart from "../assets/image/icon/heart.svg";
import Email from "../assets/image/icon/email.svg";

//import img thumbnails
import thumb1 from "../assets/image/product/TrayTableBeige.png";
import thumb2 from "../assets/image/product/TrayTableBeigeRed.png";
import thumb3 from "../assets/image/product/TrayTableBeigeWhite.png";
import email from "@/assets/image/icon/email.svg";


//import data productColor

const swiperThumbnails = {
  spaceBetween: 10,
  navigation: true,
  pagination: true,
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

//import data
const selectedColorName = ref('');

const thumbnails = [
  {name: "بژ", img: thumb1, color: "بژ"},
  {name: "قرمز", img: thumb2, color: "قرمز"},
  {name: "سفید", img: thumb3, color: "سفید"},
];

const selectImg = (name) => {
  selectedColorName.value = name;
};
//

const dataNewsletter = {
  img: Banner,
  title: "به خبرنامه ما بپیوندید",
  subTitle: "برای معاملات، محصولات جدید و تبلیغات ثبت نام کنید",
  input: {
    img: Email,
    type: "email",
    placeholder: "آدرس ایمیل",
  },
  click: "ثبت نام"


}

const dataTab = {
  tabs: [
    {name: 'اطلاعات اضافی', component: 'AdditionalInfo'},
    {name: 'سوالات', component: 'Questions'},
    {name: 'بررسی ها', component: 'Reviews'}
  ]

}

const breadcrumbs = [
      {label: 'صفحه اصلی', path: '/'},
      {label: 'محصول', path: '/Product'},
    ]
;




</script>