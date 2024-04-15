<template>
  <div class="filter">
    <div class="filter__head">
      <img src="../assets/image/icon/filter.svg"/>
      <h2>فیلتر</h2>
    </div>
    <div class="filter__categories">
      <h4 class="filter__categories--title">دسته بندی ها</h4>
      <div class="filter__categories--item">

        <span v-for="(category , index) in filter.categories" :key="index">{{ category.title }}</span>

      </div>
    </div>
    <div class="filter__price">
      <h4 class="filter__price--title">قیمت ها</h4>
      <div class="filter__price--item">
              <span  v-for="(price , index) in filter.prices" :key="index">{{
                  price.price
                }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>

const filter = {
  categories: [
    {title: "همه اتاق ها"},
    {title: "هال"},
    {title: "اتاق خواب"},
    {title: "آشپزخانه"},
    {title: "حمام"},
    {title: "ناهار خوری"},
    {title: "فضای باز "},
  ],
  prices: [
    {price: "همه قیمت ها"},
    {price: "2000"},
    {price: "2000"},
    {price: "2000"},
    {price: "2000"},
    {price: "2000"},
    {price: "2000"},
  ]

}

</script>