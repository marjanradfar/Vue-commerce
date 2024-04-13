<template>
  <div class="tab">
    <div class="tab__item">
      <span
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: currentTab === tab.component }"
          @click="currentTab = tab.component"
      >
        {{ tab.name }}
      </span>
    </div>
    <hr/>
    <div class="tab__info">
      <component :is="currentTab" ></component>

    </div>
  </div>
</template>

<script>
//import component
import AdditionalInfo from "../components/section/AdditionalInfo.vue";
import Questions from "../components/section/Questions.vue";
import Reviews from "../components/section/Reviews.vue";

export default {
  data() {
    return {
      currentTab: 'AdditionalInfo',
      tabs: [
        {name: 'اطلاعات اضافی', component: 'AdditionalInfo'},
        {name: 'سوالات', component: 'Questions'},
        {name: 'بررسی ها', component: 'Reviews'}
      ]
    };
  },
  components: {
    AdditionalInfo,
    Questions,
    Reviews
  }
};


</script>

<style lang="scss">
.active {
  background-color: #f0f0f0;
}

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