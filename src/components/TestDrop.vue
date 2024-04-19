<template>

  <div class="dropdown" @click="isOpen = !isOpen">
    <button class="dropdown__btn">
      <span>Dropdown</span>
      <img src="../assets/image/icon/arrowDown.svg"/>
    </button>
    <div class="dropdown__content" v-show="isOpen">
      <router-link to="#" v-for="(item , index) in dropDown" :key="index">{{ item.link }}</router-link>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue';

const isOpen = ref(false);

const dropDown = [
  {link: "1"},
  {link: "2"},
  {link: "3"},
];


</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  height: 100%;
  &:hover{
    .dropdown__content{
      display: flex;
      flex-direction: column;
    }
  }

  &__btn {
    //background-color: #4CAF50;
    background-color: transparent;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    outline: none;
  }

  &__content {
    //background-color: red;
    background-color: transparent;
    display: none;
    position: absolute;
    z-index: 2;
    width: 100%;
  }

}


</style>
