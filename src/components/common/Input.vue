<template>
  <div class="inputBox" :class="className">
    <img :src="data.img" class="inputBox__img">
    <input class="inputBox__input" :type="data.type" :placeholder="data.placeholder" >
  </div>
</template>
<script setup>
const props = defineProps(["data","className"]);

</script>