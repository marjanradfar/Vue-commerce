<script setup>

import {RouterView,useRoute,RouterLink} from 'vue-router'
import Header from "@/components/common/Header.vue";
import NavOffBanner from "@/components/common/NavOffBanner.vue"
import Footer from "@/components/common/Footer.vue";

import { computed } from 'vue';


const isHeader = computed(()=>{
  const route = useRoute();
  return !!route.meta && route.meta.header !== undefined? route.meta.header : true;
});

const isFooter = computed(()=>{
  const route = useRoute();
  return !!route.meta && route.meta.footer !== undefined? route.meta.footer : true;
});
const isNavOff = computed(()=>{
  const route = useRoute();
  return !!route.meta && route.meta.navOff !== undefined? route.meta.navOff : true;
});

</script>

<template>
  <NavOffBanner v-if="isNavOff"/>
  <Header v-if="isHeader"/>

<!--  <RouterView/>-->
  <router-view :key="$route.fullPath"/>

  <Footer v-if="isFooter"/>
</template>


