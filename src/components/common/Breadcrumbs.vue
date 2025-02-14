<template>
  <nav class="breadcrumb" v-if="!!data">
    <div class="breadcrumb__item" v-for="(crumb, index) in data" :key="index">
      <router-link :to="crumb.path">{{ crumb.label }}</router-link>
      <span v-if="index < data.length - 1">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="left-arrow"><path
          d="m12.3 17.71 6.486 6.486a1 1 0 0 0 1.414-1.414L14.418 17l5.782-5.782a1 1 0 0 0-1.414-1.414L12.3 16.29a.997.997 0 0 0-.292.71c0 .258.096.514.292.71z"></path></svg>
      </span>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps(["data"]);


</script>

<style lang="scss">
.breadcrumb {
  display: flex;
  padding: 16px 0;
  font-size: 16px;
  &__item {
    display: flex;
    align-items: center;

  }
}
</style>