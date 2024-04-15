<template>
  <div class="blog">
    <div class="container">
      <Banner :data="dataBannerBlog" className="bannerImg"/>
      <div class="blog__containerArticle">
        <Card :data="data" v-for="(data , index) in article" :key="index"/>
      </div>
      <Button text="مشاهده بیشتر" className="btnShowMore"/>
    </div>
    <Banner :data="dataNewsletter" className="Newsletter"/>
    </div>
</template>

<script setup>

//import components
import Banner from "@/components/Banner.vue";
import Card from "@/components/common/Card.vue";
import Button from "@/components/common/Button.vue";

//import img
import Bedroom from "../assets/image/articles/decoreBedroom.png";
import Blog from "../assets/image/banner/bannerBlog.png"
import Newsletter from "@/assets/image/banner/Newsletter.png";
import email from "@/assets/image/icon/email.svg";

//import data
const article = [
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
  {
    imgProduct: Bedroom,
    title: "7 راه برای تزئین خانه خود مانند یک حرفه ای",
    date: "16 اکتبر 2023"
  },
];

const dataBannerBlog = {
  img: Blog,
  title:"وبلاگ",
  subTitle:"ایده های خانه و الهام از طراحی",
  breadcrumbs: [
    { label: 'صفحه اصلی', path: '/' },
    { label: 'محصول', path: '/Product' },
  ]
}

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

</script>

