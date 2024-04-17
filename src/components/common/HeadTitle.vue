<template>
  <div class="headTitle">
    <h1 class="extraMediumText" >{{ data.title }}<br v-if="data.subTitle"/>{{data.subTitle}}</h1>
    <div class="goShop borderButton black">
      <a href="#">
        <span class="smallText">{{ data.textIcon }}</span>
        <img :src="data.icon"/>
      </a>
    </div>
  </div>

</template>
<script setup>
import {defineProps} from "vue";

const props = defineProps(["data"]);

</script>