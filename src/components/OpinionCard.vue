<template>
  <div class="opinionContainer">
    <div class="opinionContainer__head">
      <img :src="data.img" class="opinionContainer__head--img">
      <div class="opinionContainer__head--title">
        <strong class="peopleName">{{ data.peopleName }}</strong>
        <div class="rate">123456</div>
      </div>

    </div>
    <div class="opinionContainer__opinions">
      <p class="opinionContainer__opinions--text">
        {{ data.text }}
      </p>
      <div class="opinionContainer__opinions--action">
        <span class="releaseTime" v-for="(item , index) in data.action">{{ item.title }}</span>
      </div>
    </div>
    <hr/>
  </div>

</template>
<script setup>
const props = defineProps(["data"]);

</script>

<style lang="scss">
@import "../assets/style/base/responsive";
@import "../assets/style/base/variable";

.opinionContainer {
  display: flex;
  flex-direction: column;

  &__head {
    display: flex;
    gap: 40px;
    align-items: center;
    @include break(480){
      gap: 1rem;
      margin-bottom: 1rem;
    }
    &--title {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__opinions {
    margin-right: 109px;
    border-bottom: 1px solid $FourthTextColor;
    @include break(480){
      margin-right: 0;
    }
    &--text {
      margin-bottom: 24px;
    }

    &--action {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 24px;
    }
  }
  hr{
    background-color: $FourthTextColor;
  }
}

</style>