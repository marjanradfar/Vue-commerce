<template>
  <div class="testSort">
    <h1>همه اتاق ها</h1>
    <tabs :options="{ defaultTabHash: 'first-tab' }">
      <tab id="first-tab" name="اطلاعات اضافی">
        اطلاعات اضافی
      </tab>
      <tab id="second-tab" name="سوالات">
        سوالات
      </tab>
      <tab id="third-tab" name="بررسی ها">
        <Reviews/>
      </tab>
    </tabs>

  </div>
</template>
<script setup>
import Reviews from "@/components/section/Reviews.vue";
</script>

<style lang="scss" scoped>
.testSort{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>