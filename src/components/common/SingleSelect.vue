<template>
  <div class="SingleSelect" :class="className">
    <span class="mediumLightText" v-if="data.title"> {{ data.title }}</span>
    <select v-model="selected" class="SingleSelect__container">
      <option v-for="(item , index) in data.SingleSelect" :key="index">{{ item.option }}</option>
    </select>
  </div>
</template>

<script setup>
import {ref  , onMounted} from 'vue';
const props = defineProps(["data", "className"]);
const selected = ref('');

onMounted(() => {
  if (props.data.SingleSelect.length > 0) {
    selected.value = props.data.SingleSelect[0].option;
  }
});


</script>

<style lang="scss" scoped>
@import "../../assets/style/base/variable.scss";
.SingleSelect{
  display: flex;
  flex-direction: column;
  width: 262px;
  gap: 6px;
  &__container{
    width: 100%;
    height: 3rem;
    border-radius: 8px;
    padding: 14px 16px 14px 16px;
    border: 2px solid $secondaryTextColor;
    font-family: "Pinar";

    background: url("../../assets/image/icon/arrowDown.svg") no-repeat left ;
    -webkit-appearance: none;
    background-position-x: 10px;
  }
}
</style>
