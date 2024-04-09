<template>
  <div class="counter">
    <button v-on:click="decrement">-</button>
    <span>{{ count }}</span>
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
}
</script>

