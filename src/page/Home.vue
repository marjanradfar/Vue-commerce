<template>

  <!--  <Header :data="headerItems"/>-->

  <!--The main body of the  Home page-->
  <main>

    <!--banner swiper home page-->
    <div class="heroBanner container animate__animated animate__zoomIn">
      <SingleSwiper :data="dataHero"/>
      <div class="heroBanner__content">
        <h1 class="heroBanner__content--title largeText">
          به سادگی منحصر به فرد<br>
          به سادگی بهتر
        </h1>
        <p class="heroBanner__content--info smallText">
          3legant یک فروشگاه هدیه و تزئینات مستقر در HCMC است،
          <br>
          ویتنام از سال 2019 است.
        </p>
        <p class="heroBanner__content--info mobile">
          3legantis<span>یک فروشگاه هدیه و تزئینات مستقر در HCMC است،
                     ویتنام از سال 2019 است.</span>
        </p>
      </div>
    </div>

    <!-- banner one home page-->
    <section class="bannerShop container">
      <div class="itemFlex">
        <div class="bannerShop__item">
          <div class="bannerShop__item--text">
            <p class="extraMediumText">اتاق خواب</p>
            <div class="goShop borderButton black">
              <a href="#">
                <span>همین الان بخر</span>
                <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
              </a>
            </div>
          </div>
          <div class="bannerShop__item--img">
            <img src="../assets/image/Bedroom.png"/>
          </div>
        </div>
        <div class="bannerShop__item">
          <div class="bannerShop__item--text">
            <p class="extraMediumText">آشپزخانه</p>
            <div class="goShop borderButton black">
              <a href="#">
                <span>همین الان بخر</span>
                <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
              </a>
            </div>
          </div>
          <div class="bannerShop__item--img">
            <img src="../assets/image/Kitchen.png"/>
          </div>
        </div>
      </div>
      <div class="bannerShop__item">
        <div class="bannerShop__item--text">
          <p class="extraMediumText">اتاق نشیمن</p>
          <div class="goShop borderButton black">
            <a href="#">
              <span>همین الان بخر</span>
              <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
            </a>
          </div>
        </div>
        <div class="bannerShop__item--img">
          <img src="../assets/image/LivingRoom.png"/>
        </div>
      </div>
    </section>

    <!-- section NewArrivals-->
    <div class="container newArrivals">
      <HeadTitle :data="headNewArrivals"/>
      <SwiperCardProgress :dataItems="dataNewArrivals"/>

    </div>
    <!-- section Support home page-->
    <ContactSupport :data="supportData"/>


    <!--The price of banners with low prices-->
    <div class="bannerOff">
      <div class="bannerOff__img">
        <img src="../assets/image/banner/bannerOff.png"/>
      </div>
      <div class="bannerOff__content">
        <span class="smallText">فروش تا 35% تخفیف</span>
        <h1 class="extraMediumText">صدها قیمت
          جدید پایین تر!
        </h1>
        <p class="mediumLightText">مقرون به صرفه تر از همیشه است<br/>
          که به هر اتاق در خانه تان جلوه ای شیک بدهید.</p>
        <div class="goShop borderButton black">
          <a href="#">
            <span class="smallText">همین الان بخر</span>
            <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
          </a>
        </div>

      </div>

    </div>

    <!--section Articles-->
    <section class="articles container">
      <HeadTitle :data="headArticles"/>

      <div class="articles__item">
        <div class="articles__item--box" v-for="(item , index) in articles.items">
          <div class="boxImg">
            <img :src="item.imgArticle"/>
          </div>
          <div class="boxText">
            <p class="mediumLightText">{{ item.title }}</p>
            <div class="goShop borderButton black">
              <a href="#">
                <span class="smallText">{{ item.readMore }}</span>
                <img :src="item.iconReadMore"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!--section Newsletter-->
    <Banner :data="dataNewsletter" className="Newsletter"/>

  </main>
</template>
<script setup>

//import component
import SingleSwiper from '../components/SingleSwiper.vue';
import SwiperCardProgress from "../components/SwiperCardProgress.vue";
import Banner from "@/components/Banner.vue";
import ContactSupport from "../components/section/ContactSupport.vue";
import HeadTitle from "@/components/common/HeadTitle.vue";



//import image
import SingleSofa from "../assets/image/newArrivals/singleSofa.png";
import DecorHome from "../assets/image/articles/decoreHome.png";
import DecorBedroom from "../assets/image/articles/decoreBedroom.png";
import KitchenOrganization from "../assets/image/articles/kitchenOrganization.png";
import email from "../assets/image/icon/email.svg";
import imgHero from '../assets/image/banner/bannerSwiperHome.png';
import BannerNewsletter from '../assets/image/banner/Newsletter.png';
import Star from '../assets/image/icon/starFill.svg';
import ArrowLeft from "../assets/image/icon/swiper arrow/arrow-left.svg";
import FastDelivery from "../assets/image/support/fastDelivery.svg";
import Money from "../assets/image/support/money.svg";
import Lock from "../assets/image/support/lock.svg";
import Call from "../assets/image/support/call.svg";

const dataHero = {
  navigation: true,
  pagination: true,
  mousewheel: false,

  items: [
    {img: imgHero},
    {img: imgHero},
    {img: imgHero},
    {img: imgHero},
    {img: imgHero},
  ],
}


const dataNewArrivals = {
  name: "dataNewArrivals",
  spaceBetween: 20,
  slidesPerView: 4,
  mousewheel: false,
  keyboard: false,
  breakpoints: {
    1880: {
      slidesPerView: 4
    },
    1440: {
      slidesPerView: 3.8
    },
    1024: {
      slidesPerView: 3.5
    },
    768: {
      spaceBetween: 12,
      slidesPerView: 3
    },
    480: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 1.3
    },
    320: {
      slidesPerView: 1
    },
  },
  swiperItems: [
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
    {
      imgProduct: SingleSofa,
      btnNew: "جدید",
      btnDiscount: "- 50%",
      btnAddToCard: "افزودن به سبد خرید",
      rate: [
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
        {imgRating: Star},
      ],
      title: "مبل صندلی دوست داشتنی",
      priceMain: "$199.00",
      priceOff: "$400.00",
    },
  ],
}

const dataNewsletter = {
  img: BannerNewsletter,
  title: "به خبرنامه ما بپیوندید",
  subTitle: "برای معاملات، محصولات جدید و تبلیغات ثبت نام کنید",
  input: {
    img: email,
    type: "email",
    placeholder: "آدرس ایمیل",
  },
  click: "ثبت نام"
}

const articles = {
  title: "مقالات",
  moreArticles: "مقالات بیشتر",
  iconMoreArticles: ArrowLeft,
  items: [
    {
      imgArticle: DecorHome,
      title: "۷ روش برای تزیین خانه",
      readMore: "ادامه مطلب",
      iconReadMore: ArrowLeft,
    },
    {
      imgArticle: KitchenOrganization,
      title: "سازماندهی آشپزخانه",
      readMore: "ادامه مطلب",
      iconReadMore: ArrowLeft,
    },
    {
      imgArticle: DecorBedroom,
      title: "اتاق خواب خود را تزئین کنید",
      readMore: "ادامه مطلب",
      iconReadMore: ArrowLeft,
    },
  ],
}

const supportData = [
  {
    img: FastDelivery,
    title: "ارسال رایگان",
    subTitle: "سفارش بالای 200 دلار"
  },
  {
    img: Money,
    title: "بازگشت هزینه",
    subTitle: "30 روز گارانتی"
  },
  {
    img: Lock,
    title: "پرداخت های امن",
    subTitle: "توسط Stripe ایمن شده است"
  },
  {
    img: Call,
    title: "پشتیبانی 24/7",
    subTitle: "پشتیبانی تلفنی و ایمیلی"
  },
]

const headNewArrivals={
  title:"جدید",
  subTitle:"ترین ها",
  textIcon:"محصولات بیشتر",
  icon:ArrowLeft
}

const headArticles ={
  title:"مقالات",
  textIcon:"مقالات بیشتر",
  icon:ArrowLeft
}
</script>