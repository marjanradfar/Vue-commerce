<template>
  <div class="opinionContainer">
    <div class="pinionContainer__img">
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
  //margin-bottom: 24px;
  &__opinions {

    border-bottom: 1px solid red;
    &--head{
      display: flex;
      align-content: center;
      flex-direction: column;
      gap: 16px;
    }
    &--text{
      margin-bottom: 24px;
    }
    &--action {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 24px;
    }
  }
}

</style>