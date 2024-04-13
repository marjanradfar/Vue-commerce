<template>
  <div class="reviews">
    <div class="reviews__head">
      <div class="reviews__head--title">
        <h2>نظرات مشتریان</h2>
      </div>
      <div class="reviews__head--rate"></div>
      <div class="reviews__head--info">
        <span>اولین نفری باشید که نظر می دهد</span>
        <strong>میز سینی</strong>
      </div>
    </div>

    <div class="reviews__number">
      <h2>11 بررسی</h2>
    </div>

    <div class="reviews__Opinions">
      <OpinionCard :data="data" v-for="(data, index) in dataReviews" :key="index"/>
      <Button text="مشاهده بیشتر" className="btnShowMore"/>
    </div>
  </div>
</template>

<script setup>
import people1 from "../../assets/image/people/people1.png"

//import component
import OpinionCard from "../../components/OpinionCard.vue";
import Button from "@/components/common/Button.vue";

const dataReviews = [
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم. من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم ",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم. من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم ",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم. من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم ",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم. من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم ",
    action: [
      {title: "حدود یک ساعت پیش"},
      {title: "پسندیدن"},
      {title: "پاسخ"},
    ],
  },
  {
    img: people1,
    peopleName: "مرجان رادفر",
    text: "من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم. من آن را 3 هفته پیش خریدم و اکنون برگشتم فقط برای گفتن \"محصول عالی\". من واقعا از آن لذت می برم.من آن را 3 هفته پیش خریدم ",
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
  &__head {
    margin-top: 48px;
    margin-bottom: 30px;
  }

  &__Opinions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
  }

  & > :first-child {
    width: 100%;
  }

  &__number {
    margin: 47px 0;  }

  .btnContainer {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 40px;
  }
}
</style>

