<template>
  <!--pop up in top home page-->
  <div class="navOff container">
    <div class="navOff__content">
      <img src="../assets/image/icon/ticket-percent.svg"/>
      <span>30٪ تخفیف در سراسر فروشگاه - زمان محدود!</span>
    </div>
    <div class="goShop borderButton ">
      <a href="#">
        <span>همین الان بخر</span>
        <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
      </a>
    </div>

  </div>

  <Header :data="headerItems"/>

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
    <SwiperCardProgress :dataItems="dataNewArrivals"/>

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
      <div class="articles__head">
        <h1 class="extraMediumText">{{ articles.title }}</h1>
        <div class="goShop borderButton black">
          <a href="#">
            <span class="smallText">{{ articles.moreArticles }}</span>
            <img :src="articles.iconMoreArticles"/>
          </a>
        </div>
      </div>
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
    <Newsletter :data="dataNewsletter"/>

  </main>
  <footer class="footer">
    <div class="footer__content ">
      <div class="footer__content--logo">
        <div class="logo">
          <img src="../assets/image/3legantWhite.svg">
        </div>
        <div class="space">|</div>
        <p>فروشگاه هدایا و دکوراسیون</p></div>
      <nav class="footer__content--listMenu">
        <ul class="menu">
          <li class="menu__item"><a href="#">خانه</a></li>
          <li class="menu__item"><a href="#">فروشگاه</a></li>
          <li class="menu__item"><a href="#">محصولات</a></li>
          <li class="menu__item"><a href="#">درباره ما</a></li>
        </ul>
      </nav>
    </div>
    <hr/>
    <div class="footer__copyRight ">
      <div class="footer__copyRight--text">
        <p>Copyright © 2023 3legant. All rights reserved</p>
        <div class="contactUs">
          <a href="#">حریم خصوصی</a>
          <a href="#">شرایط استفاده</a>
        </div>
      </div>
      <div class="footer__copyRight--social">
        <img src="../assets/image/icon/instagram.svg"/>
        <img src="../assets/image/icon/facebook.svg"/>
        <img src="../assets/image/icon/youtube.svg"/>
      </div>
    </div>

  </footer>
</template>
<script setup>

//import component
import SingleSwiper from '../components/SingleSwiper.vue';
import Header from '../components/common/Header.vue';
import imgHero from '../assets/image/banner/bannerSwiperHome.png';
import SwiperCardProgress from "../components/SwiperCardProgress.vue";
import Newsletter from "../components/section/Newsletter.vue";
import ContactSupport from "../components/section/ContactSupport.vue";
//import icon from
import search from '../assets/image/icon/search.svg';
import UserCircle from '../assets/image/icon/userCircle.svg';
import shoppingBag from '../assets/image/icon/shoppingBag.svg';
import BannerNewsletter from '../assets/image/banner/Newsletter.png';
import Star from '../assets/image/icon/starFill.svg';
import ArrowLeft from "../assets/image/icon/swiper arrow/arrow-left.svg";
import FastDelivery from "../assets/image/support/fastDelivery.svg";
import Money from "../assets/image/support/money.svg";
import Lock from "../assets/image/support/lock.svg";
import Call from "../assets/image/support/call.svg";


//import image
import logo from '../assets/image/3legant.svg';
import SingleSofa from "../assets/image/newArrivals/singleSofa.png";
import DecorHome from "../assets/image/articles/decoreHome.png";
import DecorBedroom from "../assets/image/articles/decoreBedroom.png";
import KitchenOrganization from "../assets/image/articles/kitchenOrganization.png";


const dataHero = [
  {img: imgHero},
  {img: imgHero},
  {img: imgHero},
  {img: imgHero},
  {img: imgHero},
]

const headerItems = {
  logo: logo,
  menu: [
    {url: "#", link: "خانه"},
    {url: "#", link: "فروشگاه"},
    {url: "#", link: "محصولات"},
    {url: "#", link: "درباره ما"},
  ],
  toolbar: [
    {img: search},
    {img: UserCircle},
    {img: shoppingBag},
  ],

}

const dataNewArrivals = {
  name: "dataNewArrivals",
  spaceBetween: 20,
  slidesPerView: 4,
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
      btnNEW: "جدید",
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
  subTitle: "برای معاملات، محصولات جدید و تبلیغات ثبت نام کنید"
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
</script>