<template>
  <div class="blog__containerArticle">
    <Card :data="data" v-for="(data , index) in article" :key="index"/>
  </div>
</template>
<script setup>
import Card from "@/components/common/Card.vue";
import Bedroom from "@/assets/image/articles/decoreBedroom.png";

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

</script>