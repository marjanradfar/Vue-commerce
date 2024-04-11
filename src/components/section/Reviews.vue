<template>
  <div>
    <div class="reviews">
      <div class="reviews__title">
        <h2>نظرات مشتریان</h2>
      </div>
      <div class="reviews__rate"></div>
      <div class="reviews__info">
        <span>اولین نفری باشید که نظر می دهد</span>
        <strong>میز سینی</strong>
      </div>
      <div class="reviews__number">
        <strong>11 بررسی</strong>
      </div>
      <OpinionCard :data="data" v-for="(data, index) in dataReviews" :key="index"/>
    </div>
  </div>
</template>

<script setup>
import people1 from "../../assets/image/people/people1.png"

//import component
import OpinionCard from "../../components/OpinionCard.vue";

const dataReviews =[
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
];
</script>
<style lang="scss">
.reviews {
  &__number {
    margin: 40px 0;
  }
}
</style>

