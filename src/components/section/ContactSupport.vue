<template>
  <section class="support container" :class="className">
    <div class="support__item" v-for="(item, index) in data ">
      <div class="support__item--icon">
        <img :src="item.img"/>
      </div>
      <div class="support__item--text">
        <h2 class="mediumLightText">{{item.title}}</h2>
        <span class="smallText">{{item.subTitle}}</span>
      </div>
    </div>

  </section>
</template>
<script setup>
const props = defineProps(["data", "className"]);

</script>