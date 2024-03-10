<template>
  <button class="btn" :class="className">
    <img :src="imgSrc" v-if="imgSrc" />
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["text", "className", "imgSrc"]);
</script>
