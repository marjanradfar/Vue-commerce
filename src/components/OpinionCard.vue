<template>
  <div class="opinionContainer">
    <div class="pinionContainer__img">
      <!--      <img src="../assets/image/people/people1.png">-->
      <img :src="data.img">
    </div>
    <div class="opinionContainer__opinions">
      <div class="opinionContainer__opinions--head">
        <strong class="peopleName">{{ data.peopleName }}</strong>
        <div class="rate">123456</div>
      </div>
      <p class="opinionContainer__opinions--text">
        {{data.text}}
      </p>
      <div class="opinionContainer__opinions--action">
        <span class="releaseTime" v-for="(item , index) in data.action">{{item.title}}</span>
<!--        <span class="releaseTime">حدود 1 ساعت پیش</span>-->
<!--        <span class="like">پسندیدن</span>-->
<!--        <span class="reply">پاسخ</span>-->
      </div>
    </div>
  </div>

</template>
<script setup>
const props = defineProps(["data"]);

</script>

<style lang="scss">
.opinionContainer {
  display: flex;
  gap: 40px;

  &__opinions {
    &--action {
      display: flex;
      gap: 1.5rem;
    }
  }
}

</style>