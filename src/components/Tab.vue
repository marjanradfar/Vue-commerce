<template>
  <div class="tab">
    <div class="tab__item">
      <span
          v-for="(tab, index) in data.tabs"
          :key="index"
          :class="{ active: currentTab === tab.component }"
          @click="currentTab = tab.component"
      >
        {{ tab.name }}
      </span>
    </div>
    <hr/>
    <div class="tab__info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//import component
import AdditionalInfo from "../components/section/AdditionalInfo.vue";
import Questions from "../components/section/Questions.vue";
import Reviews from "../components/section/Reviews.vue";

export default {
  props: ['data',],
  data() {
    return {
      currentTab: 'AdditionalInfo',

    };
  },
  components: {
    AdditionalInfo,
    Questions,
    Reviews
  },
};


</script>

<style lang="scss">


.tab {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &__item {
    display: flex;
    gap: 1rem;

    span {
      cursor: pointer;
      padding: 10px;
      margin-right: 5px;
    }
  }

  &__info {
    display: flex;
    gap: 1rem;
    //margin-top: 10px;

  }
}
</style>