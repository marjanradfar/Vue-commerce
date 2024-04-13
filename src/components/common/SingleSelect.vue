<template>
  <div class="SingleSelect">
    <span> {{ data.title }}</span>
    <select v-model="selected" class="SingleSelect__container">
      <option v-for="(item , index) in data.SingleSelect" :key="index">{{ item.option }}</option>
    </select>
  </div>
</template>

<script setup>
import {ref  , onMounted} from 'vue';
const props = defineProps(["data"]);
const selected = ref('');

onMounted(() => {
  if (props.data.SingleSelect.length > 0) {
    selected.value = props.data.SingleSelect[0].option;
  }
});

</script>

<style lang="scss">
.SingleSelect{
  display: flex;
  flex-direction: column;
  width: 262px;
  &__container{
    width: 100%;
  }
}
</style>
