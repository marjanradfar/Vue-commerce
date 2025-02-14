<template>
  <div class="shop ">
    <div class="container">
<!--      <TestDrop />-->

      <Banner :data="dataBannerShop" className="bannerImg"/>
      <div class="shop__head">
        <!--                <SingleSelect :data="dataCategories"/>-->
        <!--                <SingleSelect :data="dataPrice"/>-->
        <!--                <h3 class="shop__head&#45;&#45;title">همه اتاق ها</h3>-->
      </div>
      <div class="shop__products">
        <Filter/>
        <div class="shop__products--item">
<!--          <Sort/>-->
          <div class="itemProducts">
            <div class="itemProducts__container">
              <Card :data="data" v-for="(data , index) in dataShopProducts " :key="index "/>
            </div>
            <!-- <Button text="مشاهده بیشتر" className="btnShowMore"/> -->

          </div>

        </div>
      </div>

    </div>
    <Banner :data="dataNewsletter" className="Newsletter"/>
  </div>
</template>

<script setup>


//import components
import Banner from "@/components/Banner.vue";
import Card from "@/components/common/Card.vue";
import SingleSelect from "@/components/common/SingleSelect.vue";
import Button from "@/components/common/Button.vue";
import Filter from "@/components/Filter.vue";
import Sort from "@/components/Sort.vue"
//import img
import BannerShop from "../assets/image/banner/bannerShop.png"
import SingleSofa from "../assets/image/products/singleSofa.png"

//import icon
import star from "../assets/image/icon/starFill.svg"
import Star from "@/assets/image/icon/starFill.svg";
import Newsletter from "@/assets/image/banner/Newsletter.png";
import email from "@/assets/image/icon/email.svg";
import filterIcon from "../assets/image/icon/filter.svg";
import Tollbar1 from "../assets/image/icon/Toolbar1.svg"
import TestDrop from "@/components/TestDrop.vue";
import TestSort from "@/components/TestSort.vue";


//import data
const dataBannerShop = {
  img: BannerShop,
  title: "فروشگاه",
  subTitle: "بیایید مکانی را که همیشه تصور می کردید طراحی کنیم.",
  breadcrumbs: [
    {label: 'صفحه اصلی', path: '/'},
    {label: 'فروشگاه', path: '/shop'},
  ]
};

const dataCategories = {
  title: "دسته بندی ها",
  SingleSelect: [
    {option: "دسته بندی ها"},
    {option: "همه اتاق ها"},
    {option: "هال"},
    {option: "اتاق خواب"},
    {option: "آشپزخانه"},
    {option: "حمام"},
    {option: "ناهار خوری"},
    {option: "فضای باز"},
  ]
};

const dataPrice = {
  title: "قیمت ها",
  SingleSelect: [
    {option: "همه قیمت ها"},
    {option: "2000"},
    {option: "3000"},
    {option: "4000"},
    {option: "50000"},
    {option: "6000"},
    {option: "7000 "},
    {option: "8000 "},
  ]
};

const dataShopProducts = [
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },
  {
    imgProduct: SingleSofa,
    btnNew: "جدید",
    btnDiscount: "-50%",
    btnAddToCard: "افزوردن به سبد خرید",
    rate: [
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
      {imgRating: Star},
    ],
    title: "مبل صندلی عشق",
    priceMain: "$400.00",
    priceOff: "$199.00",
  },

];

const dataNewsletter = {
  img: Newsletter,
  title: "به خبرنامه ما بپیوندید",
  subTitle: "برای معاملات، محصولات جدید و تبلیغات ثبت نام کنید",
  input: {
    img: email,
    type: "email",
    placeholder: "آدرس ایمیل",
  },
  click: "ثبت نام"
}


// import data sort
const dataSort = {
  SingleSelect: [
    {option: "مرتب سازی"},
    {option: "همه اتاق ها"},
    {option: "هال"},

  ]
}


const sortDisplay = [
  {img: Tollbar1},
  {img: Tollbar1},
  {img: Tollbar1},
  {img: Tollbar1},
]

</script>