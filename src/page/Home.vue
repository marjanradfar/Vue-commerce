<template>
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
  <!--banner swiper home page-->

  <!--The main body of the  Home page-->
  <main>

    <div class="heroBanner container animate__animated animate__zoomIn">
      <SingleSwiper :data="heroData"/>
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
    <!--    banner one home page-->
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

    <!--section New Arrivals-->
    <section class="newArrivals">
      <div class="articles__head container">
        <h1 class="extraMediumText">
          جدید<br>
          ترین ها
        </h1>
        <div class="goShop borderButton black">
          <a href="#">
            <span class="smallText">محصولات بیشتر</span>
            <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
          </a>
        </div>
      </div>
      <div class="newArrivals__wrapper">
        <div class="newArrivals__wrapper--cart">
          <div class="imgCartContainer">
            <img class="imgCart" src="../assets/image/newArrivals/singleSofa.png" ALT="single sofa"/>
            <div class="discountNew"></div>
          </div>
          <div class="content">
            <div class="content__rating">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
            </div>
            <span class="content__title">مبل صندلی دوست داشتنی</span>
            <div class="content__price">
              <span class="content__price--main smallLightText">$199.00</span>
              <span class="content__price--off smallLightText">$400.00</span>
            </div>
          </div>
        </div>
        <div class="newArrivals__wrapper--cart">
          <div class="imgCartContainer">
            <img class="imgCart" src="../assets/image/newArrivals/tableLamp.png" ALT="single sofa"/>
            <div class="discountNew"></div>
          </div>
          <div class="content">
            <div class="content__rating">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
            </div>
            <span class="content__title">چراغ رومیزی</span>
            <div class="content__price">
              <span class="content__price--main smallLightText">$199.00</span>
              <span class="content__price--off smallLightText">$400.00</span>
            </div>
          </div>
        </div>
        <div class="newArrivals__wrapper--cart">
          <div class="imgCartContainer">
            <img class="imgCart" src="../assets/image/newArrivals/BeigeTableLamp.png" ALT="single sofa"/>
            <div class="discountNew"></div>
          </div>
          <div class="content">
            <div class="content__rating">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
            </div>
            <span class="content__title">چراغ رومیزی بژ</span>
            <div class="content__price">
              <span class="content__price--main smallLightText">$199.00</span>
              <span class="content__price--off smallLightText">$400.00</span>
            </div>
          </div>
        </div>
        <div class="newArrivals__wrapper--cart">
          <div class="imgCartContainer">
            <img class="imgCart" src="../assets/image/newArrivals/Bamboobasket.png" ALT="single sofa"/>
            <div class="discountNew"></div>
          </div>
          <div class="content">
            <div class="content__rating">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
            </div>
            <span class="content__title">سبد بامبو</span>
            <div class="content__price">
              <span class="content__price--main smallLightText">$199.00</span>
              <span class="content__price--off smallLightText">$400.00</span>
            </div>
          </div>
        </div>
        <div class="newArrivals__wrapper--cart">
          <div class="imgCartContainer">
            <img class="imgCart" src="../assets/image/newArrivals/Toasted.png" ALT="single sofa"/>
            <div class="discountNew"></div>
          </div>
          <div class="content">
            <div class="content__rating">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
              <img src="../assets/image/icon/starFill.svg">
            </div>
            <span class="content__title">توستر</span>
            <div class="content__price">
              <span class="content__price--main smallLightText">$199.00</span>
              <span class="content__price--off smallLightText">$400.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- section Support home page-->
    <section class="support container">
      <div class="support__item">
        <div class="support__item--icon">
          <img src="../assets/image/support/fastDelivery.svg"/>
        </div>
        <div class="support__item--text">
          <h2 class="mediumLightText">ارسال رایگان</h2>
          <span class="smallText">سفارش بالای 200 دلار</span>
        </div>
      </div>
      <div class="support__item">
        <div class="support__item--icon">
          <img src="../assets/image/support/money.svg"/>
        </div>
        <div class="support__item--text">
          <h2 class="mediumLightText">بازگشت هزینه</h2>
          <span class="smallText">30 روز گارانتی</span>
        </div>
      </div>
      <div class="support__item">
        <div class="support__item--icon">
          <img src="../assets/image/support/lock.svg"/>
        </div>
        <div class="support__item--text">
          <h2 class="mediumLightText">پرداخت های امن</h2>
          <span class="smallText">توسط Stripe ایمن شده است</span>
        </div>
      </div>
      <div class="support__item">
        <div class="support__item--icon">
          <img src="../assets/image/support/call.svg"/>
        </div>
        <div class="support__item--text">
          <h2 class="mediumLightText">پشتیبانی 24/7</h2>
          <span class="smallText">پشتیبانی تلفنی و ایمیلی</span>
        </div>
      </div>
    </section>

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
        <h1 class="extraMediumText">مقالات</h1>
        <div class="goShop borderButton black">
          <a href="#">
            <span class="smallText">مقالات بیشتر</span>
            <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
          </a>
        </div>
      </div>
      <div class="articles__item">
        <div class="articles__item--box">
          <div class="boxImg">
            <img src="../assets/image/articles/decoreHome.png"/>
          </div>
          <div class="boxText">
            <p class="mediumLightText">۷ روش برای تزیین خانه</p>
            <div class="goShop borderButton black">
              <a href="#">
                <span class="smallText">ادامه مطلب</span>
                <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
              </a>
            </div>
          </div>
        </div>
        <div class="articles__item--box">
          <div class="boxImg">
            <img src="../assets/image/articles/kitchenOrganization.png"/>
          </div>
          <div class="boxText">
            <p class="mediumLightText">سازماندهی آشپزخانه</p>
            <div class="goShop borderButton black">
              <a href="#">
                <span class="smallText">ادامه مطلب</span>
                <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
              </a>
            </div>
          </div>
        </div>
        <div class="articles__item--box">
          <div class="boxImg">
            <img src="../assets/image/articles/decoreBedroom.png"/>
          </div>
          <div class="boxText">
            <p class="mediumLightText">اتاق خواب خود را تزئین کنید</p>
            <div class="goShop borderButton black">
              <a href="#">
                <span class="smallText">ادامه مطلب</span>
                <img src="../assets/image/icon/swiper arrow/arrow-left.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    section Newsletter-->
    <div class="newsletter">
      <img src="../assets/image/banner/Newsletter.png" class="back">
      <div class="newsletter__content">
        <div class="newsletter__content--title">
          <h1 class="extraMediumText">به خبرنامه ما بپیوندید</h1>
          <p class="extraSmallText">برای معاملات، محصولات جدید و تبلیغات ثبت نام کنید</p>
        </div>
        <div class="newsletter__content--input">
          <div class="email">
            <img id="logo" class="svg" src="../assets/image/icon/email.svg" alt="Some awesome company"/>
            <input type="email" placeholder="آدرس ایمیل">
          </div>
          <span class="singUp">ثبت نام</span>
        </div>
      </div>
    </div>

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


  </main>
</template>
<script setup>
import SingleSwiper from '../components/SingleSwiper.vue';
import Header from '../components/common/Header.vue'
import imgHero from '../assets/image/banner/bannerSwiperHome.png';
//import icon
import search from '../assets/image/icon/search.svg';
import UserCircle from '../assets/image/icon/userCircle.svg';
import shoppingBag from '../assets/image/icon/shoppingBag.svg';

//import image
import logo from '../assets/image/3legant.svg';

const heroData = [
  {img: imgHero},
  {img: imgHero},
  {img: imgHero},
  {img: imgHero},
  {img: imgHero},
]

const headerItems = {
  logo:logo,
  menu: [
    {url: "#", link: "خانه"},
    {url: "#", link: "فروشگاه"},
    {url: "#", link: "محصولات"},
    {url: "#", link: "درباره ما"},
  ],
  toolbar:[
    {img:search},
    {img:UserCircle},
    {img:shoppingBag},
  ],

}

</script>